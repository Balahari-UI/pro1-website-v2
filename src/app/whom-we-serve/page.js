// export default function Whomweserve() {
//   return <div>whome we serve</div>;
// }

import HeroSection from "../components/ui/HeroSection";
import StickyScrollSection from "../components/ui/StickyScrollSection";

export default function WhomWeServe() {
  return (
    <>
      <HeroSection
        title="Transforming Healthcare Revenue with AI-Driven Solutions"
        description="Pro1 Health Systems helps providers and payers maximize reimbursements, reduce compliance risks, and improve patient outcomes through intelligent revenue cycle solutions."
        image="/images/whom-we-serve/whomwebg.svg"
      />

      {/* section4 */}
      <section className="bg-[#f3f4f6]">
        <StickyScrollSection
          title="Who we serve"
          description="You deserve more than a service provider — a partner who fuels your success. We work with Hospitals, Physician Groups, Healthcare Providers, and Specialty Practices to deliver end-to-end Revenue Cycle Management solutions that unlock higher reimbursements, minimize denials, and keep revenue flowing seamlessly. With us, you gain a best-in-class team dedicated to protecting your bottom line so you can stay focused on what truly matters — delivering exceptional patient care."
          items={[
            {
              title: "Hospitals",
              text: "We partner with hospitals and healthcare systems to improve claim performance, manage compliance, and maintain financial stability, enabling hospitals to focus on delivering high-quality patient care.",
              link: "/whom-we-serve/hospital",
            },
            {
              title: "Physician Groups",
              text: "We support physicians and medical groups with efficient revenue cycle solutions, allowing providers to focus on patients instead of paperwork.",
              link: "/whom-we-serve/physician-groups",
            },

            {
              title: "Medical Billing Companies",
              text: "We act as a partner to streamline operations, enhance transparency, and boost profitability for billing organizations across the healthcare ecosystem.",
              link: "/whom-we-serve/medical-billing-companies",
            },
          ]}
        />
      </section>
      {/* <StickyScrollSection
        title="Who we serve"
        description="You deserve more than a service provider — a partner who fuels your success..."
        items={[
          {
            title: "Hospitals",
            text: "We partner with hospitals and healthcare systems...",
            link: "/hospitals",
          },
          {
            title: "Physician Groups",
            text: "We support physicians and medical groups...",
            link: "/physician-groups",
          },
          {
            title: "Medical Billing Companies",
            text: "We act as a partner to streamline operations...",
            link: "/medical-billing-companies",
          },
        ]}
      /> */}
    </>
  );
}
