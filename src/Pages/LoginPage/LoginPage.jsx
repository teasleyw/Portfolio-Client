// Login.js
import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import { Screen, LoginPageContainer, ArcadeButton, Tear, LogoContainer, Logo, Icicle, LoginFormContainer, FormInput, FormButton, ErrorMessage, IcicleAnimation,
 Triangle, AvalancheWarning  } from './LoginPageStyled';
import {ModalContent,ModalHeader,ModalWrapper,CloseButton} from '../../Components/ModalAlt/ModalAltStyled.jsx'
import Header from "../../Components/Header/Header.jsx"
import Snowflake from '../../Components/Snowflakes/Snowflakes.jsx';
import {updateIsLoggedIn,updateFirstName,updateLastName,updateEmail,updateUserId,updateUserRole} from "../../redux/app-state-slice";
import {useNavigate} from "react-router";
import {request, setAuthHeader} from "../../axiosHelper";
import RegisterForm from "../../Components/RegisterForm/RegisterForm.jsx"


const LoginPage = ({ setIsAuthenticated,dispatch,customerData }) => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [error, setError] = useState('');
   const navigate = useNavigate();
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
   const [icicleCount, setIcicleCount] = useState();
   const [icicleWidths, setIcicleWidths] = useState([]);
   const [showWarning, setShowWarning] = useState(false); // State for warning visibility
   const MAX_SNOWFLAKES = 250; // Maximum number of snowflakes
   const [isMouseDown, setIsMouseDown] = useState(false);
   const [data,setData] = useState([]);
   const handleOpenModal = (candidate) => {
         setIsModalOpen(true);
   };

   // Function to handle closing the modal
   const handleCloseModal = () => {
     setIsModalOpen(false);
   };

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
         // Function to calculate the number of icicles based on screen width
         const calculateIcicleCount = () => {
           const screenWidth = window.innerWidth;
           let count = 0;

           // Determine the number of icicles based on screen width range
           if (screenWidth < 450) {
                count = 7; // Example count for smaller screens
           }
           else if (screenWidth < 600) {
             count = 10; // Example count for smaller screens
           } else if (screenWidth >= 600 && screenWidth < 900) {
             count = 15; // Example count for medium-sized screens
           } else {
             count = 25; // Example count for larger screens
           }



           setIcicleCount(count);

         };
         // Call the function initially and on window resize
         calculateIcicleCount();
         console.log(icicleCount);
         // Generate random widths for icicles once during component mount
         const newWidths = Array.from({ length: icicleCount }, () => Math.floor(Math.random() * (50 - 10 + 1)) + 10);

         setIcicleWidths(newWidths);

         window.addEventListener('resize', calculateIcicleCount);
         const generateTears = () => {
         const newTears = Array.from({ length: icicleCount }, (_, index) => ({
            duration: getRandomNumber(0, 5) + 3,
            delay: getRandomNumber(0, 20) / 10 * getRandomNumber(1, 3)
          }));
          setTears(newTears);
        };

         generateTears();
         const handleMouseDowns = () => {
             setIsMouseDown(true)
           };



         // Remove the event listener on component unmount
         return () => {
                 window.removeEventListener('resize', calculateIcicleCount);

             };
       }, [icicleCount]);


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
     for (let i = 1; i <= icicleCount; i++) {
       // Generate a random delay between 0 and 3000 milliseconds (3 seconds)
       const delay = Math.random() * 1000;

       // Use setTimeout to simulate clicks with a random delay
       setTimeout(() => {
         handleIcicleClick(`icicle${i}`);
       }, delay);
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
   // Handle mouse up event
   const handleMouseUp = () => {
     setIsMouseDown(false);
   };
   const onLogin = (e, username, password) => {
           e.preventDefault();
           request(
               "POST",
               "/login",
               {
                   login: username,
                   password: password
               },{}).then(
               (response) => {
                   setAuthHeader(response.data.token);
                   dispatch(updateFirstName(response.data.firstName));
                   dispatch(updateLastName(response.data.lastName));
                   dispatch(updateEmail(response.data.email));
                   dispatch(updateIsLoggedIn(true));
                   dispatch(updateUserRole(response.data.role));
                   dispatch(updateUserId(response.data.id));
                   alert("Functionality Under Construction. Only Cosmetic right now (which is also under construction lol)")
                   navigate("/Profile")
               }).catch(
               (error) => {
                   setAuthHeader(null);
               }
           );
       };



   const handleSubmit = async () => {
        dispatch(updateIsLoggedIn(true))
        alert("Functionality Under Construction. Only Cosmetic right now (which is also under construction lol)")

//      e.preventDefault();
//      try {
//        const response = await axios.post('/api/login', { username, password });
//        if (response.data.success) {
//          setIsAuthenticated(true);
//        } else {
//          setError('Invalid credentials');
//        }
//      } catch (error) {
//        console.error('Error logging in:', error);
//      }
   };
const getRandomWidth = () => {
    return Math.floor(Math.random() * (50 - 10 + 1)) + 10; // Random width between 10 and 50
  };

   return (
     <Screen isShaking={isShaking}>
     <Header customerData={customerData} dispatch={dispatch} />
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
          onMouseDown={() => handleIcicleClick(`icicle${index + 1}`)}
          width={width} // Use pre-generated width

          style={{ left: `${index * (100 / icicleCount)}%` }} // Adjust left positioning as needed
        > <Tear
                   key={index}
                   isFalling={fallingIcicles[`icicle${index + 1}`]}
                    duration={tears[index].duration} delay={tears[index].delay}
                  /> </Icicle>
      ))}
      {/* You can adjust the animationDelay for more icicles or add more icicles as needed */}
             <LoginFormContainer>
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
               <FormButton onClick={(e) => onLogin(e,username,password)} >Login</FormButton>
               <FormButton onClick={(e) => handleOpenModal()}> Register</FormButton>
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
              <div> {data && data.map((line) => <p>{line}</p>)} </div>
            <ArcadeButton onClick={handleButtonClick}>Don't Push</ArcadeButton>
            <ModalWrapper isOpen={isModalOpen}>
            <ModalContent>
              <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
               <RegisterForm customerData={customerData} dispatch={dispatch}/>
            </ModalContent>
          </ModalWrapper>


           </LoginPageContainer>

         </Screen>
   );
 };
export default LoginPage;