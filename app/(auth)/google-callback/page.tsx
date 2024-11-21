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
      const isNewUser = params.get('isNewUser') === 'true';
      if (isNewUser) {
        const googleID = params.get("googleId")
        const email = params.get("email")
        router.push(`/complete-registration?googleId=${googleID}&email=${email}`);
      } else {
        const token = params.get("token")
        if (token) {
          // Almacena el token JWT
          localStorage.setItem('token', token);
  
          // Decodifica el token y almacena su expiración
          const decodedToken: any = jwt.decode(token);
          const expirationTime = decodedToken.exp * 1000; // Milisegundos
          localStorage.setItem('tokenExpiration', expirationTime.toString());
  
          // Redirige según el estado del usuario
          router.push("/")
        } else {
          console.error('No token received');
          router.push('/sign-in');
        }
      }
    };

    handleCallback();
  }, [router]);

  return <div>Processing login...</div>;
};

export default GoogleCallback;
