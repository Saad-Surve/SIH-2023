import ArticleCard from "./ArticleCard";
import { ScrollShadow } from "@nextui-org/react";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Headline 1",
      author: "John Doe",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, tenetur facere deserunt minima ratione itaque vitae beatae laborum qui eligendi iure atque ipsum obcaecati distinctio officiis architecto impedit labore dicta?",
      src: "/images/nyaaydoot.png",
      date: "18th Semptember, 2023",
    },
    {
      id: 2,
      title: "Headline 2",
      author: "John Doe",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, tenetur facere deserunt minima ratione itaque vitae beatae laborum qui eligendi iure atque ipsum obcaecati distinctio officiis architecto impedit labore dicta?",
      src: "/images/nyaaydoot.png",
      date: "19th Semptember, 2023",
    },
    {
      id: 3,
      title: "Headline 3",
      author: "John Doe",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, tenetur facere deserunt minima ratione itaque vitae beatae laborum qui eligendi iure atque ipsum obcaecati distinctio officiis architecto impedit labore dicta?",
      src: "/images/nyaaydoot.png",
      date: "19th Semptember, 2023",
    },
    {
      id: 4,
      title: "Headline 4",
      author: "John Doe",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, tenetur facere deserunt minima ratione itaque vitae beatae laborum qui eligendi iure atque ipsum obcaecati distinctio officiis architecto impedit labore dicta?",
      src: "/images/nyaaydoot.png",
      date: "19th Semptember, 2023",
    },
  ];

  return (
    <div className="flex flex-col gap-1 ">
      <div className="flex p-4 pb-2 font-bold ml-4">Articles</div>
      <ScrollShadow
        size={10}
        className=" h-[calc(100vh-18rem-1px)] overflow-y-scroll p-4 mr-4 pb-2 random"
      >
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            content={article.content}
            src={article.src}
            date={article.date}
            author={article.author}
          />
        ))}
      </ScrollShadow>
    </div>
  );
};

export default Articles;
