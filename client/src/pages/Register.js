import React from 'react';
import AuthForm from '../components/AuthForm';

const Register = ({ handleAuth }) => {
  return (
    <div>
      <h1>Register Page</h1>
      <AuthForm isLogin={false} handleAuth={handleAuth} />
    </div>
  );
};

export default Register;
