import DocumentCard from "./DocumentCard";
import Navbar from "../UI/navbar";
import "./Documents.css";

const Documents = () => {
  const data = [
    {
      title: "Aadhar Card",
      link: "https://uidai.gov.in/",
      image: "../../src/assets/Aadhaar.png",
    },
    {
      title: "PAN CARD",
      link: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",
      image: "../../src/assets/pan.png",
    },
    {
      title: "Voter ID Card",
      link: "https://www.nvsp.in/",
      image: "../../src/assets/voterid.webp",
    },
    {
      title: "Passport",
      link: "https://portal2.passportindia.gov.in/",
      image: "../../src/assets/passport.jpeg",
    },
    {
      title: "Driving License",
      link: "https://parivahan.gov.in/parivahan/",
      image: "../../src/assets/driver-licence.jpg",
    },
    {
      title: "Birth Certificate",
      link: "https://crsorgi.gov.in/web/index.php/auth/login",
      image: "../../src/assets/birth-certificate.png",
    },
    {
      title: "Marriage Certificate",
      link: "https://crsorgi.gov.in/web/index.php/auth/login",
      image: "../../src/assets/marriage-certificate.jpg",
    },
    {
      title: "Divorce Certificate",
      link: "https://crsorgi.gov.in/web/index.php/auth/login",
      image: "../../src/assets/divorce-certificate.webp",
    },
    {
      title: "Police Clearance Certficate",
      link: "https://passportindia.gov.in/AppOnlineProject/online/pccOnlineApp",
      image: "../../src/assets/police-clearance.jpg",
    },
    {
      title: "Income Tax Returns",
      link: "https://www.incometax.gov.in/iec/foportal/help/huf/how-to-file-tax-returns",
      image: "../../src/assets/income-tax.jpg",
    },
    {
      title: "GST Returns",
      link: "https://www.gst.gov.in/",
      image: "../../src/assets/GST.jpg",
    },
    {
      title: "Import-Export Code",
      link: "https://www.dgft.gov.in/",
      image: "../../src/assets/import-export.jpeg",
    },
  ];
  return (
    <div className="w-full">
      <Navbar />
      <div className="p-10 justify-center flex-col gap-6 flex-wrap grid grid-cols-3 z-5">
        {data.map((item, index) => (
          <DocumentCard
            key={index}
            title={item.title}
            link={item.link}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Documents;
