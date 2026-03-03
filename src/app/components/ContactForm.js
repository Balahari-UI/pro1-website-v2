// "use client";

// import { useState, useCallback, useRef, useEffect } from "react";
// import { useInfiniteQuery } from "@tanstack/react-query";
// import debounce from "lodash.debounce";

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

//   const [submitting, setSubmitting] = useState(false);
//   const [searchTerm, setSearchTerm] = useState(formData.state);
//   const [debouncedSearch, setDebouncedSearch] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const loaderRef = useRef(null);

//   const limit = 50;

//   // Debounce input for search
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

//   // Infinite query for states
//   const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
//     useInfiniteQuery({
//       queryKey: ["states", debouncedSearch],
//       queryFn: async ({ pageParam = 1 }) => {
//         const search = debouncedSearch || ""; // initial fetch works with empty search
//         const res = await fetch(
//           `/api/states?page=${pageParam}&limit=${limit}&search=${search}`,
//         );
//         return res.json();
//       },
//       getNextPageParam: (lastPage, allPages) => {
//         const loaded = allPages.flatMap((p) => p.states).length;
//         return loaded < lastPage.total ? allPages.length + 1 : undefined;
//       },
//       staleTime: 5 * 60 * 1000,
//       cacheTime: 10 * 60 * 1000,
//       refetchOnWindowFocus: false,
//     });

//   const states = data ? data.pages.flatMap((p) => p.states) : [];

//   // Infinite scroll observer
//   useEffect(() => {
//     if (!dropdownOpen || !loaderRef.current) return;
//     const container = dropdownRef.current.querySelector(".dropdown-list");
//     if (!container) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
//           fetchNextPage();
//         }
//       },
//       { root: container, threshold: 0.1 },
//     );

//     observer.observe(loaderRef.current);

//     return () => {
//       if (loaderRef.current) observer.unobserve(loaderRef.current);
//     };
//   }, [dropdownOpen, hasNextPage, isFetchingNextPage, fetchNextPage]);

