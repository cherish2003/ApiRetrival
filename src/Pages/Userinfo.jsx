import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const Userinfo = (props) => {
  const location = useLocation();
  const info = location.state;
  const [data, setData] = useState([]);

  const URL = `https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/users/${info.id}`;
  useEffect(() => {
    const getdata = async () => {
      const data = await axios.get(URL);
      setData(data.data);
    };
    getdata();
  }, []);
  // console.log(data);
  return (
    <div className="userInfo_page">
      <div className="userpic">
        <img src={data.avatar} />
      </div>
      <div className="user_info">
        <div className="user_name"> Name :{data.name}</div>
        <div className="created_date">Created at :{data.createdAt}</div>
        <div className="user_about">About :{data.about}</div>
        <div className="user_email">Email :{data.email}</div>
      </div>
    </div>
  );
};
