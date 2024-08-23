import React from "react";
import Sidebar from "@/component/about/Sidebar";
import { Box, Typography } from "@mui/material";
import Lander from "@/component/about/Lander";

const About: React.FC = () => {
  return (
    <Box>
      <Sidebar />
      <Box id="section0" sx={{ height: "100vh", padding: "20px" }}>
        <Lander/>
      </Box>
      <Box id="section1" sx={{ height: "100vh", padding: "20px" }}>
        <p>Content for Section 2...</p>
      </Box>
      <Box id="section2" sx={{ height: "100vh", padding: "20px" }}>
        <p>Content for Section 3...</p>
      </Box>
      <Box id="section3" sx={{ height: "100vh", padding: "20px" }}>
        <p>Content for Section 3...</p>
      </Box>
    </Box>
  );
};

export default About;
