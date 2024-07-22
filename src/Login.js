import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';
import google from './Images/Google.png';
import mark from './Images/mark.png'
import { Link } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import { useJwtCreateMutation } from './redux/features/auth/authApiSlice';


function Login() {
  const emailRef = useRef(null);
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setError('');
  }, [email, password]);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [login] = useJwtCreateMutation();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    login({email, password}).unwrap().then((result) => {
      console.log(result);
      history.push('/');
    }).catch((err) => {
      console.log(error);
    });;
    // console.log(email, password);
    // setEmail('');
    // setPassword('');
    // setSuccess(true);

    // // Redirect to home page after a delay to show success message
    // setTimeout(() => {
    //   history.push('/');
    // }, 2000); // 2-second delay
  };

  const [isDark]=useLocalStorage("isDark",false);

  return (
    <>
      <div className="Logindiv" data-theme={isDark?"dark":"light"}>
        <div className="LoginContainer">
          <div className="Logincolumn">
            <div className="CreateAccount">
              <div className="Loginimg-1">
              </div>
              <div className="Create">Create An Account</div>
              <div className="SignupButton"><Link to="/Signup">SIGN UP</Link></div>
            </div>
          </div>
          <div className="Logincolumn-2">
            <div className="Auth">
              {!success ? (
                <>
                  <div className="Login-title">Log In</div>
                  <div className='GSect'>
                  <section>
                    <form onSubmit={handleSubmit}>
                      <div className="UserEmail">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email Address"
                          className="form-input"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          ref={emailRef}
                          required
                        />
                      </div>
                      {error && <div className="Error">{error}</div>}
                      <div className="Login-Line1" />
                      <div className="Password">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Password"
                          className="form-input"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="Login-Line1" />
                      <div className="Forgot"><Link to="/Reset Password">Forgot password?</Link></div>
                      <button type="submit" className="LoginButton">LOG IN</button>
                    </form>
                  </section>
                  <div className='Signup2'>Don't have an account yet?<br/> <span className='SignupSpan'><Link to="/Signup">Register here</Link></span></div>
                  </div>
                  <div className="Or">OR</div>
                  <div className="SigninWithGoogle">
                    <img loading="lazy" src={google} className="Loginimg-2" alt="Google" />
                    <div className="Google"><Link to="/Soon">Sign in with Google</Link></div>
                  </div>
                  
                </>
              ) : (
                <div className="Success">
                  <img
                    loading="lazy"
                    src={mark}
                    className="Loginimg-3"
                  />
                  <div className="LoginSuccess">Login successful!<br/> Redirecting to home page...</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;