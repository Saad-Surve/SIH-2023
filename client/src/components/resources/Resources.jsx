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
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import rti_logo from 'C:/Users/Neha/OneDrive/Desktop/SIH-2023/client/src/assets/rti_logo.png';
import crpc_logo from 'C:/Users/Neha/OneDrive/Desktop/SIH-2023/client/src/assets/crpc_logo.png';
import cyber_logo from 'C:/Users/Neha/OneDrive/Desktop/SIH-2023/client/src/assets/cyber_logo.png';

function CustCard({ logo, title, link, description }) {
  return (
    <Card className="max-w-[500px] border ">
      <CardHeader className="flex gap-3 h-[100px]">
        <Image
          alt="nextui logo"
          height={60}
          radius="sm"
          src={logo}
          width={80}
        />
        <div className="flex flex-col">
          <p className="text-2xl ">{title}</p>
          <p className="text-small text-default-500">{link}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="text-sm h-[100px] px-4 py-2">{description}</CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href={link}>
          {title}
        </Link>
      </CardFooter>
    </Card>
  );
}

function CustNav() {
  return (
    <Navbar
      position="static"
      style={{ width: "100%", backgroundColor: "lightblue", color: "#fff" }}
    >
      <NavbarContent style={{ display: "flex", justifyContent: "center" }}>
        <NavbarItem>
          <Link color="foreground" href="/documents">
            Legal Documents
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/resources" aria-current="page">
            Legal Resources
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

const Resources = () => {
  const data = [
    {
      logo: "https://d2f2ht52r1pvo3.cloudfront.net/static/dist/images/logo/dept-of-justice-logo-update.png",
      title: "Ministry of Law and Justice",
      link: "https://lawmin.gov.in/",
      description: `The Ministry of Law and Justice deals with the management of the legal affairs, legislative activities and administration of justice through its three departments. `,
    },
    {
      logo: rti_logo,
      title: "Right to Information",
      link: "https://rti.gov.in/",
      description: `An initiative taken by Department of Personnel and Training, Ministry of Personnel, Public Grievances and Pensions to provide a– RTI  Portal Gateway to the citizens for quick search of information.`,
    },
    {
      logo: "https://ncsc.nic.in/upload/logo/logo.png",
      title: "First Information Report",
      link: "https://ncsc.nic.in/pages/display/135-how-to-file-a-police-fir-complaint-online",
      description:`FIR is a complaint lodged with the police by the victim of a cognizable offence or by someone on his or her behalf, but anyone can make such a report either orally or in writing to the police.`,
    },
    {
      logo: "https://www.indiacode.nic.in/image/final-logo_update.jpg",
      title: "India Code",
      link: "https://www.indiacode.nic.in/",
      description: `Digital Repository of all Laws: A system of laws for Communication. You may Browse Central Acts, 
      State Acts, 
      Repealed Acts
      Spent Acts, etc.`,
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
      description: `This e-interaction between lawyers and people would be through the video-conferencing infrastructure available at the CSCs.`,
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
      logo: crpc_logo,
      title: "Citizen Rights Protection Council",
      link: "https://www.crpc.in/",
      description: `Citizen Rights Protection Council (CRPC) is a civil rights’ group dedicated to using the legal system to protect and advance the civil and human rights in India.`,
    },
    {
      logo: cyber_logo,
      title: "National Cyber Crime Reporting Portal",
      link: "https://cybercrime.gov.in/",
      description: `An initiative of Government of India to facilitate victims/complainants to report cyber crime complaints online. This portal caters to complaints pertaining to cyber crimes only.`,
    },
  ];

  return (
    <div className="w-full">
      <CustNav />
      <div className="text-center text-text-black font-bold bg-white top-0 sticky z-10 border-b-1 py-6 border-l shadow-md"></div>
      <div className="px-6 py-6 justify-center flex-col flex-wrap grid lg:grid-cols-2 z-5 justify-items-center ">
        {data.map((item) => {
          return (
            <div key={item.title} className="p-3 px-3 py-3 ">
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
      {/* <GoogleTranslate /> */}
    </div>
  );
};

export default Resources;
