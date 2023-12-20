import { Accordion, AccordionItem } from "@nextui-org/react";

const Page3 = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="lg:h-screen pb-6 bg-[#006AFF]/[0.68] flex flex-col gap-10 lg:gap-20 items-center justify-center">
      <span className="pt-6 lg:p-0 text-white lg:text-6xl font-saira">
        FAQs
      </span>
      <div className="w-4/5 font-mulish">
        <Accordion
          className="bg-[#E5F0FF]"
          variant="shadow"
          itemClasses={{
            title: "lg:text-2xl",
            content: "text-base lg:text-lg",
          }}
        >
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="What are my rights as a citizen?"
          >
            There are six fundamental rights of Indian Constitution along with
            the constitutional articles related to them are mentioned below:
            <ul className="list-inside list-disc">
              <li>Right to Equality (Article 14-18)</li>
              <li>Right to Freedom (Article 19-22)</li>
              <li>Right against Exploitation (Article 23-24)</li>
              <li>Right to Freedom of Religion (Article 25-28)</li>
              <li>Cultural and Educational Rights (Article 29-30)</li>
              <li>Right to Constitutional Remedies (Article 32)</li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="How can I file a complaint?"
          >
            Centralised Public Grievance Redress and Monitoring System (CPGRAMS)
            is an online platform available to the citizens 24x7 to lodge their
            grievances to the public authorities on any subject related to
            service delivery. It is a single portal connected to all the
            Ministries/Departments of Government of India and States. Every
            Ministry and States have role-based access to this system. CPGRAMS
            is also accessible to the citizens through standalone mobile
            application downloadable through Google Play store and mobile
            application integrated with UMANG.
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title="How can I access legal aid services?"
          >
            Each District Legal Services Authority, High Court Legal Services
            Committee and State Legal Services Authority has a front office
            where an application can be moved. One can even access and apply on
            the online portal of NALSA (https://nalsa.gov.in/) or the website of
            the State Legal Services Authorities.
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Accordion 3"
            title="How can I obtain a will?"
          >
            A will can be obtained by filing a petition before the court along
            with a schedule of the property and annexing a copy of the will to
            the petition as well. It should be expressly prayed to the court to
            grant probate to carry out the intention of the testator.
          </AccordionItem>
          <AccordionItem
            key="5"
            aria-label="Accordion 3"
            title="What are the legal implications of thievery?"
          >
            According to Section 379, Punishment for theft, Whoever commits
            theft shall be punished with imprisonment of either description for
            a term which may extend to three years, or with fine or with both.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Page3;
