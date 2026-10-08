import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import CameraRoundedIcon from "@mui/icons-material/CameraRounded";

function WelcomeScreen() {
  const [showContent, setShowContent] = useState(false);
  const [cameraMove, setCameraMove] = useState(false);
  const [focusFlash, setFocusFlash] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    // Main content reveal
    const revealTimer = setTimeout(() => {
      setShowContent(true);
    }, 600);

    // Camera starts moving after statement appears
    const cameraTimer = setTimeout(() => {
      setCameraMove(true);
    }, 4400);

    // Camera reaches final position and focuses
    const flashTimer = setTimeout(() => {
      setFocusFlash(true);
    }, 6500);

    // Open home screen
    const exitTimer = setTimeout(() => {
      setExit(true);
    }, 7200);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(cameraTimer);
      clearTimeout(flashTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100vh",
        minHeight: "100svh",
        zIndex: 9999,
        overflow: "hidden",
        backgroundColor: "#05070B",

        opacity: exit ? 0 : 1,
        transform: exit ? "scale(1.06)" : "scale(1)",
        pointerEvents: exit ? "none" : "auto",

        transition:
          "opacity 900ms cubic-bezier(0.77,0,0.175,1), transform 1100ms cubic-bezier(0.77,0,0.175,1)",
      }}
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <Box
        sx={{
          position: "absolute",
          inset: "-4%",
          backgroundImage: `
            linear-gradient(
              rgba(4, 6, 10, 0.30),
              rgba(4, 6, 10, 0.62)
            ),
            url("/shem-media-bg.webp")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          animation: "cinematicZoom 11s ease-in-out infinite",

          "@keyframes cinematicZoom": {
            "0%": {
              transform: "scale(1.08) translate3d(0, 0, 0)",
            },
            "25%": {
              transform: "scale(1.13) translate3d(-3px, 1px, 0)",
            },
            "50%": {
              transform: "scale(1.08) translate3d(3px, -1px, 0)",
            },
            "75%": {
              transform: "scale(1.13) translate3d(-2px, 1px, 0)",
            },
            "100%": {
              transform: "scale(1.08) translate3d(0, 0, 0)",
            },
          },

          "@media (max-width:600px)": {
            animation: "mobileCinematicZoom 11s ease-in-out infinite",

            "@keyframes mobileCinematicZoom": {
              "0%": {
                transform: "scale(1.11)",
              },
              "50%": {
                transform: "scale(1.16) translate3d(2px, -1px, 0)",
              },
              "100%": {
                transform: "scale(1.11)",
              },
            },
          },
        }}
      />

      {/* =========================================================
          DARK VIGNETTE
      ========================================================= */}

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(
              circle at center,
              transparent 10%,
              rgba(0,0,0,0.12) 45%,
              rgba(0,0,0,0.72) 100%
            )
          `,
          pointerEvents: "none",
        }}
      />

      {/* =========================================================
          CENTER BLUE GLOW
      ========================================================= */}

      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: { xs: 260, md: 500 },
          height: { xs: 260, md: 500 },
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.20), rgba(37,99,235,0.05) 42%, transparent 72%)",
          filter: "blur(25px)",
          pointerEvents: "none",
          animation: "centerGlow 4s ease-in-out infinite",

          "@keyframes centerGlow": {
            "0%,100%": {
              opacity: 0.55,
              transform: "translate(-50%, -50%) scale(0.95)",
            },
            "50%": {
              opacity: 0.9,
              transform: "translate(-50%, -50%) scale(1.08)",
            },
          },
        }}
      />

      {/* =========================================================
          TOP LEFT
      ========================================================= */}

      <Box
        sx={{
          position: "absolute",
          top: { xs: 20, md: 30 },
          left: { xs: 20, md: 38 },
          display: "flex",
          alignItems: "center",
          gap: 1,
          opacity: showContent ? 1 : 0,
          transform: showContent
            ? "translateX(0)"
            : "translateX(-20px)",
          transition: "all 900ms ease 500ms",
        }}
      >
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#F59E0B",
            boxShadow: "0 0 14px rgba(245,158,11,0.9)",
            animation: "recordPulse 1.5s ease-in-out infinite",

            "@keyframes recordPulse": {
              "0%,100%": {
                opacity: 0.5,
                transform: "scale(0.8)",
              },
              "50%": {
                opacity: 1,
                transform: "scale(1.2)",
              },
            },
          }}
        />

        <Typography
          sx={{
            color: "rgba(255,255,255,0.78)",
            fontSize: { xs: "0.58rem", md: "0.68rem" },
            fontWeight: 700,
            letterSpacing: "0.18em",
          }}
        >
          SHEM / MEDIA
        </Typography>
      </Box>

      {/* =========================================================
          TOP CENTER LABEL
      ========================================================= */}

      <Typography
        sx={{
          position: "absolute",
          top: { xs: 68, md: 42 },
          left: "50%",
          transform: showContent
            ? "translateX(-50%)"
            : "translate(-50%, -12px)",
          color: "rgba(255,255,255,0.68)",
          fontSize: { xs: "0.55rem", md: "0.68rem" },
          letterSpacing: "0.38em",
          fontWeight: 700,
          whiteSpace: "nowrap",
          opacity: showContent ? 1 : 0,
          transition: "all 900ms ease 700ms",
        }}
      >
        CREATIVE MEDIA STUDIO
      </Typography>

      {/* =========================================================
          TOP RIGHT
      ========================================================= */}

      <Typography
        sx={{
          position: "absolute",
          top: { xs: 20, md: 30 },
          right: { xs: 20, md: 38 },
          color: "rgba(255,255,255,0.55)",
          fontSize: { xs: "0.52rem", md: "0.62rem" },
          letterSpacing: "0.2em",
          fontWeight: 600,
          opacity: showContent ? 1 : 0,
          transition: "all 900ms ease 900ms",
        }}
      >
        DIGITAL STORIES
      </Typography>

      {/* =========================================================
          MAIN CENTER CONTENT
      ========================================================= */}

      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "100%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* =====================================================
            CAMERA ICON ABOVE SHEM
        ===================================================== */}

        <Box
          sx={{
            position: "relative",
            width: { xs: 58, sm: 68, md: 76 },
            height: { xs: 58, sm: 68, md: 76 },
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            background:
              "linear-gradient(145deg, rgba(255,255,255,0.16), rgba(37,99,235,0.10))",

            border: "1px solid rgba(255,255,255,0.42)",

            boxShadow: `
              0 0 20px rgba(37,99,235,0.35),
              0 0 55px rgba(37,99,235,0.16),
              inset 0 0 22px rgba(255,255,255,0.08)
            `,

            opacity: showContent ? 1 : 0,

            transform: showContent
              ? "scale(1) translateY(0)"
              : "scale(0.2) translateY(30px)",

            filter: showContent ? "blur(0)" : "blur(10px)",

            transition:
              "opacity 900ms ease, transform 1200ms cubic-bezier(0.16,1,0.3,1), filter 1000ms ease",

            animation: showContent
              ? "cameraFloat 3.2s ease-in-out infinite"
              : "none",

            "@keyframes cameraFloat": {
              "0%,100%": {
                marginTop: 0,
              },
              "50%": {
                marginTop: -7,
              },
            },
          }}
        >
          {/* Animated ring */}

          <Box
            sx={{
              position: "absolute",
              inset: -7,
              borderRadius: "50%",
              border: "1px solid rgba(37,99,235,0.42)",
              animation: "ringRotate 4s linear infinite",

              "@keyframes ringRotate": {
                "0%": {
                  transform: "rotate(0deg) scale(1)",
                },
                "50%": {
                  transform: "rotate(180deg) scale(1.06)",
                },
                "100%": {
                  transform: "rotate(360deg) scale(1)",
                },
              },
            }}
          />

          {/* Orange small light */}

          <Box
            sx={{
              position: "absolute",
              top: 5,
              right: 7,
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#F59E0B",
              boxShadow: "0 0 12px rgba(245,158,11,1)",
            }}
          />

          <CameraRoundedIcon
            sx={{
              fontSize: { xs: 29, sm: 34, md: 40 },
              color: "#FFFFFF",
              filter:
                "drop-shadow(0 0 8px rgba(37,99,235,0.9))",
            }}
          />
        </Box>

        {/* =====================================================
            SHEM
        ===================================================== */}

        <Typography
          sx={{
            marginTop: { xs: 2.5, md: 3 },

            fontSize: {
              xs: "4.1rem",
              sm: "6.5rem",
              md: "9.5rem",
            },

            lineHeight: 0.78,
            fontWeight: 900,
            letterSpacing: {
              xs: "-0.07em",
              md: "-0.085em",
            },

            color: "#FFFFFF",

            textShadow: `
              0 0 15px rgba(255,255,255,0.28),
              0 0 45px rgba(37,99,235,0.58),
              0 0 90px rgba(37,99,235,0.22)
            `,

            opacity: showContent ? 1 : 0,

            transform: showContent
              ? "scale(1)"
              : "scale(0.12) translateY(30px)",

            filter: showContent ? "blur(0)" : "blur(18px)",

            transition:
              "opacity 1300ms ease 800ms, transform 1900ms cubic-bezier(0.16,1,0.3,1) 800ms, filter 1500ms ease 800ms",
          }}
        >
          SHEM
        </Typography>

        {/* =====================================================
            BRAND LINE
        ===================================================== */}

        <Box
          sx={{
            position: "relative",
            width: { xs: 105, sm: 160, md: 220 },
            height: 3,
            marginTop: { xs: 1.7, md: 2.2 },
            overflow: "hidden",
            borderRadius: 10,

            background:
              "linear-gradient(90deg, #2563EB, #60A5FA, #F59E0B, #2563EB)",

            opacity: showContent ? 1 : 0,

            transformOrigin: "center",

            transform: showContent ? "scaleX(1)" : "scaleX(0)",

            transition:
              "transform 1200ms cubic-bezier(0.16,1,0.3,1) 2200ms, opacity 600ms ease 2200ms",

            boxShadow:
              "0 0 20px rgba(37,99,235,0.55)",
          }}
        >
          {/* Light sweep */}

          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: "-30%",
              width: "30%",
              height: "100%",
              background: "#FFFFFF",
              filter: "blur(4px)",
              opacity: 0.8,
              animation: showContent
                ? "lineSweep 2.5s ease-in-out 2.8s infinite"
                : "none",

              "@keyframes lineSweep": {
                "0%": {
                  left: "-30%",
                },
                "55%,100%": {
                  left: "110%",
                },
              },
            }}
          />
        </Box>

        {/* =====================================================
            MEDIAS
        ===================================================== */}

        <Typography
          sx={{
            marginTop: { xs: 1.6, md: 2 },

            fontSize: {
              xs: "1.45rem",
              sm: "2.25rem",
              md: "3.2rem",
            },

            fontWeight: 800,
            letterSpacing: {
              xs: "0.34em",
              md: "0.42em",
            },

            paddingLeft: {
              xs: "0.34em",
              md: "0.42em",
            },

            background:
              "linear-gradient(90deg, #FFFFFF 10%, #60A5FA 48%, #F59E0B 82%)",

            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",

            opacity: showContent ? 1 : 0,

            transform: showContent
              ? "translateY(0) scaleX(1)"
              : "translateY(18px) scaleX(0.65)",

            filter: showContent ? "blur(0)" : "blur(8px)",

            transition:
              "opacity 1000ms ease 2900ms, transform 1300ms cubic-bezier(0.16,1,0.3,1) 2900ms, filter 1100ms ease 2900ms",
          }}
        >
          MEDIAS
        </Typography>

        {/* =====================================================
            TAGLINE
        ===================================================== */}

        <Typography
          sx={{
            marginTop: { xs: 2.5, md: 3 },

            color: "rgba(255,255,255,0.84)",

            fontSize: {
              xs: "0.65rem",
              sm: "0.78rem",
              md: "0.9rem",
            },

            fontWeight: 700,
            letterSpacing: {
              xs: "0.22em",
              md: "0.35em",
            },

            opacity: showContent ? 1 : 0,

            transform: showContent
              ? "translateY(0)"
              : "translateY(12px)",

            transition:
              "all 900ms ease 3800ms",
          }}
        >
          CREATE&nbsp; • &nbsp;CONNECT&nbsp; • &nbsp;IMPACT
        </Typography>

        {/* =====================================================
            STATEMENT
        ===================================================== */}

        <Typography
          sx={{
            marginTop: { xs: 2, md: 2.5 },

            color: "#FFFFFF",

            fontSize: {
              xs: "0.68rem",
              sm: "0.82rem",
              md: "0.95rem",
            },

            fontWeight: 500,
            letterSpacing: {
              xs: "0.12em",
              md: "0.22em",
            },

            maxWidth: {
              xs: "82%",
              sm: 600,
              md: 720,
            },

            opacity: showContent ? 1 : 0,

            transform: showContent
              ? "translateY(0)"
              : "translateY(15px)",

            transition:
              "all 1000ms cubic-bezier(0.16,1,0.3,1) 4200ms",

            textShadow:
              "0 2px 18px rgba(0,0,0,0.65)",
          }}
        >
          WE CREATE WHAT PEOPLE REMEMBER
        </Typography>
      </Box>

      {/* =========================================================
          MOVING CAMERA
      ========================================================= */}

      <Box
        sx={{
          position: "absolute",

          left: cameraMove
            ? { xs: "84%", sm: "82%", md: "80%" }
            : { xs: "8%", sm: "10%", md: "12%" },

          top: {
            xs: "78%",
            sm: "77%",
            md: "76%",
          },

          transform: "translate(-50%, -50%)",

          width: { xs: 46, sm: 54, md: 64 },
          height: { xs: 46, sm: 54, md: 64 },

          borderRadius: "50%",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          background:
            "linear-gradient(145deg, rgba(8,10,15,0.9), rgba(37,99,235,0.32))",

          border: "1px solid rgba(255,255,255,0.55)",

          boxShadow: `
            0 0 18px rgba(37,99,235,0.65),
            0 0 45px rgba(37,99,235,0.25)
          `,

          opacity: showContent ? 1 : 0,

          transition:
            "left 2100ms cubic-bezier(0.77,0,0.175,1), opacity 700ms ease 3900ms",

          zIndex: 20,
        }}
      >
        {/* Camera trail */}

        <Box
          sx={{
            position: "absolute",
            right: "100%",
            width: cameraMove ? "180px" : "0px",
            height: 1,

            background:
              "linear-gradient(90deg, transparent, rgba(37,99,235,0.8))",

            transition:
              "width 1900ms cubic-bezier(0.77,0,0.175,1)",

            filter: "blur(1px)",
          }}
        />

        {/* Focus ring */}

        <Box
          sx={{
            position: "absolute",
            inset: -10,
            borderRadius: "50%",

            border: focusFlash
              ? "2px solid rgba(245,158,11,0.9)"
              : "1px solid rgba(96,165,250,0.45)",

            transform: focusFlash
              ? "scale(1.35)"
              : "scale(1)",

            opacity: focusFlash ? 0 : 1,

            transition:
              "all 700ms cubic-bezier(0.16,1,0.3,1)",

            animation: !focusFlash
              ? "focusPulse 1.8s ease-in-out infinite"
              : "none",

            "@keyframes focusPulse": {
              "0%,100%": {
                transform: "scale(0.95)",
                opacity: 0.45,
              },
              "50%": {
                transform: "scale(1.12)",
                opacity: 1,
              },
            },
          }}
        />

        <CameraRoundedIcon
          sx={{
            fontSize: { xs: 24, sm: 29, md: 34 },
            color: "#FFFFFF",
            filter:
              "drop-shadow(0 0 7px rgba(96,165,250,0.9))",
          }}
        />
      </Box>

      {/* =========================================================
          CAMERA FOCUS TARGET
      ========================================================= */}

      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",

          width: {
            xs: 170,
            sm: 230,
            md: 300,
          },

          height: {
            xs: 90,
            sm: 120,
            md: 150,
          },

          transform: "translate(-50%, -50%)",

          border:
            cameraMove && !focusFlash
              ? "1px solid rgba(96,165,250,0.55)"
              : "1px solid transparent",

          opacity:
            cameraMove && !focusFlash ? 1 : 0,

          transition:
            "opacity 500ms ease, border 500ms ease",

          pointerEvents: "none",

          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, transparent, rgba(37,99,235,0.14), transparent)",
            animation:
              cameraMove && !focusFlash
                ? "focusScan 1.2s ease-in-out infinite"
                : "none",
          },

          "@keyframes focusScan": {
            "0%": {
              transform: "translateX(-100%)",
            },
            "100%": {
              transform: "translateX(100%)",
            },
          },
        }}
      />

      {/* =========================================================
          FOCUS FLASH
      ========================================================= */}

      <Box
        sx={{
          position: "absolute",
          inset: 0,

          background:
            "radial-gradient(circle at 80% 76%, rgba(255,255,255,0.85), rgba(255,255,255,0.16) 15%, transparent 45%)",

          opacity: focusFlash ? 1 : 0,

          transition:
            "opacity 220ms ease",

          pointerEvents: "none",

          zIndex: 50,
        }}
      />

      {/* =========================================================
          SIDE LABEL - LEFT
      ========================================================= */}

      <Box
        sx={{
          position: "absolute",
          left: { md: 28 },
          top: "50%",
          transform: "translateY(-50%) rotate(-90deg)",
          transformOrigin: "center",

          display: { xs: "none", md: "block" },

          opacity: showContent ? 1 : 0,

          transition: "opacity 1000ms ease 1200ms",
        }}
      >
        <Typography
          sx={{
            color: "rgba(255,255,255,0.42)",
            fontSize: "0.58rem",
            letterSpacing: "0.28em",
            fontWeight: 600,
          }}
        >
          VISUALS • MOTION • DIGITAL
        </Typography>
      </Box>

      {/* =========================================================
          SIDE LABEL - RIGHT
      ========================================================= */}

      <Box
        sx={{
          position: "absolute",
          right: { md: 28 },
          top: "50%",
          transform: "translateY(-50%) rotate(90deg)",
          transformOrigin: "center",

          display: { xs: "none", md: "block" },

          opacity: showContent ? 1 : 0,

          transition: "opacity 1000ms ease 1400ms",
        }}
      >
        <Typography
          sx={{
            color: "rgba(255,255,255,0.42)",
            fontSize: "0.58rem",
            letterSpacing: "0.28em",
            fontWeight: 600,
          }}
        >
          BRAND • CONTENT • EXPERIENCE
        </Typography>
      </Box>

      {/* =========================================================
          BOTTOM LEFT
      ========================================================= */}

      <Typography
        sx={{
          position: "absolute",
          bottom: { xs: 20, md: 30 },
          left: { xs: 20, md: 38 },

          color: "rgba(255,255,255,0.45)",
          fontSize: { xs: "0.52rem", md: "0.62rem" },
          letterSpacing: "0.18em",

          opacity: showContent ? 1 : 0,

          transition: "opacity 900ms ease 1500ms",
        }}
      >
        FRAME 001
      </Typography>

      {/* =========================================================
          BOTTOM RIGHT
      ========================================================= */}

      <Typography
        sx={{
          position: "absolute",
          bottom: { xs: 20, md: 30 },
          right: { xs: 20, md: 38 },

          color: "rgba(255,255,255,0.45)",
          fontSize: { xs: "0.52rem", md: "0.62rem" },
          letterSpacing: "0.18em",

          opacity: showContent ? 1 : 0,

          transition: "opacity 900ms ease 1700ms",
        }}
      >
        EST. 2026
      </Typography>

      {/* =========================================================
          FINAL WHITE FLASH
      ========================================================= */}

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "#FFFFFF",

          opacity: focusFlash ? 0.08 : 0,

          transition: "opacity 350ms ease",

          pointerEvents: "none",

          zIndex: 100,
        }}
      />
    </Box>
  );
}

export default WelcomeScreen;