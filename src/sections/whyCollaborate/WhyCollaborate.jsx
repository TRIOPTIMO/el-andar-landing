import {
  Box,
  Typography,
  Paper,
  Avatar,
  Stack,
} from "@mui/material";
import {
  Favorite as Heart,
  Group as Users,
  Star,
  Loop as Recycle,
} from "@mui/icons-material";
import { motion } from "framer-motion";

function WhyCollaborateSection() {
  const benefits = [
    {
      title: "Impacto en la salud",
      icon: <Heart sx={{ color: "#e53935" }} />,
      bgColor: "#ffcdd2",
      description:
        "La equinoterapia mejora la motricidad, equilibrio, coordinación y tono muscular, contribuyendo al bienestar emocional y psicológico.",
    },
    {
      title: "Inclusión social",
      icon: <Users sx={{ color: "#8e24aa" }} />,
      bgColor: "#e1bee7",
      description:
        "Promovemos la inserción, ofreciendo un entorno donde las personas se sienten valoradas y parte de la comunidad.",
    },
    {
      title: "Apoyo a familias",
      icon: <Heart sx={{ color: "#1e88e5" }} />,
      bgColor: "#bbdefb",
      description:
        "Las donaciones pueden aliviar la carga económica de las familias y proporcionar un recurso terapéutico valioso.",
    },
    {
      title: "Desarrollo personal",
      icon: <Star sx={{ color: "#43a047" }} />,
      bgColor: "#c8e6c9",
      description:
        "La interacción con caballos mejora las habilidades de comunicación, fomenta la confianza y desarrolla habilidades sociales.",
    },
    {
      title: "Innovación y sostenibilidad",
      icon: <Recycle sx={{ color: "#fdd835" }} />,
      bgColor: "#fff9c4",
      description:
        "Las donaciones ayudan a implementar nuevas técnicas y programas, así como mantener las instalaciones y recursos.",
    },
    {
      title: "Beneficio comunitario",
      icon: <Users sx={{ color: "#3949ab" }} />,
      bgColor: "#c5cae9",
      description:
        "Contribuir beneficia a la comunidad en general, promoviendo un entorno más inclusivo y consciente.",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  return (
    <Box id="collaborate" py={10} sx={{ bgcolor: "#f9fafb" }}>
      <Box textAlign="center" mb={8}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "colors.darkBlue" }}
          gutterBottom
        >
          ¿Por qué colaborar con nosotros?
        </Typography>
      </Box>

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        spacing={2}
        useFlexGap
      >
        {benefits.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: {
                xs: "100%",
                sm: "45%",
                md: "30%",
              },
              display: "flex",
              justifyContent: "center",
              my: 3,
              mx: 2,
            }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={index}
              style={{ width: "100%" }}
            >
              <Paper
                elevation={2}
                sx={{
                  p: 2,
                  borderRadius: 1,
                  height: "100%",
                  maxWidth: {xs: 500, md: 600},
                  width: {xs: "auto", md: "100%"},
                  backgroundColor: "colors.white",
                  transition: "0.3s",
                  ":hover": { boxShadow: 6 },
                }}
              >
                <Avatar
                  sx={{ bgcolor: item.bgColor, width: 56, height: 56, mb: 2 }}
                >
                  {item.icon}
                </Avatar>
                <Typography
                  variant="h6"
                  sx={{ color: "colors.darkBlue" }}
                  gutterBottom
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "colors.darkBlue" }}
                >
                  {item.description}
                </Typography>
              </Paper>
            </motion.div>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default WhyCollaborateSection;
