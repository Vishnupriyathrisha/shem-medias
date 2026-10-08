import { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
} from "@mui/material";

import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

const quickLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Media", id: "media" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

const services = [
  "Digital Marketing",
  "Social Media",
  "Branding",
  "Content Creation",
  "Paid Campaigns",
  "Creative Strategy",
];

export default function Footer() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component="footer"
      ref={footerRef}
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "#050A0C",
        color: "#fff",
      }}
    >
      {/* =========================================
          TOP ANIMATED ORANGE LINE
      ========================================= */}

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "2px",
          overflow: "hidden",
          background: "rgba(245,158,11,0.12)",

          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-25%",
            width: "25%",
            height: "100%",
            background:
              "linear-gradient(90deg, transparent, #F59E0B, #FFF3C4, #F59E0B, transparent)",
            boxShadow:
              "0 0 15px rgba(245,158,11,0.8)",
            animation:
              "footerLight 6s linear infinite",
          },
        }}
      />

      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      <Box
        sx={{
          position: "absolute",
          width: { xs: 280, md: 520 },
          height: { xs: 280, md: 520 },
          borderRadius: "50%",
          right: "-260px",
          top: "10%",
          background:
            "radial-gradient(circle, rgba(245,158,11,0.07), transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: { xs: 260, md: 480 },
          height: { xs: 260, md: 480 },
          borderRadius: "50%",
          left: "-250px",
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
          pt: { xs: 8, md: 11 },
          pb: { xs: 2, md: 3 },
        }}
      >
        {/* =========================================
            TOP BRAND AREA
        ========================================= */}

        <Box
          sx={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateY(0)"
              : "translateY(40px)",
            transition:
              "opacity 1s ease, transform 1s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "3rem",
                sm: "4rem",
                md: "5.5rem",
              },
              lineHeight: 0.9,
              fontWeight: 800,
              letterSpacing: "-0.06em",
            }}
          >
            SHEM.
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "#F59E0B",
              fontSize: {
                xs: "0.7rem",
                md: "0.78rem",
              },
              letterSpacing: "0.32em",
              fontWeight: 400,
            }}
          >
            MEDIAS
          </Typography>

          <Typography
            sx={{
              mt: 2.5,
              maxWidth: "470px",
              color: "rgba(255,255,255,0.42)",
              fontSize: {
                xs: "0.78rem",
                md: "0.84rem",
              },
              lineHeight: 1.8,
            }}
          >
            Digital marketing, creative content and
            brand experiences built to create attention,
            connection and growth.
          </Typography>
        </Box>

        {/* =========================================
            MAIN FOOTER GRID
        ========================================= */}

        <Box
          sx={{
            mt: { xs: 7, md: 9 },
            pt: { xs: 5, md: 6 },

            borderTop:
              "1px solid rgba(255,255,255,0.08)",

            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
              lg: "1.2fr 0.8fr 1fr 1.1fr",
            },

            gap: {
              xs: 5,
              sm: 6,
              md: 5,
              lg: 4,
            },

            opacity: visible ? 1 : 0,

            transform: visible
              ? "translateY(0)"
              : "translateY(35px)",

            transition:
              "opacity 1s ease 0.15s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.15s",
          }}
        >
          {/* =========================================
              EXPLORE
          ========================================= */}

          <Box>
            <Typography
              sx={{
                mb: 2.5,
                color: "#F59E0B",
                fontSize: "0.64rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
              }}
            >
              EXPLORE
            </Typography>

            <Stack spacing={1.35}>
              {quickLinks.map((link) => (
                <Box
                  key={link.id}
                  component="button"
                  onClick={() =>
                    scrollToSection(link.id)
                  }
                  sx={{
                    width: "fit-content",
                    border: 0,
                    padding: 0,
                    background: "transparent",

                    color:
                      "rgba(255,255,255,0.48)",

                    cursor: "pointer",
                    fontFamily: "inherit",

                    fontSize: "0.76rem",
                    textAlign: "left",

                    transition:
                      "all 0.3s ease",

                    "&:hover": {
                      color: "#F59E0B",
                      transform:
                        "translateX(6px)",
                    },
                  }}
                >
                  {link.label}
                </Box>
              ))}
            </Stack>
          </Box>

          {/* =========================================
              SERVICES
          ========================================= */}

          <Box>
            <Typography
              sx={{
                mb: 2.5,
                color: "#F59E0B",
                fontSize: "0.64rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
              }}
            >
              SERVICES
            </Typography>

            <Stack spacing={1.35}>
              {services.map((service) => (
                <Typography
                  key={service}
                  sx={{
                    color:
                      "rgba(255,255,255,0.46)",
                    fontSize: "0.76rem",
                    lineHeight: 1.4,
                    transition:
                      "all 0.3s ease",

                    "&:hover": {
                      color: "#fff",
                      transform:
                        "translateX(5px)",
                    },
                  }}
                >
                  {service}
                </Typography>
              ))}
            </Stack>
          </Box>

          {/* =========================================
              CONTACT
          ========================================= */}

          <Box>
            <Typography
              sx={{
                mb: 2.5,
                color: "#F59E0B",
                fontSize: "0.64rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
              }}
            >
              CONTACT
            </Typography>

            <Typography
              sx={{
                color: "#fff",
                fontSize: "0.82rem",
                lineHeight: 1.7,
              }}
            >
              hello@shemmedias.com
            </Typography>

            <Typography
              sx={{
                mt: 1,
                color:
                  "rgba(255,255,255,0.45)",
                fontSize: "0.78rem",
              }}
            >
              +91 XXXXX XXXXX
            </Typography>

            <Typography
              sx={{
                mt: 1,
                color:
                  "rgba(255,255,255,0.45)",
                fontSize: "0.78rem",
              }}
            >
              Tamil Nadu · India
            </Typography>

            <Box
              component="button"
              onClick={() =>
                scrollToSection("contact")
              }
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,

                mt: 2.5,

                px: 2.3,
                py: 1.15,

                border:
                  "1px solid #F59E0B",

                background: "transparent",
                color: "#F59E0B",

                cursor: "pointer",
                fontFamily: "inherit",

                fontSize: "0.64rem",
                fontWeight: 700,
                letterSpacing: "0.12em",

                transition:
                  "all 0.3s ease",

                "&:hover": {
                  background: "#F59E0B",
                  color: "#071012",
                  boxShadow:
                    "0 10px 28px rgba(245,158,11,0.18)",
                },
              }}
            >
              LET'S TALK

              <ArrowOutwardRoundedIcon
                sx={{
                  fontSize: 16,
                  transition:
                    "transform 0.3s ease",
                }}
              />
            </Box>
          </Box>

          {/* =========================================
              SOCIAL / FINAL AREA
          ========================================= */}

          <Box>
            <Typography
              sx={{
                mb: 2.5,
                color: "#F59E0B",
                fontSize: "0.64rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
              }}
            >
              FOLLOW ALONG
            </Typography>

            <Typography
              sx={{
                maxWidth: "230px",
                color:
                  "rgba(255,255,255,0.4)",
                fontSize: "0.76rem",
                lineHeight: 1.7,
              }}
            >
              Stay connected with our latest
              creative work, campaigns and
              digital stories.
            </Typography>

            {/* SOCIAL BUTTONS */}

            <Stack
              direction="row"
              spacing={1}
              sx={{
                mt: 2.5,
              }}
            >
              {["IG", "LI", "FB"].map(
                (social) => (
                  <Box
                    key={social}
                    component="button"
                    sx={{
                      width: 38,
                      height: 38,

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      border:
                        "1px solid rgba(255,255,255,0.12)",

                      background:
                        "rgba(255,255,255,0.02)",

                      color:
                        "rgba(255,255,255,0.5)",

                      cursor: "pointer",
                      fontFamily: "inherit",

                      fontSize: "0.62rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",

                      transition:
                        "all 0.3s ease",

                      "&:hover": {
                        background:
                          "#F59E0B",
                        borderColor:
                          "#F59E0B",
                        color: "#071012",
                        transform:
                          "translateY(-4px)",
                        boxShadow:
                          "0 8px 20px rgba(245,158,11,0.2)",
                      },
                    }}
                  >
                    {social}
                  </Box>
                )
              )}
            </Stack>
          </Box>
        </Box>

        {/* =========================================
            BOTTOM DIVIDER
        ========================================= */}

        <Box
          sx={{
            mt: { xs: 7, md: 9 },
            width: "100%",
            height: "1px",

            background:
              "linear-gradient(90deg, #F59E0B 0%, rgba(245,158,11,0.25) 30%, rgba(255,255,255,0.07) 100%)",
          }}
        />

        {/* =========================================
            BOTTOM BAR
        ========================================= */}

        <Box
          sx={{
            py: 2.8,

            display: "flex",

            flexDirection: {
              xs: "column",
              md: "row",
            },

            alignItems: {
              xs: "flex-start",
              md: "center",
            },

            justifyContent:
              "space-between",

            gap: 2,
          }}
        >
          <Typography
            sx={{
              color:
                "rgba(255,255,255,0.25)",
              fontSize: "0.59rem",
              letterSpacing: "0.08em",
            }}
          >
            © {new Date().getFullYear()} SHEM MEDIAS. ALL RIGHTS RESERVED.
          </Typography>

          <Typography
            sx={{
              color:
                "rgba(255,255,255,0.18)",
              fontSize: "0.58rem",
              letterSpacing: "0.12em",
            }}
          >
            DIGITAL · CREATIVE · MEDIA
          </Typography>

          {/* BACK TO TOP */}

          <Box
            component="button"
            onClick={scrollToTop}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.4,

              border: 0,
              padding: 0,

              background: "transparent",
              color:
                "rgba(255,255,255,0.42)",

              cursor: "pointer",
              fontFamily: "inherit",

              fontSize: "0.6rem",
              fontWeight: 700,
              letterSpacing: "0.12em",

              transition:
                "all 0.3s ease",

              "&:hover": {
                color: "#F59E0B",
                transform:
                  "translateY(-3px)",
              },
            }}
          >
            BACK TO TOP

            <KeyboardArrowUpRoundedIcon
              sx={{
                fontSize: 17,
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* =========================================
          ANIMATION
      ========================================= */}

      <Box
        sx={{
          "@keyframes footerLight": {
            "0%": {
              left: "-25%",
              opacity: 0,
            },

            "10%": {
              left: "-5%",
              opacity: 1,
            },

            "50%": {
              left: "105%",
              opacity: 1,
            },

            "55%": {
              left: "125%",
              opacity: 0,
            },

            "100%": {
              left: "125%",
              opacity: 0,
            },
          },
        }}
      />
    </Box>
  );
}