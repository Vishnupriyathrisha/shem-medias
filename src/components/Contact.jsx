import { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const services = [
  "Digital Marketing",
  "Social Media",
  "Branding",
  "Content Creation",
  "Paid Campaigns",
  "Creative Strategy",
  "Other",
];

export default function Contact() {
  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Thank you! Your project enquiry has been received.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  return (
    <Box
      id="contact"
      ref={sectionRef}
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "#060C0E",
        color: "#fff",
        pt: { xs: 11, md: 16 },
        pb: { xs: 10, md: 14 },
      }}
    >
      {/* =================================
          BACKGROUND GLOW
      ================================== */}

      <Box
        sx={{
          position: "absolute",
          width: { xs: 300, md: 600 },
          height: { xs: 300, md: 600 },
          borderRadius: "50%",
          right: "-260px",
          top: "8%",
          background:
            "radial-gradient(circle, rgba(245,158,11,0.09), transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: { xs: 250, md: 500 },
          height: { xs: 250, md: 500 },
          borderRadius: "50%",
          left: "-250px",
          bottom: "0%",
          background:
            "radial-gradient(circle, rgba(20,184,166,0.07), transparent 68%)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative Lines */}

      <Box
        sx={{
          position: "absolute",
          top: "12%",
          left: 0,
          width: { xs: "35%", md: "28%" },
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(245,158,11,0.35), transparent)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "14%",
          right: 0,
          width: { xs: "35%", md: "28%" },
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(245,158,11,0.35), transparent)",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* =================================
            TOP LABEL
        ================================== */}

        <Stack
          direction="row"
          alignItems="center"
          spacing={1.5}
          sx={{
            mb: { xs: 5, md: 7 },

            opacity: visible ? 1 : 0,

            transform: visible
              ? "translateY(0)"
              : "translateY(30px)",

            transition:
              "opacity 1s ease, transform 1s ease",
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
              fontSize: "0.7rem",
              letterSpacing: "0.23em",
              fontWeight: 700,
            }}
          >
            START A PROJECT
          </Typography>
        </Stack>

        {/* =================================
            MAIN CONTENT
        ================================== */}

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              lg: "0.9fr 1.1fr",
            },

            gap: {
              xs: 7,
              md: 9,
              lg: 12,
            },

            alignItems: "start",
          }}
        >
          {/* =================================
              LEFT CONTENT
          ================================== */}

          <Box
            sx={{
              opacity: visible ? 1 : 0,

              transform: visible
                ? "translateX(0)"
                : "translateX(-80px)",

              transition:
                "opacity 1.2s cubic-bezier(0.22,1,0.36,1), transform 1.2s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "2.8rem",
                  sm: "4rem",
                  md: "5rem",
                  lg: "5.4rem",
                },

                lineHeight: 0.92,

                fontWeight: 800,

                letterSpacing: "-0.055em",

                textTransform: "uppercase",

                maxWidth: "720px",
              }}
            >
              LET'S MAKE
              <br />
              SOMETHING
              <br />
              <Box
                component="span"
                sx={{
                  color: "#F59E0B",
                }}
              >
                MEMORABLE.
              </Box>
            </Typography>

            {/* Description */}

            <Typography
              sx={{
                mt: 4,

                maxWidth: "500px",

                color: "rgba(255,255,255,0.52)",

                fontSize: {
                  xs: "0.9rem",
                  md: "1rem",
                },

                lineHeight: 1.9,
              }}
            >
              Have an idea, campaign or brand story in mind?
              Tell us about it. Let's turn your vision into
              something people notice, remember and connect with.
            </Typography>

            {/* Contact Details */}

            <Stack
              spacing={2.5}
              sx={{
                mt: 6,

                maxWidth: "430px",
              }}
            >
              {/* Email */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,

                  p: 2,

                  border:
                    "1px solid rgba(255,255,255,0.08)",

                  background:
                    "rgba(255,255,255,0.025)",

                  transition:
                    "all 0.35s ease",

                  "&:hover": {
                    borderColor:
                      "rgba(245,158,11,0.45)",

                    background:
                      "rgba(245,158,11,0.045)",

                    transform:
                      "translateX(6px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    minWidth: 42,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    border:
                      "1px solid rgba(245,158,11,0.4)",

                    color: "#F59E0B",
                  }}
                >
                  <MailOutlineRoundedIcon
                    sx={{ fontSize: 20 }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color:
                        "rgba(255,255,255,0.35)",

                      fontSize: "0.62rem",

                      letterSpacing: "0.16em",

                      textTransform:
                        "uppercase",
                    }}
                  >
                    Email
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.4,

                      color: "#fff",

                      fontSize: "0.9rem",
                    }}
                  >
                    hello@shemmedias.com
                  </Typography>
                </Box>
              </Box>

              {/* Phone */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,

                  p: 2,

                  border:
                    "1px solid rgba(255,255,255,0.08)",

                  background:
                    "rgba(255,255,255,0.025)",

                  transition:
                    "all 0.35s ease",

                  "&:hover": {
                    borderColor:
                      "rgba(245,158,11,0.45)",

                    background:
                      "rgba(245,158,11,0.045)",

                    transform:
                      "translateX(6px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    minWidth: 42,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    border:
                      "1px solid rgba(245,158,11,0.4)",

                    color: "#F59E0B",
                  }}
                >
                  <PhoneRoundedIcon
                    sx={{ fontSize: 19 }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color:
                        "rgba(255,255,255,0.35)",

                      fontSize: "0.62rem",

                      letterSpacing: "0.16em",

                      textTransform:
                        "uppercase",
                    }}
                  >
                    Phone
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.4,

                      color: "#fff",

                      fontSize: "0.9rem",
                    }}
                  >
                    +91 XXXXX XXXXX
                  </Typography>
                </Box>
              </Box>

              {/* Location */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,

                  p: 2,

                  border:
                    "1px solid rgba(255,255,255,0.08)",

                  background:
                    "rgba(255,255,255,0.025)",

                  transition:
                    "all 0.35s ease",

                  "&:hover": {
                    borderColor:
                      "rgba(245,158,11,0.45)",

                    background:
                      "rgba(245,158,11,0.045)",

                    transform:
                      "translateX(6px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    minWidth: 42,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    border:
                      "1px solid rgba(245,158,11,0.4)",

                    color: "#F59E0B",
                  }}
                >
                  <LocationOnOutlinedIcon
                    sx={{ fontSize: 20 }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color:
                        "rgba(255,255,255,0.35)",

                      fontSize: "0.62rem",

                      letterSpacing: "0.16em",

                      textTransform:
                        "uppercase",
                    }}
                  >
                    Studio
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.4,

                      color: "#fff",

                      fontSize: "0.9rem",
                    }}
                  >
                    Tamil Nadu · India
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>

          {/* =================================
              RIGHT FORM
          ================================== */}

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              position: "relative",

              p: {
                xs: 2.5,
                sm: 4,
                md: 5,
              },

              border:
                "1px solid rgba(255,255,255,0.1)",

              borderTop:
                "2px solid #F59E0B",

              background:
                "linear-gradient(145deg, #101D20 0%, #0B1518 55%, #070D0F 100%)",

              boxShadow:
                "0 30px 80px rgba(0,0,0,0.3)",

              opacity: visible ? 1 : 0,

              transform: visible
                ? "translateX(0)"
                : "translateX(80px)",

              transition:
                "opacity 1.2s cubic-bezier(0.22,1,0.36,1) 0.18s, transform 1.2s cubic-bezier(0.22,1,0.36,1) 0.18s",

              "&::before": {
                content: '""',

                position: "absolute",

                width: 130,
                height: 130,

                borderRadius: "50%",

                top: -75,
                right: -65,

                border:
                  "1px solid rgba(245,158,11,0.12)",

                pointerEvents: "none",
              },
            }}
          >
            {/* Form Header */}

            <Box
              sx={{
                mb: 4,
              }}
            >
              <Typography
                sx={{
                  color: "#F59E0B",

                  fontSize: "0.68rem",

                  letterSpacing: "0.2em",

                  fontWeight: 700,

                  textTransform:
                    "uppercase",
                }}
              >
                TELL US YOUR IDEA
              </Typography>

              <Typography
                sx={{
                  mt: 1,

                  fontSize: {
                    xs: "1.8rem",
                    md: "2.4rem",
                  },

                  lineHeight: 1,

                  fontWeight: 800,

                  letterSpacing: "-0.04em",

                  textTransform:
                    "uppercase",
                }}
              >
                START A
                <br />
                CONVERSATION.
              </Typography>
            </Box>

            {/* =================================
                NAME + EMAIL
            ================================== */}

            <Box
              sx={{
                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                },

                gap: 2.2,
              }}
            >
              <TextField
                fullWidth
                required
                name="name"
                label="Your Name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                sx={fieldStyles}
              />

              <TextField
                fullWidth
                required
                type="email"
                name="email"
                label="Email Address"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                sx={fieldStyles}
              />
            </Box>

            {/* =================================
                PHONE + COMPANY
            ================================== */}

            <Box
              sx={{
                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                },

                gap: 2.2,

                mt: 2.2,
              }}
            >
              <TextField
                fullWidth
                name="phone"
                label="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
                sx={fieldStyles}
              />

              <TextField
                fullWidth
                name="company"
                label="Company / Brand"
                value={formData.company}
                onChange={handleChange}
                variant="outlined"
                sx={fieldStyles}
              />
            </Box>

            {/* =================================
                SERVICE SELECT
            ================================== */}

            <Box sx={{ mt: 2.2 }}>
              <Select
                fullWidth
                displayEmpty
                name="service"
                value={formData.service}
                onChange={handleChange}
                sx={selectStyles}
              >
                <MenuItem
                  value=""
                  disabled
                  sx={{
                    background: "#0B1518",
                  }}
                >
                  What do you need?
                </MenuItem>

                {services.map((service) => (
                  <MenuItem
                    key={service}
                    value={service}
                    sx={{
                      background: "#0B1518",

                      color: "#fff",

                      "&:hover": {
                        background:
                          "rgba(245,158,11,0.12)",
                      },

                      "&.Mui-selected": {
                        background:
                          "rgba(245,158,11,0.16)",
                      },
                    }}
                  >
                    {service}
                  </MenuItem>
                ))}
              </Select>
            </Box>

            {/* =================================
                MESSAGE
            ================================== */}

            <TextField
              fullWidth
              required
              multiline
              minRows={5}
              name="message"
              label="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              variant="outlined"
              sx={{
                ...fieldStyles,

                mt: 2.2,

                "& .MuiInputBase-root": {
                  alignItems: "flex-start",
                },
              }}
            />

            {/* =================================
                SUBMIT
            ================================== */}

            <Button
              type="submit"
              fullWidth
              endIcon={
                <ArrowOutwardRoundedIcon
                  sx={{
                    fontSize: "19px !important",
                  }}
                />
              }
              sx={{
                mt: 3,

                minHeight: 58,

                borderRadius: 0,

                background: "#F59E0B",

                color: "#071012",

                fontSize: "0.72rem",

                fontWeight: 800,

                letterSpacing: "0.14em",

                textTransform: "uppercase",

                transition:
                  "all 0.35s ease",

                "&:hover": {
                  background: "#FFB52E",

                  color: "#071012",

                  boxShadow:
                    "0 12px 35px rgba(245,158,11,0.2)",

                  "& .MuiButton-endIcon": {
                    transform:
                      "translate(4px,-4px)",
                  },
                },

                "& .MuiButton-endIcon": {
                  transition:
                    "transform 0.3s ease",
                },
              }}
            >
              SEND ENQUIRY
            </Button>

            <Typography
              sx={{
                mt: 2,

                textAlign: "center",

                color:
                  "rgba(255,255,255,0.25)",

                fontSize: "0.62rem",

                letterSpacing: "0.08em",
              }}
            >
              WE'LL GET BACK TO YOU AS SOON AS POSSIBLE.
            </Typography>
          </Box>
        </Box>

        {/* =================================
            BOTTOM STATEMENT
        ================================== */}

        <Box
          sx={{
            mt: { xs: 10, md: 15 },

            pt: { xs: 6, md: 8 },

            borderTop:
              "1px solid rgba(255,255,255,0.08)",

            textAlign: "center",

            opacity: visible ? 1 : 0,

            transform: visible
              ? "translateY(0)"
              : "translateY(40px)",

            transition:
              "opacity 1s ease 0.5s, transform 1s ease 0.5s",
          }}
        >
          <Typography
            sx={{
              color:
                "rgba(255,255,255,0.28)",

              fontSize: "0.68rem",

              letterSpacing: "0.22em",

              textTransform:
                "uppercase",

              mb: 2,
            }}
          >
            IDEAS START WITH A CONVERSATION
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "1.7rem",
                sm: "2.5rem",
                md: "3.7rem",
              },

              lineHeight: 1,

              fontWeight: 800,

              letterSpacing: "-0.05em",

              textTransform:
                "uppercase",
            }}
          >
            YOUR NEXT BIG IDEA
            <br />
            STARTS{" "}
            <Box
              component="span"
              sx={{
                color: "#F59E0B",
              }}
            >
              HERE.
            </Box>
          </Typography>
        </Box>
      </Container>

      {/* =================================
          SIDE LABEL
      ================================== */}

      <Typography
        sx={{
          position: "absolute",

          right: { xs: 8, md: 22 },

          top: "46%",

          writingMode: "vertical-rl",

          transform:
            "rotate(180deg)",

          color:
            "rgba(255,255,255,0.13)",

          fontSize: "0.58rem",

          letterSpacing: "0.28em",

          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        SHEM · LET'S CREATE
      </Typography>
    </Box>
  );
}

