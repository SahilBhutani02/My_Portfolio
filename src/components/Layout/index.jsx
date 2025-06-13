import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/index.jsx";
import "./index.css";

const Layout = () => {
  return (
    <div className="page">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
