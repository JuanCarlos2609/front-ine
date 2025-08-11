import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

export const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" flexDirection="column" gap={3}>
        {/* Panel de contenido principal y lateral */}
        <Box display="flex" gap={3} flexWrap="wrap">
          {/* Panel de contenido principal */}
          <Box flex="1" minWidth="300px">
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Panel Principal
                </Typography>
                <Typography paragraph>
                  Esta es la página de inicio del sistema INE. Aquí puedes
                  gestionar todas las funcionalidades disponibles para tu perfil
                  de usuario.
                </Typography>
                <Typography paragraph>
                  El sistema está protegido por autenticación y solo usuarios
                  autorizados pueden acceder a esta sección.
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* Panel lateral */}
          <Box flexBasis="300px">
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Información del Sistema
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Estado:</strong> En línea
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Versión:</strong> 1.0.0
                </Typography>
                <Typography variant="body2">
                  <strong>Último acceso:</strong> {new Date().toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Sección de acciones rápidas */}
        <Card>
          <CardContent>
            <Typography variant="h6" component="h3" gutterBottom>
              Acciones Rápidas
            </Typography>
            <Box display="flex" gap={2} flexWrap="wrap">
              <Button variant="contained" color="primary">
                Nueva Consulta
              </Button>
              <Button variant="contained" color="secondary">
                Ver Reportes
              </Button>
              <Button variant="outlined">Configuración</Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};
