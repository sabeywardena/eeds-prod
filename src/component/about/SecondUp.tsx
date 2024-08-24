"use client";
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";

const SecondUp: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
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
            For dancers second grade and up:
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: theme.palette.common.black,
              fontWeight: theme.typography.fontWeightRegular,
              textAlign: "left",
              pt: 2,
              pb: 3,
            }}
          >
            Ballet, PBT, Contemporary, Lyrical, Commercial Jazz, Hip Hop,
            Musical Theater, Tap and Acro are offered for students of all levels
            Monday- Friday at Essential Elements Dance Studio. We also offer a
            Boys Only Breakdancing class with Mr John Barella on Thursday
            Evenings.
          </Typography>
          <Image
            src="/dancer-photos/boys-breakdancing.jpeg"
            alt="Description of the image"
            width={450}
            height={450}
            layout="intrinsic"
          />
        </Box>
        <Box
          sx={{
            flexShrink: 0,
            pr: 5,
          }}
        >
          <Image
            src="/dancer-photos/baybay-tay.jpeg"
            alt="Description of the image"
            width={550}
            height={550}
            layout="intrinsic"
          />
        </Box>
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
            flex: 1,
            mr: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.common.black,
              fontWeight: theme.typography.fontWeightBold,
              textAlign: "left",
              pt: 10,
            }}
          >
            Essential Elements continues to proudly provide personalized
            attention and education to dancers of all ages and levels.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.common.black,
              fontWeight: theme.typography.fontWeightRegular,
              textAlign: "left",
              pb: 3,
            }}
          >
            <br />
            We are located in your neighborhood; at the corner of Hazlet Avenue
            and Bethany Road. Essential Elements Dance Studio believes in
            guiding dancers to build upon their foundation of skills and
            enthusiasm for the arts through a technical-based studio
            environment. Preparing our young dancers for college dance programs
            and propelling performers into the professional dance world and
            beyond...
            <br /> <br />
            We hope that your journey brings you to Essential Elements, this
            season, for one of these fantastic classes to widen your horizons
            and sharpen your technique. There still may be room for your dancer
            in many of our classes. At Essential Elements, we have created the
            ideal learning environment in our smaller classes. Contact us today
            to request an Essential Welcome Pac and discuss placement for your
            Essential Mover. EEDancestudio@gmail.com
          </Typography>
        </Box>

        <Box
          sx={{
            flexShrink: 0,
            pr: 5,
          }}
        >
          <Image
            src="/dancer-photos/meg-eating.jpeg"
            alt="Description of the image"
            width={550}
            height={550}
            layout="intrinsic"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SecondUp;
