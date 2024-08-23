"use client";
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";

const ThreeImagesWithText: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Image Container */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          overflow: "hidden",
          gap: 1,
        }}
      >
        {/* First Image */}
        <Box
          sx={{
            width: "400px", // Adjust the width for smaller size
            height: "400px", // Adjust the height for smaller size
            position: "relative", // Required for Image component's layout="fill"
          }}
        >
          <Image
            src="/dancer-photos/leap.jpeg"
            alt="Image 1 Description"
            layout="fill"
            objectFit="cover"
          />
        </Box>

        {/* Second Image */}
        <Box
          sx={{
            width: "400px", // Adjust the width for smaller size
            height: "400px", // Adjust the height for smaller size
            position: "relative", // Required for Image component's layout="fill"
          }}
        >
          <Image
            src="/dancer-photos/boys-breakdancing.jpeg"
            alt="Image 2 Description"
            layout="fill"
            objectFit="cover"
          />
        </Box>

        {/* Third Image */}
        <Box
          sx={{
            width: "400px", // Adjust the width for smaller size
            height: "400px", // Adjust the height for smaller size
            position: "relative", // Required for Image component's layout="fill"
          }}
        >
          <Image
            src="/dancer-photos/ela.jpeg"
            alt="Image 3 Description"
            layout="fill"
            objectFit="cover"
          />
        </Box>
      </Box>

      {/* Text Underneath */}
      <Box
        sx={{
          textAlign: "center",
          padding: "20px 16px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: theme.typography.fontWeightBold,
            color: theme.palette.common.black,
            mb: 2,
          }}
        >
          AT ESSENTIAL ELEMENTS WE ARE FAMILY.
        </Typography>
      </Box>
    </Box>
  );
};

export default ThreeImagesWithText;
