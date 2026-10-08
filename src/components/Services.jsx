import { useEffect, useRef, useState } from "react";

import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
} from "@mui/material";

import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import MovieCreationRoundedIcon from "@mui/icons-material/MovieCreationRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";

const services = [
  {
    number: "01",
    title: "DIGITAL MARKETING",
    description:
      "We build focused digital marketing strategies that help brands reach the right audience, increase visibility and turn attention into real growth.",
    icon: TrendingUpRoundedIcon,
    tags: ["Strategy", "Growth", "Performance"],
  },
  {
    number: "02",
    title: "SOCIAL MEDIA",
    description:
      "We create engaging social media experiences that build conversations, strengthen communities and keep your brand consistently visible.",
    icon: ShareRoundedIcon,
    tags: ["Instagram", "Facebook", "Engagement"],
  },
  {
    number: "03",
    title: "BRANDING",
    description:
      "From visual identity to brand direction, we create memorable branding that gives your business a clear and recognizable personality.",
    icon: AutoAwesomeRoundedIcon,
    tags: ["Identity", "Visuals", "Direction"],
  },
  {
    number: "04",
    title: "CONTENT CREATION",
    description:
      "Creative reels, videos, graphics and visual stories designed to make your brand more interesting, relatable and memorable.",
    icon: MovieCreationRoundedIcon,
    tags: ["Reels", "Video", "Creative"],
  },
  {
    number: "05",
    title: "PAID CAMPAIGNS",
    description:
      "We plan and manage targeted advertising campaigns designed to connect your brand with the people most likely to take action.",
    icon: CampaignRoundedIcon,
    tags: ["Ads", "Targeting", "Results"],
  },
  {
    number: "06",
    title: "STRATEGY",
    description:
      "Smart digital planning built around your audience, goals and market position, helping every creative decision move in the right direction.",
    icon: PsychologyRoundedIcon,
    tags: ["Planning", "Audience", "Positioning"],
  },
];

