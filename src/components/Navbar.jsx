import { useEffect, useState } from "react";

import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

const navItems = [
  {
    label: "Home",
    id: "home",
  },
  {
    label: "About",
    id: "about",
  },
  {
    label: "Services",
    id: "services",
  },
  {
  label: "Process",
  id: "process",
  },
  {
    label: "Media",
    id: "media",
  },
  {
    label: "Testimonials",
    id: "testimonials",
  },
  {
    label: "Contact",
    id: "contact",
  },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 170) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setActiveSection(id);
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,

        background: scrolled
          ? "rgba(3, 13, 16, 0.94)"
          : "rgba(3, 13, 16, 0.78)",

        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",

        borderBottom: "1px solid rgba(255,255,255,0.08)",

        transition:
          "background 400ms ease, box-shadow 400ms ease",

        boxShadow: scrolled
          ? "0 12px 40px rgba(0,0,0,0.38)"
          : "0 6px 25px rgba(0,0,0,0.20)",

        overflow: "hidden",

        /* ========================================
           TOP ORANGE LIGHT SWEEP
           ======================================== */

        "&::before": {
          content: '""',

          position: "absolute",

          left: "-30%",
          top: 0,

          width: "26%",
          height: "3px",

          background:
            "linear-gradient(90deg, transparent, rgba(245,158,11,0.35), #F59E0B, #FFF3C4, #FFFFFF, #F59E0B, rgba(245,158,11,0.35), transparent)",

          boxShadow:
            "0 0 8px #F59E0B, 0 0 18px rgba(245,158,11,0.95), 0 0 38px rgba(245,158,11,0.65)",

          filter: "blur(0.5px)",

          animation: "topFire 6s linear infinite",

          pointerEvents: "none",
        },

        /* ========================================
           BOTTOM ORANGE LIGHT SWEEP
           ======================================== */

        "&::after": {
          content: '""',

          position: "absolute",

          left: "-30%",
          bottom: 0,

          width: "26%",
          height: "3px",

          background:
            "linear-gradient(90deg, transparent, rgba(245,158,11,0.35), #F59E0B, #FFF3C4, #FFFFFF, #F59E0B, rgba(245,158,11,0.35), transparent)",

          boxShadow:
            "0 0 8px #F59E0B, 0 0 18px rgba(245,158,11,0.95), 0 0 38px rgba(245,158,11,0.65)",

          filter: "blur(0.5px)",

          animation: "bottomFire 6s linear infinite",

          pointerEvents: "none",
        },

        /* ========================================
           TOP FIRE ANIMATION
           ======================================== */

        "@keyframes topFire": {
          "0%": {
            left: "-30%",
            opacity: 0,
          },

          "8%": {
            left: "-5%",
            opacity: 0.95,
          },

          "42%": {
            left: "55%",
            opacity: 1,
          },

          "50%": {
            left: "110%",
            opacity: 0,
          },

          "100%": {
            left: "110%",
            opacity: 0,
          },
        },

        /* ========================================
           BOTTOM FIRE ANIMATION
           ======================================== */

        "@keyframes bottomFire": {
          "0%": {
            left: "-30%",
            opacity: 0,
          },

          "33.33%": {
            left: "-30%",
            opacity: 0,
          },

          "41%": {
            left: "-5%",
            opacity: 0.95,
          },

          "75%": {
            left: "55%",
            opacity: 1,
          },

          "83.33%": {
            left: "110%",
            opacity: 0,
          },

          "100%": {
            left: "110%",
            opacity: 0,
          },
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: {
            xs: 1.5,
            sm: 3,
            md: 5,
          },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: {
              xs: "66px",
              sm: "72px",
              md: "76px",
            },

            display: "flex",
            alignItems: "center",

            gap: {
              xs: 1,
              sm: 2,
              md: 3,
            },
          }}
        >
          {/* ========================================
              LOGO
              ======================================== */}

          <Box
            onClick={() => handleNavigation("home")}
            sx={{
              flexShrink: 0,

              cursor: "pointer",

              display: "flex",
              flexDirection: "column",

              alignItems: "flex-start",
              justifyContent: "center",

              lineHeight: 1,

              minWidth: {
                xs: "74px",
                sm: "90px",
              },

              "&:hover .logoMain": {
                color: "#FF6B35",
              },

              "&:hover .logoSub": {
                color: "rgba(255,255,255,0.82)",
              },
            }}
          >
            {/* SHEM. */}

            <Typography
              className="logoMain"
              sx={{
                fontSize: {
                  xs: "1.15rem",
                  sm: "1.4rem",
                  md: "1.55rem",
                },

                lineHeight: 0.9,

                fontWeight: 800,

                letterSpacing: {
                  xs: "0.05em",
                  md: "0.07em",
                },

                color: "#FFFFFF",

                transition:
                  "color 250ms ease",

                whiteSpace: "nowrap",
              }}
            >
              SHEM
              <Box
                component="span"
                sx={{
                  color: "#F97316",
                  marginLeft: "2px",
                }}
              >
                .
              </Box>
            </Typography>

            {/* MEDIAS */}

            <Typography
              className="logoSub"
              sx={{
                marginTop: "4px",

                fontSize: {
                  xs: "0.43rem",
                  sm: "0.48rem",
                  md: "0.53rem",
                },

                lineHeight: 1,

                fontWeight: 400,

                letterSpacing: {
                  xs: "0.30em",
                  md: "0.36em",
                },

                color: "rgba(255,255,255,0.55)",

                paddingLeft: "1px",

                transition:
                  "color 250ms ease",

                whiteSpace: "nowrap",
              }}
            >
              MEDIAS
            </Typography>
          </Box>

          {/* ========================================
              NAVIGATION
              ======================================== */}

          <Stack
            direction="row"
            spacing={{
              xs: 0.15,
              sm: 0.4,
              md: 0.8,
            }}
            sx={{
              flex: 1,

              justifyContent: {
                xs: "flex-start",
                md: "center",
              },

              overflowX: "auto",
              overflowY: "hidden",

              scrollbarWidth: "none",

              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {navItems.map((item) => {
              const isActive =
                activeSection === item.id;

              return (
                <Button
                  key={item.id}
                  onClick={() =>
                    handleNavigation(item.id)
                  }
                  sx={{
                    position: "relative",

                    flexShrink: 0,

                    minWidth: "auto",

                    px: {
                      xs: 0.75,
                      sm: 1.1,
                      md: 1.4,
                    },

                    py: {
                      xs: 0.9,
                      sm: 1,
                    },

                    borderRadius: "4px",

                    color: isActive
                      ? "#FFFFFF"
                      : "rgba(255,255,255,0.62)",

                    background: isActive
                      ? "rgba(249,115,22,0.10)"
                      : "transparent",

                    fontSize: {
                      xs: "0.57rem",
                      sm: "0.65rem",
                      md: "0.70rem",
                    },

                    fontWeight: isActive
                      ? 600
                      : 500,

                    letterSpacing: {
                      xs: "0.07em",
                      sm: "0.09em",
                      md: "0.12em",
                    },

                    textTransform: "uppercase",

                    whiteSpace: "nowrap",

                    transition:
                      "color 250ms ease, background 250ms ease, transform 250ms ease",

                    /* ACTIVE ORANGE LINE */

                    "&::after": {
                      content: '""',

                      position: "absolute",

                      left: "15%",
                      right: "15%",

                      bottom: "2px",

                      height: "2px",

                      borderRadius: "10px",

                      background:
                        "linear-gradient(90deg, #F97316, #FB923C)",

                      transform: isActive
                        ? "scaleX(1)"
                        : "scaleX(0)",

                      transformOrigin: "center",

                      transition:
                        "transform 350ms ease",

                      boxShadow:
                        "0 0 10px rgba(249,115,22,0.55)",
                    },

                    "&:hover": {
                      color: "#FFFFFF",

                      background:
                        "rgba(249,115,22,0.08)",

                      transform:
                        "translateY(-1px)",

                      "&::after": {
                        transform:
                          "scaleX(1)",
                      },
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Stack>

          {/* ========================================
              LET'S TALK
              ======================================== */}

          <Button
            onClick={() =>
              handleNavigation("contact")
            }
            endIcon={
              <ArrowOutwardRoundedIcon />
            }
            sx={{
              flexShrink: 0,

              display: {
                xs: "none",
                sm: "inline-flex",
              },

              px: {
                sm: 1.4,
                md: 1.9,
              },

              py: {
                sm: 0.85,
                md: 0.95,
              },

              borderRadius: "3px",

              color: "#FFFFFF",

              border:
                "1px solid rgba(249,115,22,0.75)",

              background:
                "rgba(249,115,22,0.04)",

              fontSize: {
                sm: "0.62rem",
                md: "0.68rem",
              },

              fontWeight: 600,

              letterSpacing: "0.10em",

              textTransform: "uppercase",

              transition:
                "all 250ms ease",

              "& .MuiButton-endIcon": {
                marginLeft: "4px",

                "& svg": {
                  fontSize: "15px",

                  transition:
                    "transform 250ms ease",
                },
              },

              "&:hover": {
                color: "#FFFFFF",

                borderColor: "#F97316",

                background:
                  "rgba(249,115,22,0.15)",

                transform:
                  "translateY(-1px)",

                boxShadow:
                  "0 8px 24px rgba(249,115,22,0.16)",

                "& .MuiButton-endIcon svg": {
                  transform:
                    "translate(2px, -2px)",
                },
              },
            }}
          >
            Let's Talk
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;