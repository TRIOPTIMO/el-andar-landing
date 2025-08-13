import { Box, Typography, Button, Stack, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";

export default function Services() {

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  const services = [
    {
      title: "Equinoterapia",
      description:
        "La equinoterapia es una terapia asistida con caballos que ayuda a mejorar la motricidad, el equilibrio, la autoestima y la comunicación en personas con diversas necesidades.",
      cta: "Solicitar Información",
      link: "https://wa.me/5491123456789?text=Hola!%20Quiero%20más%20información%20sobre%20Equinoterapia",
      image: "/images/equinoterapia.jpg",
      imageAlt: "Sesión de equinoterapia",
    },
    {
      title: "Clases de Monta",
      description:
        "Ofrecemos clases de monta para todas las edades y niveles, desde principiantes hasta avanzados. Aprende a montar y conectar con el caballo en un entorno seguro y profesional.",
      cta: "Inscribirme",
      link: "https://wa.me/5491123456789?text=Hola!%20Quiero%20inscribirme%20en%20las%20clases%20de%20monta",
      image: "/images/monta.jpg",
      imageAlt: "Clase de monta",
    },
  ];

  return (
    <Box
      id="services"
      sx={{
        bgcolor: '#f0fdf4',
        color: 'colors.darkBlue',
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Nuestros Servicios
      </Typography>
      <Typography variant="h6" sx={{ mb: 6, color: 'colors.darkBlue', opacity: 0.8 }}>
        Conoce más sobre lo que ofrecemos
      </Typography>

      {/* Cards en Stack: columna en mobile, fila en desktop */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            custom={index}
            style={{ width: "100%" }}
          >
            <Card
              sx={{
                width: { xs: "100%", md: 680 },
                mx: "auto",
                borderRadius: 3,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "transform .25s ease, box-shadow .25s ease",
                "&:hover": {
                  boxShadow: "0 16px 32px rgba(0,0,0,0.15)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={service.image}
                alt={service.imageAlt}
                sx={{
                  aspectRatio: "16 / 9",
                  objectFit: "cover",
                }}
              />
              <CardContent
                sx={{
                  backgroundColor: "colors.tertiary",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  px: 4,
                  textAlign: "left",
                }}
              >
                <Typography variant="h5" fontWeight={800}>
                  {service.title}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  {service.description}
                </Typography>

                <Box sx={{ pt: 1 }}>
                  <Button
                    variant="contained"
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      bgcolor: 'colors.secondary',
                      color: 'colors.white',
                      fontWeight: 700,
                      px: 3,
                      py: 1.25,
                      borderRadius: 2,
                      "&:hover": {
                        bgcolor: 'colors.primary',
                        color: "colors.darkBlue",
                        boxShadow: "0 8px 18px rgba(0, 255, 42, 0.25)",
                      },
                    }}
                  >
                    {service.cta}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
}
