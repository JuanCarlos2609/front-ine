import {
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
  Alert,
  type Theme,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { requiredField } from "../../utils/constants";
import type { LoginValues } from "../../types/loginValues";
import loginIcon from "../../assets/login-svgrepo-com.svg";
import { useAuth } from "../../context/AuthContext";

export const Login = () => {
  const { login } = useAuth();
  const [loginError, setLoginError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialValues: LoginValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Ingrese un email válido.")
      .required(requiredField),
    password: Yup.string().required(requiredField),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values: LoginValues) => {
      setIsLoading(true);
      setLoginError("");

      try {
        const success = await login(values.email, values.password);
        if (!success) {
          setLoginError(
            "Credenciales incorrectas. Intente con email: admin@ine.com y password: admin123"
          );
        }
      } catch {
        setLoginError("Error al iniciar sesión. Intente nuevamente.");
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <Grid
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        height: "100vh",
        width: "100%",
        bgcolor: (theme: Theme) => theme.palette.secondary.main,
      }}
    >
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Paper
          sx={{
            width: "460px",
            padding: 4,
            borderRadius: "10px",
            flexDirection: "column",
          }}
        >
          <Stack direction="column" spacing={3}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Grid
                component="img"
                src={loginIcon}
                alt="login"
                sx={{ width: "50px", height: "50px" }}
              />
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  letterSpacing: "1.4px",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "30px",
                }}
              >
                Iniciar Sesión
              </Typography>
            </Grid>

            {loginError && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {loginError}
              </Alert>
            )}
            <TextField
              fullWidth
              id="email"
              size="small"
              label="E-mail"
              type="text"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              size="small"
              label="Password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              type="password"
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button variant="contained" type="submit" disabled={isLoading}>
              {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
            </Button>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
};
