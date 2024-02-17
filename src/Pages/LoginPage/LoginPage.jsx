// Login.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Screen, LoginPageContainer, ArcadeButton, LogoContainer, Logo, Icicle, LoginFormContainer, FormInput, FormButton, ErrorMessage, IcicleAnimation,
 Triangle, AvalancheWarning  } from './LoginPageStyled';
import Header from "../../Components/Header/Header.jsx"
import Snowflake from '../../Components/Snowflakes/Snowflakes.jsx';
const LoginPage = ({ setIsAuthenticated }) => {
 const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const [fallingIcicles, setFallingIcicles] = useState({
     icicle1: false,
     icicle2: false,
     icicle3: false,
     icicle4: false,
     icicle5: false,
   });

   const [snowflakes, setSnowflakes] = useState([]);
   const [isShaking, setIsShaking] = useState(false);
    const [showWarning, setShowWarning] = useState(false); // State for warning visibility
    const MAX_SNOWFLAKES = 500; // Maximum number of snowflakes



    // Function to generate random duration for snowflake animation
     const getRandomDuration = () => {
       return Math.random() * 10 + 5; // Random duration between 5 and 15 seconds
     };

     // Function to generate random position for snowflake
     const getRandomPosition = () => {
       return Math.random() * window.innerWidth; // Random position within window width
     };

    useEffect(() => {
        const addSnowflake = () => {
          if (snowflakes.length < MAX_SNOWFLAKES) {
              const newSnowflake = {
                left: getRandomPosition(),
                duration: getRandomDuration()
              };
              setSnowflakes(prevSnowflakes => [...prevSnowflakes, newSnowflake]);
            }
        };

        const interval = setInterval(() => {
          addSnowflake();
        }, 1000);

        return () => clearInterval(interval);
      }, [snowflakes]);

   const handleIcicleClick = (icicleId) => {
     setFallingIcicles(prevState => ({ ...prevState, [icicleId]: true }));
     setTimeout(() => {
       setFallingIcicles(prevState => ({ ...prevState, [icicleId]: false }));
     }, 2000); // Adjust timeout to match the duration of the falling animation
   };

 const handleButtonClick = () => {
     // Trigger the screen shaking animation
     setIsShaking(true);
     handleIcicleClick("icicle1")
     handleIcicleClick("icicle2")
     handleIcicleClick("icicle3")
     handleIcicleClick("icicle4")
     handleIcicleClick("icicle5")
     for (let i = 0; i < 150; i++) {
           if (snowflakes.length < MAX_SNOWFLAKES) {
           const newSnowflake = {
             left: getRandomPosition(),
             duration: getRandomDuration()
           };
           setSnowflakes(prevSnowflakes => [...prevSnowflakes, newSnowflake]);
         }

         else{
           break;
         }
         }
     setShowWarning(true); // Show the warning on button click
     setTimeout(() => {
       setIsShaking(false);
     }, 1000); // Duration of the animation
   };

   const handleSubmit = async (e) => {
     alert("Functionality Under Construction")
     e.preventDefault();
     try {
       const response = await axios.post('/api/login', { username, password });
       if (response.data.success) {
         setIsAuthenticated(true);
       } else {
         setError('Invalid credentials');
       }
     } catch (error) {
       console.error('Error logging in:', error);
     }
   };

   return (
     <Screen isShaking={isShaking}>
     <Header/>
           <LoginPageContainer>
             {/* Logo */}
             <LogoContainer>
               <Logo>FM</Logo> {/* Frost Milano initials */}
             </LogoContainer>
             {/* Snowflakes */}
             {snowflakes.map((snowflake, index) => (
               <Snowflake key={index} left={snowflake.left} duration={snowflake.duration} />
             ))}
             {/* Icicles */}

             <Icicle isFalling={fallingIcicles['icicle1']} onClick={() => handleIcicleClick('icicle1')} style={{ left: '10%' }} />
             <Icicle isFalling={fallingIcicles['icicle2']} onClick={() => handleIcicleClick('icicle2')} style={{ left: '30%' }} />
             <Icicle isFalling={fallingIcicles['icicle3']} onClick={() => handleIcicleClick('icicle3')} style={{ left: '50%' }} />
             <Icicle isFalling={fallingIcicles['icicle4']} onClick={() => handleIcicleClick('icicle4')} style={{ left: '70%' }} />
             <Icicle isFalling={fallingIcicles['icicle5']} onClick={() => handleIcicleClick('icicle5')} style={{ left: '90%' }} />
             {/* You can adjust the animationDelay for more icicles or add more icicles as needed */}
             <LoginFormContainer onSubmit={handleSubmit}>
               <FormInput
                 type="text"
                 placeholder="Username"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
               />
               <FormInput
                 type="password"
                 placeholder="Password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
               />
               <FormButton type="submit">Login</FormButton>
               {error && <ErrorMessage>{error}</ErrorMessage>}
             </LoginFormContainer>
{/*               */}{/* Avalanche Warning */}
{/*                    {showWarning && ( */}
{/*                      <AvalancheWarning> */}
{/*                        <Triangle>Avalanche Warning</Triangle> */}
{/*                      </AvalancheWarning> */}
{/*                    )} */}
{/*                */}{/* Show warning */}

              {/* Arcade Button */}
            <ArcadeButton onClick={handleButtonClick}>Don't Push</ArcadeButton>


           </LoginPageContainer>

         </Screen>
   );
 };
export default LoginPage;