import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";
import theme from "@/theme";

const MeetStaff: React.FC = () => {
  const imageData = [
    { src: "/headshots/john-headshot.jpeg", name: "Name 1", title: "Title 1" },
    { src: "/headshots/john-headshot.jpeg", name: "Name 2", title: "Title 2" },
    { src: "/headshots/john-headshot.jpeg", name: "Name 3", title: "Title 3" },
    { src: "/headshots/john-headshot.jpeg", name: "Name 4", title: "Title 4" },
    { src: "/headshots/john-headshot.jpeg", name: "Name 5", title: "Title 5" },
    { src: "/headshots/john-headshot.jpeg", name: "Name 6", title: "Title 6" },
  ];

  return (
    <Box
      sx={{
        width: "100vw",
        padding: "5% 0",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="div"
          sx={{
            fontWeight: theme.typography.fontWeightBold,
            color: theme.palette.common.black,
            textAlign: "center",
            mb: 5,
            pr: 15,
          }}
        >
          Meet The Staff
        </Typography>

        {/* Two Pictures Centered */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 5,
            pr: 15,
          }}
        >
          <Box
            sx={{
              mx: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center content horizontally
            }}
          >
            <Image
              src="/headshots/john-headshot.jpeg"
              alt="Image 1 Description"
              width={100}
              height={100}
              layout="intrinsic"
              objectFit="cover"
            />
            <Typography
              variant="h6"
              sx={{
                mt: 1,
                fontWeight: theme.typography.fontWeightBold,
                color: theme.palette.text.primary,
                textAlign: "center", // Center text
              }}
            >
              Samantha Zaleski
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.primary,
                textAlign: "center", // Center text
              }}
            >
              Studio Owner / Head Director
            </Typography>
          </Box>

          <Box
            sx={{
              mx: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center content horizontally
            }}
          >
            <Image
              src="/headshots/john-headshot.jpeg"
              alt="Image 2 Description"
              width={100}
              height={100}
              layout="intrinsic"
              objectFit="cover"
            />

            <Typography
              variant="h6"
              sx={{
                mt: 1,
                fontWeight: theme.typography.fontWeightBold,
                color: theme.palette.text.primary,
                textAlign: "center", // Center text
              }}
            >
              Elliot Bradly
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.primary,
                textAlign: "center", // Center text
              }}
            >
              Atticus Co-Director / Instructor
            </Typography>
          </Box>
        </Box>

        {/* Six Pictures Side by Side */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap", // Prevent wrapping
            overflowX: "auto", // Allow horizontal scroll if necessary
            gap: 2,
            justifyContent: "center",
            pr: 15,
          }}
        >
          {imageData.map((item, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                flex: "0 0 auto", // Ensure items don't shrink
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                src={item.src}
                alt={item.name}
                width={100}
                height={100}
                layout="intrinsic"
                objectFit="cover"
              />
              <Typography
                variant="h6"
                sx={{
                  mt: 1,
                  fontWeight: theme.typography.fontWeightBold,
                  color: theme.palette.text.primary,
                  textAlign: "center", // Center text
                }}
              >
                {item.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.primary,
                  textAlign: "center", // Center text
                }}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default MeetStaff;
