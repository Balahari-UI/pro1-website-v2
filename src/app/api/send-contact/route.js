// "use client";

// import { useState, useCallback, useRef, useEffect } from "react";
// // import { useInfiniteQuery } from "@tanstack/react-query";
// import debounce from "lodash.debounce";
// import Script from "next/script";
// import Modal from "@/app/components/ui/Modal";

// const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

// export default function ContactForm({
//   onSuccess,
//   defaultValues = {},
//   endpoint = "/api/send-contact",
//   formName = "Default Form",
// }) {
//   const [formData, setFormData] = useState({
//     name: defaultValues.name || "",
//     email: defaultValues.email || "",
//     phone: defaultValues.phone || "",
//     jobtitle: defaultValues.jobtitle || "",
//     company: defaultValues.company || "",
//     state: defaultValues.state || "",
//     message: defaultValues.message || "",
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [captchaScriptLoaded, setCaptchaScriptLoaded] = useState(false);
//   const [recaptchaToken, setRecaptchaToken] = useState("");
//   const recaptchaRef = useRef(null);
//   const widgetIdRef = useRef(null);

//   const [searchTerm, setSearchTerm] = useState(formData.state);
//   const [debouncedSearch, setDebouncedSearch] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   // const dropdownRef = useRef(null);
//   // const loaderRef = useRef(null);

//   const limit = 50;

//   /* ---------------------- Debounce ---------------------- */
//   const debounceSearch = useCallback(
//     debounce((val) => setDebouncedSearch(val), 500),
//     [],
//   );

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     if (name === "state") {
//       setSearchTerm(value);
//       debounceSearch(value);
//       setDropdownOpen(true);
//     }
//   };

//   const renderRecaptcha = useCallback(() => {
//     if (!recaptchaSiteKey || !recaptchaRef.current) return;
//     if (!window.grecaptcha || widgetIdRef.current !== null) return;

//     const renderMethod =
//       window.grecaptcha.render || window.grecaptcha.enterprise?.render;

//     if (!renderMethod) return;

//     widgetIdRef.current = renderMethod(recaptchaRef.current, {
//       sitekey: recaptchaSiteKey,
//       callback: (token) => setRecaptchaToken(token),
//       "expired-callback": () => setRecaptchaToken(""),
//       "error-callback": () => setRecaptchaToken(""),
//     });
//   }, []);

//   useEffect(() => {
//     if (!recaptchaSiteKey) return;

//     const tryRender = () => {
//       if (typeof window === "undefined") return;
//       renderRecaptcha();
//     };

//     if (captchaScriptLoaded) {
//       tryRender();
//     }

//     const timer = setInterval(() => {
//       if (widgetIdRef.current !== null) {
//         clearInterval(timer);
//         return;
//       }
//       tryRender();
//     }, 300);

//     return () => clearInterval(timer);
//   }, [captchaScriptLoaded, renderRecaptcha]);

//   /* ---------------------- Submit ---------------------- */
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     setError("");
//     setSuccess("");

//     if (recaptchaSiteKey && !recaptchaToken) {
//       setError("Please complete the captcha.");
//       setSubmitting(false);
//       return;
//     }

//     try {
//       const res = await fetch(endpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, formName, recaptchaToken }),
//       });

//       const result = await res.json();
//       if (!result.success) throw new Error(result.error);

//       setSuccess("Our team will contact you shortly to assist you further.");
//       setIsModalOpen(true);
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         jobtitle: "",
//         company: "",
//         state: "",
//         message: "",
//       });
//       setSearchTerm("");
//       setRecaptchaToken("");
//       window.grecaptcha?.reset(widgetIdRef.current);
//       onSuccess?.();
//     } catch (err) {
//       setError(err.message || "Submission failed.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <>
//       {recaptchaSiteKey && (
//         <Script
//           src="https://www.google.com/recaptcha/api.js?render=explicit"
//           strategy="afterInteractive"
//           onLoad={() => setCaptchaScriptLoaded(true)}
//           onReady={() => setCaptchaScriptLoaded(true)}
//           onError={() =>
//             setError("Failed to load captcha. Please refresh and try again.")
//           }
//         />
//       )}

//       <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <InputField
//             label="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <InputField
//             label="Email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <InputField
//             label="Phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//           <InputField
//             label="Job Title"
//             name="jobtitle"
//             value={formData.jobtitle}
//             onChange={handleChange}
//           />
//           <InputField
//             label="Company"
//             name="company"
//             value={formData.company}
//             onChange={handleChange}
//           />
//           <InputField
//             label="State"
//             name="state"
//             value={formData.state}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="relative">
//           <textarea
//             name="message"
//             rows={3}
//             value={formData.message}
//             onChange={handleChange}
//             placeholder=" "
//             className="peer w-full border-0 border-b border-black bg-transparent py-3 text-[16px] text-black focus:outline-none focus:border-black resize-none"
//           />
//           <label
//             className={`
//       absolute left-0 top-3 text-[14px] text-gray-500 transition-all duration-300
//       peer-focus:-top-3 peer-focus:text-[13px]
//       peer-placeholder-shown:top-3 peer-placeholder-shown:text-[14px]
//       peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-[13px]
//     `}
//           >
//             Message
//           </label>
//         </div>

//         {recaptchaSiteKey && (
//           <div>
//             <div ref={recaptchaRef} className="min-h-[78px]" />
//           </div>
//         )}
//         {!recaptchaSiteKey && (
//           <p className="text-amber-700 text-sm">
//             reCAPTCHA is not configured. Missing
//             `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`.
//           </p>
//         )}

//         {error && <p className="text-red-600 text-sm">{error}</p>}
//         {success && <p className="text-green-600 text-sm">{success}</p>}

//         <button
//           type="submit"
//           disabled={submitting}
//           className={`w-full mt-6 py-3 text-[16px] font-semibold rounded-md transition ${
//             submitting
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-[#0b1b2b] text-white hover:opacity-90"
//           }`}
//         >
//           {submitting ? "Submitting..." : "Submit"}
//         </button>
//         <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//           <div className="text-center">
//             <div className="text-center py-6">
//               <h2 className="text-2xl font-bold mb-3 text-[#3c3cfb] italic">
//                 Thank you for reaching out to us!
//               </h2>
//               <h3 className="text-lg  mb-3 italic">{success}</h3>
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="mt-6 px-6 py-2 bg-[#3c4cfb] hover:bg-[#1c1cfb] text-white rounded-3xl cursor-pointer"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </Modal>
//       </form>
//     </>
//   );
// }

// function InputField({
//   label,
//   name,
//   type = "text",
//   value,
//   onChange,
//   onFocus,
//   required = false,
// }) {
//   return (
//     <div className="relative">
//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         onFocus={onFocus}
//         required={required}
//         placeholder=" "
//         autoComplete="off"
//         className="peer w-full border-0 border-b border-black bg-transparent py-3 text-[16px] text-black focus:outline-none focus:border-black"
//       />

//       <label
//         className={`absolute left-0 top-3 text-[14px] text-gray-500 transition-all duration-300
//           peer-focus:-top-3 peer-focus:text-[13px]
//           peer-placeholder-shown:top-3 peer-placeholder-shown:text-[14px]
//           peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-[13px]
//         `}
//       >
//         {label} {required && <span className="text-red-500">*</span>}
//       </label>
//     </div>
//   );
// }
import { sendEmail } from "../../lib/mailer";
import { NextResponse } from "next/server";

async function verifyRecaptchaToken(token, req) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const expectedHost = process.env.RECAPTCHA_EXPECTED_HOST;

  if (!secret) {
    throw new Error("Server misconfiguration: missing RECAPTCHA_SECRET_KEY");
  }

  if (!token) {
    return {
      ok: false,
      reason: "Missing reCAPTCHA token",
    };
  }

  const remoteIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const formData = new URLSearchParams({
    secret,
    response: token,
  });

  if (remoteIp) {
    formData.append("remoteip", remoteIp);
  }

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    return {
      ok: false,
      reason: "Unable to verify reCAPTCHA with Google",
    };
  }

  const result = await response.json();
  if (!result.success) {
    return {
      ok: false,
      reason: `reCAPTCHA failed (${(result["error-codes"] || []).join(", ") || "unknown error"})`,
    };
  }

  if (expectedHost && result.hostname && result.hostname !== expectedHost) {
    return {
      ok: false,
      reason: `Invalid reCAPTCHA hostname: ${result.hostname}`,
    };
  }

  return { ok: true };
}

