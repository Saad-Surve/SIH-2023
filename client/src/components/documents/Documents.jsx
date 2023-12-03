import DocumentCard from "./Card";
import Navbar from "../UI/navbar";
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
  ];
  return (
    <div className="w-full">
      <Navbar />
      <div className="p-10 overflow-y-scroll h-screen justify-center flex-col gap-6 flex-wrap grid grid-cols-3 scrollbar-hide">
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