function Services() {
  const [visibleItems, setVisibleItems] = useState({});
  const serviceRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);

          setVisibleItems((prev) => ({
            ...prev,
            [index]: entry.isIntersecting,
          }));
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    serviceRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box
      id="services"
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, #071012 0%, #081619 45%, #060C0E 100%)",
        color: "#fff",
        py: { xs: 10, md: 15 },
      }}
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <Box
        sx={{
          position: "absolute",
          top: "8%",
          right: "-180px",
          width: { xs: 280, md: 460 },
          height: { xs: 280, md: 460 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245,158,11,0.10) 0%, rgba(245,158,11,0.035) 38%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "5%",
          left: "-220px",
          width: { xs: 300, md: 500 },
          height: { xs: 300, md: 500 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 68%)",
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
        {/* ================= HEADER ================= */}

        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "space-between",
            alignItems: {
              xs: "flex-start",
              md: "flex-end",
            },
            gap: 4,
            mb: { xs: 8, md: 11 },
            animation: "servicesFadeUp 1.1s ease both",
          }}
        >
          <Box>
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              sx={{ mb: 2 }}
            >
              <Box
                sx={{
                  width: 34,
                  height: "1px",
                  background: "#F59E0B",
                }}
              />

              <Typography
                sx={{
                  color: "#F59E0B",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                }}
              >
                WHAT WE DO
              </Typography>
            </Stack>

            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: "2.7rem",
                  sm: "4rem",
                  md: "5.5rem",
                  lg: "6.2rem",
                },
                lineHeight: 0.9,
                fontWeight: 800,
                letterSpacing: "-0.055em",
                textTransform: "uppercase",
              }}
            >
              DIGITAL
              <br />

              <Box
                component="span"
                sx={{
                  color: "#F59E0B",
                }}
              >
                IDEAS.
              </Box>
            </Typography>
          </Box>

          <Box
            sx={{
              maxWidth: 430,
              pb: { md: 1 },
            }}
          >
            <Typography
              sx={{
                color: "rgba(255,255,255,0.62)",
                fontSize: {
                  xs: "0.9rem",
                  md: "1rem",
                },
                lineHeight: 1.8,
                letterSpacing: "0.02em",
              }}
            >
              We combine strategy, creativity and technology to help brands
              build a stronger digital presence and create meaningful
              connections with their audience.
            </Typography>
          </Box>
        </Box>

        {/* ================= TOP LINE ================= */}

        <Box
          sx={{
            width: "100%",
            height: "1px",
            background:
              "linear-gradient(90deg, rgba(245,158,11,0.7), rgba(255,255,255,0.08), transparent)",
          }}
        />

        {/* ================= SERVICES ================= */}

        <Box>
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleItems[index];

            const hiddenTransform =
              index % 2 === 0
                ? "translateX(-100px)"
                : "translateX(100px)";

            return (
              <Box
                key={service.number}
                ref={(element) => {
                  serviceRefs.current[index] = element;
                }}
                data-index={index}
                sx={{
                  position: "relative",

                  borderBottom:
                    "1px solid rgba(255,255,255,0.10)",

                  opacity: isVisible ? 1 : 0,

                  transform: isVisible
                    ? "translateX(0)"
                    : hiddenTransform,

                  transition: `
                    opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${
                      index * 0.18
                    }s,
                    transform 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${
                      index * 0.18
                    }s,
                    background 0.45s ease,
                    padding 0.45s ease
                  `,

                  "&:hover": {
                    background:
                      "linear-gradient(90deg, rgba(245,158,11,0.075), rgba(245,158,11,0.015), transparent)",

                    px: {
                      xs: 1,
                      md: 2.5,
                    },
                  },

                  "&:hover .service-number": {
                    color: "#F59E0B",
                  },

                  "&:hover .service-title": {
                    color: "#F59E0B",

                    transform: {
                      xs: "none",
                      md: "translateX(10px)",
                    },
                  },

                  "&:hover .service-icon": {
                    opacity: 1,

                    transform:
                      "translateY(-50%) translateX(0)",
                  },

                  "&:hover .service-description": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },

                  "&:hover .service-arrow": {
                    transform: "rotate(45deg)",
                    background: "#F59E0B",
                    color: "#071012",
                  },
                }}
              >
                <Box
                  sx={{
                    py: {
                      xs: 3.2,
                      sm: 3.8,
                      md: 4.6,
                    },

                    display: "grid",

                    gridTemplateColumns: {
                      xs: "45px 1fr 40px",

                      md: "90px minmax(300px, 1.4fr) minmax(240px, 0.8fr) 60px",
                    },

                    alignItems: "center",

                    columnGap: {
                      xs: 1.5,
                      md: 3,
                    },
                  }}
                >
                  {/* ================= NUMBER ================= */}

                  <Typography
                    className="service-number"
                    sx={{
                      color:
                        "rgba(255,255,255,0.30)",

                      fontSize: {
                        xs: "0.72rem",
                        md: "0.8rem",
                      },

                      fontWeight: 700,

                      letterSpacing: "0.12em",

                      transition:
                        "color 0.35s ease",
                    }}
                  >
                    {service.number}
                  </Typography>

                  {/* ================= TITLE ================= */}

                  <Box>
                    <Typography
                      className="service-title"
                      sx={{
                        fontSize: {
                          xs: "1.45rem",
                          sm: "2rem",
                          md: "3.15rem",
                          lg: "3.6rem",
                        },

                        lineHeight: 0.95,

                        fontWeight: 750,

                        letterSpacing: "-0.045em",

                        textTransform: "uppercase",

                        transition:
                          "color 0.35s ease, transform 0.45s ease",
                      }}
                    >
                      {service.title}
                    </Typography>

                    {/* MOBILE DESCRIPTION */}

                    <Box
                      sx={{
                        display: {
                          xs: "block",
                          md: "none",
                        },

                        mt: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          color:
                            "rgba(255,255,255,0.55)",

                          fontSize: "0.78rem",

                          lineHeight: 1.7,

                          maxWidth: 420,
                        }}
                      >
                        {service.description}
                      </Typography>

                      <Stack
                        direction="row"
                        spacing={1}
                        flexWrap="wrap"
                        useFlexGap
                        sx={{
                          mt: 1.7,
                        }}
                      >
                        {service.tags.map(
                          (tag) => (
                            <Box
                              key={tag}
                              sx={{
                                px: 1.1,
                                py: 0.45,

                                border:
                                  "1px solid rgba(245,158,11,0.25)",

                                color:
                                  "rgba(255,255,255,0.55)",

                                fontSize: "0.58rem",

                                letterSpacing:
                                  "0.12em",

                                textTransform:
                                  "uppercase",
                              }}
                            >
                              {tag}
                            </Box>
                          )
                        )}
                      </Stack>
                    </Box>
                  </Box>

                  {/* ================= DESKTOP DESCRIPTION ================= */}

                  <Box
                    className="service-description"
                    sx={{
                      display: {
                        xs: "none",
                        md: "block",
                      },

                      opacity: 0.55,

                      transform:
                        "translateY(7px)",

                      transition:
                        "opacity 0.4s ease, transform 0.4s ease",
                    }}
                  >
                    <Typography
                      sx={{
                        color:
                          "rgba(255,255,255,0.60)",

                        fontSize: "0.82rem",

                        lineHeight: 1.7,

                        maxWidth: 350,

                        mb: 1.7,
                      }}
                    >
                      {service.description}
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      useFlexGap
                    >
                      {service.tags.map(
                        (tag) => (
                          <Box
                            key={tag}
                            sx={{
                              px: 1,
                              py: 0.4,

                              border:
                                "1px solid rgba(245,158,11,0.22)",

                              color:
                                "rgba(255,255,255,0.45)",

                              fontSize: "0.55rem",

                              letterSpacing:
                                "0.11em",

                              textTransform:
                                "uppercase",
                            }}
                          >
                            {tag}
                          </Box>
                        )
                      )}
                    </Stack>
                  </Box>

                  {/* ================= ICON + ARROW ================= */}

                  <Box
                    sx={{
                      position: "relative",

                      display: "flex",

                      justifyContent:
                        "flex-end",
                    }}
                  >
                    {/* ICON */}

                    <Box
                      className="service-icon"
                      sx={{
                        display: {
                          xs: "none",
                          md: "flex",
                        },

                        position: "absolute",

                        right: 75,

                        top: "50%",

                        width: 46,

                        height: 46,

                        borderRadius: "50%",

                        border:
                          "1px solid rgba(245,158,11,0.45)",

                        color: "#F59E0B",

                        alignItems: "center",

                        justifyContent: "center",

                        opacity: 0,

                        transform:
                          "translateY(-50%) translateX(15px)",

                        transition:
                          "opacity 0.4s ease, transform 0.4s ease",
                      }}
                    >
                      <Icon
                        sx={{
                          fontSize: 21,
                        }}
                      />
                    </Box>

                    {/* ARROW */}

                    <Box
                      className="service-arrow"
                      sx={{
                        width: {
                          xs: 34,
                          md: 44,
                        },

                        height: {
                          xs: 34,
                          md: 44,
                        },

                        borderRadius: "50%",

                        border:
                          "1px solid rgba(245,158,11,0.5)",

                        display: "flex",

                        alignItems: "center",

                        justifyContent: "center",

                        color: "#F59E0B",

                        transition:
                          "transform 0.35s ease, background 0.35s ease, color 0.35s ease",
                      }}
                    >
                      <ArrowOutwardRoundedIcon
                        sx={{
                          fontSize: {
                            xs: 17,
                            md: 21,
                          },
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* ================= BOTTOM STATEMENT ================= */}

        <Box
          sx={{
            mt: {
              xs: 9,
              md: 13,
            },

            textAlign: "center",

            animation:
              "servicesFadeUp 1.2s ease 0.5s both",
          }}
        >
          <Typography
            sx={{
              color:
                "rgba(255,255,255,0.32)",

              fontSize: "0.68rem",

              letterSpacing: "0.28em",

              textTransform: "uppercase",

              mb: 2,
            }}
          >
            STRATEGY • CREATIVITY • PERFORMANCE
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "1.9rem",
                sm: "2.8rem",
                md: "4rem",
              },

              lineHeight: 0.95,

              fontWeight: 800,

              letterSpacing: "-0.045em",

              textTransform: "uppercase",
            }}
          >
            TURNING ATTENTION
            <br />

            <Box
              component="span"
              sx={{
                color: "#F59E0B",
              }}
            >
              INTO IMPACT.
            </Box>
          </Typography>

          <Button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
            endIcon={
              <ArrowOutwardRoundedIcon />
            }
            sx={{
              mt: 4,

              px: 3,

              py: 1.4,

              borderRadius: 0,

              color: "#F59E0B",

              border:
                "1px solid rgba(245,158,11,0.55)",

              fontSize: "0.7rem",

              fontWeight: 700,

              letterSpacing: "0.16em",

              textTransform: "uppercase",

              transition:
                "background 0.3s ease, color 0.3s ease, border 0.3s ease",

              "&:hover": {
                background: "#F59E0B",

                color: "#071012",

                borderColor: "#F59E0B",
              },

              "& .MuiButton-endIcon": {
                transition:
                  "transform 0.3s ease",
              },

              "&:hover .MuiButton-endIcon": {
                transform:
                  "rotate(45deg)",
              },
            }}
          >
            LET'S WORK TOGETHER
          </Button>
        </Box>
      </Container>

      {/* ================= ANIMATIONS ================= */}

      <Box
        component="style"
        sx={{
          "@keyframes servicesFadeUp": {
            "0%": {
              opacity: 0,
              transform:
                "translateY(35px)",
            },

            "100%": {
              opacity: 1,
              transform:
                "translateY(0)",
            },
          },
        }}
      />
    </Box>
  );
}

export default Services;