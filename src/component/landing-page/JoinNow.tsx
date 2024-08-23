"use client";
import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";

const JoinNow: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();

  const handleRegisterClick = () => {
    router.push("/register");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 16px",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Typography
        variant="h2"
        component="div"
        sx={{
          fontWeight: theme.typography.fontWeightBold,
          color: theme.palette.common.black,
          mb: 2,
          textAlign: "center",
        }}
      >
        Ready To Start Your Dancer’s Journey?
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleRegisterClick}
        sx={{
            marginRight: 10,
          padding: "20px 30px",
          fontSize: "1.2rem",
        }}
      >
        Register Now
      </Button>
    </Box>
  );
};

export default JoinNow;
