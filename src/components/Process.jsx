import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import MovieCreationRoundedIcon from "@mui/icons-material/MovieCreationRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

const processSteps = [
  {
    number: "01",
    title: "DISCOVER",
    description:
      "We understand your brand, audience, goals and the idea behind your vision.",
    icon: SearchRoundedIcon,
  },
  {
    number: "02",
    title: "STRATEGIZE",
    description:
      "We turn insights into a clear digital strategy built around your brand.",
    icon: AutoAwesomeRoundedIcon,
  },
  {
    number: "03",
    title: "CREATE",
    description:
      "We transform strategy into content, visuals and creative experiences.",
    icon: MovieCreationRoundedIcon,
  },
  {
    number: "04",
    title: "LAUNCH",
    description:
      "We put your message in motion and take it to the right audience.",
    icon: RocketLaunchRoundedIcon,
  },
  {
    number: "05",
    title: "GROW",
    description:
      "We measure what works, optimise the journey and keep your brand moving.",
    icon: TrendingUpRoundedIcon,
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 3600);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      id="process"
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "#070D0F",
        color: "#fff",
        py: { xs: 10, md: 16 },
      }}
    >
      {/* BACKGROUND GRID */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.16,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(rgba(245,158,11,0.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.10) 1px, transparent 1px)
          `,
          backgroundSize: { xs: "55px 55px", md: "75px 75px" },
          animation: "gridMove 18s linear infinite",
          "@keyframes gridMove": {
            "0%": {
              backgroundPosition: "0 0, 0 0",
            },
            "100%": {
              backgroundPosition: "75px 75px, 75px 75px",
            },
          },
        }}
      />

      {/* AMBIENT GLOW */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: 280, md: 500 },
          height: { xs: 280, md: 500 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245,158,11,0.13), transparent 68%)",
          top: "15%",
          left: "35%",
          filter: "blur(20px)",
          pointerEvents: "none",
          animation: "ambientPulse 6s ease-in-out infinite",
          "@keyframes ambientPulse": {
            "0%,100%": {
              transform: "scale(0.9)",
              opacity: 0.45,
            },
            "50%": {
              transform: "scale(1.15)",
              opacity: 0.8,
            },
          },
        }}
      />

      {/* TOP LINE */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(245,158,11,0.7), transparent)",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* HEADER */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "flex-end" }}
          spacing={4}
          sx={{ mb: { xs: 8, md: 12 } }}
        >
          <Box>
            <Typography
              sx={{
                color: "#F59E0B",
                fontSize: { xs: "0.72rem", md: "0.78rem" },
                fontWeight: 700,
                letterSpacing: "0.28em",
                mb: 2,
              }}
            >
              OUR PROCESS
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  sm: "3.5rem",
                  md: "5rem",
                },
                lineHeight: 0.95,
                fontWeight: 900,
                letterSpacing: "-0.045em",
              }}
            >
              HOW WE TURN
              <br />
              <Box
                component="span"
                sx={{
                  color: "#F59E0B",
                }}
              >
                IDEAS INTO IMPACT.
              </Box>
            </Typography>
          </Box>

          <Typography
            sx={{
              maxWidth: 430,
              color: "rgba(255,255,255,0.56)",
              fontSize: { xs: "0.92rem", md: "1rem" },
              lineHeight: 1.8,
            }}
          >
            From the first conversation to the final result, every step is
            designed to move your brand forward with clarity, creativity and
            purpose.
          </Typography>
        </Stack>

        {/* PROCESS VISUAL */}
        <Box
          sx={{
            position: "relative",
            py: { xs: 4, md: 7 },
          }}
        >
          {/* CAMERA FOCUS FRAME */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: 190, sm: 260, md: 360 },
              height: { xs: 190, sm: 260, md: 360 },
              border: "1px solid rgba(245,158,11,0.14)",
              pointerEvents: "none",
              animation: "focusFrame 5s ease-in-out infinite",
              "@keyframes focusFrame": {
                "0%,100%": {
                  transform: "translate(-50%, -50%) scale(0.92)",
                  opacity: 0.45,
                },
                "50%": {
                  transform: "translate(-50%, -50%) scale(1.05)",
                  opacity: 0.9,
                },
              },
              "&::before": {
                content: '""',
                position: "absolute",
                inset: -12,
                border: "1px dashed rgba(245,158,11,0.16)",
                borderRadius: "50%",
                animation: "focusRotate 20s linear infinite",
              },
              "@keyframes focusRotate": {
                "0%": {
                  transform: "rotate(0deg)",
                },
                "100%": {
                  transform: "rotate(360deg)",
                },
              },
            }}
          />

          {/* CORNER MARKS */}
          {[
            {
              top: -4,
              left: -4,
              borderTop: "2px solid #F59E0B",
              borderLeft: "2px solid #F59E0B",
            },
            {
              top: -4,
              right: -4,
              borderTop: "2px solid #F59E0B",
              borderRight: "2px solid #F59E0B",
            },
            {
              bottom: -4,
              left: -4,
              borderBottom: "2px solid #F59E0B",
              borderLeft: "2px solid #F59E0B",
            },
            {
              bottom: -4,
              right: -4,
              borderBottom: "2px solid #F59E0B",
              borderRight: "2px solid #F59E0B",
            },
          ].map((style, index) => (
            <Box
              key={index}
              sx={{
                position: "absolute",
                width: 28,
                height: 28,
                zIndex: 3,
                ...style,
              }}
            />
          ))}

          {/* HORIZONTAL PROCESS LINE */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              width: "100%",
              minHeight: { xs: 90, md: 120 },
            }}
          >
            {/* BASE LINE */}
            <Box
              sx={{
                position: "absolute",
                left: { xs: "5%", md: "10%" },
                right: { xs: "5%", md: "10%" },
                top: "50%",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(245,158,11,0.35), rgba(245,158,11,0.35), transparent)",
              }}
            />

            {/* MOVING ENERGY BEAM */}
            <Box
              sx={{
                position: "absolute",
                top: "calc(50% - 2px)",
                left: { xs: "5%", md: "10%" },
                width: { xs: "18%", md: "12%" },
                height: 4,
                borderRadius: 10,
                background:
                  "linear-gradient(90deg, transparent, #F59E0B, #FFF3C4, #FFFFFF, #F59E0B, transparent)",
                boxShadow:
                  "0 0 8px #F59E0B, 0 0 20px rgba(245,158,11,0.9), 0 0 40px rgba(245,158,11,0.45)",
                animation: "energyTravel 4s linear infinite",
                zIndex: 2,
                "@keyframes energyTravel": {
                  "0%": {
                    transform: "translateX(0)",
                    opacity: 0,
                  },
                  "10%": {
                    opacity: 1,
                  },
                  "80%": {
                    opacity: 1,
                  },
                  "100%": {
                    transform: {
                      xs: "translateX(380%)",
                      md: "translateX(650%)",
                    },
                    opacity: 0,
                  },
                },
              }}
            />

            {/* STEPS */}
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <Box
                  key={step.number}
                  onMouseEnter={() => setActiveStep(index)}
                  sx={{
                    position: "relative",
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                    zIndex: 4,
                  }}
                >
                  {/* NODE */}
                  <Box
                    sx={{
                      width: { xs: 42, sm: 52, md: 62 },
                      height: { xs: 42, sm: 52, md: 62 },
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isActive
                        ? "#F59E0B"
                        : "rgba(7,13,15,0.96)",
                      border: isActive
                        ? "2px solid #F59E0B"
                        : "1px solid rgba(245,158,11,0.35)",
                      color: isActive ? "#071013" : "#F59E0B",
                      boxShadow: isActive
                        ? "0 0 0 8px rgba(245,158,11,0.08), 0 0 35px rgba(245,158,11,0.55)"
                        : "0 0 0 0 rgba(245,158,11,0)",
                      transform: isActive
                        ? "scale(1.14)"
                        : "scale(1)",
                      transition:
                        "all 0.7s cubic-bezier(0.22,1,0.36,1)",
                      animation: isActive
                        ? "nodePulse 2s ease-in-out infinite"
                        : "none",
                      "@keyframes nodePulse": {
                        "0%,100%": {
                          boxShadow:
                            "0 0 0 7px rgba(245,158,11,0.08), 0 0 28px rgba(245,158,11,0.4)",
                        },
                        "50%": {
                          boxShadow:
                            "0 0 0 13px rgba(245,158,11,0.02), 0 0 45px rgba(245,158,11,0.7)",
                        },
                      },
                    }}
                  >
                    <Icon
                      sx={{
                        fontSize: { xs: 18, md: 24 },
                      }}
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>

          {/* STEP LABELS */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              mt: 4,
              gap: 1,
            }}
          >
            {processSteps.map((step, index) => {
              const isActive = activeStep === index;

              return (
                <Box
                  key={step.number}
                  onMouseEnter={() => setActiveStep(index)}
                  sx={{
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.6s ease",
                    transform: isActive
                      ? "translateY(-4px)"
                      : "translateY(0)",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "0.6rem", md: "0.7rem" },
                      letterSpacing: "0.18em",
                      color: isActive
                        ? "#F59E0B"
                        : "rgba(255,255,255,0.32)",
                      fontWeight: 800,
                      mb: 1,
                      transition: "color 0.5s ease",
                    }}
                  >
                    {step.number}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0.62rem",
                        sm: "0.78rem",
                        md: "0.95rem",
                      },
                      fontWeight: 800,
                      letterSpacing: {
                        xs: "0.04em",
                        md: "0.12em",
                      },
                      color: isActive
                        ? "#fff"
                        : "rgba(255,255,255,0.45)",
                      transition: "all 0.5s ease",
                    }}
                  >
                    {step.title}
                  </Typography>

                  {/* UNDERLINE */}
                  <Box
                    sx={{
                      width: isActive ? "45%" : "0%",
                      height: "2px",
                      background: "#F59E0B",
                      mx: "auto",
                      mt: 1.2,
                      transition:
                        "width 0.7s cubic-bezier(0.22,1,0.36,1)",
                      boxShadow: isActive
                        ? "0 0 12px rgba(245,158,11,0.8)"
                        : "none",
                    }}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* ACTIVE DESCRIPTION */}
        <Box
          sx={{
            mt: { xs: 7, md: 10 },
            minHeight: { xs: 190, md: 155 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              maxWidth: 650,
              px: 3,
            }}
          >
            <Typography
              sx={{
                color: "#F59E0B",
                fontSize: { xs: "0.68rem", md: "0.74rem" },
                fontWeight: 800,
                letterSpacing: "0.28em",
                mb: 2,
              }}
            >
              {processSteps[activeStep].number} ·{" "}
              {processSteps[activeStep].title}
            </Typography>

            <Typography
              key={activeStep}
              sx={{
                fontSize: {
                  xs: "1.05rem",
                  sm: "1.25rem",
                  md: "1.45rem",
                },
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.7)",
                animation: "descriptionIn 0.8s ease",
                "@keyframes descriptionIn": {
                  "0%": {
                    opacity: 0,
                    transform: "translateY(12px)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
              }}
            >
              {processSteps[activeStep].description}
            </Typography>
          </Box>
        </Box>

        {/* FINAL STATEMENT */}
        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            pt: { xs: 6, md: 8 },
            borderTop: "1px solid rgba(255,255,255,0.08)",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "1.8rem",
                sm: "2.5rem",
                md: "3.8rem",
              },
              lineHeight: 1,
              fontWeight: 900,
              letterSpacing: "-0.045em",
            }}
          >
            FROM AN IDEA
            <br />
            <Box
              component="span"
              sx={{
                color: "#F59E0B",
              }}
            >
              TO REAL IMPACT.
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 3,
              fontSize: { xs: "0.62rem", md: "0.72rem" },
              letterSpacing: "0.3em",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            THINK · CREATE · LAUNCH · GROW
          </Typography>
        </Box>
      </Container>

      {/* SIDE LABEL */}
      <Typography
        sx={{
          position: "absolute",
          right: { xs: 8, md: 22 },
          top: "50%",
          transform: "rotate(90deg) translateX(50%)",
          transformOrigin: "right center",
          fontSize: "0.58rem",
          letterSpacing: "0.35em",
          color: "rgba(255,255,255,0.22)",
          display: { xs: "none", md: "block" },
        }}
      >
        SHEM · THE PROCESS
      </Typography>

      {/* BOTTOM LINE */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(245,158,11,0.55), transparent)",
        }}
      />
    </Box>
  );
}