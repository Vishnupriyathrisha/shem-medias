import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

function Home() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#030A0D",
        color: "#F8FAFC",

        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(3,10,13,0.97) 0%,
            rgba(3,10,13,0.88) 30%,
            rgba(3,10,13,0.64) 58%,
            rgba(3,10,13,0.58) 100%
          ),
          linear-gradient(
            180deg,
            rgba(0,0,0,0.20),
            rgba(0,0,0,0.32)
          ),
          url("/shem-home-bg.jpg")
        `,

        backgroundSize: "cover",

        backgroundPosition: {
          xs: "68% center",
          md: "58% center",
        },

        backgroundRepeat: "no-repeat",

        display: "flex",
        alignItems: "center",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 78% 48%, rgba(245,158,11,0.09), transparent 28%), radial-gradient(circle at 48% 20%, rgba(13,148,136,0.08), transparent 32%)",
          pointerEvents: "none",
        },

        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-20%",
          width: "18%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, #F59E0B, #FFF3C4, transparent)",
          boxShadow: "0 0 20px rgba(245,158,11,0.8)",
          animation: "homeLightSweep 7s linear infinite",
          pointerEvents: "none",
        },

        "@keyframes homeLightSweep": {
          "0%": {
            left: "-20%",
            opacity: 0,
          },
          "10%": {
            opacity: 1,
          },
          "55%": {
            left: "110%",
            opacity: 1,
          },
          "60%": {
            opacity: 0,
          },
          "100%": {
            left: "110%",
            opacity: 0,
          },
        },

        "@keyframes homeDotPulse": {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: 0.7,
          },
          "50%": {
            transform: "scale(1.5)",
            opacity: 1,
          },
        },

        "@keyframes homeCircleRotate": {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },

        "@keyframes homeOrbitRotate": {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(-360deg)",
          },
        },

        "@keyframes homeContentReveal": {
          "0%": {
            opacity: 0,
            transform: "translateY(35px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },

        "@keyframes centerGlow": {
          "0%, 100%": {
            opacity: 0.45,
            transform: "scale(1)",
          },
          "50%": {
            opacity: 0.8,
            transform: "scale(1.08)",
          },
        },
      }}
    >
      {/* Dark cinematic overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.12), transparent 55%, rgba(0,0,0,0.14))",
          pointerEvents: "none",
        }}
      />

      {/* ================= RIGHT CREATIVE CIRCLE ================= */}

      {/* ================= RIGHT CREATIVE CIRCLE ================= */}

<Box
  sx={{
    position: "absolute",
    right: {
      xs: "-85px",
      sm: "-25px",
      md: "4%",
      lg: "7%",
    },

    top: "50%",

    width: {
      xs: 245,
      sm: 310,
      md: 390,
      lg: 430,
    },

    height: {
      xs: 245,
      sm: 310,
      md: 390,
      lg: 430,
    },

    transform: "translateY(-50%)",

    display: {
      xs: "none",
      sm: "block",
    },

    pointerEvents: "none",

    filter: "drop-shadow(0 0 35px rgba(245,158,11,0.08))",
  }}
>
  {/* Outer circle */}
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      border: "1px solid rgba(245,158,11,0.28)",
      borderRadius: "50%",
    }}
  />

  {/* Inner dashed circle */}
  <Box
    sx={{
      position: "absolute",
      inset: "7%",
      border: "1px dashed rgba(255,255,255,0.15)",
      borderRadius: "50%",
      animation: "homeCircleRotate 35s linear infinite",
    }}
  />

  {/* Orange inner ring */}
  <Box
    sx={{
      position: "absolute",
      inset: "16%",
      border: "1px solid rgba(245,158,11,0.20)",
      borderRadius: "50%",
    }}
  />

  {/* ================= INDIVIDUAL ROTATING WORDS ================= */}

  <Box
    sx={{
      position: "absolute",
      inset: "2%",
      borderRadius: "50%",

      animation: "homeCircleRotate 24s linear infinite",
    }}
  >
    {/* DIGITAL */}
    <Typography
      sx={{
        position: "absolute",
        top: "1%",
        left: "50%",
        transform: "translateX(-50%)",

        color: "#F59E0B",
        fontSize: {
          sm: "0.55rem",
          md: "0.65rem",
          lg: "0.7rem",
        },

        fontWeight: 700,
        letterSpacing: "0.18em",
        whiteSpace: "nowrap",
      }}
    >
      DIGITAL
    </Typography>

    {/* MEDIA */}
    <Typography
      sx={{
        position: "absolute",
        top: "17%",
        right: "7%",

        color: "rgba(255,255,255,0.70)",
        fontSize: {
          sm: "0.55rem",
          md: "0.65rem",
          lg: "0.7rem",
        },

        fontWeight: 600,
        letterSpacing: "0.18em",
        whiteSpace: "nowrap",

        transform: "rotate(55deg)",
      }}
    >
      MEDIA
    </Typography>

    {/* BRANDING */}
    <Typography
      sx={{
        position: "absolute",
        bottom: "17%",
        right: "7%",

        color: "rgba(255,255,255,0.70)",
        fontSize: {
          sm: "0.55rem",
          md: "0.65rem",
          lg: "0.7rem",
        },

        fontWeight: 600,
        letterSpacing: "0.18em",
        whiteSpace: "nowrap",

        transform: "rotate(125deg)",
      }}
    >
      BRANDING
    </Typography>

    {/* CONTENT */}
    <Typography
      sx={{
        position: "absolute",
        bottom: "1%",
        left: "50%",
        transform: "translateX(-50%) rotate(180deg)",

        color: "#F59E0B",
        fontSize: {
          sm: "0.55rem",
          md: "0.65rem",
          lg: "0.7rem",
        },

        fontWeight: 700,
        letterSpacing: "0.18em",
        whiteSpace: "nowrap",
      }}
    >
      CONTENT
    </Typography>

    {/* CREATIVE */}
    <Typography
      sx={{
        position: "absolute",
        bottom: "17%",
        left: "7%",

        color: "rgba(255,255,255,0.70)",
        fontSize: {
          sm: "0.55rem",
          md: "0.65rem",
          lg: "0.7rem",
        },

        fontWeight: 600,
        letterSpacing: "0.18em",
        whiteSpace: "nowrap",

        transform: "rotate(-125deg)",
      }}
    >
      CREATIVE
    </Typography>

    {/* STRATEGY */}
    <Typography
      sx={{
        position: "absolute",
        top: "17%",
        left: "7%",

        color: "rgba(255,255,255,0.70)",
        fontSize: {
          sm: "0.55rem",
          md: "0.65rem",
          lg: "0.7rem",
        },

        fontWeight: 600,
        letterSpacing: "0.18em",
        whiteSpace: "nowrap",

        transform: "rotate(-55deg)",
      }}
    >
      STRATEGY
    </Typography>
  </Box>

  {/* ================= ORBIT DOT ================= */}

  <Box
    sx={{
      position: "absolute",
      inset: "1%",
      borderRadius: "50%",

      animation: "homeCircleRotate 12s linear infinite",
    }}
  >
    <Box
      sx={{
        position: "absolute",

        top: "3%",
        left: "50%",

        width: 7,
        height: 7,

        borderRadius: "50%",

        background: "#F59E0B",

        boxShadow:
          "0 0 10px #F59E0B, 0 0 25px rgba(245,158,11,0.75)",

        transform: "translateX(-50%)",
      }}
    />
  </Box>

  {/* ================= CENTER ================= */}

  <Box
    sx={{
      position: "absolute",

      top: "50%",
      left: "50%",

      transform: "translate(-50%, -50%)",

      width: {
        xs: 110,
        sm: 145,
        md: 180,
        lg: 195,
      },

      height: {
        xs: 110,
        sm: 145,
        md: 180,
        lg: 195,
      },

      borderRadius: "50%",

      background:
        "radial-gradient(circle, rgba(245,158,11,0.14), rgba(3,10,13,0.20) 60%, transparent 75%)",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      textAlign: "center",

      "&::before": {
        content: '""',

        position: "absolute",

        inset: "17%",

        borderRadius: "50%",

        border:
          "1px solid rgba(245,158,11,0.38)",

        boxShadow:
          "0 0 35px rgba(245,158,11,0.10), inset 0 0 30px rgba(245,158,11,0.05)",

        animation:
          "centerGlow 3.5s ease-in-out infinite",
      },
    }}
  >
    <Box
      sx={{
        position: "relative",
        zIndex: 2,
      }}
    >
      <Typography
        sx={{
          color: "#F59E0B",

          fontSize: {
            xs: "1rem",
            sm: "1.25rem",
            md: "1.5rem",
            lg: "1.65rem",
          },

          fontWeight: 800,
          letterSpacing: "0.08em",
          lineHeight: 1,
        }}
      >
        CREATE
      </Typography>

      <Typography
        sx={{
          mt: 0.4,

          color: "#FFFFFF",

          fontSize: {
            xs: "0.72rem",
            sm: "0.85rem",
            md: "1rem",
          },

          fontWeight: 500,
          letterSpacing: "0.22em",
        }}
      >
        IMPACT
      </Typography>

      <Box
        sx={{
          width: 28,
          height: 1,

          background: "#F59E0B",

          mx: "auto",
          mt: 1.5,

          boxShadow:
            "0 0 8px rgba(245,158,11,0.8)",
        }}
      />
    </Box>
  </Box>

  {/* Center cross */}
  <Box
    sx={{
      position: "absolute",

      top: "50%",
      left: "50%",

      width: 100,
      height: 100,

      transform: "translate(-50%, -50%)",

      opacity: 0.22,

      "&::before": {
        content: '""',

        position: "absolute",

        top: "50%",
        left: 0,
        right: 0,

        height: "1px",

        background:
          "rgba(245,158,11,0.35)",
      },

      "&::after": {
        content: '""',

        position: "absolute",

        left: "50%",
        top: 0,
        bottom: 0,

        width: "1px",

        background:
          "rgba(245,158,11,0.35)",
      },
    }}
  />
</Box>
      {/* Right vertical line */}
      <Box
        sx={{
          position: "absolute",
          right: {
            xs: "18px",
            md: "42px",
          },
          top: "22%",
          height: "56%",
          width: "1px",

          background:
            "linear-gradient(180deg, transparent, rgba(245,158,11,0.35), transparent)",

          display: {
            xs: "none",
            md: "block",
          },

          pointerEvents: "none",
        }}
      />

      {/* Right vertical label */}
      <Typography
        sx={{
          position: "absolute",
          right: {
            xs: "10px",
            md: "27px",
          },

          top: "50%",

          transform: "translateY(-50%)",

          writingMode: "vertical-rl",
          textOrientation: "mixed",

          display: {
            xs: "none",
            md: "block",
          },

          color: "rgba(255,255,255,0.32)",
          fontSize: "0.58rem",
          fontWeight: 500,
          letterSpacing: "0.35em",
          textTransform: "uppercase",

          pointerEvents: "none",
        }}
      >
        SHEM / MEDIA / VISUALS
      </Typography>

      {/* ================= MAIN CONTENT ================= */}

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,

          pt: {
            xs: 12,
            md: 14,
          },

          pb: {
            xs: 10,
            md: 8,
          },
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "90%",
              md: "68%",
              lg: "64%",
            },

            animation: "homeContentReveal 1s ease-out 0.3s both",
          }}
        >
          {/* Label */}
          <Stack
            direction="row"
            spacing={1.2}
            alignItems="center"
            sx={{
              mb: {
                xs: 2.5,
                md: 3.5,
              },
            }}
          >
            <Box
              sx={{
                width: 30,
                height: 1,
                background: "#F59E0B",
                boxShadow: "0 0 10px rgba(245,158,11,0.8)",
              }}
            />

            <Typography
              sx={{
                color: "#F59E0B",

                fontSize: {
                  xs: "0.65rem",
                  sm: "0.72rem",
                  md: "0.78rem",
                },

                fontWeight: 600,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
              }}
            >
              Creative Media Studio
            </Typography>
          </Stack>

          {/* Heading */}
          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: "3rem",
                sm: "4.4rem",
                md: "5.7rem",
                lg: "6.8rem",
                xl: "7.4rem",
              },

              lineHeight: {
                xs: 0.94,
                md: 0.88,
              },

              fontWeight: 800,

              letterSpacing: {
                xs: "-0.055em",
                md: "-0.065em",
              },

              textTransform: "uppercase",
              color: "#F8FAFC",
              m: 0,
            }}
          >
            WE CREATE
            <br />

            <Box
              component="span"
              sx={{
                color: "#F59E0B",
                textShadow:
                  "0 0 35px rgba(245,158,11,0.15)",
              }}
            >
              WHAT
            </Box>

            <br />

            <Box
              component="span"
              sx={{
                color: "#F8FAFC",
              }}
            >
              PEOPLE
            </Box>

            <br />

            REMEMBER.
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              mt: {
                xs: 3,
                md: 4,
              },

              maxWidth: 590,

              color: "rgba(226,232,240,0.68)",

              fontSize: {
                xs: "0.86rem",
                sm: "0.95rem",
                md: "1rem",
              },

              lineHeight: 1.8,
              letterSpacing: "0.02em",
            }}
          >
            We turn ideas into powerful visual experiences through
            photography, films, branding and creative media that stay
            long after the moment is gone.
          </Typography>

          {/* Buttons */}
          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={1.5}
            sx={{
              mt: {
                xs: 4,
                md: 5,
              },

              width: {
                xs: "100%",
                sm: "auto",
              },
            }}
          >
            <Button
              onClick={() => scrollToSection("services")}
              endIcon={<ArrowOutwardRoundedIcon />}
              sx={{
                minHeight: 50,
                px: 3,

                borderRadius: 0,

                background: "#F59E0B",
                color: "#071013",

                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",

                justifyContent: "center",

                "&:hover": {
                  background: "#FFB52E",
                  transform: "translateY(-2px)",
                  boxShadow:
                    "0 10px 30px rgba(245,158,11,0.18)",
                },

                transition: "all 0.3s ease",
              }}
            >
              Explore Our Work
            </Button>

            <Button
              onClick={() => scrollToSection("contact")}
              endIcon={<ArrowOutwardRoundedIcon />}
              sx={{
                minHeight: 50,
                px: 3,

                borderRadius: 0,

                border:
                  "1px solid rgba(245,158,11,0.65)",

                color: "#F8FAFC",

                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",

                justifyContent: "center",

                "&:hover": {
                  borderColor: "#F59E0B",
                  color: "#F59E0B",
                  background:
                    "rgba(245,158,11,0.06)",
                  transform: "translateY(-2px)",
                },

                transition: "all 0.3s ease",
              }}
            >
              Let's Connect
            </Button>
          </Stack>
        </Box>
      </Container>

      {/* Bottom scroll */}
      <Box
        sx={{
          position: "absolute",

          left: {
            xs: "24px",
            md: "48px",
          },

          bottom: {
            xs: "25px",
            md: "35px",
          },

          zIndex: 3,

          display: "flex",
          alignItems: "center",
          gap: 1.2,
        }}
      >
        <Box
          sx={{
            position: "relative",

            width: 7,
            height: 7,

            borderRadius: "50%",

            background: "#F59E0B",

            boxShadow:
              "0 0 12px rgba(245,158,11,0.9)",

            animation:
              "homeDotPulse 1.8s ease-in-out infinite",
          }}
        />

        <Typography
          sx={{
            fontSize: "0.62rem",
            letterSpacing: "0.22em",
            color: "rgba(255,255,255,0.42)",
            textTransform: "uppercase",
          }}
        >
          Scroll To Explore
        </Typography>

        <KeyboardArrowDownRoundedIcon
          sx={{
            fontSize: 17,
            color: "rgba(245,158,11,0.7)",

            animation:
              "homeDotPulse 1.8s ease-in-out infinite",
          }}
        />
      </Box>

      {/* Bottom right label */}
      <Typography
        sx={{
          position: "absolute",

          right: {
            xs: 20,
            md: 55,
          },

          bottom: {
            xs: 25,
            md: 35,
          },

          display: {
            xs: "none",
            sm: "block",
          },

          zIndex: 3,

          fontSize: "0.58rem",
          letterSpacing: "0.25em",
          color: "rgba(255,255,255,0.25)",
          textTransform: "uppercase",
        }}
      >
        Create • Connect • Impact
      </Typography>
    </Box>
  );
}

export default Home;