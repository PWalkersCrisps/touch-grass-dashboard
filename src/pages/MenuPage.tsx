/* eslint-disable react/jsx-key */
import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockGuilds } from '../__mocks__/guilds';
import { GuildContext } from '../utils/contexts/GuildContext';
import { GuildMenuItem } from '../components/GuildMenuItem';
import { Container } from '../styles';

export const MenuPage = () => {
    const navigate = useNavigate();
    const { updateGuildID } = useContext(GuildContext);

    const handleClick = (guildID: string) => {
        updateGuildID(guildID);
        navigate('/dashboard/categories')
    };

    return <div>
        <Container>
            <h2 style={{ fontWeight: 300 }}>Select a server</h2>
            <div>
                {mockGuilds.map((guild: any) => (
                    <div onClick={() => handleClick(guild.id)}>
                        <GuildMenuItem guild={guild} />
                    </div>
                ))}
            </div>
        </Container>
    </div>;
};