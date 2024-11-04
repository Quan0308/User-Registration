import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkToken } from '../../utils/sessionHelper';
import { Button } from '@mui/material';

export default function Home() {
  const [user, setUser] = useState<string>('');
  const navigate = useNavigate();
  useEffect(() => {
    if (!checkToken()) {
      navigate('/login');
    } else {
      const accessToken = localStorage.getItem('accessToken') as string;
      setUser(accessToken);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/login');
  };

  return (
    <div>
      <Button onClick={handleLogout} variant="outlined">
        Logout
      </Button>
      <h1>Welcome {user}</h1>
    </div>
  );
}
