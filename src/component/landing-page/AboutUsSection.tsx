import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import theme from "@/theme";

const AboutUsSection: React.FC = () => {
  return (
    <Box
      id="section2"
      sx={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        color: "white",
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
        textAlign: "left",
        paddingLeft: "5%",
        paddingRight: "5%", 
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row", 
            alignItems: "flex-start", 
            justifyContent: "space-between", 
          }}
        >
          <Box
            sx={{
              flex: 1, 
              mr: 2, 
            }}
          >
            <Typography
              variant="h2"
              component="div"
              sx={{
                fontWeight: theme.typography.fontWeightBold,
                color: theme.palette.common.black,
                textAlign: "left",
              }}
            >
              WELCOME TO
              <br />
              ESSENTIAL ELEMENTS
              <br />
              DANCE STUDIO
              <br />
            </Typography>
            <Typography
              variant="h4"
              component="div"
              sx={{
                fontWeight: theme.typography.fontWeightMedium,
                color: theme.palette.text.primary,
                textAlign: "left",
              }}
            >
              SEASON 12 STARTS SEPTEMBER 12
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.common.black,
                textAlign: "left",
              }}
            >
              Essential Elements continues to proudly provide
              <br />
              personalized attention and education to dancers of all ages
              <br /> and levels.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 3,
              }}
            >
              <LocationOnIcon sx={{ fontSize: 40, mr: 1, color: "black" }} />
              <Typography
                variant="body1"
                sx={{
                  color: "black",
                }}
              >
                82 Bethany Rd #7, Hazlet, NJ 07730
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              flexShrink: 0, 
              pr: 15,
            }}
          >
            <Image
              src="/dancer-photos/me-table.jpeg"
              alt="Description of the image"
              width={400} 
              height={400} 
              layout="intrinsic" 
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUsSection;
