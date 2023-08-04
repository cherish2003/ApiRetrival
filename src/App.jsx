import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import { UsersPage } from "./Pages/UsersPage";
import { PostsPage } from "./Pages/PostsPage";

function App() {
  const [Userpage, setUserpage] = useState(true);
  return (
    <>
      <div className="Mainpage">
        <div className="Togglediv">
          <div
            className="SelectDiv"
            onClick={() => {
              setUserpage(true);
              // setPostpage(false);
            }}
          >
            Users
          </div>
          <div
            className="SelectDiv"
            onClick={() => {
              setUserpage(false);
            }}
          >
            Posts
          </div>
        </div>

        <div className="Pages">
          {Userpage && <UsersPage />}
          {Userpage || <PostsPage />}
        </div>
      </div>
    </>
  );
}

export default App;
