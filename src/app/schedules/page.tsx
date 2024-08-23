"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const FallSchedule: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 10,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          marginBottom: "20px",
          mt: "20px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Schedules
      </Typography>
      {/* First Image */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: "100vw",
          mb: 2,
        }}
      >
        <Image
          src="/schedules/earth-sch.jpeg"
          alt="Fall Schedule 1"
          layout="fill"
          objectFit="contain" // Changed to contain
        />
      </Box>

      {/* Second Image */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Image
          src="/schedules/sky-sch.jpeg"
          alt="Fall Schedule 2"
          layout="fill"
          objectFit="contain" // Changed to contain
        />
      </Box>
    </Box>
  );
};

export default FallSchedule;
