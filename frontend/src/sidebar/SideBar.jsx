import { StyledSideBar } from "./SideBar.styled";
import { useSelector, useDispatch } from "react-redux";
import { setSideBarStatus } from "./site.js";
import { BiArrowFromLeft, BiHeart } from "react-icons/bi";
import { MdOutlineVideocam } from "react-icons/md";
import SideBarList from "./SideBarList";
import Search from "./Search";
import { Box } from "@mui/material";
import { useTheme } from "@/context/ThemeProvider";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const SideBar = ({ mySize }) => {
  const { sideBarStatus } = useSelector((state) => state.site);
  console.log(sideBarStatus);
  const dispatch = useDispatch();
  const { theme, changeTheme } = useTheme();
  const res = useMediaQuery("(min-width:1199px)");

  return (
    <StyledSideBar>
      <div
        className={`sidebar-box ${sideBarStatus && res ? "side-open" : ""}`}
        style={{ color: theme === "white" ? "white" : "black" }}
      >
        <div className="list-title">
          <h1>Followed Channels</h1>
          <div
            className="title-icon"
            onClick={() => {
              dispatch(setSideBarStatus(!sideBarStatus));
            }}
          >
            <BiArrowFromLeft />
          </div>
          <div className="followed">
            <BiHeart />
          </div>
        </div>
        <SideBarList />

        <div className="list-title">
          <h1>Recommended Channels</h1>
          <div className="camera">
            <MdOutlineVideocam />
          </div>
        </div>
        <SideBarList />
        <div className="side-search">
          <Search placeholder={"Search to Add Friends"} />
        </div>
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
