import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Avatar,
  Button,
} from "@mui/material";
import {
  LocationOn,
  Phone as PhoneIcon,
  Email,
  Phone,
  Mail,
} from "@mui/icons-material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { motion } from "framer-motion";

function ContactSection() {
  const contactItems = [
    {
      icon: <LocationOn sx={{ fontSize: 28, color: "#fff" }} />,
      title: "Ubicación",
      content: (
        <>
          Sector Sur del Parque Mariano Alvarado
          <br />
          Morteros, Córdoba
        </>
      ),
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 28, color: "#fff" }} />,
      title: "Teléfono",
      content: "Contáctanos para más información",
    },
    {
      icon: <Email sx={{ fontSize: 28, color: "#fff" }} />,
      title: "Email",
      content: "Envíanos un mensaje",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <Box
      id="contact"
      sx={{
        bgcolor: "colors.tertiary",
        color: "#fff",
        width: "100%",
        overflowX: "hidden",
        py: { xs: 8, md: 12 },
      }}
    >
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          ¡Gracias por tu interés!
        </Typography>
        <Typography variant="h6" sx={{ color: "#bbf7d0" }}>
          Comunícate con nosotros, esperamos tu mensaje
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center" mb={6}>
        {contactItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={index}
            >
              <Stack spacing={1} alignItems="center" textAlign="center" width={350}>
                <Avatar
                  sx={{
                    bgcolor: "rgba(255,255,255,0.2)",
                    width: 56,
                    height: 56,
                  }}
                >
                  {item.icon}
                </Avatar>
                <Typography fontWeight={600}>{item.title}</Typography>
                <Typography variant="body2" sx={{ color: "#bbf7d0" }}>
                  {item.content}
                </Typography>
              </Stack>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Button
          size="large"
          variant="contained"
          onClick={() =>
                          window.open(
                            `https://wa.me/5493562417611?text=${encodeURIComponent(
                              "Hola, me gustaría recibir más información"
                            )}`,
                            "_blank"
                          )
                        }
          sx={{
            bgcolor: "#fff",
            color: "#16a34a",
            fontWeight: 600,
            px: 4,
            '&:hover': { bgcolor: "#f0fdf4" },
          }}
          startIcon={<WhatsApp sx={{ color: "#16a34a" }} />}
        >
          Enviar Mensaje
        </Button>
        <Button
          size="large"
          variant="outlined"
          href="mailto:elandar.equino@gmail.com?subject=Consulta&body=Hola,%20me%20gustaría%20recibir%20más%20información."
          sx={{
            borderColor: "#fff",
            color: "#fff",
            fontWeight: 600,
            px: 4,
            bgcolor: "transparent",
            '&:hover': { bgcolor: "rgba(255,255,255,0.1)" },
          }}
          startIcon={<Mail />}
        >
          Enviar Email
        </Button>
      </Stack>
      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        alignItems="center"
        mt={4}
      >
        <Button
          component="a"
          href="https://www.facebook.com/escueladeequinoterapia.elandar/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            minWidth: "auto",
            p: 1.5,
            bgcolor: "rgba(255,255,255,0.1)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
          }}
        >
          <Facebook sx={{ color: "#fff", fontSize: 30 }} />
        </Button>

        <Button
          component="a"
          href="https://www.instagram.com/elandar.morteros/?locale=ar-en&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            minWidth: "auto",
            p: 1.5,
            bgcolor: "rgba(255,255,255,0.1)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
          }}
        >
          <Instagram sx={{ color: "#fff", fontSize: 30 }} />
        </Button>

        <Button
          component="a"
          href="https://wa.me/5493562417611?text=Hola!%20Quiero%20más%20información"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            minWidth: "auto",
            p: 1.5,
            bgcolor: "rgba(255,255,255,0.1)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
          }}
        >
          <WhatsApp sx={{ color: "#fff", fontSize: 30 }} />
        </Button>
      </Stack>
      {/* Mapa con Google Maps centrado */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          mt: 6,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "90%", md: "50%" },
            height: { xs: 300, md: 450 },
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3430.032870860006!2d-61.996179!3d-30.7174763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943503bf58938a17%3A0x49d4101db7d165a5!2sEQUINOTERAPIA%20%22EL%20ANDAR%22%20ESCUELA%20Y%20REHABILITACI%C3%93N!5e0!3m2!1ses!2ses!4v1754297808669!5m2!1ses!2ses"
            title="Escuela de Equinoterapia El Andar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"></iframe>
          <Button
            variant="contained"
            size="small"
            component="a"
            href="https://www.google.com/maps/place/EQUINOTERAPIA+%22EL+ANDAR%22+ESCUELA+Y+REHABILITACIÓN/@-30.7174763,-61.996179,17z/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              position: "absolute",
              bottom: 12,
              right: 12,
              bgcolor: "colors.secondary",
              color: "colors.white",
              fontWeight: 600,
              "&:hover": { bgcolor: "colors.tertiary" },
            }}
          >
            Ver en Maps
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactSection;
