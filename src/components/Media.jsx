import { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
} from "@mui/material";

import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";

const mediaItems = [
  {
    number: "01",
    category: "SOCIAL STORIES",
    title: "SOCIAL",
    subtitle: "Reels & Social Creatives",
    image: "/media-social.jpg",
  },
  {
    number: "02",
    category: "BRAND FILMS",
    title: "BRAND",
    subtitle: "Visual Brand Storytelling",
    image: "/media-brand-film.jpg",
  },
  {
    number: "03",
    category: "CAMPAIGNS",
    title: "CAMPAIGN",
    subtitle: "Digital Campaign Creatives",
    image: "/media-campaign.jpg",
  },
  {
    number: "04",
    category: "PRODUCT VISUALS",
    title: "PRODUCT",
    subtitle: "Product-focused Content",
    image: "/media-product.jpg",
  },
  {
    number: "05",
    category: "EVENT STORIES",
    title: "EVENT",
    subtitle: "Event & Experience Coverage",
    image: "/media-event.jpg",
  },
  {
    number: "06",
    category: "CREATIVE WORKS",
    title: "CREATIVE",
    subtitle: "Experimental Visuals",
    image: "/media-creative.jpg",
  },
];

function MediaCard({ item, index, visible }) {
  const fromLeft = index % 2 === 0;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: "320px",
          sm: "380px",
          md: "420px",
        },
        overflow: "hidden",
        borderRadius: "3px",
        background: "#10191B",

        opacity: visible ? 1 : 0,

        transform: visible
          ? "translateX(0) scale(1)"
          : `translateX(${fromLeft ? "-90px" : "90px"}) scale(0.97)`,

        transition: `
          opacity 1.15s cubic-bezier(0.22, 1, 0.36, 1)
            ${index * 0.16}s,
          transform 1.15s cubic-bezier(0.22, 1, 0.36, 1)
            ${index * 0.16}s
        `,

        "&:hover .media-image": {
          transform: "scale(1.07)",
        },

        "&:hover .media-overlay": {
          opacity: 0.92,
        },

        "&:hover .media-content": {
          opacity: 1,
          transform: "translateY(0)",
        },

        "&:hover .media-edge": {
          height: "100%",
        },

        "&:hover .media-play": {
          background: "#F59E0B",
          color: "#071013",
          transform: "translate(-50%, -50%) scale(1.08)",
        },
      }}
    >
      {/* IMAGE */}
      <Box
        className="media-image"
        sx={{
          position: "absolute",
          inset: 0,

          backgroundImage: `url("${item.image}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",

          transform: "scale(1)",

          transition:
            "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />

      {/* DARK OVERLAY */}
      <Box
        className="media-overlay"
        sx={{
          position: "absolute",
          inset: 0,

          opacity: 0.68,

          background: `
            linear-gradient(
              180deg,
              rgba(3,8,10,0.08) 0%,
              rgba(3,8,10,0.18) 38%,
              rgba(3,8,10,0.94) 100%
            )
          `,

          transition: "opacity 0.5s ease",
        }}
      />

      {/* ORANGE LEFT LINE */}
      <Box
        className="media-edge"
        sx={{
          position: "absolute",
          left: 0,
          top: 0,

          width: "3px",
          height: "0%",

          background: "#F59E0B",

          transition:
            "height 0.55s cubic-bezier(0.22, 1, 0.36, 1)",

          zIndex: 5,
        }}
      />

      {/* NUMBER */}
      <Typography
        sx={{
          position: "absolute",

          top: {
            xs: 16,
            md: 20,
          },

          left: {
            xs: 17,
            md: 21,
          },

          color: "#fff",

          fontSize: "0.67rem",

          fontWeight: 700,

          letterSpacing: "0.14em",

          zIndex: 5,
        }}
      >
        {item.number}
      </Typography>

      {/* CATEGORY */}
      <Typography
        sx={{
          position: "absolute",

          top: {
            xs: 16,
            md: 20,
          },

          right: {
            xs: 17,
            md: 21,
          },

          px: 1.2,
          py: 0.6,

          border:
            "1px solid rgba(255,255,255,0.3)",

          color: "#fff",

          fontSize: "0.53rem",

          fontWeight: 600,

          letterSpacing: "0.12em",

          background:
            "rgba(4,10,12,0.32)",

          backdropFilter: "blur(5px)",

          zIndex: 5,
        }}
      >
        {item.category}
      </Typography>

      {/* CENTER PLAY */}
      <Box
        className="media-play"
        sx={{
          position: "absolute",

          top: "50%",
          left: "50%",

          transform:
            "translate(-50%, -50%)",

          width: {
            xs: 45,
            md: 50,
          },

          height: {
            xs: 45,
            md: 50,
          },

          display: "flex",

          alignItems: "center",
          justifyContent: "center",

          border:
            "1px solid rgba(255,255,255,0.65)",

          borderRadius: "50%",

          color: "#fff",

          background:
            "rgba(4,10,12,0.28)",

          backdropFilter: "blur(5px)",

          transition:
            "all 0.35s ease",

          zIndex: 5,

          "& svg": {
            fontSize: 21,
            ml: "2px",
          },
        }}
      >
        <PlayArrowRoundedIcon />
      </Box>

      {/* DESKTOP CONTENT */}
      <Box
        className="media-content"
        sx={{
          position: "absolute",

          left: {
            xs: 18,
            md: 22,
          },

          right: {
            xs: 18,
            md: 22,
          },

          bottom: {
            xs: 18,
            md: 22,
          },

          zIndex: 5,

          opacity: {
            xs: 1,
            md: 0,
          },

          transform: {
            xs: "translateY(0)",
            md: "translateY(18px)",
          },

          transition:
            "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <Typography
          sx={{
            color: "#F59E0B",

            fontSize: "0.59rem",

            fontWeight: 700,

            letterSpacing: "0.18em",

            mb: 0.7,
          }}
        >
          {item.category}
        </Typography>

        <Typography
          sx={{
            color: "#fff",

            fontSize: {
              xs: "1.8rem",
              sm: "2.1rem",
              md: "2.65rem",
            },

            fontWeight: 800,

            lineHeight: 0.9,

            letterSpacing: "-0.05em",
          }}
        >
          {item.title}
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{
            mt: 1.2,
          }}
        >
          <Box
            sx={{
              width: 22,
              height: "1px",
              background: "#F59E0B",
            }}
          />

          <Typography
            sx={{
              color:
                "rgba(255,255,255,0.68)",

              fontSize: "0.63rem",

              letterSpacing: "0.04em",
            }}
          >
            {item.subtitle}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

function Media() {
  const sectionRef = useRef(null);

  const [visibleItems, setVisibleItems] =
    useState(
      Array(mediaItems.length).fill(false)
    );

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const cards =
      section.querySelectorAll(
        ".media-reveal"
      );

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = Number(
              entry.target.getAttribute(
                "data-index"
              )
            );

            setVisibleItems((prev) => {
              const updated = [...prev];

              updated[index] =
                entry.isIntersecting;

              return updated;
            });
          });
        },
        {
          threshold: 0.12,

          rootMargin:
            "0px 0px -70px 0px",
        }
      );

    cards.forEach((card) =>
      observer.observe(card)
    );

    return () =>
      observer.disconnect();
  }, []);

  return (
    <Box
      id="media"
      ref={sectionRef}
      sx={{
        position: "relative",

        width: "100%",

        overflow: "hidden",

        background: `
          radial-gradient(
            circle at 85% 15%,
            rgba(245,158,11,0.065),
            transparent 28%
          ),
          radial-gradient(
            circle at 10% 80%,
            rgba(20,184,166,0.045),
            transparent 30%
          ),
          #070D0F
        `,

        color: "#fff",

        pt: {
          xs: 10,
          md: 14,
        },

        pb: {
          xs: 7,
          md: 10,
        },
      }}
    >
      {/* TOP BORDER */}
      <Box
        sx={{
          position: "absolute",

          top: 0,
          left: 0,

          width: "100%",
          height: "1px",

          background:
            "linear-gradient(90deg, transparent, rgba(245,158,11,0.45), transparent)",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          px: {
            xs: 2.5,
            sm: 4,
            md: 6,
          },
        }}
      >
        {/* ================= HEADER ================= */}

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "1.1fr 0.9fr",
            },

            alignItems: "center",

            gap: {
              xs: 4,
              md: 6,
            },

            mb: {
              xs: 5,
              md: 7,
            },
          }}
        >
          {/* LEFT HEADING */}

          <Box>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1.5}
              sx={{
                mb: 2.2,
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: "1px",
                  background: "#F59E0B",
                }}
              />

              <Typography
                sx={{
                  color: "#F59E0B",

                  fontSize: "0.64rem",

                  fontWeight: 700,

                  letterSpacing: "0.2em",
                }}
              >
                OUR CREATIVE WORLD
              </Typography>
            </Stack>

            <Typography
              sx={{
                fontSize: {
                  xs: "2.65rem",
                  sm: "3.7rem",
                  md: "5rem",
                },

                fontWeight: 800,

                lineHeight: 0.88,

                letterSpacing: "-0.055em",

                textTransform: "uppercase",
              }}
            >
              WE MAKE
              <br />

              THE MOMENT{" "}
              <Box
                component="span"
                sx={{
                  color: "#F59E0B",
                }}
              >
                MOVE.
              </Box>
            </Typography>
          </Box>

          {/* RIGHT VISUAL */}

          <Box
            sx={{
              position: "relative",

              minHeight: {
                xs: "155px",
                md: "190px",
              },

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              borderLeft: {
                xs: "none",
                md:
                  "1px solid rgba(255,255,255,0.1)",
              },

              borderTop: {
                xs:
                  "1px solid rgba(255,255,255,0.1)",
                md: "none",
              },

              pt: {
                xs: 3,
                md: 0,
              },

              /* ⭐ ZOOM IN / ZOOM OUT ⭐ */
              animation:
                "mediaZoom 5.5s ease-in-out infinite",

              "@media (prefers-reduced-motion: reduce)":
                {
                  animation: "none",
                },

              "&::before": {
                content: '""',

                position: "absolute",

                width: {
                  xs: 115,
                  md: 155,
                },

                height: {
                  xs: 115,
                  md: 155,
                },

                border:
                  "1px dashed rgba(245,158,11,0.25)",

                borderRadius: "50%",

                animation:
                  "mediaRotate 18s linear infinite",

                "@media (prefers-reduced-motion: reduce)":
                  {
                    animation: "none",
                  },
              },
            }}
          >
            <Box
              sx={{
                width: {
                  xs: 54,
                  md: 62,
                },

                height: {
                  xs: 54,
                  md: 62,
                },

                border:
                  "1px solid rgba(245,158,11,0.55)",

                borderRadius: "50%",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                background:
                  "rgba(245,158,11,0.045)",

                zIndex: 2,
              }}
            >
              <CameraAltRoundedIcon
                sx={{
                  color: "#F59E0B",

                  fontSize: {
                    xs: 24,
                    md: 27,
                  },
                }}
              />
            </Box>

            <Typography
              sx={{
                position: "absolute",

                top: {
                  xs: 5,
                  md: 10,
                },

                right: {
                  xs: 5,
                  md: 14,
                },

                color:
                  "rgba(255,255,255,0.28)",

                fontSize: "0.5rem",

                letterSpacing: "0.18em",
              }}
            >
              VISUAL / 06
            </Typography>

            <Typography
              sx={{
                position: "absolute",

                bottom: {
                  xs: 5,
                  md: 10,
                },

                left: {
                  xs: 5,
                  md: 14,
                },

                color:
                  "rgba(255,255,255,0.28)",

                fontSize: "0.5rem",

                letterSpacing: "0.18em",
              }}
            >
              FRAME / STORY
            </Typography>

            <Box
              sx={{
                position: "absolute",

                width: 6,
                height: 6,

                borderRadius: "50%",

                background: "#F59E0B",

                boxShadow:
                  "0 0 12px rgba(245,158,11,0.8)",

                top: "50%",

                left: {
                  xs: "calc(50% + 72px)",
                  md: "calc(50% + 94px)",
                },

                transform:
                  "translate(-50%, -50%)",
              }}
            />
          </Box>

          {/* DESCRIPTION */}

          <Typography
            sx={{
              gridColumn: {
                xs: "auto",
                md: "1 / -1",
              },

              maxWidth: "700px",

              color:
                "rgba(255,255,255,0.5)",

              fontSize: {
                xs: "0.75rem",
                md: "0.84rem",
              },

              lineHeight: 1.8,

              letterSpacing: "0.025em",

              mt: {
                xs: -1.5,
                md: -2,
              },
            }}
          >
            From social stories to brand films,
            campaigns to product visuals — we turn
            ideas into visual experiences people stop,
            watch and remember.
          </Typography>
        </Box>

        {/* ================= ORGANIZED GRID ================= */}

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },

            gap: {
              xs: 2,
              sm: 2.5,
              md: 3,
            },
          }}
        >
          {mediaItems.map(
            (item, index) => (
              <Box
                key={item.number}
                className="media-reveal"
                data-index={index}
                sx={{
                  width: "100%",
                }}
              >
                <MediaCard
                  item={item}
                  index={index}
                  visible={
                    visibleItems[index]
                  }
                />
              </Box>
            )
          )}
        </Box>

        {/* ================= BOTTOM STATEMENT ================= */}

        <Box
          sx={{
            mt: {
              xs: 7,
              md: 9,
            },

            pt: {
              xs: 4,
              md: 5,
            },

            borderTop:
              "1px solid rgba(255,255,255,0.09)",

            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color:
                "rgba(255,255,255,0.33)",

              fontSize: "0.59rem",

              letterSpacing: "0.2em",

              mb: 1.7,
            }}
          >
            SHEM MEDIAS / VISUAL STORYTELLING
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "1.7rem",
                sm: "2.25rem",
                md: "3.2rem",
              },

              fontWeight: 800,

              lineHeight: 1,

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

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{
              mt: 2.3,
            }}
          >
            <Typography
              sx={{
                color:
                  "rgba(255,255,255,0.4)",

                fontSize: "0.61rem",

                letterSpacing: "0.15em",
              }}
            >
              VIEW OUR CREATIVE WORLD
            </Typography>

            <ArrowOutwardRoundedIcon
              sx={{
                fontSize: 16,
                color: "#F59E0B",
              }}
            />
          </Stack>
        </Box>
      </Container>

      {/* SIDE TEXT */}

      <Typography
        sx={{
          position: "absolute",

          right: "-30px",

          top: "48%",

          transform:
            "rotate(90deg) translateX(50%)",

          transformOrigin:
            "right center",

          color:
            "rgba(255,255,255,0.05)",

          fontSize: "0.56rem",

          fontWeight: 700,

          letterSpacing: "0.38em",

          whiteSpace: "nowrap",

          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        SOCIAL • BRAND • CAMPAIGN • VISUALS
      </Typography>

      {/* ANIMATIONS */}

      <Box
        sx={{
          "@keyframes mediaRotate": {
            "0%": {
              transform: "rotate(0deg)",
            },

            "100%": {
              transform: "rotate(360deg)",
            },
          },

          /* ⭐ NEW ZOOM ANIMATION ⭐ */
          "@keyframes mediaZoom": {
            "0%": {
              transform: "scale(0.94)",
            },

            "50%": {
              transform: "scale(1.06)",
            },

            "100%": {
              transform: "scale(0.94)",
            },
          },
        }}
      />
    </Box>
  );
}

export default Media;