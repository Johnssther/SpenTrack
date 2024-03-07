import { useState } from 'react';
import { useUserAuthActions } from '../hooks/use-auth-actions';

interface Errors {
  email?: string;
  password?: string;
}

interface FormState {
  email: string;
  password: string;
}

const useLoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<Errors>({});

  const { loginHandle } = useUserAuthActions();

  const validateForm = (): Errors => {
    let errors: Errors = {};

    if (!email.trim()) {
      errors.email = 'The email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'The email is invalid';
    }

    if (!password.trim()) {
      errors.password = 'The password is required';
    }

    return errors;
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
    setErrors({})
  }

  const handleSubmit = (): void => {
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      // Logic send form

      loginHandle(email, password)


      clearForm();
    } else {
      setErrors(errors);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    errors,
  };
};

export default useLoginForm;
