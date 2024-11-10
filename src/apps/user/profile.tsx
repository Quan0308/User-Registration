import { useEffect, useState } from 'react';
import { useAuthStore } from '../../stores/authStore';
import { getProfile } from '../../services/userService';
import { IAuthStore } from '../../stores/authStore';
import { toast } from 'react-toastify';

export default function Profile() {
  const user = useAuthStore((state: IAuthStore) => state.user);
  const setUser = useAuthStore((state: IAuthStore) => state.setUser); // Get the setUser function
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const data = await getProfile();
        setUser(data.data);
        setLoading(false);
      } catch (error) {
        toast.error('Internal server error');
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfileData();
  }, [setUser]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>Redirecting...</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>id: {user?.id}</p>
      <p>username: {user?.username}</p>
      <p>email: {user?.email}</p>
    </div>
  );
}
