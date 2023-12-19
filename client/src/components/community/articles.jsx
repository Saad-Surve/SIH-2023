import ArticleCard from "./ArticleCard";
import { ScrollShadow, Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import axios from "axios";
import ServerUrl from "../../constants";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        `${ServerUrl}/api/community/getArticles`
      );
      setArticles(response.data.reverse());
    } catch (error) {
      console.error("Error fetching Articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleDataChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${ServerUrl}/api/search/searchArticles`,
        {
          headline: searchTerm,
        }
      );
      setArticles(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex flex-col gap-1 ">
      <div className="w-full flex items-center justify-center">
        <div className="flex items-center p-4 pb-2 font-bold ml-4">
          Articles
        </div>
        <form className="w-full flex gap-3" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search"
            className="w-3/5 h-10 p-4 bg-gray-100 text-text-gray rounded-xl border-inherit focus:outline-none text-base"
            onChange={handleDataChange}
          />
          <Button color="primary" className="rounded-full" type="submit">
            <Icon icon="eva:search-fill" />
          </Button>
        </form>
      </div>
      <ScrollShadow
        size={10}
        className=" h-[calc(100vh-18rem-1px)] overflow-y-scroll p-4 mr-4 pb-2 random"
      >
        {console.log(articles)}
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.headline}
            content={article.content}
            src={article.thumbnail}
            date={article.postedOn}
            author={article.name}
          />
        ))}
      </ScrollShadow>
    </div>
  );
};

export default Articles;
