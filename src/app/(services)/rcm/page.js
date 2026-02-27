export default function RevenueCycle() {
  return (
    <div className="pt-24">
      {/* HERO */}
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Revenue Cycle Management
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Streamlining healthcare revenue operations from patient registration
            to final payment with accuracy, compliance, and efficiency.
          </p>
        </div>
      </section>{" "}
      {/* OVERVIEW */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              End-to-End Revenue Optimization
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our Revenue Cycle Management solutions improve cash flow, reduce
              claim denials, and ensure compliance with evolving healthcare
              regulations.
            </p>
          </div>

          <div className="bg-white shadow-lg p-8 rounded-xl">
            <ul className="space-y-3 text-gray-700">
              <li>✔ Patient Registration & Eligibility</li>
              <li>✔ Medical Coding & Charge Capture</li>
              <li>✔ Claims Submission & Follow-up</li>
              <li>✔ Payment Posting</li>
              <li>✔ Denial Management</li>
            </ul>
          </div>
        </div>
      </section>{" "}
      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Our RCM Capabilities
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Medical Coding",
              "AR Follow-up",
              "Denial Resolution",
              "Charge Entry",
              "Credentialing",
              "Compliance Monitoring",
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 border rounded-xl hover:shadow-xl transition duration-300"
              >
                <h3 className="font-semibold text-lg mb-3">{item}</h3>
                <p className="text-gray-600 text-sm">
                  Professional support ensuring optimized reimbursement cycles.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      {/* CTA */}
      <section className="bg-primary text-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Improve Your Revenue Performance?
        </h2>
        <p className="mb-6">
          Partner with Pro1 for reliable, scalable RCM solutions.
        </p>
        <button className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
