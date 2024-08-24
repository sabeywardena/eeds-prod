"use client";
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import theme from "@/theme";

const AboutUsSection: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        color: "white",
        display: "flex",
        justifyContent: "center",
        textAlign: "left",
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingTop: "5%",
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
              flexShrink: 0,
              pr: 5,
            }}
          >
            <Image
              src="/dancer-photos/company/action-shot-company.jpeg"
              alt="Description of the image"
              width={550}
              height={550}
              layout="intrinsic"
            />
          </Box>
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
              The Mockingbird Company
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.common.black,
                textAlign: "left",
                pt: 5,
              }}
            >
              Our competitive company is celebrated for pushing artistic
              boundaries <br/> 
              while nurturing the talents of our dancers. We are
              deeply committed to not only advancing <br/>
               the art of dance but also
              fostering a strong sense of family and community.
              <br/> At The
              Mockingbird Company, we believe in the power of dance to bring
              people together,<br/> and we pride ourselves on our dedication to
              service and support within our local community. <br/> 
              Join us in our
              journey to inspire and uplift through the art of dance, where
              excellence meets compassion.
            </Typography>
          </Box>
        </Box>
        <Typography
              variant="h2"
              component="div"
              sx={{
                pt: 5,
                fontWeight: theme.typography.fontWeightBold,
                color: theme.palette.common.black,
                textAlign: "center",
                pr:15,
              }}
            >
              Come Back Soon for More Information!
            </Typography>
      </Container>
    </Box>
  );
};

export default AboutUsSection;
