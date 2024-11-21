'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import jwt from 'jsonwebtoken';

const GoogleCallback = () => {
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async () => {
      // Obtén los parámetros de la URL
      const params = new URLSearchParams(window.location.search);
      console.log(params)
      const token = params.get('token');
      const isNewUser = params.get('isNewUser') === 'true';

      if (token) {
        // Almacena el token JWT
        localStorage.setItem('token', token);

        // Decodifica el token y almacena su expiración
        const decodedToken: any = jwt.decode(token);
        const expirationTime = decodedToken.exp * 1000; // Milisegundos
        localStorage.setItem('tokenExpiration', expirationTime.toString());

        // Redirige según el estado del usuario
        if (isNewUser) {
          router.push('/complete-registration');
        } else {
          router.push('/');
        }
      } else {
        console.error('No token received');
        router.push('/sign-in');
      }
    };

    handleCallback();
  }, [router]);

  return <div>Processing login...</div>;
};

export default GoogleCallback;
