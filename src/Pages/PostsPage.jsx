import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Postcard } from "../Components/Postcard";

export const PostsPage = () => {
  const [data, setData] = useState([]);
  const URL = "https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/posts";
  useEffect(() => {
    const getdata = async () => {
      const data = await axios.get(URL);
      console.log(data.data);
      setData(data.data);
    };
    getdata();
  }, []);
  // console.log(data[0]);
  return (
    <>
      <div className="add_new_post">
        <Link to={"/NewPost"}>Add new post</Link>
      </div>
      {/* <Postcard data={data} /> */}
      <div className="post_container">
        {data.map((postdata, index) => {
          console.log(postdata);
          return (
            <Postcard
              postpic={postdata.cover}
              title={postdata.title}
              info={postdata.description}
              date={postdata.createdAt}
              key={index}
            />
          );
        }).reverse()}
      </div>
    </>
  );
};
