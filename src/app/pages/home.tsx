import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { withAuth } from '../utils/withAuth';
import Button from '../components/Button';

const HomePage = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome to Barazer Home</h1>
      <Button text="Logout" onClick={logout} />
    </div>
  );
};

export default withAuth(HomePage);
