"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Container } from "@mui/material";
import theme from "@/theme";
import SocialSidebar from "@/component/landing-page/SocialSidebar";
import AboutUsSection from "@/component/landing-page/AboutUsSection";
import MeetStaff from "@/component/landing-page/MeetStaff";
import Info from "@/component/landing-page/Info";
import JoinNow from "@/component/landing-page/JoinNow";

const sections = [
  { id: "section1", title: "Welcome to Our Website" },
  { id: "section2", title: "About Us" },
  { id: "section3", title: "Services" },
  { id: "section4", title: "Portfolio" },
  { id: "section5", title: "Contact Us" },
];

const LandingPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>("section1");

  const handleScroll = () => {
    const scrollY = window.scrollY;

    const newSection = sections.find((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        );
      }
      return false;
    });

    if (newSection) {
      setCurrentSection(newSection.id);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sidebarColor = currentSection === "section1" ? "white" : "black";

  return (
    <>
      <SocialSidebar color={sidebarColor} />
      <Box
        id="section1"
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundImage: "url(/dancer-photos/harper-landing.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          margin: 0,
          padding: 0,
          color: "white",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          textAlign: "left",
          paddingLeft: "5%",
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            component="div"
            sx={{
              fontWeight: theme.typography.fontWeightBold,
              color: theme.palette.common.white,
              textAlign: "left",
            }}
          >
            A<br />
            Contemporary
            <br />
            Dance
            <br />
            Experience.
            <br />
          </Typography>
        </Container>
      </Box>

      <Box
        id="section2"
        sx={{
          width: "100vw",
          height: "100vh",
          margin: 0,
          padding: 0,
          color: "white",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          textAlign: "left",
          paddingLeft: "5%",
        }}
      >
        <AboutUsSection/>
      </Box>

      <Box
        id="section3"
        sx={{
          width: "100vw",
          height: "100vh",
          margin: 0,
          padding: 0,
          color: "white",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          textAlign: "left",
          paddingLeft: "5%",
        }}
      >
        <Container maxWidth="xl">
          <MeetStaff/>
        </Container>
      </Box>

      <Box
        id="section4"
        sx={{
          width: "100vw",
          height: "100vh",
          margin: 0,
          padding: 0,
          color: "white",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          textAlign: "left",
          paddingLeft: "5%",
        }}
      >
        <Container maxWidth="xl">
          <Info/>
        </Container>
      </Box>

      <Box
        id="section5"
        sx={{
          width: "100vw",
          height: "100vh",
          margin: 0,
          padding: 0,
          color: "white",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          textAlign: "left",
          paddingLeft: "5%",
        }}
      >
        <Container maxWidth="xl">
          <JoinNow/>
        </Container>
      </Box>
    </>
  );
};

export default LandingPage;
