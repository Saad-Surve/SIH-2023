import DocumentCard from "./DocumentCard";
import Navbar from "../UI/navbar";
import "./Documents.css";

const Documents = () => {
  const data = [
    {
      title: "PAN CARD",
      link: "https://uidai.gov.in/",
      image: "/images/nyaaydoot.png",
    },
    {
      title: "PAN CARD",
      link: "https://uidai.gov.in/",
      image: "/images/nyaaydoot.png",
    },
    {
      title: "PAN CARD",
      link: "https://uidai.gov.in/",
      image: "/images/nyaaydoot.png",
    },
    {
      title: "PAN CARD",
      link: "https://uidai.gov.in/",
      image: "/images/nyaaydoot.png",
    },
    {
      title: "PAN CARD",
      link: "https://uidai.gov.in/",
      image: "/images/nyaaydoot.png",
    },
    {
      title: "PAN CARD",
      link: "https://uidai.gov.in/",
      image: "/images/nyaaydoot.png",
    },
    {
      title: "PAN CARD",
      link: "https://uidai.gov.in/",
      image: "/images/nyaaydoot.png",
    },
    {
      title: "PAN CARD",
      link: "https://uidai.gov.in/",
      image: "/images/nyaaydoot.png",
    },
    {
      title: "PAN CARD",
      link: "https://uidai.gov.in/",
      image: "/images/nyaaydoot.png",
    },
    {
      title: "PAN CARD",
      link: "https://uidai.gov.in/",
      image: "/images/nyaaydoot.png",
    },
    {
      title: "PAN CARD",
      link: "https://uidai.gov.in/",
      image: "/images/nyaaydoot.png",
    },
    {
      title: "PAN CARD",
      link: "https://uidai.gov.in/",
      image: "/images/nyaaydoot.png",
    },
  ];
  return (
    <div className="w-full">
      <Navbar />
      <div className="p-10 justify-center flex-col gap-6 flex-wrap grid grid-cols-3 z-5 ">
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
