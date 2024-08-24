"use client";
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";

const EssentialMovers: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
        sx={{
          my: 4,
          "&::after": {
            content: '""',
            display: "block",
            height: "2px",
            width: "70%",
            backgroundColor: theme.palette.common.black,
            marginLeft: "16px",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: theme.typography.fontWeightBold }}
        >
          Essential Movers
        </Typography>
      </Box>

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
            src="/dancer-photos/babies-tay.jpeg"
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
            variant="h4"
            component="div"
            sx={{
              fontWeight: theme.typography.fontWeightBold,
              color: theme.palette.common.black,
              textAlign: "left",
            }}
          >
            Welcome To Our New Generation of Essential Movers!
          </Typography>

          <Typography
            variant="body1"
            component="div"
            sx={{
              fontWeight: theme.typography.fontWeightLight,
              color: theme.palette.common.black,
              textAlign: "left",
            }}
          >
            Essential Movers refers to our students ages 3 plus attending one to
            five hours of classes weekly.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: theme.palette.common.black,
              textAlign: "left",
              pt: 2,
              pb:3,
            }}
          >
            These students are exploring the world of dance and movement;
            receiving the building blocks of a quality technical dance
            education. Within the Essential Movers Program we have many genres
            and opportunities available to your dancer:
          </Typography>

          <Box
            sx={{
              backgroundColor: "#ffcf56",
              width: "90%",
              borderRadius: "8px", 
              padding: "16px",
              display: "flex",
              justifyContent: "center", 
              alignItems: "center", 
              textAlign: "center",
              mb: 2,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.common.black,
              }}
            >
              Saturday Morning Beginner Curriculum
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "#74a57f",
              width: "90%",
              borderRadius: "8px",
              padding: "16px", 
              display: "flex",
              justifyContent: "center", 
              alignItems: "center", 
              textAlign: "center", 
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.common.black,
              }}
            >
              Essential Elements of Dance Curriculum
            </Typography>
          </Box>

          <Typography
              variant="body1"
              sx={{
                pt:3,
                color: theme.palette.common.black,
              }}
            >
              These classes are taught by director, Samantha Zaleski. We affectionally refer to these students as our “Saturday Morning Beauties”
            </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EssentialMovers;
