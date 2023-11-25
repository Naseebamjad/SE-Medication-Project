import React from "react";
import { useNavigate } from "react-router-dom";
import articleImg from "../../Images/article.png";
const ArticleCard = ({id, date, author, title}) => {
  const navigate = useNavigate();
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
  };
  const handleCardClick = () => {
    navigate(`/articles/${encodeURIComponent(id)}`);
  };
  const formattedDate = formatDate(date);
  return (
    <div className="flex lg:w-1/3  w-11/12 cursor-pointer mx-5 lg:mr-10 my-3" onClick={handleCardClick}>
      <img
        className="mr-4"
        width="160px"
        height="154px"
        src={articleImg}
        alt=""
      />
      <div className="flex flex-col justify-center">
        <div>
          <p className="text-left font-worksans text-sm text-14 font-normal tracking-normal">
            {formattedDate} | By {author}
          </p>
          <p className="text-black">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;