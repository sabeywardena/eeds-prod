"use client";
import React from "react";
import { Box, useTheme, Typography } from "@mui/material";

const Info: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        id="foo"
        sx={{
          height: "130vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "5%",
            top: "50%",
            transform: "translateY(-60%)",
            paddingLeft: "16px",
            zIndex: 1,
          }}
        >
          <Typography
            variant="h2"
            component="div"
            sx={{
              fontWeight: theme.typography.fontWeightBold,
              color: theme.palette.common.black,
            }}
          >
            New Student
            <br />
            Enrollment is <br />
            Open Now!
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: "10%",
            top: "50%",
            left: "40%",
            transform: "translateY(-50%)",
            zIndex: 1,
            height: "50%",
            display: "flex",
            flexDirection: "column", // Stack elements vertically
            alignItems: "center", // Center elements horizontally
            justifyContent: "center", // Center elements vertically within the Box
            gap: 2, // Add spacing between the Typography components
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: theme.typography.fontWeightLight,
              color: theme.palette.common.black,
            }}
          >
            Essential Elements Dance Studio takes great pride in providing our
            students with both the tools and environment to master our
            educational goals.  We have monthly and quarterly expectations for
            our staff and through this well-planned program, we strive to bring
            great self confidence to each of our students.  A young woman's self
            confidence and expression is of the utmost importance to EEDS and
            our mission. 
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: theme.typography.fontWeightBold,
              color: theme.palette.common.black,
            }}
          >
            Therefore, we will not accept any new enrollments after January
            15th, of each season.
          </Typography>
        </Box>
      </Box>

      {/* Bottom Box right under the previous Box */}
      <Box
        sx={{
          mt: "-40vh", // Pull the bottom box up to be right under the top section
          padding: "10px 16px",
          pl:'80px', 
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: theme.typography.fontWeightLight,
            color: theme.palette.common.black,
          }}
        >
          All Potential Movers may receive a complimentary class prior to
          enrollment to ensure our family is a good fit for yours. <br/>
          This class will be used for proper observation
          and placement for prospective
          students. <br />
          <br />
          Your dancer may be asked to return for an additional (complimentary)
          class for final placement and scheduling.
        </Typography>

        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: theme.typography.fontWeightBold,
            color: theme.palette.common.black,
          }}
        >
          All Final placement by Director, S.Zaleski and Atticus Co-Director, Elliott Bradley
        </Typography>
      </Box>
    </Box>
  );
};

export default Info;
