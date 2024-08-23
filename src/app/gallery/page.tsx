"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

// Updated positions for images
const positions = [
  { src: "/dancer-photos/mel-jump.jpeg", gridColumn: "3 / span 2", gridRow: "2 / span 2", width: "350px", height: "450px" },
  { src: "/dancer-photos/harper-handstand.jpeg", gridColumn: "4 / span 3", gridRow: "1 / span 3", width: "350px", height: "350px" },
  { src: "/dancer-photos/leap.jpeg", gridColumn: "2 / span 2", gridRow: "1 / span 1", width: "350px", height: "350px" },
  { src: "/dancer-photos/firebird.png", gridColumn: "5 / span 2", gridRow: "2 / span 2", width: "350px", height: "450px" },
  { src: "/dancer-photos/ela-ball.JPEG", gridColumn: "2 / span 2", gridRow: "4 / span 1", width: "350px", height: "350px" },
  { src: "/dancer-photos/me-table.jpeg", gridColumn: "6 / span 2", gridRow: "4 / span 1", width: "350px", height: "350px" },
  { src: "/dancer-photos/harper-landing.png", gridColumn: "6 / span 1", gridRow: "1 / span 2", width: "350px", height: "350px" },
  // Add more image positions here
];

const Gallery: React.FC = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        width: "100%",
        height: "100vh",
        overflowY: "auto", // Allow vertical scrolling if necessary
      }}
    >
      <Typography
        variant="h2"
        sx={{
          marginBottom: "20px",
          mt: '20px',
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        The Gallery
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gridTemplateRows: "repeat(auto-fill, minmax(200px, auto))",
          gap: 1,
        }}
      >
        {positions.map((image, index) => (
          <Box
            key={index}
            sx={{
              gridColumn: image.gridColumn,
              gridRow: image.gridRow,
              position: "relative",
              width: image.width,
              height: image.height,
              overflow: "hidden",
              borderRadius: "8px",
              boxShadow: 2,
            }}
          >
            <Image
              src={image.src}
              alt={`Gallery Image ${index}`}
              layout="fill"
              objectFit="cover"
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Gallery;
