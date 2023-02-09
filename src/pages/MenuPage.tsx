/* eslint-disable react/jsx-key */
import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockGuilds } from '../__mocks__/guilds';
import { GuildContext } from '../utils/contexts/GuildContext';

export const MenuPage = () => {
    const navigate = useNavigate();
    const { updateGuildID } = useContext(GuildContext);
    return <div>
        <ul>
            {
                mockGuilds.map((guild: any) => (
                    <li onClick={ () => {
                        updateGuildID(guild.id);
                        navigate('/categories');
                    }}>
                        {guild.name}
                    </li>
                ))
            }
        </ul>
    </div>;
};