/* =================================
   TEXT FIELD STYLE
================================= */

const fieldStyles = {
  "& .MuiInputLabel-root": {
    color: "rgba(255,255,255,0.38)",
    fontSize: "0.82rem",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "#F59E0B",
  },

  "& .MuiOutlinedInput-root": {
    color: "#fff",

    background:
      "rgba(255,255,255,0.025)",

    borderRadius: 0,

    transition:
      "all 0.3s ease",

    "& fieldset": {
      borderColor:
        "rgba(255,255,255,0.1)",

      transition:
        "border-color 0.3s ease, box-shadow 0.3s ease",
    },

    "&:hover fieldset": {
      borderColor:
        "rgba(245,158,11,0.4)",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#F59E0B",

      borderWidth: "1px",

      boxShadow:
        "0 0 0 3px rgba(245,158,11,0.07)",
    },
  },

  "& .MuiInputBase-input": {
    fontSize: "0.88rem",
  },

  "& .MuiInputBase-input::placeholder": {
    color: "rgba(255,255,255,0.3)",
  },
};

/* =================================
   SELECT STYLE
================================= */

const selectStyles = {
  color: "rgba(255,255,255,0.75)",

  background:
    "rgba(255,255,255,0.025)",

  borderRadius: 0,

  height: 56,

  fontSize: "0.82rem",

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor:
      "rgba(255,255,255,0.1)",
  },

  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor:
      "rgba(245,158,11,0.4)",
  },

  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#F59E0B",

    boxShadow:
      "0 0 0 3px rgba(245,158,11,0.07)",
  },

  "& .MuiSvgIcon-root": {
    color: "#F59E0B",
  },
};