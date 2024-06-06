import React from 'react';
import AuthForm from '../components/AuthForm';

const Login = ({ handleAuth }) => {
  return (
    <div>
      <h1>Login Page</h1>
      <AuthForm isLogin={true} handleAuth={handleAuth} />
    </div>
  );
};

export default Login;
