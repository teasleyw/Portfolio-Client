// Login.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Screen, LoginPageContainer, ArcadeButton, Tear, LogoContainer, Logo, Icicle, LoginFormContainer, FormInput, FormButton, ErrorMessage, IcicleAnimation,
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
   const [tears, setTears] = useState([]);

    const [icicleWidths, setIcicleWidths] = useState([]);
    const [showWarning, setShowWarning] = useState(false); // State for warning visibility
    const MAX_SNOWFLAKES = 250; // Maximum number of snowflakes



    // Function to generate random duration for snowflake animation
     const getRandomDuration = () => {
       return Math.random() * 10 + 5; // Random duration between 5 and 15 seconds
     };

     // Function to generate random position for snowflake
     const getRandomPosition = () => {
       return Math.random() * window.innerWidth; // Random position within window width
     };
     const getRandomNumber = (min, max) => {
       return Math.floor(Math.random() * (max - min + 1)) + min;
     };
     useEffect(() => {
         // Generate random widths for icicles once during component mount
         const newWidths = Array.from({ length: 25 }, () => Math.floor(Math.random() * (50 - 10 + 1)) + 10);
         setIcicleWidths(newWidths);
       }, []);
       useEffect(() => {
           const generateTears = () => {
             const newTears = Array.from({ length: 25 }, (_, index) => ({
               duration: getRandomNumber(0, 5) + 3,
               delay: getRandomNumber(0, 20) / 10 * getRandomNumber(1, 3)
             }));
             setTears(newTears);
           };

           generateTears();
         }, []);

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
     // Simulate clicks on all icicles
       for (let i = 1; i <= 25; i++) {
         handleIcicleClick(`icicle${i}`);
       }
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
const getRandomWidth = () => {
    return Math.floor(Math.random() * (50 - 10 + 1)) + 10; // Random width between 10 and 50
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
{icicleWidths.map((width, index) => (
        <Icicle
          key={`icicle-${index + 1}`}
          isFalling={fallingIcicles[`icicle${index + 1}`]}
          onClick={() => handleIcicleClick(`icicle${index + 1}`)}
          width={width} // Use pre-generated width

          style={{ left: `${index * (100 / 25)}%` }} // Adjust left positioning as needed
        > <Tear
                   key={index} duration={tears[index].duration} delay={tears[index].delay}
                  /> </Icicle>
      ))}
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