import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import ArticleCard from "./common/articleCard";
import { Configuration } from "../config"

const Articles = () => {
  const config = new Configuration()
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: `${config.baseUrl}/articles`,
          headers: {
            'Authorization': 'Bearer '+localStorage.getItem("userToken"),
          }
        });
        setArticles(response.data);
        console.log(response.data)
      } catch (err) {
        if(err.message === "Request failed with status code 403"){
          navigate("/login");
        }
        setError('Error fetching data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  },[navigate]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-white text-articles">
      <p className="text-center font-worksans text-caption text-18 font-bold leading-21 tracking-wider">
        Better information, Better health
      </p>
      <p className="text-center font-yesevaone text-display2 lg:text-3xl text-xl font-bold leading-37 tracking-normal text-custom">
        News
      </p>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-start lg:w-4/5">
          {articles.map(article => (
            <ArticleCard id={article.id} date={article.updated_at} author={article.author_name} title={article.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
