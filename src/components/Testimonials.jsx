import { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
} from "@mui/material";

import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

const testimonials = [
  {
    number: "01",
    quote:
      "Shem Medias understood our brand from the very beginning. Their creative approach helped us communicate our ideas in a much stronger way.",
    name: "Arun Kumar",
    role: "Founder · Growth Brand",
  },
  {
    number: "02",
    quote:
      "From social media content to campaign ideas, every piece felt fresh and purposeful. They don't just create visuals — they understand the story behind them.",
    name: "Priya Menon",
    role: "Marketing Lead · Lifestyle Brand",
  },
  {
    number: "03",
    quote:
      "The team brought energy, creativity and strategy together. Our digital presence feels completely different after working with Shem Medias.",
    name: "Rahul S",
    role: "Business Director · Retail",
  },
  {
    number: "04",
    quote:
      "What stood out most was their attention to detail. Every campaign had a clear visual identity and a strong message.",
    name: "Divya R",
    role: "Brand Manager · Creative Business",
  },
  {
    number: "05",
    quote:
      "They made our content feel more human and memorable. The ideas were simple, bold and exactly what our audience needed.",
    name: "Vignesh K",
    role: "Founder · Digital Startup",
  },
  {
    number: "06",
    quote:
      "Shem Medias became more than a creative partner for us. They helped us see our brand from a completely new perspective.",
    name: "Meera Anand",
    role: "Creative Director · Modern Brand",
  },
];

function TestimonialCard({ item, index, visible }) {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "340px", sm: "360px", md: "390px" },
        p: { xs: 3, sm: 4, md: 4.5 },

        border: "1px solid rgba(255,255,255,0.09)",
        borderTop: "2px solid rgba(245,158,11,0.75)",

        background:
          "linear-gradient(145deg, #101D20 0%, #0B1518 55%, #070D0F 100%)",

        overflow: "hidden",
        cursor: "default",

        opacity: visible ? 1 : 0,

        transform: visible
          ? "translateY(0) scale(1)"
          : "translateY(70px) scale(0.96)",

        transition: `
          opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1) ${
            index * 0.16
          }s,
          transform 1.1s cubic-bezier(0.22, 1, 0.36, 1) ${
            index * 0.16
          }s,
          background 0.45s ease,
          border-color 0.45s ease,
          box-shadow 0.45s ease
        `,

        /* =========================
           HOVER EFFECT
        ========================== */
        "&:hover": {
          background:
            "linear-gradient(145deg, #183236 0%, #102629 48%, #0B171A 100%)",

          borderColor: "rgba(245,158,11,0.75)",

          borderTopColor: "#F59E0B",

          boxShadow:
            "0 25px 65px rgba(0,0,0,0.5), 0 0 35px rgba(245,158,11,0.12)",

          transform: "translateY(-10px) scale(1.015)",

          "& .testimonial-number": {
            color: "#FFFFFF",
          },

          "& .testimonial-quote-icon": {
            color: "#F59E0B",
            transform: "rotate(-8deg) scale(1.15)",
            opacity: 1,
          },

          "& .testimonial-quote": {
            color: "#FFFFFF",
          },

          "& .testimonial-line": {
            background:
              "linear-gradient(90deg, #F59E0B, rgba(245,158,11,0.25), transparent)",
          },

          "& .testimonial-name": {
            color: "#F59E0B",
          },

          "& .testimonial-role": {
            color: "rgba(255,255,255,0.62)",
          },

          "& .testimonial-glow": {
            opacity: 1,
            transform: "scale(1.15)",
          },
        },

        /* Decorative top circle */
        "&::before": {
          content: '""',
          position: "absolute",
          width: "170px",
          height: "170px",
          borderRadius: "50%",
          top: "-95px",
          right: "-75px",
          border: "1px solid rgba(245,158,11,0.12)",
          transition: "all 0.6s ease",
          pointerEvents: "none",
        },

        /* Decorative bottom circle */
        "&::after": {
          content: '""',
          position: "absolute",
          width: "90px",
          height: "90px",
          borderRadius: "50%",
          bottom: "-55px",
          left: "-45px",
          background: "rgba(20,184,166,0.035)",
          transition: "all 0.6s ease",
          pointerEvents: "none",
        },
      }}
    >
      {/* Hover Glow */}
      <Box
        className="testimonial-glow"
        sx={{
          position: "absolute",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          right: "-80px",
          top: "-80px",
          background:
            "radial-gradient(circle, rgba(245,158,11,0.13), transparent 70%)",
          opacity: 0,
          transform: "scale(0.8)",
          transition: "all 0.6s ease",
          pointerEvents: "none",
        }}
      />

      {/* Top Row */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          position: "relative",
          zIndex: 2,
          mb: 3,
        }}
      >
        <Typography
          className="testimonial-number"
          sx={{
            color: "#F59E0B",
            fontSize: "0.72rem",
            letterSpacing: "0.2em",
            fontWeight: 700,
            transition: "color 0.35s ease",
          }}
        >
          {item.number}
        </Typography>

        <FormatQuoteRoundedIcon
          className="testimonial-quote-icon"
          sx={{
            color: "rgba(245,158,11,0.55)",
            fontSize: { xs: 32, md: 38 },
            transition:
              "color 0.4s ease, transform 0.4s ease, opacity 0.4s ease",
          }}
        />
      </Stack>

      {/* Quote */}
      <Typography
        className="testimonial-quote"
        sx={{
          position: "relative",
          zIndex: 2,

          color: "rgba(255,255,255,0.72)",

          fontSize: {
            xs: "1rem",
            sm: "1.05rem",
            md: "1.12rem",
          },

          lineHeight: 1.8,
          fontWeight: 400,
          letterSpacing: "-0.01em",

          transition: "color 0.4s ease",
        }}
      >
        “{item.quote}”
      </Typography>

      {/* Bottom */}
      <Box
        sx={{
          position: "absolute",
          left: { xs: 24, sm: 32, md: 36 },
          right: { xs: 24, sm: 32, md: 36 },
          bottom: { xs: 24, sm: 30, md: 34 },
          zIndex: 2,
        }}
      >
        <Box
          className="testimonial-line"
          sx={{
            width: "100%",
            height: "1px",

            background:
              "linear-gradient(90deg, rgba(245,158,11,0.35), rgba(255,255,255,0.06), transparent)",

            mb: 2.5,

            transition: "background 0.45s ease",
          }}
        />

        <Typography
          className="testimonial-name"
          sx={{
            color: "#FFFFFF",
            fontSize: "0.95rem",
            fontWeight: 700,
            letterSpacing: "0.02em",
            transition: "color 0.35s ease",
          }}
        >
          {item.name}
        </Typography>

        <Typography
          className="testimonial-role"
          sx={{
            mt: 0.5,
            color: "rgba(255,255,255,0.4)",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            transition: "color 0.35s ease",
          }}
        >
          {item.role}
        </Typography>
      </Box>
    </Box>
  );
}

