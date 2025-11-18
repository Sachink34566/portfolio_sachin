import React from "react";
import './styles.css';
import { Animate } from "react-simple-animate";
import { useNavigate } from "react-router-dom";

const Home=()=>{

    const navigate=useNavigate();
    console.log(navigate);

    const handleNavigatetoContact=()=>{
        navigate('/contact');
    }
    return(
        <section id="home" className="home">
            <div className="home_text-wrapper">
                <h1>
                    Hello, I'm Sachin kumar 
                    <br />
                    Full Stack Developer
                </h1>
            </div>
            <Animate
            play
            duration={1.5}
            delay={1}
            start={{transform:"translateY(550px"}}
            end={{transform:"translateY(0px"}}
            >
            <div className="home_contact_me">
                <button onClick={handleNavigatetoContact}>Hire Me</button>
            </div>
            </Animate>
            
        </section>
    )
};
export default Home;