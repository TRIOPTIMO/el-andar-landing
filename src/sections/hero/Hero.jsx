import {
    Box,
    Container,
    Grid,
    Typography,
    Stack,
    Avatar,
    Chip,
    Button,
    Paper,
} from "@mui/material";
import {
    Star,
    ArrowForward as ArrowRight,
    CardGiftcard as Gift,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link as ScrollLink } from 'react-scroll';

// Reusable fade-in animation
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

function Hero() {
    return (
        <Box id="hero" py={10} sx={{ minHeight: "80vh" }}>
            <Container>
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={6}
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ minHeight: "60vh", mx: 0 }}
                >
                    <Box flex={1}>
                        <Stack spacing={3}>
                            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <Chip
                                    label="Pioneros desde 2004"
                                    variant="filled"
                                    sx={{
                                        width: "200px",
                                        backgroundColor: "colors.primary",
                                        color: "colors.secondary",
                                        fontWeight: 700,
                                    }}
                                />
                            </motion.div>

                            <motion.div variants={fadeIn} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <Typography
                                    variant="h3"
                                    component="h1"
                                    fontSize={{ xs: 40, md: 70 }}
                                    fontWeight="bold"
                                >
                                    Transformando vidas a través de la{" "}
                                    <Box component="span" sx={{ color: "colors.tertiary" }}>
                                        equinoterapia
                                    </Box>
                                </Typography>
                            </motion.div>

                            <motion.div variants={fadeIn} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <Typography variant="h6" color="colors.darkBlue">
                                    Somos una escuela pionera en Córdoba, dedicada a la rehabilitación e inclusión de personas con
                                    desafíos del desarrollo mediante terapia asistida con caballos.
                                </Typography>
                            </motion.div>

                            <motion.div variants={fadeIn} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                                    <Button
                                        variant="contained"
                                        component={ScrollLink}
                                        to={"about"}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        sx={{
                                            backgroundColor: "colors.secondary",
                                            color: "colors.primary",
                                            fontWeight: 700,
                                        }}
                                        endIcon={<ArrowRight />}
                                    >
                                        Conocer más
                                    </Button>
                                    <Button variant="outlined" color="success" startIcon={<Gift />}>
                                        Ser Padrino
                                    </Button>
                                </Stack>
                            </motion.div>
                        </Stack>
                    </Box>

                    <Box flex={1} position="relative" display="flex" justifyContent="center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            style={{ position: "relative", width: "100%", maxWidth: 600 }}
                        >
                            <img
                                src="/images/hero.webp"
                                alt="Niño realizando equinoterapia en Córdoba"
                                style={{
                                    width: "100%",
                                    height: "500px",
                                    borderRadius: 16,
                                    display: "block",
                                }}
                            />

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <Paper
                                    elevation={3}
                                    sx={{
                                        position: "absolute",
                                        bottom: -24,
                                        left: -24,
                                        p: 2,
                                        mx: { xs: 2, md: 0 },
                                        borderRadius: 3,
                                        bgcolor: "colors.primary",
                                    }}
                                >
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <Avatar sx={{ bgcolor: "colors.secondary", color: "colors.primary" }}>
                                            <Star />
                                        </Avatar>
                                        <Box>
                                            <Typography color="colors.darkBlue" variant="subtitle1">
                                                20+ años
                                            </Typography>
                                            <Typography color="colors.darkBlue" variant="caption">
                                                de experiencia
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Paper>
                            </motion.div>
                        </motion.div>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}

export default Hero;
