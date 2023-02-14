import React from 'react';
import { FaDiscord, FaQuestionCircle } from 'react-icons/fa';
import { MainButton, HomePageStyle, HomePageMiscStyle, Header } from '../styles';

export const HomePage = () => {
    return <HomePageStyle>
        <Header><b>Touch Grass Bot Dashboard</b></Header>
        <div>
            <MainButton>
                <FaDiscord size={50} />                
                <p>Login with Discord</p>
            </MainButton>
            <MainButton>
                <FaQuestionCircle size={50} />
                <p>Support Server</p>
            </MainButton>
        </div>
        <HomePageMiscStyle>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Contact Us</span>
        </HomePageMiscStyle>
    </HomePageStyle>;
}; 