import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { validateEmail, validatePassword } from '../utils/validation';
import Button from './Button';
import Input from './Input';
import styles from './SignupForm.module.css';

const SignupForm = () => {
  const { signup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setError('Invalid email address');
      return;
    }
    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long');
      return;
    }
    if (password!== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      setError(null);
      setLoading(true);
      await signup(email, password);
    } catch (error) {
      setError('Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Sign up</h2>
      {error && <p className={styles.error}>{error}</p>}
      <Input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email address"
      />
      <Input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />
      <Input
        type="password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        placeholder="Confirm password"
      />
      <Button type="submit" disabled={loading}>
        {loading? 'Creating account...' : 'Sign up'}
      </Button>
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </form>
  );
};

export default SignupForm;