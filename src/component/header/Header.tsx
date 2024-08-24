"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import theme from "@/theme";
import { useState, useEffect } from "react";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isTop, setIsTop] = useState(true);
  const [inSectionOne, setInSectionOne] = useState(true);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionHeight = window.innerHeight;

      if (pathname === "/" && scrollY < sectionHeight) {
        setIsTop(true);
        setInSectionOne(true);
      } else {
        setIsTop(false);
        setInSectionOne(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const appBarStyle = {
    backgroundColor:
      pathname === "/"
        ? isTop
          ? inSectionOne
            ? "black"
            : "transparent"
          : "#fff"
        : "#fff",
    mt: 0,
    elevation: 0,
  };

  const getLinkStyle = (path: string, color: string) => ({
    color:
      isTop && pathname === "/"
        ? inSectionOne
          ? "#fff"
          : "#000"
        : pathname === path
        ? color
        : theme.palette.text.primary,
    textDecoration: "none",
    position: "relative",
    display: "inline-block",
    padding: "8px 16px",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: pathname === path ? "100%" : "0%",
      height: "3px",
      backgroundColor:
        isTop && pathname === "/"
          ? inSectionOne
            ? "#fff"
            : "#000"
          : pathname === path
          ? color
          : "black",
      transition: "width 0.3s ease, background-color 0.3s ease",
    },
    "&:hover": {
      color: color,
      "&::after": {
        width: "100%",
        backgroundColor: color,
      },
    },
  });

  const registerLinkStyle = {
    ...getLinkStyle("", "black"),
    "&:hover": {
      color: "black",
      textDecoration: "none",
      "&::after": {
        backgroundColor: "black",
      },
    },
    "&::after": {
      width: "100%",
    },
  };

  return (
    <Box mb={9}>
      <AppBar position="fixed" elevation={0} sx={appBarStyle}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              display="flex"
              alignItems="center"
              sx={{ flexGrow: 1, mt: 4, mb: 2 }}
            >
              <Box
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  ml: 5,
                  color:
                    isTop && pathname === "/"
                      ? "#fff"
                      : theme.palette.common.black,
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
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                  gap: 7,
                }}
              >
                <Box
                  component="a"
                  href="/about"
                  sx={getLinkStyle("/about", "#0075c4")}
                >
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{ fontWeight: theme.typography.fontWeightBold }}
                  >
                    About
                  </Typography>
                </Box>
                <Box
                  component="a"
                  href="/gallery"
                  sx={getLinkStyle("/gallery", "#ffcf56")}
                >
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{ fontWeight: theme.typography.fontWeightBold }}
                  >
                    Gallery
                  </Typography>
                </Box>
                <Box
                  component="a"
                  href="/the-company"
                  sx={getLinkStyle("/the-company", "#74a57f")}
                >
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{ fontWeight: theme.typography.fontWeightBold }}
                  >
                    The Company
                  </Typography>
                </Box>
                <Box
                  component="a"
                  href="/schedules"
                  sx={getLinkStyle("/schedules", "#5e503f")}
                >
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{ fontWeight: theme.typography.fontWeightBold }}
                  >
                    Schedules
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{ display: { xs: "none", md: "flex" }, marginLeft: "auto" }}
              >
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

              {/* Hamburger Menu for Small Screens */}
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  sx={{
                    color:
                      isTop && pathname === "/"
                        ? inSectionOne
                          ? "#fff"
                          : "#000"
                        : "#000",
                  }}
                >
                  <MenuIcon />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                >
                  <MenuItem
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">
                      <Box
                        component="a"
                        href="/about"
                        sx={{
                          ...getLinkStyle("/about", "#0075c4"),
                          color: theme.palette.primary.main,
                        }}
                      >
                        About
                      </Box>
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">
                      <Box
                        component="a"
                        href="/gallery"
                        sx={{
                          ...getLinkStyle("/gallery", "#ffcf56"),
                          color: theme.palette.primary.main,
                        }}
                      >
                        Gallery
                      </Box>
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">
                      <Box
                        component="a"
                        href="/the-company"
                        sx={{
                          ...getLinkStyle("/the-company", "#74a57f"),
                          color: theme.palette.primary.main,
                        }}
                      >
                        The Company
                      </Box>
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    sx={{
                      color: theme.palette.primary.main,
                    }}
                  >
                    <Typography textAlign="center">
                      <Box
                        component="a"
                        href="/schedules"
                        sx={{
                          ...getLinkStyle("/schedules", "#5e503f"),
                          color: theme.palette.primary.main,
                        }}
                      >
                        Schedules
                      </Box>
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">
                      <Box
                        component="a"
                        href="/register"
                        sx={{
                          ...registerLinkStyle,
                          color: theme.palette.primary.main
                        }}
                      >
                        Register Now
                      </Box>
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
