import { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
} from "@mui/material";

const results = [
  {
    number: "25+",
    label: "PROJECTS",
    subLabel: "COMPLETED",
  },
  {
    number: "15+",
    label: "BRANDS",
    subLabel: "CONNECTED",
  },
  {
    number: "30+",
    label: "CAMPAIGNS",
    subLabel: "CREATED",
  },
  {
    number: "100K+",
    label: "PEOPLE",
    subLabel: "REACHED",
  },
];

export default function Results() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      id="results"
      ref={sectionRef}
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "#070D0F",
        color: "#fff",
        py: { xs: 10, md: 14 },
      }}
    >
      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      <Box
        sx={{
          position: "absolute",
          width: { xs: 300, md: 520 },
          height: { xs: 300, md: 520 },
          borderRadius: "50%",
          right: "-280px",
          top: "8%",
          background:
            "radial-gradient(circle, rgba(245,158,11,0.08), transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: { xs: 240, md: 420 },
          height: { xs: 240, md: 420 },
          borderRadius: "50%",
          left: "-260px",
          bottom: "-180px",
          background:
            "radial-gradient(circle, rgba(20,184,166,0.05), transparent 68%)",
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
        {/* =========================================
            HEADER
        ========================================= */}

        <Box
          sx={{
            opacity: visible ? 1 : 0,

            transform: visible
              ? "translateY(0)"
              : "translateY(45px)",

            transition:
              "opacity 1s ease, transform 1s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{
              mb: 2.5,
            }}
          >
            <Box
              sx={{
                width: 35,
                height: "1px",
                background: "#F59E0B",
              }}
            />

            <Typography
              sx={{
                color: "#F59E0B",
                fontSize: "0.67rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
              }}
            >
              OUR IMPACT
            </Typography>
          </Stack>

          <Typography
            sx={{
              fontSize: {
                xs: "2.8rem",
                sm: "4.2rem",
                md: "5.8rem",
              },

              lineHeight: 0.9,

              fontWeight: 800,

              letterSpacing: "-0.065em",

              textTransform: "uppercase",

              maxWidth: "900px",
            }}
          >
            NUMBERS
            <br />

            <Box
              component="span"
              sx={{
                color: "#F59E0B",
              }}
            >
              THAT MATTER.
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 3,

              maxWidth: "570px",

              color:
                "rgba(255,255,255,0.42)",

              fontSize: {
                xs: "0.8rem",
                md: "0.88rem",
              },

              lineHeight: 1.8,
            }}
          >
            Every project adds to our journey.
            From campaigns and content to brands
            and audiences, these numbers represent
            the work we create together.
          </Typography>
        </Box>

        {/* =========================================
            METRICS
        ========================================= */}

        <Box
          sx={{
            mt: {
              xs: 7,
              md: 10,
            },

            display: "grid",

            gridTemplateColumns: {
              xs: "1fr 1fr",
              md: "repeat(4, 1fr)",
            },

            borderTop:
              "1px solid rgba(255,255,255,0.1)",

            borderLeft:
              "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {results.map((item, index) => (
            <Box
              key={item.label}
              sx={{
                position: "relative",

                minHeight: {
                  xs: 210,
                  sm: 250,
                  md: 300,
                },

                p: {
                  xs: 2.5,
                  sm: 3.5,
                  md: 4,
                },

                borderRight:
                  "1px solid rgba(255,255,255,0.1)",

                borderBottom:
                  "1px solid rgba(255,255,255,0.1)",

                overflow: "hidden",

                opacity: visible ? 1 : 0,

                transform: visible
                  ? "translateY(0)"
                  : "translateY(65px)",

                transition: `
                  opacity 1s ease ${index * 0.16}s,
                  transform 1s cubic-bezier(0.22,1,0.36,1) ${index * 0.16}s,
                  background 0.4s ease
                `,

                "&::before": {
                  content: '""',

                  position: "absolute",

                  top: 0,
                  left: 0,

                  width: "100%",
                  height: "2px",

                  background: "#F59E0B",

                  transform:
                    "scaleX(0)",

                  transformOrigin:
                    "left",

                  transition:
                    "transform 0.45s ease",
                },

                "&:hover::before": {
                  transform:
                    "scaleX(1)",
                },

                "&:hover": {
                  background:
                    "linear-gradient(145deg, #102024, #091416)",
                },
              }}
            >
              {/* Small number */}

              <Typography
                sx={{
                  color:
                    "rgba(255,255,255,0.3)",

                  fontSize: "0.63rem",

                  fontWeight: 700,

                  letterSpacing: "0.15em",
                }}
              >
                0{index + 1}
              </Typography>

              {/* Main metric */}

              <Typography
                sx={{
                  mt: {
                    xs: 5,
                    md: 7,
                  },

                  fontSize: {
                    xs: "2.5rem",
                    sm: "3.5rem",
                    md: "4.3rem",
                  },

                  lineHeight: 0.9,

                  fontWeight: 800,

                  letterSpacing: "-0.065em",

                  color: "#F59E0B",

                  transition:
                    "transform 0.4s ease, text-shadow 0.4s ease",

                  ".MuiBox-root:hover &": {
                    transform:
                      "translateX(5px)",
                  },
                }}
              >
                {item.number}
              </Typography>

              {/* Label */}

              <Typography
                sx={{
                  mt: 2,

                  color: "#fff",

                  fontSize: {
                    xs: "0.72rem",
                    sm: "0.78rem",
                    md: "0.82rem",
                  },

                  fontWeight: 700,

                  letterSpacing: "0.12em",

                  lineHeight: 1.4,
                }}
              >
                {item.label}
                <br />
                <Box
                  component="span"
                  sx={{
                    color:
                      "rgba(255,255,255,0.38)",
                  }}
                >
                  {item.subLabel}
                </Box>
              </Typography>

              {/* Orange dot */}

              <Box
                sx={{
                  position: "absolute",

                  right: {
                    xs: 18,
                    md: 28,
                  },

                  bottom: {
                    xs: 18,
                    md: 28,
                  },

                  width: 6,
                  height: 6,

                  borderRadius: "50%",

                  background: "#F59E0B",

                  boxShadow:
                    "0 0 14px rgba(245,158,11,0.7)",
                }}
              />
            </Box>
          ))}
        </Box>

        {/* =========================================
            BOTTOM MESSAGE
        ========================================= */}

        <Box
          sx={{
            mt: {
              xs: 7,
              md: 10,
            },

            display: "flex",

            alignItems: "center",

            justifyContent:
              "space-between",

            gap: 3,

            flexDirection: {
              xs: "column",
              md: "row",
            },

            opacity: visible ? 1 : 0,

            transform: visible
              ? "translateY(0)"
              : "translateY(30px)",

            transition:
              "opacity 1s ease 0.7s, transform 1s ease 0.7s",
          }}
        >
          <Typography
            sx={{
              color:
                "rgba(255,255,255,0.28)",

              fontSize: "0.67rem",

              letterSpacing: "0.2em",

              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            PROJECTS • BRANDS • CAMPAIGNS • AUDIENCE
          </Typography>

          <Box
            sx={{
              width: {
                xs: "100%",
                md: "180px",
              },

              height: "1px",

              background:
                "linear-gradient(90deg, transparent, #F59E0B)",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}