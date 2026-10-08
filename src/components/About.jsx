import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";

function About() {
  const highlights = [
    {
      number: "01",
      title: "CREATE",
      text: "Fresh ideas, strong visuals and creative concepts built around your brand.",
      icon: <AutoAwesomeRoundedIcon />,
    },
    {
      number: "02",
      title: "CONNECT",
      text: "Meaningful digital experiences that bring brands closer to their audience.",
      icon: <GroupsRoundedIcon />,
    },
    {
      number: "03",
      title: "GROW",
      text: "Purpose-driven campaigns designed to improve visibility, engagement and growth.",
      icon: <TrendingUpRoundedIcon />,
    },
  ];

  const services = [
    "DIGITAL MARKETING",
    "SOCIAL MEDIA",
    "BRANDING",
    "CONTENT CREATION",
    "CAMPAIGNS",
    "STRATEGY",
  ];

  return (
    <Box
      id="about"
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "#070D0F",
        color: "#fff",

        // Reduced bottom space
        pt: { xs: 10, md: 15 },
        pb: { xs: 4, md: 6 },
      }}
    >
      {/* =====================================
          BACKGROUND GLOW - LEFT
      ====================================== */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: 280, md: 520 },
          height: { xs: 280, md: 520 },
          borderRadius: "50%",
          top: "5%",
          left: "-12%",
          background:
            "radial-gradient(circle, rgba(245,158,11,0.12), transparent 68%)",
          filter: "blur(25px)",
          pointerEvents: "none",
        }}
      />

      {/* =====================================
          BACKGROUND GLOW - RIGHT
      ====================================== */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: 250, md: 450 },
          height: { xs: 250, md: 450 },
          borderRadius: "50%",
          bottom: "-10%",
          right: "-10%",
          background:
            "radial-gradient(circle, rgba(20,184,166,0.10), transparent 68%)",
          filter: "blur(30px)",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* =====================================
            TOP LABEL
        ====================================== */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={1.5}
          sx={{
            mb: { xs: 4, md: 6 },
            animation: "aboutFadeUp 1s ease both",
          }}
        >
          <Box
            sx={{
              width: 38,
              height: 1,
              background: "#F59E0B",
            }}
          />

          <Typography
            sx={{
              fontSize: { xs: "0.68rem", md: "0.75rem" },
              letterSpacing: "0.28em",
              fontWeight: 600,
              color: "#F59E0B",
            }}
          >
            ABOUT SHEM MEDIAS
          </Typography>
        </Stack>

        {/* =====================================
            MAIN INTRO
        ====================================== */}
        <Grid
          container
          spacing={{ xs: 5, md: 8 }}
          alignItems="center"
        >
          {/* LEFT CONTENT */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              animation: "aboutFadeUp 1s ease 0.15s both",
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: "3rem",
                  sm: "4rem",
                  md: "5rem",
                  lg: "6.2rem",
                },
                lineHeight: 0.88,
                fontWeight: 800,
                letterSpacing: "-0.055em",
                textTransform: "uppercase",
                mb: 4,
              }}
            >
              EVERY IDEA
              <br />
              CAN BECOME
              <br />

              <Box
                component="span"
                sx={{
                  color: "#F59E0B",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                IMPACT.
              </Box>
            </Typography>

            {/* Main Description */}
            <Box
              sx={{
                width: { xs: "100%", md: "88%" },
                borderLeft: "1px solid rgba(245,158,11,0.55)",
                pl: 3,
                mb: 4,
              }}
            >
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.72)",
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                  lineHeight: 1.9,
                  letterSpacing: "0.01em",
                }}
              >
                Shem Medias is a digital marketing and creative media
                company built to turn ideas into meaningful digital
                experiences. We combine creativity, strategy and modern
                digital thinking to help brands become more visible,
                memorable and impactful.
              </Typography>
            </Box>

            {/* Secondary Description */}
            <Typography
              sx={{
                color: "rgba(255,255,255,0.52)",
                fontSize: { xs: "0.86rem", md: "0.95rem" },
                lineHeight: 1.8,
                maxWidth: 620,
              }}
            >
              From social media and branding to content creation and
              digital campaigns, we create work that is not only designed
              to look good — it is designed to connect with people and
              move businesses forward.
            </Typography>

            {/* Small CTA */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={1.5}
              sx={{
                mt: 4,
                color: "#F59E0B",
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.2em",
                  fontWeight: 700,
                }}
              >
                CREATIVE MINDS. DIGITAL IMPACT.
              </Typography>

              <ArrowOutwardRoundedIcon
                sx={{
                  fontSize: 19,
                  animation: "aboutArrow 2s ease-in-out infinite",
                }}
              />
            </Stack>
          </Grid>

          {/* =====================================
              RIGHT IMAGE
          ====================================== */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              animation: "aboutImageReveal 1.2s ease 0.25s both",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 650,
                mx: "auto",
              }}
            >
              {/* Orange Outer Frame */}
              <Box
                sx={{
                  position: "absolute",
                  width: "88%",
                  height: "88%",
                  right: -18,
                  bottom: -18,
                  border: "1px solid rgba(245,158,11,0.35)",
                  zIndex: 0,
                }}
              />

              {/* Image */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  height: { xs: 390, sm: 480, md: 570 },
                  overflow: "hidden",

                  backgroundImage: `
                    linear-gradient(
                      180deg,
                      rgba(4,10,12,0.05),
                      rgba(4,10,12,0.62)
                    ),
                    url("/shem-about.jpg")
                  `,

                  backgroundSize: "cover",
                  backgroundPosition: "center",

                  transition: "transform 0.7s ease",

                  "&:hover": {
                    transform: "scale(1.015)",
                  },

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(120deg, transparent 35%, rgba(245,158,11,0.18), transparent 65%)",
                    transform: "translateX(-120%)",
                    animation:
                      "aboutImageSweep 6s ease-in-out infinite",
                  },
                }}
              />

              {/* Image Label */}
              <Box
                sx={{
                  position: "absolute",
                  zIndex: 3,
                  left: 20,
                  bottom: 20,
                  px: 2,
                  py: 1,
                  background: "rgba(4,10,12,0.82)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(245,158,11,0.3)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    color: "#F59E0B",
                    fontWeight: 700,
                  }}
                >
                  DIGITAL × CREATIVE
                </Typography>
              </Box>

              {/* Vertical Number */}
              <Typography
                sx={{
                  position: "absolute",
                  zIndex: 3,
                  right: -10,
                  top: 25,
                  writingMode: "vertical-rl",
                  fontSize: "0.62rem",
                  letterSpacing: "0.3em",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                SHEM / 01
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* =====================================
            SERVICES MOVING STRIP
        ====================================== */}
        <Box
          sx={{
            mt: { xs: 10, md: 14 },
            py: 2.5,
            borderTop: "1px solid rgba(255,255,255,0.09)",
            borderBottom: "1px solid rgba(255,255,255,0.09)",
            overflow: "hidden",
            animation: "aboutFadeUp 1s ease 0.4s both",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "max-content",
              animation: "aboutMarquee 24s linear infinite",
            }}
          >
            {[...services, ...services].map((service, index) => (
              <Stack
                key={`${service}-${index}`}
                direction="row"
                alignItems="center"
                spacing={3}
                sx={{
                  mr: 5,
                  whiteSpace: "nowrap",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "0.68rem", md: "0.75rem" },
                    letterSpacing: "0.2em",
                    fontWeight: 700,
                    color:
                      index % 2 === 0
                        ? "#F59E0B"
                        : "rgba(255,255,255,0.65)",
                  }}
                >
                  {service}
                </Typography>

                <Box
                  sx={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#F59E0B",
                    boxShadow:
                      "0 0 12px rgba(245,158,11,0.8)",
                  }}
                />
              </Stack>
            ))}
          </Box>
        </Box>

        {/* =====================================
            WHAT WE BELIEVE
        ====================================== */}
        <Box
          sx={{
            mt: { xs: 11, md: 16 },
            animation: "aboutFadeUp 1s ease 0.5s both",
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "flex-end" }}
            spacing={4}
            sx={{
              mb: 7,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.25em",
                  color: "#F59E0B",
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                WHAT WE BELIEVE
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: "2.2rem",
                    sm: "3rem",
                    md: "4rem",
                  },
                  lineHeight: 1,
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  textTransform: "uppercase",
                  maxWidth: 850,
                }}
              >
                WE DON'T JUST CREATE CONTENT.
                <br />

                <Box
                  component="span"
                  sx={{
                    color: "#F59E0B",
                  }}
                >
                  WE CREATE CONNECTION.
                </Box>
              </Typography>
            </Box>

            <Typography
              sx={{
                maxWidth: 300,
                color: "rgba(255,255,255,0.48)",
                fontSize: "0.82rem",
                lineHeight: 1.7,
              }}
            >
              Strategy gives an idea direction.
              Creativity gives it character.
              Digital gives it reach.
            </Typography>
          </Stack>

          {/* =====================================
              HIGHLIGHT CARDS
          ====================================== */}
          <Grid
            container
            spacing={{ xs: 2.5, md: 3 }}
            sx={{
              mt: 1,
            }}
          >
            {highlights.map((item, index) => (
              <Grid
                key={item.number}
                size={{ xs: 12, md: 4 }}
                sx={{
                  animation: `aboutCardUp 0.8s ease ${
                    0.15 * index
                  }s both`,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    minHeight: { xs: 260, md: 300 },
                    p: { xs: 3.5, md: 4 },

                    border:
                      "1px solid rgba(245,158,11,0.28)",

                    borderTop:
                      "2px solid rgba(245,158,11,0.75)",

                    background:
                      "linear-gradient(145deg, #102024 0%, #0B1518 55%, #081012 100%)",

                    boxShadow:
                      "0 12px 35px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.035)",

                    transition:
                      "transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",

                    overflow: "hidden",

                    "&:hover": {
                      transform: "translateY(-8px)",
                      borderColor: "#F59E0B",
                      boxShadow:
                        "0 18px 45px rgba(0,0,0,0.5), 0 0 25px rgba(245,158,11,0.12)",
                      background:
                        "linear-gradient(145deg, #14292D 0%, #0B181B 55%, #081012 100%)",
                    },

                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "45%",
                      height: "2px",
                      background:
                        "linear-gradient(90deg, #F59E0B, rgba(245,158,11,0.15), transparent)",
                    },

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: 120,
                      height: 120,
                      right: -55,
                      bottom: -55,
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle, rgba(245,158,11,0.10), transparent 70%)",
                      pointerEvents: "none",
                    },
                  }}
                >
                  {/* Number + Icon */}
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                      mb: 5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.72rem",
                        color: "#F59E0B",
                        letterSpacing: "0.2em",
                        fontWeight: 800,
                      }}
                    >
                      {item.number}
                    </Typography>

                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#F59E0B",
                        border:
                          "1px solid rgba(245,158,11,0.35)",
                        background:
                          "rgba(245,158,11,0.07)",
                        boxShadow:
                          "0 0 18px rgba(245,158,11,0.08)",

                        "& svg": {
                          fontSize: 21,
                        },
                      }}
                    >
                      {item.icon}
                    </Box>
                  </Stack>

                  {/* Card Title */}
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "1.55rem",
                        md: "1.85rem",
                      },
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      color: "#FFFFFF",
                      mb: 2,
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Card Description */}
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.68)",
                      fontSize: {
                        xs: "0.88rem",
                        md: "0.92rem",
                      },
                      lineHeight: 1.8,
                      maxWidth: 370,
                    }}
                  >
                    {item.text}
                  </Typography>

                  {/* Arrow */}
                  <ArrowOutwardRoundedIcon
                    sx={{
                      position: "absolute",
                      right: 22,
                      bottom: 22,
                      fontSize: 21,
                      color: "rgba(245,158,11,0.7)",
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* =====================================
            FINAL STATEMENT
        ====================================== */}
        <Box
          sx={{
            mt: { xs: 11, md: 16 },
            pt: { xs: 7, md: 9 },

            // Reduced bottom space
            pb: { xs: 1, md: 2 },

            borderTop:
              "1px solid rgba(255,255,255,0.09)",

            textAlign: "center",

            animation:
              "aboutFadeUp 1s ease 0.7s both",
          }}
        >
          {/* Icon */}
          <CampaignRoundedIcon
            sx={{
              color: "#F59E0B",
              fontSize: 30,
              mb: 2,
            }}
          />

          {/* Main Statement */}
          <Typography
            sx={{
              width: "fit-content",
              maxWidth: {
                xs: "320px",
                sm: "520px",
                md: "680px",
              },
              mx: "auto",

              fontSize: {
                xs: "1.8rem",
                sm: "2.5rem",
                md: "3.7rem",
              },

              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
            }}
          >
            WE CREATE WHAT
            <br />

            <Box
              component="span"
              sx={{
                color: "#F59E0B",
              }}
            >
              PEOPLE REMEMBER.
            </Box>
          </Typography>

          {/* Bottom Tagline */}
          <Typography
            sx={{
              width: "100%",
              maxWidth: {
                xs: "300px",
                sm: "500px",
                md: "620px",
              },
              mx: "auto",

              mt: 3,

              color: "rgba(255,255,255,0.4)",
              fontSize: "0.75rem",
              letterSpacing: "0.18em",
              lineHeight: 1.8,
              textAlign: "center",
            }}
          >
            IDEAS • STRATEGY • CREATIVITY • IMPACT
          </Typography>
        </Box>
      </Container>

      {/* =====================================
          ANIMATIONS
      ====================================== */}
      <style>
        {`
          @keyframes aboutFadeUp {
            from {
              opacity: 0;
              transform: translateY(35px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes aboutImageReveal {
            from {
              opacity: 0;
              transform: translateX(50px) scale(0.97);
            }

            to {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }

          @keyframes aboutImageSweep {
            0% {
              transform: translateX(-120%);
            }

            45% {
              transform: translateX(120%);
            }

            100% {
              transform: translateX(120%);
            }
          }

          @keyframes aboutArrow {
            0%,
            100% {
              transform: translate(0, 0);
            }

            50% {
              transform: translate(4px, -4px);
            }
          }

          @keyframes aboutMarquee {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          @keyframes aboutCardUp {
            from {
              opacity: 0;
              transform: translateY(25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 600px) {
            @keyframes aboutImageSweep {
              0% {
                transform: translateX(-150%);
              }

              45% {
                transform: translateX(150%);
              }

              100% {
                transform: translateX(150%);
              }
            }
          }
        `}
      </style>
    </Box>
  );
}

export default About;