import LockOutlined from '@mui/icons-material/LockOutlined';
import { Button, TextField, Grid2 as Grid, Typography, Container, CssBaseline, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { register } from '../../services/authService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthStore } from '../../stores/authStore';

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

export default function SignUp() {
  const classes = useStyles();
  const navigate = useNavigate();

  const token = useAuthStore(state => state.token);
  useEffect(() => {
    if (token) {
      navigate('/home');
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    try {
      const res = await register({ email, password });
      toast.success(res.message);
      navigate('/login');
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
          Sign up
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
            Sign Up
          </Button>
          <Grid container justifyContent="flex-start">
            <Grid>
              <Button
                onClick={() => navigate('/login')}
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
                }}
              >
                Already have an account? Sign In
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
