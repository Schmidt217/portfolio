import React, {
	useState,
	useCallback,
	useRef,
	FormEvent,
	ChangeEvent,
	FocusEvent,
} from "react";
import { CheckCircle, AlertCircle, Send, Loader2 } from "lucide-react";
import "../styles/contactForm.css";

type FormFieldName = "name" | "email" | "subject" | "message";
interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}
interface ValidationRule {
	required: boolean;
	minLength?: number;
	maxLength?: number;
	pattern?: RegExp;
}

type ValidationRules = Record<FormFieldName, ValidationRule>;

type FormErrors = Partial<Record<FormFieldName, string>>;

type FormTouched = Partial<Record<FormFieldName, boolean>>;

type FormValidFields = Partial<Record<FormFieldName, boolean>>;

type SubmitStatus = "success" | "error" | null;
interface FormSubmissionResponse {
	ok: boolean;
	status: number;
	statusText: string;
}
interface ContactFormProps {
	onSubmitSuccess?: (formData: FormData) => void;
	onSubmitError?: (error: Error) => void;
	initialData?: Partial<FormData>;
	customValidationRules?: Partial<ValidationRules>;
}

type InputChangeHandler = (name: FormFieldName, value: string) => void;
type FieldBlurHandler = (name: FormFieldName) => void;
type FormSubmitHandler = (
	e: FormEvent<HTMLFormElement | HTMLButtonElement>
) => Promise<void>;

type FieldValidator = (name: FormFieldName, value: string) => string;
type FormValidator = () => boolean;

type CharacterCountGetter = (fieldName: FormFieldName) => string | null;
type ErrorChecker = (fieldName: FormFieldName) => boolean;
type ValidChecker = (fieldName: FormFieldName) => boolean;
type FormResetter = () => void;
interface UseContactFormReturn {
	formData: FormData;
	errors: FormErrors;
	touched: FormTouched;
	isSubmitting: boolean;
	submitStatus: SubmitStatus;
	validFields: FormValidFields;
	textareaRef: React.RefObject<HTMLTextAreaElement>;
	handleInputChange: InputChangeHandler;
	handleBlur: FieldBlurHandler;
	handleSubmit: FormSubmitHandler;
	resetForm: FormResetter;
	getCharacterCount: CharacterCountGetter;
	shouldShowError: ErrorChecker;
	shouldShowValid: ValidChecker;
	validateField: FieldValidator;
	validateForm: FormValidator;
}
interface FormInputProps {
	id: string;
	name: FormFieldName;
	type: "text" | "email";
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onBlur: (e: FocusEvent<HTMLInputElement>) => void;
	placeholder: string;
	maxLength?: number;
	className: string;
	"aria-invalid": boolean;
	"aria-describedby"?: string;
}
interface FormTextareaProps {
	id: string;
	name: FormFieldName;
	value: string;
	onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	onBlur: (e: FocusEvent<HTMLTextAreaElement>) => void;
	placeholder: string;
	maxLength?: number;
	rows: number;
	className: string;
	"aria-invalid": boolean;
	"aria-describedby"?: string;
	ref: React.RefObject<HTMLTextAreaElement>;
}
interface FieldIconProps {
	isValid: boolean;
	isError: boolean;
	isTextarea?: boolean;
}
interface SubmitButtonProps {
	isSubmitting: boolean;
	onClick: FormSubmitHandler;
	disabled: boolean;
}
interface StatusMessageProps {
	status: SubmitStatus;
}
interface FormFieldWrapperProps {
	children: React.ReactNode;
	error?: string;
	characterCount?: string | null;
	showError: boolean;
	fieldName: FormFieldName;
}

