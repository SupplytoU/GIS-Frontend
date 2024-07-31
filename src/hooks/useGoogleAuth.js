import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuth } from '../redux/features/auth/authSlice';
import { useGoogleAuthenticateMutation } from '../redux/features/auth/authApiSlice';

export const useGoogleAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [googleAuthenticate] = useGoogleAuthenticateMutation();
  const effectRan = useRef(false);

  useEffect(() => {
    // Check if effect has already run
    if (effectRan.current) return;

    // Mark the effect as run
    effectRan.current = true;

    const searchParams = new URLSearchParams(location.search);
    const state = searchParams.get('state');
    const code = searchParams.get('code');

    if (state && code) {
      googleAuthenticate({ state, code })
        .unwrap()
        .then(() => {
          dispatch(setAuth());
          // Add toast message for success
          navigate('/');
        })
        .catch(() => {
          // Add toast message for error
          navigate('/login');
        });
    }
  }, [location, googleAuthenticate, dispatch, navigate]);
};
