// ActivationPage.js
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ActivationPage() {
  const { uidb64, token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const activateUser = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/users/activation/`, {
            headers: {
                'Content-Type': 'application/json'
              },
          method: 'POST',
          body: JSON.stringify({ uid: uidb64, token: token })
                });
            // console.log(response);
        // const data = await response.json();
        // console.log(data);
        if (response.ok) {
          navigate('/login'); // Redirect to login page on success
        } else {
          alert('Something went wrong with the activation');
        }
      } catch (error) {
        console.error('Error activating user:', error);
      }
    };

    activateUser();
  }, []);

  return (
    <div>
      <h2>Activating your account...</h2>
    </div>
  );
}

export default ActivationPage;
