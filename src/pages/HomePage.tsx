import React from 'react';
import { FaDiscord, FaQuestionCircle } from 'react-icons/fa';

export const HomePage = () => {
    return <div style={{
        height: '100%',
        padding: '50px 0',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    }}>
        <div style={{ fontSize: '64px' }}><b>Touch Grass Bot Dashboard</b></div>
        <div>
            <div className="homePageButtons">
                <FaDiscord size={50} />                
                <p>Login with Discord</p>
            </div>
            <div className="homePageButtons">
                <FaQuestionCircle size={50} />
                <p>Support Server</p>
            </div>
        </div>
        <div style={{ display: 'flex', width: '500px', justifyContent: 'space-between'}}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Contact Us</span>
        </div>
    </div>;
};