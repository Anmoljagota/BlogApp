import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import HttpsIcon from "@mui/icons-material/Https";
const CommonUser = ({ inputfield }) => {
  const myinputs = new Array(inputfield).fill("-");
  const userdata = [
    {
      details: "Your Name",
      icon: (
        <AccountCircleIcon
          style={{ marginTop: "30px", padding: "5px", fontSize: "20px" }}
        />
      ),
    },
    {
      details: "Your Email",
      icon: (
        <EmailIcon
          style={{ marginTop: "30px", padding: "5px", fontSize: "20px" }}
        />
      ),
    },
    {
      details: "Your Phone",
      icon: (
        <PermPhoneMsgIcon
          style={{ marginTop: "30px", padding: "5px", fontSize: "20px" }}
        />
      ),
    },
    {
      details: "Your Password",
      icon: (
        <HttpsIcon
          style={{ marginTop: "30px", padding: "5px", fontSize: "20px" }}
        />
      ),
    },
    {
      details: "Your Confirm Password",
      icon: (
        <HttpsIcon
          style={{ marginTop: "30px", padding: "5px", fontSize: "20px" }}
        />
      ),
    },
  ];
  return (
    <div>
      <Box
        display="flex"
        boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
        width="50%"
        margin="auto"
        height="70vh"
        padding="10px"
        marginTop="50px"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="80%"
          margin="auto"
          height="100%"
        >
          <Box width="50%" height="100%" textAlign="left">
            <h2>Sign up</h2>
            {myinputs.map((items, i) => (
              <>
                {userdata[i].icon}

                <TextField
                  id="standard-basic"
                  label={userdata[i].details}
                  variant="standard"
                  style={{ width: "80%", padding: "5px", marginTop: "10px" }}
                />
                <br />
              </>
            ))}
          </Box>
          <img
            height="180px"
            width="200px"
            src="https://thumbs.dreamstime.com/z/young-woman-works-laptops-home-freelancer-girl-self-employed-online-education-distance-learning-concept-video-call-195563818.jpg"
            alt="something wrong with image"
          />
        </Box>
      </Box>
    </div>
  );
};

export default CommonUser;
