import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Usercard = ({ profilepic, username, userid }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="img">
          <img src={profilepic} />
        </div>
        <div className="cardContent">
          <h3>{username}</h3>
        </div>
      </div>
      <div className="sci">
        <li>
          <Link to={"/Userinfo"} state={{ id: userid }}>
            Know More
          </Link>
        </li>
      </div>
    </div>
  );
};
