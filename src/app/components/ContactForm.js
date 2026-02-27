"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import debounce from "lodash.debounce";

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
  const [searchTerm, setSearchTerm] = useState(formData.state);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const loaderRef = useRef(null);

  const limit = 50;

  // Debounce input for search
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

  // Infinite query for states
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["states", debouncedSearch],
      queryFn: async ({ pageParam = 1 }) => {
        const search = debouncedSearch || ""; // initial fetch works with empty search
        const res = await fetch(
          `/api/states?page=${pageParam}&limit=${limit}&search=${search}`,
        );
        return res.json();
      },
      getNextPageParam: (lastPage, allPages) => {
        const loaded = allPages.flatMap((p) => p.states).length;
        return loaded < lastPage.total ? allPages.length + 1 : undefined;
      },
      staleTime: 5 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
      refetchOnWindowFocus: false,
    });

  const states = data ? data.pages.flatMap((p) => p.states) : [];

  // Infinite scroll observer
  useEffect(() => {
    if (!dropdownOpen || !loaderRef.current) return;
    const container = dropdownRef.current.querySelector(".dropdown-list");
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { root: container, threshold: 0.1 },
    );

    observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [dropdownOpen, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const handleSelectState = (state) => {
    setFormData((prev) => ({ ...prev, state: state.name }));
    setSearchTerm(state.name);
    setDropdownOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formName }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Failed to send");

      onSuccess?.();
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
      alert("Message sent successfully!");
    } catch (err) {
      console.error(err);
      alert("Error sending message: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };
  const inputClass =
    "w-full border-0 border-b border-gray-300 px-3 py-2 focus:outline-none placeholder:text-base";

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          type="tel"
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

        {/* State dropdown */}
        <div ref={dropdownRef} className="relative">
          <InputField
            label="State"
            name="state"
            value={searchTerm}
            onChange={handleChange}
            onFocus={() => setDropdownOpen(true)}
          />
          {dropdownOpen && (
            <div className="dropdown-list absolute z-10  bg-white border mt-1 max-h-60 overflow-y-auto">
              {states.map((s) => (
                <div
                  key={s.isoCode + s.country} // unique key
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelectState(s)}
                >
                  {s.name} ({s.country})
                </div>
              ))}
              <div ref={loaderRef} style={{ height: "1px" }} />
              {isFetchingNextPage && (
                <p className="text-center text-sm p-2">Loading...</p>
              )}
              {!hasNextPage && !isFetchingNextPage && states.length > 0 && (
                <p className="text-center text-sm p-2">No more states</p>
              )}
              {states.length === 0 && !isFetchingNextPage && (
                <p className="text-center text-sm p-2">No states found</p>
              )}
            </div>
          )}
        </div>
      </div>

      <div>
        <label className="block text-base font-semibold mb-1 text-cetacean-blue">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Write your message here..."
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full mt-5 border border-cetacean-blue rounded-md px-3 py-2 focus:outline-none resize-none placeholder:text-cetacean-blue"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className={`w-full py-2 px-4 font-semibold rounded-md   ${
          submitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-secondary text-white cursor-pointer"
        }`}
      >
        {submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
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
  const placeholder = required ? `${label} *` : label;
  return (
    <div>
      <label className="block text-base font-semibold mb-1 text-cetacean-blue">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        required={required}
        // placeholder={placeholder}
        className="w-full  border-0 border-b border-cetacean-blue px-3 py-1 focus:outline-none placeholder:text-base placeholder:text-cetacean-blue"
      />
    </div>
  );
}
