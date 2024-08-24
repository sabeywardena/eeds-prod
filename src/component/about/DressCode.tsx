"use client";
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";

const DressCode: React.FC = () => {
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
            width: "80%",
            backgroundColor: theme.palette.common.black,
            marginLeft: "16px",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: theme.typography.fontWeightBold }}
        >
          Dress Code
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
            src="/dancer-photos/jayden.jpeg"
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
            EEDs Dress Code
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: theme.palette.common.black,
              textAlign: "left",
              pt: 5,
            }}
          >
            All dancers are required to participate in the EEDS Dress Code for
            all classes. No baggy clothing or street clothes are permitted at
            any time. It is important for mobility as well as to show proper
            alignment of the body while dancing. All dancers are mandated to
            wear "Essential Dancewear", which can be purchased during Dancewear
            days in August <br /> <br />
            Dancers arriving to class without proper dress code attire will not
            be permitted to participate, tuition refunds will no be issued on
            these occurances. Hair must be securely up for all classes.
            <br /> <br />A classical bun is required for all ballet classes.
             Replacements may be available during the season,
            subject to availability. Dancewear orders are placed in August.
            Limited items may be available again during our Holiday offerings
            and as we head into performance season.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DressCode;
