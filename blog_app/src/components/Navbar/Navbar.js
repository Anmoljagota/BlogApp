import React from "react";
import Styles from "./Navbar.module.css";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import {Link} from "react-router-dom"
import Mail from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
const Navbar = () => {
  const Icons = styled(Box)(({ theme }) => ({
    // background:"white"
    display: "flex",
    alignItems: "center",
    gap: "30px",
    marginRight: "20px",
  }));
  return (
    <div className={Styles.parent}>
      <Box className={`${Styles.innerparent} ${Styles.flex}`}>
        <h3 className={Styles.logo}>Fun Fact</h3>
        <input
          type="text"
          placeholder="Search...."
          className={`${Styles.input}`}
        />

        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail style={{ color: "white" }} />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications style={{ color: "white" }} />
          </Badge>
     <Link to="/register">

            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              style={{ width: "30px", height: "30px" }}
              />
              </Link>
       
        </Icons>
      </Box>
    </div>
  );
};

export default Navbar;
