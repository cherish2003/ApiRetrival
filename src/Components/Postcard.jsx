import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Postcard = ({ postpic, title, info, date }) => {
  return (
    <div className="post_card ">
      <div className="post_img">
        <img src={postpic} alt="" />
      </div>
      <div className="post_info">
        <div className="post_title">
          <Link
            to={"/Postsinfo"}
            state={{
              imgsrc: postpic,
              title: title,
              des: info,
              createdDate: date,
            }}
          >
            Title: {title}
          </Link>
        </div>
      </div>
    </div>
  );
};
