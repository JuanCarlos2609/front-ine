import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  type Theme,
} from "@mui/material";
import { useAuth } from "../context/AuthContext";

export const Header = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ¡Bienvenido al Sistema de Busqueda INE!
          </Typography>
          <Button
            variant="outlined"
            onClick={handleLogout}
            sx={{
              height: "fit-content",
              bgcolor: (theme: Theme) => theme.palette.common.black,
              color: "white",
              p: 1,
            }}
          >
            Cerrar Sesión
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
