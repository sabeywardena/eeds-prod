import React, { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";
import theme from "@/theme";
import StaffBioModal from "./StaffBioModal";

const MeetStaff: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<{
    src: string;
    name: string;
    title: string;
    bio: string;
  } | null>(null);

  const elliottBio = `Elliott Bradley is so excited to be starting his 10th season at Essential Elements this year. He teaches jazz, tap, ballet, contemporary, musical theater, progressions, and is a choreographer for the Atticus company here at EEDS. Elliott is originally from North Carolina where he began dancing competitively and started performing in musicals at the age of 8. After high school, Elliott attended Oklahoma City University where he graduated summa cum laude with his BFA in dance performance. Some of Elliott's stage, TV, & performance credits include performing in the ensemble and as a swing in the Radio City Christmas Spectacular starring the Rockettes in NYC for four years, touring internationally in West Side Story (A-Rab), We Will Rock You (Dance Capt./Swing), and working with Tommy Tune as a featured dancer on the inaugural Holland America's Oosterdam. Favorite regional credits include: Kiss Me Kate (Paper Mill), Crazy For You (Ogunquit Playhouse), High School Musical (US Tour), 42nd Street, Anything Goes, and Annie Get Your Gun (Sacramento Music Circus). Elliott's television/commercial credits include performing with Cobra Starship for the MTV VMA's, and the rock legends Brian May and Roger Taylor of Queen. As a teacher and choreographer he has worked for 20+ years for competitive studios across the country. Elliott served as head of the dance program for NHS Arts Academy, and was an award-winning choreographer for their musicals. He has been a guest artist for 2 years in Europe at Cologne Dance Center and has taught masterclasses in Italy and Germany. He also served as an adjunct dance faculty member for University of FL. Elliott has toured internationally as a judge for many prestigious dance competitions and as a faculty member for numerous dance conventions. He currently is on faculty with Artistic Dance Exchange (ADE) and has toured with them for the past 7 seasons.`;

  const samBio = `Samantha is an NJ based dancer, choreographer and instructor and the proud owner of Saucy Studios, a dance studio for adults in Toms River, NJ. Her credits include the Carnival Choreographer's Ball in NYC (including backup dancing for Robert Taylor Jr.), BDC's student showcases, and Xbox Kinect flashmob commercial featuring Ne-Yo and Lady Souverign. She went on to dance on the national tour of Sesame Street Live, performing across the U.S, Canada, Puerto Rico and Mexico. 

While in NYC, Samantha was the assistant for Broadway Dance Center faculty members Debbie Wilson, Heather Rigg and Lane Napper. Since starting her choreography journey, Samantha has choreographed over 75 musicals, live events, flashmobs, wedding performances, dance concept videos and films, most recently the Applebees University Saucerority TikTok commercials. She has been nominated for "Outstanding Choreography" awards with Count Basie, Rising Star and NJ Theater Association, and won two Basie awards for her work on Drowsy Chaperone and All Shook Up. Samantha created a dance program with Arise International for Dutch students traveling to NYC to study their craft. She was also the dance production assistant for the Britney Spears Twister Rave commercial and choreographed/directed a dance shoot for 150 people on location in Nashville.`;

  const johnBio = `John Barrella is a distinguished figure in the dance community, with a primary focus on street dance culture. A versatile artist, he employs techniques rooted in Locking, Popping, B-boy, and Hip Hop. Notably featured in music videos such as "Get Away" by Alissia and “HSKT” by Tenin, John's portfolio extends to high-profile events like Tedx: Chaos, halftime shows for the NY Knicks, and the NYC Breakers’ Battle of the Boroughs reunion.
As a renowned choreographer, John's work resonates on the international stage. His unique movement approach has left an indelible mark on dancers in numerous schools, programs, and teams globally. At the age of 14, he embarked on his dance journey at the "School of the Arts” in East Brunswick, NJ, where he honed his skills in modern dance and Ballet. John's early training also encompassed human anatomy, improvisational techniques, childhood education, choreography composition, musical theatre, and theatre.
From his teenage years, John immersed himself in Hip Hop under various artists and became an integral part of the WildStyle dance company, mastering core Hip Hop techniques and exploring additional genres like house dance, waacking, and dancehall. Continuing his education, John remains under the tutelage of master and pioneering hip-hop artists, with notable influences including Tom Mckie, Spex, Brian Green, Bev Brown, Jazzy J, Sekou, Pavan Thimmiah, and more.
As the owner/director of the dance company "Redef" since 2007, John's artistic vision comes to life in performances across NJ, NY, and Philadelphia. His comedy-based work, "Stupid Humans," offers satirical takes on the performing arts through live shows and dance films. Beyond directing the company, John serves as an adjunct professor for Hip Hop at Rider University, contributes to various arts boards, presents at numerous conventions, and appears in dance education facilities internationally to train both students and teachers.
In recent years, John has pioneered “The Comix Method,” a program training teachers globally in hip-hop terminology, technique, and educational practices. Applied in classrooms worldwide, this program reflects John's unique instructional method. His classes and events aim to instill aspiring dancers with the fundamentals of street and Hip Hop dance, promoting both freestyle artistry and mastery of choreography. John's overarching goal is to inspire individuals to become artists and creatively challenge themselves, fostering positive growth both within and beyond the realm of dance.`;

  const julieBio = `Julie Grenier is a dedicated and passionate dancer and teacher originally from Massachusetts. Moving to NYC at age 18 to attend conservatory and pursue a career in the performing arts, some performance credits include Symphony Space, Brooklyn Dance Festival, the Special Olympics, and with Synthesis Too under the direction of Tracie Stanfield. She has been teaching dance for over ten years at various studios in the tri-state area, working with children of all ages. As a teacher she believes class should be a place to have fun and grow in a safe and positive environment. She strives to provide an experience that is challenging and enjoyable to all with a focus on individual attention in order to nurture each student's unique talent and abilities. She also holds her ACE Group Fitness and 200HR yoga certifications and teaches barre and yoga classes to adults in NYC.`;

  const alfonseBio = `Alfonse Napolitano, native of Parsippany, New Jersey, graduated from Montclair State University, receiving a Bachelor of Arts in Dance Education (2021), as well as completing the credits for a BFA in Dance Performance (2020). He has performed in works by Martha Graham, Alwin Nikolias, Shapiro & Smith, Camille A. Brown, Joshua Manculich, Fredrick Earl Mosley, Sara Hook, and many more.
In March of 2019, he performed in the American College Dance Association Gala at SUNY Brockport. He has performed in venues throughout NJ, NY, TX, and NC such as The Joyce Theater, Jazz at Lincoln Center, 92nd Street Y, and New York City Center Studios. He was a dancer on Norwegian Gem with Norwegian Cruise Lines where he worked with Tony-nominated choreographer Lynne-Taylor Corbet. Currently, Alfonse is dancing at Walt Disney World on the Magic Kingdom Castle stage as an equity dancer in Hocus Pocus.`;

  const imageData = [
    {
      src: "/headshots/stephen.jpg",
      name: "Stephen Agisilaou",
      title: "Instructor",
      bio: "stephen bio",
    },
    {
      src: "/headshots/sam.jpg",
      name: "Sam Amaral",
      title: "Instructor",
      bio: samBio,
    },
    {
      src: "/headshots/john-headshot.jpeg",
      name: "John Barella",
      title: "Instructor",
      bio: johnBio,
    },
    {
      src: "/headshots/julie.jpg",
      name: "Julie Grenier",
      title: "Instructor",
      bio: julieBio,
    },
    {
      src: "/headshots/alfonse.jpg",
      name: "Alfonse Napilatano",
      title: "Instructor",
      bio: alfonseBio,
    },
    {
      src: "/headshots/jovanna.jpg",
      name: "JoVanna Parks",
      title: "Instructor",
      bio: "jovanna bio",
    },
  ];

  const handleOpen = (person: {
    src: string;
    name: string;
    title: string;
    bio: string;
  }) => {
    setSelectedPerson(person);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPerson(null);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        padding: "5% 0",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          component="div"
          sx={{
            fontWeight: theme.typography.fontWeightBold,
            color: theme.palette.common.black,
            textAlign: "center",
            mb: 1,
            pr: 15,
          }}
        >
          Meet The Staff
        </Typography>

        <Typography
          variant="body1"
          component="div"
          sx={{
            fontWeight: theme.typography.fontWeightBold,
            color: theme.palette.common.black,
            textAlign: "center",
            mb: 5,
            pr: 15,
          }}
        >
          Click on each headshot to read more about our esteemed staff members!
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
              alignItems: "center",
              cursor: "pointer",
              "&:hover": {
                opacity: 0.8,
              },
            }}
            onClick={() =>
              handleOpen({
                src: "/headshots/samantha.jpeg",
                name: "Samantha Zaleski",
                title: "Studio Owner / Head Director",
                bio: "Samantha has dedicated her life to the art of dance, starting as a young performer and eventually becoming a renowned instructor. Her innovative approach to dance education and her passion for nurturing young talent make her an inspiring leader in the studio.",
              })
            }
          >
            <Box
              sx={{
                width: 120,
                height: 200,
                overflow: "hidden",
                position: "relative",
                borderRadius: 2,
              }}
            >
              <Image
                src="/headshots/samantha.jpeg"
                alt="Samantha Zaleski"
                layout="fill"
                objectFit="cover"
                style={{ objectPosition: "center" }}
              />
            </Box>
            <Typography
              variant="h6"
              sx={{
                mt: 1,
                fontWeight: theme.typography.fontWeightBold,
                color: theme.palette.text.primary,
                textAlign: "center",
              }}
            >
              Samantha Zaleski
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.primary,
                textAlign: "center",
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
              alignItems: "center",
              cursor: "pointer",
              "&:hover": {
                opacity: 0.8,
              },
            }}
            onClick={() =>
              handleOpen({
                src: "/headshots/john-headshot.jpeg",
                name: "Elliott Bradley",
                title: "Atticus Co-Director / Instructor",
                bio: elliottBio,
              })
            }
          >
            <Box
              sx={{
                width: 120,
                height: 200,
                overflow: "hidden",
                position: "relative",
                borderRadius: 2,
              }}
            >
              <Image
                src="/headshots/john-headshot.jpeg"
                alt="Elliott Bradley"
                layout="fill"
                objectFit="cover"
                style={{ objectPosition: "center" }}
              />
            </Box>
            <Typography
              variant="h6"
              sx={{
                mt: 1,
                fontWeight: theme.typography.fontWeightBold,
                color: theme.palette.text.primary,
                textAlign: "center",
              }}
            >
              Elliott Bradley
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.primary,
                textAlign: "center",
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
            flexWrap: "wrap",
            gap: 1, // Reduced gap
            justifyContent: "space-between",
            pr: 15,
          }}
        >
          {imageData.map((item, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: "1 1 calc(2% - 23px)", // Adjusted width
                maxWidth: "calc(33.333% - 13px)", // Adjusted width
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.8,
                },
              }}
              onClick={() => handleOpen(item)}
            >
              <Box
                sx={{
                  width: 120,
                  height: 200,
                  overflow: "hidden",
                  position: "relative",
                  borderRadius: 2,
                }}
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  style={{ objectPosition: "center" }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  mt: 1,
                  fontWeight: theme.typography.fontWeightBold,
                  color: theme.palette.text.primary,
                  textAlign: "center",
                }}
              >
                {item.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.primary,
                  textAlign: "center",
                }}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Staff Bio Modal */}
      <StaffBioModal
        open={open}
        onClose={handleClose}
        person={selectedPerson}
      />
    </Box>
  );
};

export default MeetStaff;
