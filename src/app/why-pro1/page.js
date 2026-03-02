import HeroSection from "../components/ui/HeroSection";

export default function WhyPro1Page() {
  return (
    <>
      <HeroSection
        title="Get Started with Pro1 Health"
        description="Experience a seamless revenue cycle—from patient registration through payment. Contact us today to discuss how we can tailor our solutions for your needs. We adapt quickly to client-specific systems and workflows, ensuring smooth integration and optimized billing operations."
        image="/images/whypro-1/whypro1.svg"
      />

      <section className="pb-10">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="border border-gray-200 rounded-2xl p-8 h-full">
              <h2 className="text-2xl lg:text-[40px] font-semibold text-cetacean-blue mb-6">
                Why Choose Pro1 Health?
              </h2>

              <div className="space-y-4">
                <div className="bg-[#eee1fe]  rounded-lg px-4 py-3 text-base w-fit">
                  Improved Cash Flow Faster reimbursements and reduced
                  write-offs from front-end to back-end efficiency.
                </div>

                <div className="bg-[#eee1fe] rounded-lg px-4 py-3 text-base  w-fit">
                  Fewer Denials & Rework Stronger coverage checks, precise
                  coding, and proactive denial prevention.
                </div>

                <div className="bg-[#eee1fe] rounded-lg px-4 py-3 text-base  w-fit">
                  Advanced Insights Data-driven monitoring unlocks continuous
                  revenue cycle improvement.
                </div>

                <div className="bg-[#eee1fe] rounded-lg px-4 py-3 text-base  w-fit">
                  Staff Optimization Automation and expert oversight free up
                  internal resources.
                </div>

                <div className="bg-[#eee1fe] rounded-lg px-4 py-3 text-base  w-fit">
                  Enhanced Compliance & Security Certified processes and
                  rigorous credentialing ensure regulatory adherence.
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-200 rounded-2xl p-8 h-full">
              <h2 className="text-2xl lg:text-[40px] font-semibold text-cetacean-blue mb-6">
                Coder Calibration & Quality Assurance
              </h2>

              <div className="space-y-4">
                <div className="bg-[#ffd9ec]  rounded-lg px-4 py-3 text-base  w-fit">
                  Conduct regular coder audits and re-training.
                </div>

                <div className="bg-[#ffd9ec] rounded-lg px-4 py-3 text-base  w-fit">
                  Provide dual-level quality review and feedback loops.
                </div>

                <div className="bg-[#ffd9ec] rounded-lg px-4 py-3 text-base  w-fit">
                  Track performance against SLA metrics, maintaining 97%+
                  accuracy.
                </div>

                <div className="bg-[#ffd9ec] rounded-lg px-4 py-3 text-base  w-fit">
                  Customize quality scorecards per client expectations.
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-200 rounded-2xl p-8 h-full">
              <h2 className="text-2xl lg:text-[40px] font-semibold text-cetacean-blue mb-6">
                Expertise Across Payer Lines
              </h2>

              <div className="space-y-4">
                <div className="bg-[#e1f7e5] rounded-lg px-4 py-3 text-base  w-fit">
                  Trained in AHA, ICD-10-CM coding, and RADV prep standards.
                </div>

                <div className="bg-[#e1f7e5] rounded-lg px-4 py-3 text-base  w-fit">
                  Proficient in CMS and HHS guidelines.
                </div>

                <div className="bg-[#e1f7e5] rounded-lg px-4 py-3 text-base  w-fit">
                  Familiar with payer-specific audit requirements.
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="border border-gray-200 rounded-2xl p-8 h-full">
              <h2 className="text-2xl lg:text-[40px] font-semibold text-cetacean-blue mb-6">
                Why Our Clients Trust Pro1
              </h2>

              <div className="space-y-4">
                <div className="bg-[#e2e2fd] rounded-lg px-4 py-3 text-base  w-fit">
                  Rapid onboarding and scaling (10 to 200+ coders).
                </div>

                <div className="bg-[#e2e2fd] rounded-lg px-4 py-3 text-base  w-fit">
                  Flexible engagement models (in-house, hybrid, or fully
                  outsourced).
                </div>

                <div className="bg-[#e2e2fd] rounded-lg px-4 py-3 text-base  w-fit">
                  Transparent reporting and regular communication.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