//   const handleSelectState = (state) => {
//     setFormData((prev) => ({ ...prev, state: state.name }));
//     setSearchTerm(state.name);
//     setDropdownOpen(false);
//   };

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     try {
//       const res = await fetch(endpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, formName }),
//       });
//       const data = await res.json();
//       if (!data.success) throw new Error(data.error || "Failed to send");

//       onSuccess?.();
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
//       alert("Message sent successfully!");
//     } catch (err) {
//       console.error(err);
//       alert("Error sending message: " + err.message);
//     } finally {
//       setSubmitting(false);
//     }
//   };
//   const inputClass =
//     "w-full border-0 border-b border-gray-300 px-3 py-2 focus:outline-none placeholder:text-base";

//   return (
//     <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <InputField
//           label="Name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <InputField
//           label="Email"
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <InputField
//           label="Phone"
//           name="phone"
//           type="tel"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//         />
//         <InputField
//           label="Job Title"
//           name="jobtitle"
//           value={formData.jobtitle}
//           onChange={handleChange}
//         />
//         <InputField
//           label="Company"
//           name="company"
//           value={formData.company}
//           onChange={handleChange}
//         />

//         {/* State dropdown */}
//         <div ref={dropdownRef} className="relative">
//           <InputField
//             label="State"
//             name="state"
//             value={searchTerm}
//             onChange={handleChange}
//             onFocus={() => setDropdownOpen(true)}
//           />
//           {dropdownOpen && (
//             <div className="dropdown-list absolute z-10  bg-white border mt-1 max-h-60 overflow-y-auto">
//               {states.map((s) => (
//                 <div
//                   key={s.isoCode + s.country} // unique key
//                   className="p-2 hover:bg-gray-100 cursor-pointer"
//                   onClick={() => handleSelectState(s)}
//                 >
//                   {s.name} ({s.country})
//                 </div>
//               ))}
//               <div ref={loaderRef} style={{ height: "1px" }} />
//               {isFetchingNextPage && (
//                 <p className="text-center text-sm p-2">Loading...</p>
//               )}
//               {!hasNextPage && !isFetchingNextPage && states.length > 0 && (
//                 <p className="text-center text-sm p-2">No more states</p>
//               )}
//               {states.length === 0 && !isFetchingNextPage && (
//                 <p className="text-center text-sm p-2">No states found</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       <div>
//         <label className="block text-base font-semibold mb-1 text-cetacean-blue">
//           Message
//         </label>
//         <textarea
//           name="message"
//           placeholder="Write your message here..."
//           value={formData.message}
//           onChange={handleChange}
//           rows={4}
//           className="w-full mt-5 border border-cetacean-blue rounded-md px-3 py-2 focus:outline-none resize-none placeholder:text-cetacean-blue"
//         />
//       </div>

//       <button
//         type="submit"
//         disabled={submitting}
//         className={`w-full py-2 px-4 font-semibold rounded-md   ${
//           submitting
//             ? "bg-gray-400 cursor-not-allowed"
//             : "bg-secondary text-white cursor-pointer"
//         }`}
//       >
//         {submitting ? "Submitting..." : "Submit"}
//       </button>
//     </form>
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
//   const placeholder = required ? `${label} *` : label;
//   return (
//     <div>
//       <label className="block text-base font-semibold mb-1 text-cetacean-blue">
//         {label} {required && <span className="text-red-500">*</span>}
//       </label>
//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         onFocus={onFocus}
//         required={required}
//         // placeholder={placeholder}
//         className="w-full  border-0 border-b border-cetacean-blue px-3 py-1 focus:outline-none placeholder:text-base placeholder:text-cetacean-blue"
//       />
//     </div>
//   );
// }
"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import debounce from "lodash.debounce";
import Script from "next/script";

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

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const recaptchaRef = useRef(null);
  const widgetIdRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState(formData.state);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const loaderRef = useRef(null);

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

  /* ---------------------- Infinite Query ---------------------- */
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["states", debouncedSearch],
      queryFn: async ({ pageParam = 1 }) => {
        const res = await fetch(
          `/api/states?page=${pageParam}&limit=${limit}&search=${debouncedSearch || ""}`,
        );
        return res.json();
      },
      getNextPageParam: (lastPage, allPages) => {
        const loaded = allPages.flatMap((p) => p.states).length;
        return loaded < lastPage.total ? allPages.length + 1 : undefined;
      },
    });

  const states = data ? data.pages.flatMap((p) => p.states) : [];

  /* ---------------------- reCAPTCHA ---------------------- */
  // const renderRecaptcha = useCallback(() => {
  //   if (!window.grecaptcha || widgetIdRef.current !== null) return;

  //   widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
  //     sitekey: recaptchaSiteKey,
  //     callback: (token) => setRecaptchaToken(token),
  //     "expired-callback": () => setRecaptchaToken(""),
  //   });
  // }, []);
  const renderRecaptcha = useCallback(() => {
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

      setSuccess("Your inquiry has been submitted successfully.");
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
          onLoad={renderRecaptcha}
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

          {/* State Dropdown */}
          {/* <div ref={dropdownRef} className="relative">
            <InputField
              label="State"
              name="state"
              value={searchTerm}
              onChange={handleChange}
              onFocus={() => setDropdownOpen(true)}
            />
            {dropdownOpen && (
              <div className="absolute z-20 mt-2 w-full max-h-60 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
                {states.map((s) => (
                  <div
                    key={s.isoCode + s.country}
                    className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, state: s.name }));
                      setSearchTerm(s.name);
                      setDropdownOpen(false);
                    }}
                  >
                    {s.name} ({s.country})
                  </div>
                ))}
                {isFetchingNextPage && (
                  <p className="text-center py-2 text-sm">Loading...</p>
                )}
              </div>
            )}
          </div> */}
        </div>

        {/* <div>
          <label className="block text-[14px] font-medium text-gray-600 mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-black focus:ring-1 focus:ring-black outline-none"
          />
        </div> */}
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
    className="
      absolute left-0 top-3 text-[14px] text-gray-500 transition-all duration-300
      peer-focus:-top-3 peer-focus:text-[13px]
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-[14px]
      peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-[13px]
    "
  >
    Message
  </label>
</div>

        {recaptchaSiteKey && (
          <div>
            <div ref={recaptchaRef} />
          </div>
        )}

        {error && <p className="text-red-600 text-sm">{error}</p>}
        {success && <p className="text-green-600 text-sm">{success}</p>}

        {/* <button
          type="submit"
          disabled={submitting}
          className={`w-full rounded-xl py-3 text-sm font-semibold text-white transition ${
            submitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:bg-[#111216]"
          }`}
        >
          {submitting ? "Submitting..." : "Submit"}
        </button> */}
        <button
  type="submit"
  disabled={submitting}
  className={`w-full mt-6 py-3 text-[16px] font-semibold rounded-md transition ${
    submitting
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-[#0b1b2b] text-white hover:opacity-90"
  }`}
>
  {submitting ? "Submitting..." : "Submit"}
</button>
      </form>
    </>
  );
}

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
//     <div>
//       <label className="block text-[14px] font-medium text-gray-600 mb-2">
//         {label} {required && <span className="text-red-500">*</span>}
//       </label>
//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         onFocus={onFocus}
//         required={required}
//         autoComplete="off"
//         className="h-[48px] w-full rounded-xl border border-gray-300 px-4 text-sm focus:border-black focus:ring-1 focus:ring-black outline-none"
//       />
//     </div>
//   );
// }


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
        className="
          absolute left-0 top-3 text-[14px] text-gray-500 transition-all duration-300
          peer-focus:-top-3 peer-focus:text-[13px]
          peer-placeholder-shown:top-3 peer-placeholder-shown:text-[14px]
          peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-[13px]
        "
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    </div>
  );
}