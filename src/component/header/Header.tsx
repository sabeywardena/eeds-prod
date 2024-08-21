"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import theme from "@/theme";

const Header: React.FC = () => {
  const appBarStyle = {
    backgroundColor: "#fff",
    mt: 0,
    elevation: 0,
  };

  const linkStyle = {
    color: theme.palette.text.primary,
    textDecoration: "none",
    position: "relative",
    display: "inline-block",
    padding: "8px 16px",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "0%",
      height: "3px",
      backgroundColor: "black",
      transition: "width 0.3s ease",
    },
    "&:hover": {
      color: "black",
      "&::after": {
        width: "90%",
      },
    },
  };

  const registerLinkStyle = {
    ...linkStyle,
    color: "black",

    "&:hover": {
      color: "black",
      textDecoration: "none",
    },
    "&::after": {
      width: "90%",
    },
  };

  return (
    <Box mb={9}>
      <AppBar position="fixed" elevation={0} sx={appBarStyle}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box display="flex" alignItems="center" sx={{ flexGrow: 1, mt: 4 }}>
              <Box
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  ml: 5,
                  color: theme.palette.common.black,
                  textDecoration: "none",
                  fontWeight: theme.typography.fontWeightBold,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: theme.typography.fontWeightBold }}
                >
                  Essential Elements
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                sx={{ flexGrow: 1, justifyContent: "center", gap: 7 }}
              >
                <Box component="a" href="/about" sx={linkStyle}>
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{ fontWeight: theme.typography.fontWeightBold }}
                  >
                    About
                  </Typography>
                </Box>
                <Box component="a" href="/gallery" sx={linkStyle}>
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{ fontWeight: theme.typography.fontWeightBold }}
                  >
                    Gallery
                  </Typography>
                </Box>
                <Box component="a" href="/the-company" sx={linkStyle}>
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{ fontWeight: theme.typography.fontWeightBold }}
                  >
                    The Company
                  </Typography>
                </Box>
                <Box component="a" href="/schedules" sx={linkStyle}>
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{ fontWeight: theme.typography.fontWeightBold }}
                  >
                    Schedules
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginLeft: "auto" }}>
                <Box component="a" href="/register" sx={registerLinkStyle}>
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{ fontWeight: theme.typography.fontWeightBold }}
                  >
                    Register Now
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
