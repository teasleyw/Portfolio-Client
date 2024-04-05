import React, { useState, useEffect } from 'react';
import {PageWrapper} from "./LinkedInRedirectStyled.jsx"
import axios from 'axios';

const LinkedInRedirect = () => {
  const [loading, setLoading] = useState(true);



    useEffect(() => {
        let timerId;

        // Define the function to exchange code for token
        const exchangeCodeForToken = async (authorizationCode) => {
          try {
            // Make a request to your backend to initiate the token exchange
            const response = await axios.get('/linkedin/callback', {
              params: { code: authorizationCode },
            });
            // Handle the response from the backend
            console.log('Received access token:', response.data.access_token);
            try{
                const userinfo = await axios.get('/linkedin/userinfo', {
                       params: { accesstoken: response.data.access_token },
                });
                console.log(userinfo)
            }
            catch (error) {
               console.error('Error exchanging asdfdfae:', error);
            }

            // Perform any further actions (e.g., store token, redirect user)
          } catch (error) {
            console.error('Error exchanging authorization code:', error);
          } finally {
            // Set loading to false when the effect is done
            setLoading(false);
          }
        };

        // Parse query parameters to extract the authorization code
        const params = new URLSearchParams(window.location.search);
        const authorizationCode = params.get('code');

        // Check if the authorization code exists and call the exchange function
        if (authorizationCode) {
          // Use a debouncing technique to delay the execution of the effect
          timerId = setTimeout(() => {
            exchangeCodeForToken(authorizationCode);
          }, 50); // Adjust the delay time as needed
        }

        // Clean up function to clear the timer
        return () => {
          clearTimeout(timerId);
        };
      }, []);
  return (
    <PageWrapper>
      {loading ? (
        <div>Loading...</div> // Display loading spinner while waiting for backend response
      ) : (
        <div>Authentication complete</div> // Display content when authentication is complete
      )}
    </PageWrapper>
  );
};

export default LinkedInRedirect;