export default function Testimonials() {
  const sectionRef = useRef(null);

  const [visibleItems, setVisibleItems] = useState(
    Array(testimonials.length).fill(false)
  );

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const cards = section.querySelectorAll(
      "[data-testimonial-card]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);

          setVisibleItems((prev) => {
            const next = [...prev];

            next[index] = entry.isIntersecting;

            return next;
          });
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      id="testimonials"
      ref={sectionRef}
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",

        background: "#070D0F",

        color: "#fff",

        pt: { xs: 11, md: 16 },
        pb: { xs: 10, md: 14 },
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",

          width: { xs: 280, md: 520 },
          height: { xs: 280, md: 520 },

          borderRadius: "50%",

          right: "-180px",
          top: "15%",

          background:
            "radial-gradient(circle, rgba(245,158,11,0.07), transparent 68%)",

          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",

          width: { xs: 240, md: 420 },
          height: { xs: 240, md: 420 },

          borderRadius: "50%",

          left: "-180px",
          bottom: "5%",

          background:
            "radial-gradient(circle, rgba(20,184,166,0.06), transparent 68%)",

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
        {/* =========================
            HEADING
        ========================== */}
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "1.1fr 0.9fr",
            },

            gap: { xs: 5, md: 8 },

            alignItems: "end",

            mb: { xs: 7, md: 10 },
          }}
        >
          <Box>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1.5}
              sx={{ mb: 2.5 }}
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
                  fontSize: "0.7rem",
                  letterSpacing: "0.22em",
                  fontWeight: 700,
                }}
              >
                WHAT PEOPLE SAY
              </Typography>
            </Stack>

            <Typography
              sx={{
                fontSize: {
                  xs: "2.4rem",
                  sm: "3.5rem",
                  md: "5.2rem",
                },

                lineHeight: 0.95,

                fontWeight: 800,

                letterSpacing: "-0.055em",

                textTransform: "uppercase",

                maxWidth: "760px",
              }}
            >
              WORDS
              <br />
              THAT{" "}
              <Box
                component="span"
                sx={{
                  color: "#F59E0B",
                }}
              >
                STAY.
              </Box>
            </Typography>
          </Box>

          <Box
            sx={{
              borderLeft: {
                xs: "none",
                md: "1px solid rgba(255,255,255,0.12)",
              },

              borderTop: {
                xs: "1px solid rgba(255,255,255,0.12)",
                md: "none",
              },

              pt: { xs: 3, md: 0 },

              pl: { xs: 0, md: 5 },

              maxWidth: "500px",

              justifySelf: {
                xs: "start",
                md: "end",
              },
            }}
          >
            <Typography
              sx={{
                color: "rgba(255,255,255,0.52)",

                fontSize: {
                  xs: "0.9rem",
                  md: "1rem",
                },

                lineHeight: 1.8,
              }}
            >
              Great creative work is not only about what people see.
              It is about what they remember, what they feel and what
              they choose to connect with.
            </Typography>
          </Box>
        </Box>

        {/* =========================
            TESTIMONIAL GRID
        ========================== */}
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              lg: "repeat(3, 1fr)",
            },

            gap: {
              xs: 2,
              sm: 2.5,
              md: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <Box
              key={item.number}
              data-testimonial-card
              data-index={index}
            >
              <TestimonialCard
                item={item}
                index={index}
                visible={visibleItems[index]}
              />
            </Box>
          ))}
        </Box>

        {/* =========================
            BOTTOM CTA
        ========================== */}
        <Box
          sx={{
            mt: { xs: 9, md: 13 },

            pt: { xs: 6, md: 8 },

            borderTop:
              "1px solid rgba(255,255,255,0.08)",

            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "rgba(255,255,255,0.4)",

              fontSize: "0.7rem",

              letterSpacing: "0.2em",

              textTransform: "uppercase",

              mb: 2,
            }}
          >
            YOUR STORY COULD BE NEXT
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "1.8rem",
                sm: "2.5rem",
                md: "3.5rem",
              },

              lineHeight: 1,

              fontWeight: 800,

              letterSpacing: "-0.045em",

              textTransform: "uppercase",
            }}
          >
            READY TO CREATE
            <br />
            SOMETHING{" "}
            <Box
              component="span"
              sx={{
                color: "#F59E0B",
              }}
            >
              MEMORABLE?
            </Box>
          </Typography>

          <Stack
            direction="row"
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            <Box
              component="button"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              sx={{
                display: "flex",
                alignItems: "center",

                gap: 1.2,

                px: 3,
                py: 1.5,

                border: "1px solid #F59E0B",

                background: "transparent",

                color: "#F59E0B",

                cursor: "pointer",

                fontFamily: "inherit",

                fontSize: "0.72rem",

                fontWeight: 700,

                letterSpacing: "0.12em",

                textTransform: "uppercase",

                transition: "all 0.3s ease",

                "&:hover": {
                  background: "#F59E0B",
                  color: "#071012",
                  boxShadow:
                    "0 0 25px rgba(245,158,11,0.25)",
                },
              }}
            >
              LET'S TALK

              <ArrowOutwardRoundedIcon
                sx={{
                  fontSize: 17,
                }}
              />
            </Box>
          </Stack>
        </Box>
      </Container>

      {/* Side Label */}
      <Typography
        sx={{
          position: "absolute",

          right: { xs: 8, md: 22 },

          top: "48%",

          writingMode: "vertical-rl",

          transform: "rotate(180deg)",

          color: "rgba(255,255,255,0.16)",

          fontSize: "0.6rem",

          letterSpacing: "0.28em",

          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        SHEM · CLIENT VOICES
      </Typography>
    </Box>
  );
}