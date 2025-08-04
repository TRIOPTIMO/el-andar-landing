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
          sx={{
            bgcolor: "#fff",
            color: "#16a34a",
            fontWeight: 600,
            px: 4,
            '&:hover': { bgcolor: "#f0fdf4" },
          }}
          startIcon={<Phone sx={{ color: "#16a34a" }} />}
        >
          Llamar Ahora
        </Button>
        <Button
          size="large"
          variant="outlined"
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
            width: { xs: "90%", md: "50%" },
            height: { xs: 300, md: 450 },
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          <iframe
            title="Ubicación Parque Mariano Alvarado"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.6911608446925!2d-62.001111!3d-30.712222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQyJzQ0LjAiUyA2MsKwMDAnMDQuMCJX!5e0!3m2!1ses!2sar!4v1694100000000"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactSection;