export async function POST(req) {
  try {
    const {
      name,
      email,
      phone,
      message,
      jobtitle,
      state,
      company,
      formName,
      recaptchaToken,
    } = await req.json();

    if (process.env.RECAPTCHA_SECRET_KEY) {
      const verification = await verifyRecaptchaToken(recaptchaToken, req);
      if (!verification.ok) {
        return NextResponse.json(
          { success: false, error: verification.reason },
          { status: 400 },
        );
      }
    }

    await sendEmail({
      to: process.env.TO_EMAIL,
      subject: `New message from ${formName}`,
      // html: `<p>Name: ${name}</p>
      // <p>Email: ${email}</p>
      // <p>Phone: ${phone}</p>
      // <p>Job Title: ${jobtitle}</p>
      // <p>State: ${state}</p>
      // <p>Company: ${company}</p>
      // <p>Message: ${message}</p>
      // `,
      html: `<div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
 
          <!-- Header -->
          <div style="background: #0056b3; padding: 20px; color: white; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">📄 ${formName || "Service Request"
        }</h1>
            <p style="margin: 5px 0 0; font-size: 14px; opacity: 0.9;">
              A client has submitted a service inquiry via your website
            </p>
          </div>
 
          <!-- Body -->
          <div style="padding: 20px; line-height: 1.6; color: #333;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; font-weight: bold; width: 150px; background: #f9f9f9;">Name</td>
                <td style="padding: 8px;">${name || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; background: #f9f9f9;">Email</td>
                <td style="padding: 8px;">${email || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; background: #f9f9f9;">Job Title</td>
                <td style="padding: 8px;">${jobtitle || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; background: #f9f9f9;">Company</td>
                <td style="padding: 8px;">${company || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; background: #f9f9f9;">Phone</td>
                <td style="padding: 8px;">${phone || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; background: #f9f9f9;">State</td>
                <td style="padding: 8px;">${state || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; background: #f9f9f9; vertical-align: top;">Message</td>
                <td style="padding: 8px;">${(message || "").replace(
          /\n/g,
          "<br/>",
        )}</td>
              </tr>
            </table>
          </div>
 
        </div>
      </div>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 },
    );
  }
}

