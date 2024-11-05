import LockOutlined from '@mui/icons-material/LockOutlined';
import { Button, TextField, Grid2 as Grid, Typography, Container, CssBaseline, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { login } from '../../services/authService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { checkToken } from '../../utils/sessionHelper';

const useStyles = makeStyles({
  paper: {
    marginTop: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: '8px',
    backgroundColor: 'secondary.main'
  },
  form: {
    width: '100%',
    marginTop: '8px'
  }
});

export default function SignIn() {
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    if (checkToken()) {
      navigate('/home');
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    try {
      const res = await login({ email, password });
      const { accessToken, refreshToken } = res.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      toast.success(res.message);
      navigate('/home');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <TextField variant="outlined" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField variant="outlined" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '16px', marginBottom: '16px' }}>
            Sign In
          </Button>
          <Grid container justifyContent="flex-start">
            <Grid>
              <Button
                onClick={() => navigate('/register')}
                variant="text"
                color="primary"
                style={{
                  textTransform: 'none',
                  textDecoration: 'underline',
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                  padding: 0,
                  minWidth: 0
                }}
                sx={{
                  '&:hover': {
                    backgroundColor: 'transparent'
                  },
                  '&:focus': {
                    backgroundColor: 'transparent'
                  },
                  '&:active': {
                    backgroundColor: 'transparent'
                  }
                }}>
                Don't have an account? Sign up
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
