import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const Postinfo = (props) => {
  const location = useLocation();
  const { imgsrc, title, des, createdDate } = location.state;
  
  return (
    <div className="userInfo_page">
      <div className="userpic">
        <img src={imgsrc} />
      </div>
      <div className="user_info">
        <div className="user_name"> Title :{title}</div>
        <div className="created_date">Created at :{createdDate}</div>
        <div className="post_des">About :{des}</div>
      </div>
    </div>
  );
};
