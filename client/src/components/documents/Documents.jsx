import React from "react";
import Card from "../UI/Card";
import Navbar from "../UI/navbar";
const Documents = () => {
  const data = [
    {
      title: "PAN CARD",
      description: "Pan card is a unique identification number assigned by the government to every individual resident of India.",
      link: "https://uidai.gov.in/",
      image: "/images/nyaaydoot.png"
    },
    {
      title: "PAN CARD",
      description: "Pan card is a unique identification number assigned by the government to every individual resident of India.",
      link: "https://uidai.gov.in/",
      image: "/images/nyaaydoot.png"
    },
    {
      title: "PAN CARD",
      description: "Pan card is a unique identification number assigned by the government to every individual resident of India.",
      link: "https://uidai.gov.in/",
      image: "/images/nyaaydoot.png"
    },{
      title: "PAN CARD",
      description: "Pan card is a unique identification number assigned by the government to every individual resident of India.",
      link: "https://uidai.gov.in/",
      image: "/images/nyaaydoot.png"
    },{
      title: "PAN CARD",
      description: "Pan card is a unique identification number assigned by the government to every individual resident of India.",
      link: "https://uidai.gov.in/",
      image: "/images/nyaaydoot.png"
    },{
      title: "PAN CARD",
      description: "Pan card is a unique identification number assigned by the government to every individual resident of India.",
      link: "https://uidai.gov.in/",
      image: "/images/nyaaydoot.png"
    },{
      title: "PAN CARD",
      description: "Pan card is a unique identification number assigned by the government to every individual resident of India.",
      link: "https://uidai.gov.in/",
      image: "/images/nyaaydoot.png"
    },{
      title: "PAN CARD",
      description: "Pan card is a unique identification number assigned by the government to every individual resident of India.",
      link: "https://uidai.gov.in/",
      image: "/images/nyaaydoot.png"
    },{
      title: "PAN CARD",
      description: "Pan card is a unique identification number assigned by the government to every individual resident of India.",
      link: "https://uidai.gov.in/",
      image: "/images/nyaaydoot.png"
    },
  ]
  return <div className="flex flex-col">
    <Navbar />                   
    <div className=" p-10 h-min flex justify-center flex-col gap-6 flex-wrap grid grid-cols-3">
    {data.map((item,index )=>(
      <Card 
      key={index}
      title={item.title}
      description={item.description}
      link={item.link}
      image={item.image}/>
    ))}
  </div>;
  </div>
};

export default Documents;
