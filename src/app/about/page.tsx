import React from "react";
import Sidebar from "@/component/about/Sidebar";
import { Box, Typography } from "@mui/material";
import Lander from "@/component/about/Lander";
import EssentialMovers from "@/component/about/EssentialMovers";
import SecondUp from "@/component/about/SecondUp";
import Tuition from "@/component/about/Tuition";
import DressCode from "@/component/about/DressCode";

const About: React.FC = () => {
  return (
    <Box>
      <Sidebar />
      <Box id="section0" sx={{ height: "70vh", padding: "20px" }}>
        <Lander/>
      </Box>
      <Box id="section1" sx={{ height: "70vh", padding: "20px" }}>
        <EssentialMovers/>
      </Box>
      <Box  sx={{ height: "170vh", padding: "20px" }}>
        <SecondUp/>
      </Box>
      <Box id="section2" sx={{ height: "210vh", padding: "20px" }}>
        <Tuition/>
      </Box>
      <Box id="section3" sx={{ height: "100vh", padding: "20px" }}>
        <DressCode/>
      </Box>
    </Box>
  );
};

export default About;
