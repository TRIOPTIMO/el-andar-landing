import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

function AboutSection() {
  const theme = useTheme();

  const roles = [
    "Kinesiólogos",
    "Psicomotricistas",
    "Psicólogos",
    "Psicopedagogos",
    "Docentes Especiales",
    "Acompañantes Terapéuticos",
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
    <Box id="about" py={10} bgcolor="white">
      <Container>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Box maxWidth="md" mx="auto" textAlign="center" mb={8}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: "colors.darkBlue", fontWeight: 700 }}
              gutterBottom
            >
              Sobre El Andar
            </Typography>
            <Typography variant="h6" sx={{ color: "colors.darkBlue" }}>
              Fundada el 27 de abril de 2004, somos pioneros en la provincia de Córdoba entre
              las escuelas de equinoterapia, ubicados en el sector Sur del Parque Mariano
              Alvarado de Morteros.
            </Typography>
          </Box>
        </motion.div>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
          sx={{ minHeight: "60vh" }}
        >
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ flex: 1 }}
          >
            <Box
              component="img"
              src="images/caballo.jpg"
              alt="Equipo profesional de El Andar"
              width="100%"
              height="auto"
              sx={{
                borderRadius: 1,
                boxShadow: 3,
              }}
            />
          </motion.div>

          {/* Texto y roles */}
          <Box flex={1} position="relative" display="flex" justifyContent="center">
            <Stack spacing={3}>
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Typography variant="h5" fontWeight="bold" sx={{ color: "colors.darkBlue" }}>
                  Equipo Interdisciplinario
                </Typography>
              </motion.div>

              <motion.div
                variants={fadeIn}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Typography sx={{ color: "colors.darkBlue" }}>
                  En nuestra escuela se realiza la terapia asistida con caballos (T.A.C.A), llevada a
                  cabo por profesionales de distintas áreas especializadas.
                </Typography>
              </motion.div>

              <Grid container spacing={2}>
                {roles.map((role, index) => (
                  <Grid item xs={6} key={index}>
                    <motion.div
                      variants={fadeIn}
                      custom={index + 2}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Box
                          width={8}
                          height={8}
                          borderRadius="50%"
                          bgcolor="colors.secondary"
                        />
                        <Typography
                          variant="body2"
                          fontWeight="medium"
                          sx={{ color: "colors.darkBlue" }}
                        >
                          {role}
                        </Typography>
                      </Stack>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default AboutSection;
