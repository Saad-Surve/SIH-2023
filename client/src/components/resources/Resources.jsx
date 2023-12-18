import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import "./resources.css";

function CustCard({ logo, title, link, description }) {
  return (
    <Card className="max-w-[400px] border">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src={logo}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
          <p className="text-small text-default-500">{link}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="text-sm">{description}</CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href={link}>
          {title}
        </Link>
      </CardFooter>
    </Card>
  );
}

const Resources = () => {
  const data = [
    {
      logo: "lawmin.gov.in/sites/all/themes/landj/images/emblem-dark.png",
      title: "Ministry of Law and Justice",
      link: "https://lawmin.gov.in/",
      description: `Honourable Minister
      Shri Arjun Ram Meghwal
      Hon'ble Minister of State, Ministry of Law and Justice (Independent Charge)`,
    },
    {
      logo: "lawmin.gov.in/sites/all/themes/landj/images/emblem-dark.png",
      title: "Right to Information",
      link: "https://rti.gov.in/",
      description: `Right to Information Act 2005 mandates timely response to citizen requests for government information. `,
    },
    {
      logo: "https://ncsc.nic.in/upload/logo/logo.png",
      title: "First Information Report",
      link: "https://ncsc.nic.in/pages/display/135-how-to-file-a-police-fir-complaint-online",
      description: `It is prepared when the police receive information about the commission of a cognizable offence. In simple words, it is a complaint lodged with the police by the victim of a cognizable offence or by someone on his or her behalf, but anyone can make such a report either orally or in writing to the police. People can also lodge an FIR through online medium.`,
    },
    {
      logo: "https://www.indiacode.nic.in/image/final-logo_update.jpg",
      title: "India Code",
      link: "https://www.indiacode.nic.in/",
      description: `Digital Repository of all Laws: A system of laws for Communication`,
    },
    {
      logo: "https://nalsa.gov.in/lsams/images/logo-nlam.png",
      title: "NALSA Legal Services Management System",
      link: "https://nalsa.gov.in/lsams/",
      description: `Apply Legal Aid Online, Track Your Application, Pre Arrest Assistance`,
    },
    {
      logo: "https://d2f2ht52r1pvo3.cloudfront.net/static/dist/images/logo/dept-of-justice-logo-update.png",
      title: "Tele Law by Department of Justice",
      link: "https://www.tele-law.in/",
      description: `Tele-Law means the use of communications and information technology for the delivery of legal information and advice. This e-interaction between lawyers and people would be through the video-conferencing infrastructure available at the CSCs.`,
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Logo_of_Income_Tax_Department_India.png",
      title: "Income Tax Department",
      link: "https://incometaxindia.gov.in/Pages/default.aspx",
      description: `This is the official website of Central Board of Direct Taxes (CBDT), Department of Revenue, Ministry of Finance, Government of India.`,
    },
    {
      logo: "https://consumerhelpline.gov.in/images/jago1.png",
      title: "Department of Consumer Affairs",
      link: "https://consumerhelpline.gov.in/",
      description: `This website has been launched by the Department of Consumer Affairs to create awareness,advise and redress consumer grievances and act as a central registry for lodging consumer grievances.`,
    },
    {
      logo: "https://www.crpc.in/images/logo.png",
      title: "Citizen Rights Protection Council",
      link: "https://www.crpc.in/",
      description: `ABOUT CRPC:
      Citizen Rights Protection Council (CRPC) is a civil rights’ group comprised of advocates, social activists and grassroots para- legal social workers dedicated to using the legal system to protect and advance the civil and human rights in India. CRPC, a non- profit and governmental civil rights’ group was set up in 2013 to defend the rights of the underprivileged sections of the society.`,
    },
    {
      logo: "https://www.crpc.in/images/logo.png",
      title: "National Cyber Crime Reporting Portal",
      link: "https://cybercrime.gov.in/",
      description: `This portal is an initiative of Government of India to facilitate victims/complainants to report cyber crime complaints online. This portal caters to complaints pertaining to cyber crimes only with special focus on cyber crimes against women and children. Complaints reported on this portal are dealt by law enforcement agencies/ police based on the information available in the complaints. It is imperative to provide correct and accurate details while filing complaint for prompt action.`,
    },
  ];

  return (
    <div className="resources">
      <div className="heading">Important Links to Legal Resources</div>
      <Divider />
      <div className="cards">
        {data.map((item) => {
          return (
            <div key={item.title} className="eachCard">
              <CustCard
                logo={item.logo}
                title={item.title}
                link={item.link}
                description={item.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Resources;
