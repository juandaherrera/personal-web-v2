"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

const easing = [0.22, 1, 0.36, 1] as const;

const fieldVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { ease: easing, duration: 0.4 } },
};

function validateField(field: keyof FormData, value: string, isEn: boolean): string | undefined {
  if (field === "name") {
    if (!value.trim()) return isEn ? "Name is required" : "El nombre es obligatorio";
    if (!/[^\p{N}\s]/u.test(value.trim()))
      return isEn ? "Enter a valid name" : "Ingresa un nombre válido";
  }
  if (field === "email") {
    if (!value.trim()) return isEn ? "Email is required" : "El correo es obligatorio";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return isEn ? "Enter a valid email" : "Ingresa un correo válido";
  }
  if (field === "message" && !value.trim()) {
    return isEn ? "Message is required" : "El mensaje es obligatorio";
  }
  return undefined;
}

export default function Contact() {
  const { isEn } = useLanguage();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = useCallback(
    (field: keyof FormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (touched[field] && errors[field]) {
        // If the field is cleared, remove the error — "required" only shows on submit
        if (!value.trim()) {
          setErrors((prev) => ({ ...prev, [field]: undefined }));
        } else {
          setErrors((prev) => ({ ...prev, [field]: validateField(field, value, isEn) }));
        }
      }
    },
    [touched, errors, isEn]
  );

  const handleBlur = useCallback(
    (field: keyof FormData) => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      // Only validate on blur if the user actually typed something
      if (formData[field].trim()) {
        setErrors((prev) => ({
          ...prev,
          [field]: validateField(field, formData[field], isEn),
        }));
      }
    },
    [formData, isEn]
  );

  // Re-translate visible errors when language switches
  useEffect(() => {
    setErrors((prev) => {
      const updated: FieldErrors = {};
      for (const field of ["name", "email", "message"] as const) {
        if (prev[field]) {
          updated[field] = validateField(field, formData[field], isEn);
        }
      }
      return { ...prev, ...updated };
    });
  }, [isEn, formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FieldErrors = {};
    for (const field of ["name", "email", "message"] as const) {
      const err = validateField(field, formData[field], isEn);
      if (err) newErrors[field] = err;
    }
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(newErrors).length > 0) return;

    setStatus("loading");
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          botcheck: "",
          subject: `New contact from ${formData.name} — juandaherrera.com`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          isEn
            ? "Something went wrong. Please try again."
            : "Algo salió mal. Por favor, intenta de nuevo."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        isEn ? "Network error. Please check your connection." : "Error de red. Revisa tu conexión."
      );
    }
  };

  const inputClass =
    "w-full bg-surface-2 border border-border-2 rounded-lg px-4 py-3 text-base text-text-primary placeholder:text-muted focus:outline-none focus-visible:outline-none focus:border-border-2 transition-colors duration-200";

  return (
    <section id="contact" className="relative section-py-lg overflow-hidden" ref={sectionRef}>
      <div className="section-number absolute -top-4 left-0 select-none pointer-events-none">
        08
      </div>

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ── Left: info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: easing }}
          >
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
              {isEn ? "Contact" : "Contacto"}
            </p>
            <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-text-primary leading-tight">
              {isEn ? "Let's work together" : "Trabajemos juntos"}
            </h2>
            <p className="font-figtree text-base text-muted mt-4 max-w-sm leading-relaxed">
              {isEn
                ? "Want to send me a recommendation, feedback, or just say hi? Drop me a message."
                : "¿Quieres enviarme una recomendación, feedback o simplemente saludar? Déjame un mensaje."}
            </p>

            {/* Email link */}
            <a
              href="mailto:juandaherreparra@gmail.com"
              className="inline-flex items-center gap-2 mt-8 font-mono text-sm text-muted hover:text-accent transition-colors duration-200 group"
            >
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent shrink-0"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              juandaherreparra@gmail.com
            </a>
          </motion.div>

          {/* ── Right: form card ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: easing }}
          >
            <div className="bg-surface rounded-2xl border border-border-dark p-6 md:p-8">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, ease: easing }}
                    className="flex flex-col items-center justify-center py-14 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-6">
                      <svg
                        aria-hidden="true"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-accent"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="font-syne font-bold text-xl text-text-primary">
                      {isEn ? "Message sent!" : "¡Mensaje enviado!"}
                    </p>
                    <p className="font-figtree text-sm text-muted mt-2">
                      {isEn ? "I'll get back to you soon." : "Te responderé pronto."}
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleSubmit}
                    aria-label={isEn ? "Contact form" : "Formulario de contacto"}
                    noValidate
                  >
                    {/* Honeypot — hidden from users */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      tabIndex={-1}
                      autoComplete="off"
                      style={{ display: "none" }}
                    />

                    <motion.div
                      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
                      initial="hidden"
                      animate={inView ? "show" : "hidden"}
                      className="flex flex-col gap-5"
                    >
                      {/* Name */}
                      <motion.div variants={fieldVariants} className="group">
                        <label
                          htmlFor="contact-name"
                          className="font-mono text-xs text-muted group-focus-within:text-text-primary uppercase tracking-widest mb-2 block transition-colors duration-200"
                        >
                          {isEn ? "Name" : "Nombre"}
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          onBlur={() => handleBlur("name")}
                          aria-invalid={!!errors.name || undefined}
                          aria-describedby={errors.name ? "error-name" : undefined}
                          className={inputClass}
                          placeholder={isEn ? "Your name" : "Tu nombre"}
                        />
                        {errors.name && (
                          <p
                            id="error-name"
                            role="alert"
                            className="font-mono text-xs text-accent mt-1.5"
                          >
                            {errors.name}
                          </p>
                        )}
                      </motion.div>

                      {/* Email */}
                      <motion.div variants={fieldVariants} className="group">
                        <label
                          htmlFor="contact-email"
                          className="font-mono text-xs text-muted group-focus-within:text-text-primary uppercase tracking-widest mb-2 block transition-colors duration-200"
                        >
                          {isEn ? "Email" : "Correo"}
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          onBlur={() => handleBlur("email")}
                          aria-invalid={!!errors.email || undefined}
                          aria-describedby={errors.email ? "error-email" : undefined}
                          className={inputClass}
                          placeholder={isEn ? "your@email.com" : "tu@correo.com"}
                        />
                        {errors.email && (
                          <p
                            id="error-email"
                            role="alert"
                            className="font-mono text-xs text-accent mt-1.5"
                          >
                            {errors.email}
                          </p>
                        )}
                      </motion.div>

                      {/* Message */}
                      <motion.div variants={fieldVariants} className="group">
                        <label
                          htmlFor="contact-message"
                          className="font-mono text-xs text-muted group-focus-within:text-text-primary uppercase tracking-widest mb-2 block transition-colors duration-200"
                        >
                          {isEn ? "Message" : "Mensaje"}
                        </label>
                        <textarea
                          id="contact-message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          onBlur={() => handleBlur("message")}
                          aria-invalid={!!errors.message || undefined}
                          aria-describedby={errors.message ? "error-message" : undefined}
                          className={`${inputClass} resize-none`}
                          placeholder={
                            isEn ? "Write your message here..." : "Escribe tu mensaje aquí..."
                          }
                        />
                        {errors.message && (
                          <p
                            id="error-message"
                            role="alert"
                            className="font-mono text-xs text-accent mt-1.5"
                          >
                            {errors.message}
                          </p>
                        )}
                      </motion.div>

                      {/* Error banner */}
                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-2 px-4 py-3 rounded-lg bg-accent/10 border border-accent/30"
                          role="alert"
                        >
                          <svg
                            aria-hidden="true"
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            className="text-accent shrink-0"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                          <p className="font-figtree text-sm text-accent">{errorMessage}</p>
                        </motion.div>
                      )}

                      {/* Submit */}
                      <motion.div variants={fieldVariants}>
                        <button
                          type="submit"
                          disabled={status === "loading"}
                          aria-busy={status === "loading"}
                          className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-2 text-bg font-syne font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-lg transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                        >
                          {status === "loading" ? (
                            <>
                              <svg
                                aria-hidden="true"
                                className="animate-spin h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                />
                              </svg>
                              {isEn ? "Sending..." : "Enviando..."}
                            </>
                          ) : (
                            <>
                              {isEn ? "Send message" : "Enviar mensaje"}
                              <svg
                                aria-hidden="true"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                              </svg>
                            </>
                          )}
                        </button>
                      </motion.div>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
