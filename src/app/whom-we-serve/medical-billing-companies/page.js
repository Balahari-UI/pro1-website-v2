import ApproachTimelineSection from "@/app/components/ui/ApproachTimelineSection";
import CapabilitiesSection from "@/app/components/ui/CapabilitiesSection";
import HeroSection from "@/app/components/ui/HeroSection";
import RevenueFeaturesSection from "@/app/components/ui/RevenueFeaturesSection";
import {
  whomWeServeApproachData,
  whomWeServeCapabilitiesData,
  whomWeServeRevenueData,
} from "@/app/data/home";

export default function MedicalBillingCompaniesPage() {
  const data1 = whomWeServeRevenueData.medicalBilling;
  const data2 = whomWeServeCapabilitiesData.medicalBilling;
  const data3 = whomWeServeApproachData.medicalBilling;

  return (
    <>
      {/* Section1 */}
      <HeroSection
        title="Medical Billing Companies"
        description="We act as a partner to streamline operations, enhance transparency, and boost profitability for billing organizations across the healthcare ecosystem."
        image="/images/whom-we-serve/medical-billing-companies/mbc.svg"
      />

      {/* Section2 */}
      <RevenueFeaturesSection
        title={data1.title}
        description={data1.description}
        features={data1.features}
      />

      {/* Section3 */}
      <section className="py-10">
        <div className="w-[90%] max-w-[1400px] mx-auto">
          <div className="mx-auto mt-10 w-full lg:w-3/4">
            <h1 className="text-3xl lg:text-4xl font-semibold text-cetacean-blue mb-4 text-left md:text-center">
              Medical Billing Company Solution Capabilities
            </h1>

            <p className="text-lg font-normal text-cetacean-blue text-left md:text-center leading-relaxed">
              Our RCM solutions equip medical billing companies with the tools
              and expertise to deliver superior revenue cycle services to their
              clients.
            </p>
          </div>
        </div>
      </section>

      {/* Section4 */}
      <CapabilitiesSection
        images={data2.images}
        servicesTitle={data2.servicesTitle}
        services={data2.services}
      />
      {/* Section5 */}
      <section className="py-5">
        <div className="w-[90%] mx-auto">
          <div className="mx-auto mt-10 w-full lg:w-3/4">
            <h1 className="text-3xl lg:text-4xl font-semibold text-cetacean-blue mb-4 text-left md:text-center">
              Approach to RCM for Medical Billing Companies
            </h1>

            <p className="text-base lg:text-lg text-cetacean-blue text-left md:text-center leading-relaxed">
              We take a collaborative, technology-driven approach to empower
              medical billing companies to optimize client revenue cycles. By
              combining AI-enabled automation, expert coding, and end-to-end
              billing management, we streamline workflows, reduce denials, and
              accelerate reimbursements.
            </p>
          </div>
        </div>
      </section>

      {/* Section6 */}
      <ApproachTimelineSection
        titleLine1={data3.titleLine1}
        titleLine2={data3.titleLine2}
        items={data3.items}
      />
    </>
  );
}
