import { useNavigate } from 'react-router-dom';
import { Button, Grid, Typography, Box } from '@mui/material';
import { useLogOut } from '../../stores/authStore';

export default function Home() {
  const navigate = useNavigate();
  const logout = useLogOut();

  const techStack = [
    { name: 'Web Framework', tech: 'React' },
    { name: 'Backend', tech: 'Java Spring Boot' },
    { name: 'Web Hosting', tech: 'AWS S3' },
    { name: 'Server Hosting', tech: 'AWS EC2' }
  ];

  return (
    <Box padding="16px">
      <Typography variant="h4" gutterBottom>
        Welcome to my website
      </Typography>

      <Box marginBottom="16px">
        <Button onClick={() => navigate('/profile')} variant="outlined" style={{ marginRight: '12px' }}>
          Profile
        </Button>
        <Button onClick={logout} variant="outlined">
          Logout
        </Button>
      </Box>

      <Box marginTop="20px">
        <Typography variant="h5" gutterBottom>
          My Tech Stack
        </Typography>
        <Grid container spacing={2}>
          {techStack.map((item, index) => (
            <Grid item xs={12} sm={12} md={12} key={index}>
              <Box padding="8px" border="1px solid #ccc">
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.name}
                </Typography>
                <Typography variant="body1">{item.tech}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
