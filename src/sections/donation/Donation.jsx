import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  Box,
  Container,
  Stack,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  Favorite as Heart,
  CardGiftcard as GiftIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

function DonationSection() {
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
    <Box id="donation" sx={{ bgcolor: "#f0fdf4" }}>
      <Box py={10} bgcolor="white">
        <Container maxWidth="md">
          {/* Títulos */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Box textAlign="center" mb={6}>
              <Typography
                variant="h4"
                sx={{ color: "colors.darkBlue" }}
                fontWeight="bold"
                gutterBottom
              >
                ¿Cómo puedes ayudar?
              </Typography>
              <Typography variant="h6" sx={{ color: "colors.darkBlue" }}>
                Recibimos donaciones de dinero, ropa, calzado, muebles, cualquier elemento apto para la venta.
              </Typography>
            </Box>
          </motion.div>

          {/* Cards */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={6}
            alignItems="stretch"
            justifyContent="space-between"
            sx={{ minHeight: "30vh" }}
          >
            {[0, 1].map((index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                custom={index + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ flex: 1, display: "flex" }}
              >
                {index === 0 ? (
                  <Card
                    variant="outlined"
                    sx={{
                      backgroundColor: "colors.white",
                      borderColor: "#a5d6a7",
                      ":hover": { borderColor: "#66bb6a" },
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardHeader
                      titleTypographyProps={{ fontSize: 20 }}
                      avatar={<GiftIcon sx={{ color: "#2e7d32", mr: 1 }} />}
                      title={<Typography variant="h6" color="#2e7d32">Donar</Typography>}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="body2" sx={{ color: "colors.darkBlue" }} mb={2}>
                        Todo contribuye para seguir aportando nuestro granito de arena para un mundo mejor.
                      </Typography>
                      <List dense>
                        {["Dinero", "Ropa y calzado", "Muebles", "Cualquier elemento apto para la venta"].map((item, idx) => (
                          <ListItem key={idx} disablePadding>
                            <ListItemText
                              sx={{ color: "colors.darkBlue" }}
                              primary={`• ${item}`}
                              primaryTypographyProps={{ fontSize: 14 }}
                            />
                          </ListItem>
                        ))}
                      </List>
                      <Button
                        fullWidth
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
                          mt: 2,
                          color: "colors.primary",
                          bgcolor: "#2e7d32",
                          ":hover": { bgcolor: "#1b5e20" },
                        }}
                      >
                        Hacer Donación
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <Card
                    variant="outlined"
                    sx={{
                      backgroundColor: "colors.white",
                      borderColor: "#90caf9",
                      ":hover": { borderColor: "#42a5f5" },
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardHeader
                      titleTypographyProps={{ fontSize: 20 }}
                      avatar={<Heart sx={{ color: "#1565c0", mr: 1 }} />}
                      title={<Typography variant="h6" color="#1565c0">Ser Padrino</Typography>}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="body2" sx={{ color: "colors.darkBlue" }} mb={2}>
                        Con el aporte económico de "padrinos" logramos cubrir los gastos de funcionamiento.
                      </Typography>
                      <Divider variant="middle" sx={{ my: 2 }} />
                      <Box bgcolor="#e3f2fd" p={2} borderRadius={1}>
                        <Typography variant="body2" color="#1565c0" fontWeight="medium" align="center">
                          ¡COMUNICATE CON NOSOTROS, ESPERAMOS TU MENSAJE!
                        </Typography>
                      </Box>
                      <Divider variant="middle" sx={{ my: 2 }} />
                      <Button
                        fullWidth
                        variant="outlined"
                        sx={{
                          mt: 2,
                          borderColor: "#1565c0",
                          color: "#1565c0",
                          ":hover": { bgcolor: "#e3f2fd" },
                        }}
                        onClick={() =>
                          window.open(
                            `https://wa.me/5493562417611?text=${encodeURIComponent(
                              "Hola, me gustaría recibir más información"
                            )}`,
                            "_blank"
                          )
                        }
                      >
                        Contactar
                      </Button>

                    </CardContent>
                  </Card>
                )}
              </motion.div>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default DonationSection;
