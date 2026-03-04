"use client";

import { useState, useCallback, useRef, useEffect } from "react";
// import { useInfiniteQuery } from "@tanstack/react-query";
import debounce from "lodash.debounce";
import Script from "next/script";
import Modal from "./ui/Modal";

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function ContactForm({
  onSuccess,
  defaultValues = {},
  endpoint = "/api/send-contact",
  formName = "Default Form",
}) {
  const [formData, setFormData] = useState({
    name: defaultValues.name || "",
    email: defaultValues.email || "",
    phone: defaultValues.phone || "",
    jobtitle: defaultValues.jobtitle || "",
    company: defaultValues.company || "",
    state: defaultValues.state || "",
    message: defaultValues.message || "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [captchaScriptLoaded, setCaptchaScriptLoaded] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const recaptchaRef = useRef(null);
  const widgetIdRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState(formData.state);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const dropdownRef = useRef(null);
  // const loaderRef = useRef(null);

  const limit = 50;

  /* ---------------------- Debounce ---------------------- */
  const debounceSearch = useCallback(
    debounce((val) => setDebouncedSearch(val), 500),
    [],
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "state") {
      setSearchTerm(value);
      debounceSearch(value);
      setDropdownOpen(true);
    }
  };

  const renderRecaptcha = useCallback(() => {
    if (!recaptchaSiteKey || !recaptchaRef.current) return;
    if (!window.grecaptcha || widgetIdRef.current !== null) return;

    const renderMethod =
      window.grecaptcha.render || window.grecaptcha.enterprise?.render;

    if (!renderMethod) return;

    widgetIdRef.current = renderMethod(recaptchaRef.current, {
      sitekey: recaptchaSiteKey,
      callback: (token) => setRecaptchaToken(token),
      "expired-callback": () => setRecaptchaToken(""),
      "error-callback": () => setRecaptchaToken(""),
    });
  }, []);

  useEffect(() => {
    if (!recaptchaSiteKey) return;

    const tryRender = () => {
      if (typeof window === "undefined") return;
      renderRecaptcha();
    };

    if (captchaScriptLoaded) {
      tryRender();
    }

    const timer = setInterval(() => {
      if (widgetIdRef.current !== null) {
        clearInterval(timer);
        return;
      }
      tryRender();
    }, 300);

    return () => clearInterval(timer);
  }, [captchaScriptLoaded, renderRecaptcha]);

  /* ---------------------- Submit ---------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess("");

    if (recaptchaSiteKey && !recaptchaToken) {
      setError("Please complete the captcha.");
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formName, recaptchaToken }),
      });

      const result = await res.json();
      if (!result.success) throw new Error(result.error);

      // setSuccess("Our team will contact you shortly to assist you further.");
      setIsModalOpen(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        jobtitle: "",
        company: "",
        state: "",
        message: "",
      });
      setSearchTerm("");
      setRecaptchaToken("");
      window.grecaptcha?.reset(widgetIdRef.current);
      onSuccess?.();
    } catch (err) {
      setError(err.message || "Submission failed.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {recaptchaSiteKey && (
        <Script
          src="https://www.google.com/recaptcha/api.js?render=explicit"
          strategy="afterInteractive"
          onLoad={() => setCaptchaScriptLoaded(true)}
          onReady={() => setCaptchaScriptLoaded(true)}
          onError={() =>
            setError("Failed to load captcha. Please refresh and try again.")
          }
        />
      )}

      <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <InputField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <InputField
            label="Job Title"
            name="jobtitle"
            value={formData.jobtitle}
            onChange={handleChange}
          />
          <InputField
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
          <InputField
            label="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>

        <div className="relative">
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder=" "
            className="peer w-full border-0 border-b border-black bg-transparent py-3 text-[16px] text-black focus:outline-none focus:border-black resize-none"
          />
          <label
            className={`
      absolute left-0 top-3 text-[14px] text-gray-500 transition-all duration-300
      peer-focus:-top-3 peer-focus:text-[13px]
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-[14px]
      peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-[13px]
    `}
          >
            Message
          </label>
        </div>

        {recaptchaSiteKey && (
          <div>
            <div ref={recaptchaRef} className="min-h-[78px]" />
          </div>
        )}
        {!recaptchaSiteKey && (
          <p className="text-amber-700 text-sm">
            reCAPTCHA is not configured. Missing
            `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`.
          </p>
        )}

        {error && <p className="text-red-600 text-sm">{error}</p>}
        {success && <p className="text-green-600 text-sm">{success}</p>}

        <button
          type="submit"
          disabled={submitting}
          className={`w-full mt-6 py-3 text-[16px] font-semibold rounded-md transition cursor-pointer ${submitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#0b1b2b] text-white hover:opacity-90"
            }`}
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="text-center">
            <div className="text-center py-6">
              <h2 className="text-2xl font-bold mb-3 text-[#3c3cfb] italic">
                Thank you for reaching out to us!
              </h2>
              <h3 className="text-lg  mb-3 italic">
                Our team will contact you shortly to assist you further.
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-6 px-6 py-2 bg-cetacean-blue hover:bg-gray-400 text-white rounded-3xl cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      </form>
    </>
  );
}

function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  onFocus,
  required = false,
}) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        required={required}
        placeholder=" "
        autoComplete="off"
        className="peer w-full border-0 border-b border-black bg-transparent py-3 text-[16px] text-black focus:outline-none focus:border-black"
      />

      <label
        className={`absolute left-0 top-3 text-[14px] text-gray-500 transition-all duration-300
          peer-focus:-top-3 peer-focus:text-[13px]
          peer-placeholder-shown:top-3 peer-placeholder-shown:text-[14px]
          peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-[13px]
        `}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    </div>
  );
}
