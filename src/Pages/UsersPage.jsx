import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Usercard } from "../Components/Usercard";

export const UsersPage = () => {
  const [data, setData] = useState([]);

  const URL = "https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/users";
  useEffect(() => {
    const getdata = async () => {
      const data = await axios.get(URL);
      setData(data.data);
    };
    getdata();
  }, []);

  return (
    <div className="container">
      {data.map((userdata, index) => {
        return (
          <Usercard
            profilepic={userdata.avatar}
            username={userdata.name}
            userid={userdata.id}
            key={index}
          />
        );
      })}
    </div>
  );
};
