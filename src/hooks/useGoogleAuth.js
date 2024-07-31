import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGoogleAuthenticateMutation } from '../redux/features/auth/authApiSlice';
import { setAuth } from '../redux/features/auth/authSlice';

const CLIENT_ID = '599325683287-m0dvd4mm77na25p7qfoldped6opvek4q.apps.googleusercontent.com';

export default function useGoogleAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const effectRan = useRef(false);
  const [googleAuthenticate, { isLoading, isError, data, error }] = useGoogleAuthenticateMutation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const state = params.get('state');

    if (code && state && !effectRan.current) {
      googleAuthenticate({
        code,
        state,
        redirect_uri: 'http://localhost:3000/auth/google',
      })
      .then((result) => {
        if (result.data?.success) {
          dispatch(setAuth(result.data));
          navigate('/');
        } else {
          navigate('/login');
        }
      })
      .catch((err) => {
        console.error('Authentication error:', err);
        navigate('/login');
      });

      effectRan.current = true;
    }
  }, [googleAuthenticate, dispatch, navigate]);

  useEffect(() => {
    if (isError) {
      console.error('Google authentication error:', error);
    }
  }, [isError, error]);
}
