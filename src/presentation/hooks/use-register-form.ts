import { useEffect, useRef, useState } from 'react';
// import { User } from '../../domain/entities/user.entity';

interface Errors {
  email?: string;
  password?: string;
  name?: string;
  username?: string;
  confirmedPassword?: string;
}

interface FormState {
  email: string;
  password: string;
}

export interface User {
  id?: string,
  name: string,
  email: string,
  username: string,
  password: string,
  confirmedPassword: string,
}

const useRegisterForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmedPassword, setConfirmedPassword] = useState<string>('');
  const [errors, setErrors] = useState<Errors>({});

  const initialRender = useRef(true);
  useEffect(() => {

    if (initialRender.current) {
      initialRender.current = false;
    } else {
      handleSubmit();
    }
  }, [name, email, username, password, confirmedPassword])

  const validateForm = (): Errors => {
    let errors: Errors = {};

    /**
     * name
     */
    if (!name.trim()) {
      errors.name = 'The name is required';
    }

    /**
     * email
     */
    if (!email.trim()) {
      errors.email = 'The email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email';
    }

    /**
     * username
     */
    if (!username.trim()) {
      errors.username = 'The user es required';
    }

    /**
     * password
     */
    if (!password.trim()) {
      errors.password = 'The password is required';
    }

    /**
     * confirmedPassword
     */
    if (!confirmedPassword.trim()) {
      errors.confirmedPassword = 'The confirmed password is required';
    }
    if (password !== confirmedPassword) {
      errors.confirmedPassword = 'Password is not equal to confirmed password';
    }

    return errors;
  };

  const clearForm = () => {
    setName('');
    setUsername('');
    setConfirmedPassword('');
    setEmail('');
    setPassword('');
    setErrors({})
  }

  const handleSubmit = (): void => {
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      // Lógica para enviar el formulario

      clearForm();
    } else {
      setErrors(errors);
    }
  };

  return {
    name,
    setName,

    username,
    setUsername,

    confirmedPassword,
    setConfirmedPassword,

    email,
    setEmail,

    password,
    setPassword,

    handleSubmit,
    errors,
  };
};

export default useRegisterForm;
