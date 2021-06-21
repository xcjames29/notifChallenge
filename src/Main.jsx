
import { useState } from "react";
import styled from "styled-components"



const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items:center;
    justify-content: center;
    background-color: #1F806A;
`;


const ButtonContainer = styled.div`
    display: flex;
    padding: 30px;
    gap: 20px;
    background-color: white;
`;

const Buttons = styled.button`
background-color: #ebebeb;
padding: 5px 10px;
border: 0;

&:hover{
    background-color: gray;
}
`;

const Notif = styled.div`
    background-color: ${props=>props.error?"red":"black"};
    color: white;
    position: absolute;
    top: 0;
    padding: 20px;
`;
let timeNotif; 
let errorTimeNotif;
export default function Main(){

    let [notif,setNotif] = useState();
    let [errorNotif, setErrorNotif] = useState();

   

    let clearNotif = ()=>{
        clearInterval(timeNotif);
        timeNotif=null; 
    }

    let clearErrorNotif =()=>{
        clearInterval(errorTimeNotif);
        errorTimeNotif=null;
    }

    let showNotif = ()=>{
        setNotif(true);
        if(errorTimeNotif) setErrorNotif(false);
        timeNotif = setInterval(()=>{
            setNotif(false)
            clearNotif();
        },2000);
    }
    let showErrorNotif =()=>{
        setErrorNotif(true);
        if(notif) setNotif(false);
        errorTimeNotif = setInterval(()=>{
            setErrorNotif(false)
            clearErrorNotif();
        },2000);
    }
    return(
        <MainContainer>
            {notif&&
                <Notif onMouseEnter={clearNotif} onMouseLeave={showNotif}>Notification Message</Notif>
            }
            {errorNotif&&
                <Notif  error={true} onMouseEnter={clearErrorNotif} onMouseLeave={showErrorNotif}>Notification alert</Notif>
            }
            <ButtonContainer>
                <Buttons onClick={showNotif}>Notification Message</Buttons>
                <Buttons onClick={showErrorNotif}>Notification Alert</Buttons>
            </ButtonContainer>

        </MainContainer>
    )
}