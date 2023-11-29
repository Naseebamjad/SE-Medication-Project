import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { Configuration } from "../config"

const ArticleDetail = () => {
  const config = new Configuration()
  const { id } = useParams(); 
  const [author_id, setAuthor_id] = useState();
  const [article, setArticle] = useState([]);
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const url = `${config.baseUrl}/articles/${id}`
  const author_url = `/doctors/${author_id}`
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: url,
          headers: {
            'Authorization': 'Bearer '+localStorage.getItem("userToken"),
          }
        });
        setArticle(response.data);
        setDate(formatDate(response.data.updated_at))
        setAuthor_id(response.data.author_id)
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
  },[navigate, url]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
        <p>{article.title}</p> 
        <p2>{date}</p2>
        <div>
            {article.content}
        </div>
        <a href={author_url}>Go to Author's profile</a>
    </div>
  );
};

export default ArticleDetail;