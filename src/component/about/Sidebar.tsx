"use client";
import React, { useState } from "react";
import { Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the sidebar after navigation
  };

  const sections = [
    { id: "section1", label: "Essential Movers" },
    { id: "section2", label: "Tuition" },
    { id: "section3", label: "Dress Code" },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        top: "100px", // Adjust this value to position the sidebar lower
        left: 0,
        zIndex: 1000,
      }}
    >
      <IconButton onClick={toggleDrawer(true)}>
      <MenuIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <List>
          {sections.map((section) => (
            <ListItem button key={section.id} onClick={() => handleScroll(section.id)}>
              <ListItemText primary={section.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
