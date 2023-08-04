import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export const NewPost = () => {
  const [posttitle, settitle] = useState();
  const [des, setDes] = useState();
  const [gotRes, setGotRes] = useState(false);
  //
  const SendData = async () => {
    try {
      const url = "https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/posts";
      const data = { title: posttitle, description: des };
      const config = { "content-type": "application/json" };

      const response = await axios.post(url, data, config);

      console.log(response.data);
      if (response.data) {
        setGotRes(true);
      }
    } catch (error) {
      console.log(error);
      setGotRes(false);
    }
    // console.log(title, des);
  };
  return (
    <div className="newpost_container">
      <div className="newpost_head">Create New Post</div>
      <div className="input_div">
        <label>Title</label>

        <input
          type="text"
          name=""
          id=""
          onChange={(e) => settitle(e.target.value)}
        />

        <label>Description</label>
        <input
          type="text"
          src=""
          alt=""
          onChange={(e) => setDes(e.target.value)}
        />
        {/* <img src={postpic} alt="" /> */}
      </div>
      <button type="submit" onClick={() => SendData()}>
        Create
      </button>
      <Link></Link>
      {gotRes && (
        <p className="newpost_head">
          New post created sucessfully go to posts page to
          see the new lastest post you created
          <Link to={"/"}>Go to Home</Link>
        </p>
      )}
    </div>
  );
};
