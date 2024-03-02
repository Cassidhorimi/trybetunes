import { createUser } from '../../services/userAPI';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, loginSchemaType } from './login.schema';
import { useState } from 'react';

export function useLogin() {
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema)
  });

  function onSubmit(data: loginSchemaType) {
    setIsLoad(true);
    createUser({ name: data.user }).then(() => {
      setIsLoad(false);
      window.location.href = '/home';
    });
  }

  return { handleSubmit: handleSubmit(onSubmit), register, errors, isLoad };
}
