import { Link as RouterLink } from "react-router-dom";
import { EnergySavingsLeafTwoTone, Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch } from "react-redux";
import { checkingAuthentication, startGoogleSingIn } from "../../store/auth";

export const LoginPage = () => {
  const dispath = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "dsmith.mr@gmail.com",
    password: "1263456",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    dispath(checkingAuthentication());
    console.log({ email, password });
  };

  const onGoogleSignIn = () => {
    dispath(startGoogleSingIn());
    console.log("onGoogleSignIn");
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              value={email}
              name="email"
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              value={password}
              name="password"
              onChange={onInputChange}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth onClick={onGoogleSignIn}>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
