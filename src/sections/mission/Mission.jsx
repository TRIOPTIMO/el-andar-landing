import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Container,
  Stack,
} from "@mui/material";
import {
  Favorite as Heart,
  Group as Users,
  Loop as Recycle,
} from "@mui/icons-material";
import { motion } from "framer-motion";

function MissionSection() {
  const missionItems = [
    {
      title: "Terapia",
      icon: <Heart sx={{ fontSize: 32, color: "#1e88e5" }} />,
      bgColor: "#bbdefb",
      description:
        "Ofrecemos una terapia de interacción con caballos, formado por un equipo interdisciplinario de profesionales del área de salud y educación.",
    },
    {
      title: "Inclusión",
      icon: <Users sx={{ fontSize: 32, color: "#8e24aa" }} />,
      bgColor: "#e1bee7",
      description:
        "Facilitamos el acceso a la equinoterapia a personas que lo necesitan para una mejor calidad de vida, especialmente a aquellas con dificultades económicas.",
    },
    {
      title: "Economía Circular",
      icon: <Recycle sx={{ fontSize: 32, color: "#43a047" }} />,
      bgColor: "#c8e6c9",
      description:
        "Mediante la feria americana generamos ingresos sostenibles a través de la venta de ropa y materiales aportados por la comunidad.",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Box id="mission" py={10} sx={{ bgcolor: "#f0fdf4" }}>
      <Container>
        <Box textAlign="center" mb={8}>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: "colors.darkBlue" }}
              gutterBottom
            >
              Nuestra Misión
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "colors.darkBlue" }}
              maxWidth="sm"
              mx="auto"
            >
              Enfocados en la rehabilitación y la inserción de las personas con desafíos del desarrollo
            </Typography>
      </motion.div>
        </Box>
      <Stack
        direction="row"
        spacing={0}
        justifyContent="center"
        flexWrap="wrap"
        rowGap={4}
      >
        {missionItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: {
                xs: "100%",
                sm: "80%",
                md: "45%",
                lg: "30%",
              },
              display: "flex",
              justifyContent: "center",
              px: 2,
            }}
          >
            <motion.div
              variants={fadeIn}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ width: "100%" }}
            >
              <Card
                elevation={3}
                sx={{
                  width: "100%",
                  maxWidth: 420,
                  minHeight: 250,
                  transition: "0.3s",
                  ":hover": { boxShadow: 6 },
                  backgroundColor: "colors.white",
                  pt: 3,
                }}
              >
                <Box textAlign="center">
                  <Avatar
                    sx={{
                      bgcolor: item.bgColor,
                      width: 64,
                      height: 64,
                      mx: "auto",
                      mb: 1,
                    }}
                  >
                    {item.icon}
                  </Avatar>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ color: "colors.darkBlue", fontSize: 20 }}
                  >
                    {item.title}
                  </Typography>
                </Box>
                <CardContent>
                  <Typography
                    variant="body2"
                    sx={{ color: "colors.darkBlue" }}
                    textAlign="center"
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Box>
        ))}
      </Stack>
    </Container>
    </Box >
  );
}

export default MissionSection;
