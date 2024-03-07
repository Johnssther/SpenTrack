import { useState } from 'react';

interface Errors {
  email?: string;
}

interface FormState {
  email: string;
}

const useForgotPasswordForm = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = (): Errors => {
    let errors: Errors = {};

    if (!email.trim()) {
      errors.email = 'The email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    return errors;
  };

  const clearForm = () => {
    setEmail('');
    setErrors({})
  }

  const handleSubmit = (): void => {
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      // Lógica para enviar el formulario
      
      clearForm();
      navigation.navigate('EnterCodeScreen')

    } else {
      setErrors(errors);
    }
  };

  return {
    email,
    setEmail,
    handleSubmit,
    errors,
  };
};

export default useForgotPasswordForm;
