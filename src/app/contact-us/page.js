import ContactForm from "../components/ContactForm";

export default function ContactUspage() {
  return (
    <div>
      <section className="bg-light py-50">
        <div className="mx-auto px-20 lg:px-40">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="lg:w-1/2 text-cetacean-blue flex flex-col justify-center h-full">
              <h1 className="lg:text-4xl text-3xl md:text-5xl font-extrabold mb-4">
                Get in Touch
              </h1>
              <p className="text-base mb-2">
                Whether you’re interested in easing your administrative burdens,
                or looking for <br />
                innovative analytics solutions to improve your bottom line, PRO1
                Health can help.
              </p>
            </div>
            {/* Form */}
            <div className="rounded-[28px] lg:w-1/2  w-full border border-white/40 bg-white p-5 shadow-[0_24px_80px_rgba(41,23,84,0.18)] sm:p-8">
              <ContactForm formName="Service request from Contact Us" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
