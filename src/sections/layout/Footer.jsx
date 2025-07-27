import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Stack,
  Avatar,
} from "@mui/material";
import { Favorite as Heart } from "@mui/icons-material";
import { Link as ScrollLink } from "react-scroll";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#1f2937", color: "white", py: 8, px: 3 }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={2} alignItems="center" mb={2}>
              <img
                src="/images/logo.webp"
                alt="Descripción"
                style={{
                  width: 40,
                  height: 40,
                  display: "block",
                }}
              />
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  El Andar
                </Typography>
                <Typography variant="body2" color="gray">
                  Equinoterapia e Inclusión
                </Typography>
              </Box>
            </Stack>
            <Typography variant="body2" color="gray" paragraph>
              Pioneros en equinoterapia desde 2004, transformando vidas a través de la terapia asistida con caballos.
            </Typography>
            <Typography variant="caption" color="gray">
              Fundada el 27 de abril de 2004 • Morteros, Córdoba
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Enlaces
            </Typography>
            <Stack spacing={1}>
              {[
                { label: "Nosotros", href: "about" },
                { label: "Misión", href: "mission" },
                { label: "Colaborar", href: "collaborate" },
                { label: "Contacto", href: "contact" },
              ].map((link, idx) => (
                <ScrollLink
                  key={idx}
                  to={link.href}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  <Typography
                    component="span"
                    sx={{
                      cursor: "pointer",
                      color: "gray",
                      transition: "color 0.3s",
                      "&:hover": {
                        color: "white",
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                </ScrollLink>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Ayuda
            </Typography>
            <Stack spacing={1}>
              {["Donar", "Ser Padrino", "Voluntariado", "Feria Americana"].map(
                (item, idx) => (
                  <Typography
                    key={idx}
                    component="span"
                    sx={{
                      cursor: "pointer",
                      color: "gray",
                      transition: "color 0.3s",
                      "&:hover": {
                        color: "white",
                      },
                    }}
                  >
                    {item}
                  </Typography>
                )
              )}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "#374151", my: 4 }} />

        <Typography variant="body2" align="center" color="gray">
          © {new Date().getFullYear()} El Andar - Equinoterapia e Inclusión. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
