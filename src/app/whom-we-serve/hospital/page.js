import ApproachTimelineSection from "@/app/components/ui/ApproachTimelineSection";
import CapabilitiesSection from "@/app/components/ui/CapabilitiesSection";
import HeroSection from "@/app/components/ui/HeroSection";
import RevenueFeaturesSection from "@/app/components/ui/RevenueFeaturesSection";
import {
  whomWeServeApproachData,
  whomWeServeCapabilitiesData,
  whomWeServeRevenueData,
} from "@/app/data/home";

export default function HospitalPage() {
  const data1 = whomWeServeRevenueData.hospital;
  const data2 = whomWeServeCapabilitiesData.hospital;
  const data3 = whomWeServeApproachData.hospital;

  return (
    <>
      {/* Section1 */}
      <HeroSection
        title="Hospital Revenue Cycle Management"
        description="We streamline hospital billing and coding for major hospitals and large provider groups, delivering accurate, efficient, and compliant revenue cycle solutions. From onboarding new practices to supporting specialized needs, our customized approach maximizes reimbursements and keeps operations running smoothly."
        image="/images/whom-we-serve/hospitals/hospitals.svg"
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
              Hospital RCM Capabilities
            </h1>

            <p className="text-lg font-normal text-cetacean-blue text-left md:text-center leading-relaxed">
              We provide end-to-end Revenue Cycle Management solutions designed
              to optimize hospital operations, maximize reimbursements, and
              ensure compliance.
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
              Approach to Hospital Revenue Cycle Management
            </h1>

            <p className="text-base lg:text-lg text-cetacean-blue text-left md:text-center leading-relaxed">
              We take a holistic, data-driven approach to optimize every stage
              of the hospital revenue cycle. By combining advanced technology,
              AI-driven automation, and credentialed expertise, we streamline
              workflows, enhance coding accuracy, reduce denials, and accelerate
              reimbursements.
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
