import React from "react";
import Sidebar from "@/component/about/Sidebar";
import { Box, Typography } from "@mui/material";
import IntroPage from "@/component/company/IntroPage";

const About: React.FC = () => {
  return (
    <Box>
      <Box id="section0" sx={{ height: "100vh", padding: "20px" }}>
        <IntroPage/>
      </Box>
      <Box id="section1" sx={{ height: "100vh", padding: "20px" }}>
      </Box>
      <Box id="section2" sx={{ height: "100vh", padding: "20px" }}>
      </Box>
      <Box id="section3" sx={{ height: "100vh", padding: "20px" }}>
      </Box>
    </Box>
  );
};

export default About;