const ContactForm: React.FC<ContactFormProps> = ({
	onSubmitSuccess,
	onSubmitError,
	initialData = {},
	customValidationRules = {},
}) => {
	const [formData, setFormData] = useState<FormData>({
		name: initialData.name || "",
		email: initialData.email || "",
		subject: initialData.subject || "",
		message: initialData.message || "",
	});

	const [errors, setErrors] = useState<FormErrors>({});
	const [touched, setTouched] = useState<FormTouched>({});
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
	const [validFields, setValidFields] = useState<FormValidFields>({});

	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const validationRules: ValidationRules = {
		name: {
			required: true,
			minLength: 2,
			maxLength: 50,
			...customValidationRules.name,
		},
		email: {
			required: true,
			pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
			...customValidationRules.email,
		},
		subject: {
			required: true,
			minLength: 3,
			maxLength: 100,
			...customValidationRules.subject,
		},
		message: {
			required: true,
			minLength: 10,
			maxLength: 1000,
			...customValidationRules.message,
		},
	};

	const validateField: FieldValidator = useCallback(
		(name: FormFieldName, value: string): string => {
			const rules = validationRules[name];
			if (!rules) return "";

			if (rules.required && !value.trim()) {
				return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
			}

			if (rules.minLength && value.length < rules.minLength) {
				return `${
					name.charAt(0).toUpperCase() + name.slice(1)
				} must be at least ${rules.minLength} characters`;
			}

			if (rules.maxLength && value.length > rules.maxLength) {
				return `${
					name.charAt(0).toUpperCase() + name.slice(1)
				} must not exceed ${rules.maxLength} characters`;
			}

			if (rules.pattern && !rules.pattern.test(value)) {
				return name === "email"
					? "Please enter a valid email address"
					: `Invalid ${name} format`;
			}

			return "";
		},
		[validationRules]
	);

	const handleInputChange: InputChangeHandler = useCallback(
		(name: FormFieldName, value: string) => {
			setFormData((prev) => ({ ...prev, [name]: value }));
			const error = validateField(name, value);
			setErrors((prev) => ({ ...prev, [name]: error }));
			setValidFields((prev) => ({
				...prev,
				[name]: !error && value.trim() !== "",
			}));

			if (name === "message" && textareaRef.current) {
				textareaRef.current.style.height = "auto";
				textareaRef.current.style.height =
					textareaRef.current.scrollHeight + "px";
			}
		},
		[validateField]
	);

	const handleBlur: FieldBlurHandler = useCallback((name: FormFieldName) => {
		setTouched((prev) => ({ ...prev, [name]: true }));
	}, []);

	const validateForm: FormValidator = useCallback((): boolean => {
		const newErrors: FormErrors = {};
		(Object.keys(formData) as FormFieldName[]).forEach((key) => {
			const error = validateField(key, formData[key]);
			if (error) newErrors[key] = error;
		});
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	}, [formData, validateField]);

	const resetForm: FormResetter = useCallback(() => {
		setFormData({ name: "", email: "", subject: "", message: "" });
		setErrors({});
		setTouched({});
		setValidFields({});
		setSubmitStatus(null);
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto";
		}
	}, []);

	const handleSubmit: FormSubmitHandler = async (
		e: FormEvent<HTMLFormElement | HTMLButtonElement>
	) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus(null);

		if (!validateForm()) {
			setIsSubmitting(false);
			setTouched(
				(Object.keys(formData) as FormFieldName[]).reduce(
					(acc, key) => ({ ...acc, [key]: true }),
					{}
				)
			);
			return;
		}

		try {
			const params = new URLSearchParams();
			(Object.entries(formData) as [FormFieldName, string][]).forEach(
				([key, value]) => {
					params.append(key, value);
				}
			);
			params.append("form-name", "contact");

			const response: FormSubmissionResponse = await fetch("/", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: params.toString(),
			});

			if (response.ok) {
				setSubmitStatus("success");
				resetForm();
				onSubmitSuccess?.(formData);
			} else {
				throw new Error("Form submission failed");
			}
		} catch (error) {
			console.error("Form submission error:", error);
			setSubmitStatus("error");
			onSubmitError?.(
				error instanceof Error ? error : new Error("Unknown error")
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	const getCharacterCount: CharacterCountGetter = (
		fieldName: FormFieldName
	): string | null => {
		const maxLength = validationRules[fieldName]?.maxLength;
		if (!maxLength) return null;
		return `${formData[fieldName].length}/${maxLength}`;
	};

	const shouldShowError: ErrorChecker = (fieldName: FormFieldName): boolean => {
		return Boolean(touched[fieldName] && errors[fieldName]);
	};

	const shouldShowValid: ValidChecker = (fieldName: FormFieldName): boolean => {
		return Boolean(touched[fieldName] && validFields[fieldName]);
	};

	return (
		<section id="contact" className="contact-section">
			<div className="contact-container">
				<h1 className="contact-title">Contact Me</h1>
				<p className="contact-subtitle">
					I'd love to hear from you. Send me a message and I'll get back to you
					as soon as possible.
				</p>

				<div className="contact-form">
					<div className="form-row">
						<div className="form-group">
							<label htmlFor="name" className="form-label">
								Name <span className="required">*</span>
							</label>
							<div className="input-wrapper">
								<input
									id="name"
									type="text"
									value={formData.name}
									onChange={(e) => handleInputChange("name", e.target.value)}
									onBlur={() => handleBlur("name")}
									className={`form-input ${
										shouldShowError("name") ? "error" : ""
									} ${shouldShowValid("name") ? "valid" : ""}`}
									placeholder="Your full name"
									maxLength={validationRules.name.maxLength}
									aria-invalid={shouldShowError("name")}
									aria-describedby={
										shouldShowError("name") ? "name-error" : undefined
									}
								/>
								{shouldShowValid("name") && (
									<CheckCircle className="field-icon valid-icon" size={20} />
								)}
								{shouldShowError("name") && (
									<AlertCircle className="field-icon error-icon" size={20} />
								)}
							</div>
							{shouldShowError("name") && (
								<div id="name-error" className="error-message" role="alert">
									{errors.name}
								</div>
							)}
						</div>

						<div className="form-group">
							<label htmlFor="email" className="form-label">
								Email <span className="required">*</span>
							</label>
							<div className="input-wrapper">
								<input
									id="email"
									type="email"
									value={formData.email}
									onChange={(e) => handleInputChange("email", e.target.value)}
									onBlur={() => handleBlur("email")}
									className={`form-input ${
										shouldShowError("email") ? "error" : ""
									} ${shouldShowValid("email") ? "valid" : ""}`}
									placeholder="your.email@example.com"
									aria-invalid={shouldShowError("email")}
									aria-describedby={
										shouldShowError("email") ? "email-error" : undefined
									}
								/>
								{shouldShowValid("email") && (
									<CheckCircle className="field-icon valid-icon" size={20} />
								)}
								{shouldShowError("email") && (
									<AlertCircle className="field-icon error-icon" size={20} />
								)}
							</div>
							{shouldShowError("email") && (
								<div id="email-error" className="error-message" role="alert">
									{errors.email}
								</div>
							)}
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="subject" className="form-label">
							Subject <span className="required">*</span>
						</label>
						<div className="input-wrapper">
							<input
								id="subject"
								type="text"
								value={formData.subject}
								onChange={(e) => handleInputChange("subject", e.target.value)}
								onBlur={() => handleBlur("subject")}
								className={`form-input ${
									shouldShowError("subject") ? "error" : ""
								} ${shouldShowValid("subject") ? "valid" : ""}`}
								placeholder="What's this about?"
								maxLength={validationRules.subject.maxLength}
								aria-invalid={shouldShowError("subject")}
								aria-describedby={
									shouldShowError("subject") ? "subject-error" : undefined
								}
							/>
							{shouldShowValid("subject") && (
								<CheckCircle className="field-icon valid-icon" size={20} />
							)}
							{shouldShowError("subject") && (
								<AlertCircle className="field-icon error-icon" size={20} />
							)}
						</div>
						<div className="field-meta">
							{shouldShowError("subject") && (
								<div id="subject-error" className="error-message" role="alert">
									{errors.subject}
								</div>
							)}
							<div className="character-count">
								{getCharacterCount("subject")}
							</div>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="message" className="form-label">
							Message <span className="required">*</span>
						</label>
						<div className="input-wrapper">
							<textarea
								id="message"
								ref={textareaRef}
								value={formData.message}
								onChange={(e) => handleInputChange("message", e.target.value)}
								onBlur={() => handleBlur("message")}
								className={`form-textarea ${
									shouldShowError("message") ? "error" : ""
								} ${shouldShowValid("message") ? "valid" : ""}`}
								placeholder="Tell me about your project, question, or just say hello..."
								maxLength={validationRules.message.maxLength}
								rows={4}
								aria-invalid={shouldShowError("message")}
								aria-describedby={
									shouldShowError("message") ? "message-error" : undefined
								}
							/>
							{shouldShowValid("message") && (
								<CheckCircle
									className="field-icon valid-icon textarea-icon"
									size={20}
								/>
							)}
							{shouldShowError("message") && (
								<AlertCircle
									className="field-icon error-icon textarea-icon"
									size={20}
								/>
							)}
						</div>
						<div className="field-meta">
							{shouldShowError("message") && (
								<div id="message-error" className="error-message" role="alert">
									{errors.message}
								</div>
							)}
							<div className="character-count">
								{getCharacterCount("message")}
							</div>
						</div>
					</div>
					<button
						type="submit"
						onClick={handleSubmit}
						disabled={isSubmitting}
						className={`submit-button ${isSubmitting ? "loading" : ""}`}
						aria-describedby="submit-status"
					>
						{isSubmitting ? (
							<>
								<Loader2 className="button-icon spin" size={20} />
								Sending...
							</>
						) : (
							<>
								<Send className="button-icon" size={20} />
								Send Message
							</>
						)}
					</button>
					{submitStatus && (
						<div
							id="submit-status"
							className={`submit-status ${submitStatus}`}
							role="alert"
						>
							{submitStatus === "success" ? (
								<>
									<CheckCircle size={20} />
									Message sent successfully! I'll get back to you soon.
								</>
							) : (
								<>
									<AlertCircle size={20} />
									Something went wrong. Please try again later.
								</>
							)}
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default ContactForm;

// Export all types for use in other components
export type {
	FormFieldName,
	FormData,
	ValidationRule,
	ValidationRules,
	FormErrors,
	FormTouched,
	FormValidFields,
	SubmitStatus,
	FormSubmissionResponse,
	ContactFormProps,
	InputChangeHandler,
	FieldBlurHandler,
	FormSubmitHandler,
	FieldValidator,
	FormValidator,
	CharacterCountGetter,
	ErrorChecker,
	ValidChecker,
	FormResetter,
	UseContactFormReturn,
	FormInputProps,
	FormTextareaProps,
	FieldIconProps,
	SubmitButtonProps,
	StatusMessageProps,
	FormFieldWrapperProps,
};
