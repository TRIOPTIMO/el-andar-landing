import { Box, Typography, Stack, Avatar, AppBar, Toolbar, Link, Button } from "@mui/material";
import { Favorite as Heart } from "@mui/icons-material";
import { Link as ScrollLink } from 'react-scroll';

function Nav() {
  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{ bgcolor: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={2}>
          <img
            src="/images/logo.png"
            alt="Descripción"
            style={{
              width: 40,
              height: 40,
              display: "block",
            }}
          />
          <Box>
            <Typography variant="h6" sx={{ color: "colors.secondary", fontWeight: 700 }}>
              El Andar
            </Typography>
            <Typography variant="caption" sx={{ color: "colors.secondary" }}>
              Equinoterapia e Inclusión
            </Typography>
          </Box>
        </Box>

        {/* MENÚ DE LINKS */}
        <Stack direction="row" spacing={3} display={{ xs: "none", md: "flex" }}>
          {[
            { label: "Nosotros", to: "about" },
            { label: "Misión", to: "mission" },
            { label: "Colaborar", to: "collaborate" },
            { label: "Contacto", to: "contact" },
          ].map(({ label, to }) => (
            <Link
              key={to}
              component={ScrollLink}
              to={to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70} // ajusta si tenés AppBar fija
              underline="none"
              sx={{
                color: "colors.darkBlue",
                fontWeight: 700,
                fontSize: "1rem",
                fontFamily: "arial",
                cursor: "pointer",
                transition: "color 0.3s",
                "&:hover": {
                  color: "colors.tertiary",
                },
              }}
            >
              {label}
            </Link>
          ))}
        </Stack>

        <Button
          variant="contained"
          onClick={() =>
            window.open(
              `https://wa.me/5491123456789?text=${encodeURIComponent(
                "Hola, me gustaría recibir más información"
              )}`,
              "_blank"
            )
          }
          sx={{
            backgroundColor: "colors.secondary",
            color: "colors.primary",
            fontWeight: 700,
          }}
        >
          Donar Ahora
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
