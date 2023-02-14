import React from 'react';
import { useContext } from 'react';
import { GuildContext } from '../utils/contexts/GuildContext';
import { CategoryTitle, Container, Grid, TextButton, Flex, CategoryStyle, FirstCategoryStyle } from '../styles';
import { IoSettingsOutline, IoStatsChartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router';

export const CategoryPage = () => {
    const { guildID } = useContext(GuildContext);
    const navigate = useNavigate(); 

    return <div>
        <Container>
            <FirstCategoryStyle>
                <Flex>
                    <CategoryTitle>Stats</CategoryTitle>
                    <IoStatsChartOutline size={32} />
                </Flex>
                <Grid>
                    <TextButton onClick={() => navigate('/dashboard/stats/guild')}>Guild Stats</TextButton>
                    <TextButton onClick={() => navigate('/dashboard/stats/mod')}>Moderation Stats</TextButton>
                </Grid>
            </FirstCategoryStyle>
            <CategoryStyle>
                <Flex>
                    <CategoryTitle>Basic Config</CategoryTitle>
                    <IoSettingsOutline size={32} />
                </Flex>
                <Grid>
                    <TextButton onClick={() => navigate('/dashboard/guild/logging')}>Logging Channel</TextButton>
                    <TextButton onClick={() => navigate('/dashboard/guild/imageOnly')}>Image Only Channels</TextButton>
                    <TextButton onClick={() => navigate('/dashboard/guild/sync')}>Guild Syncing</TextButton>
                    <TextButton onClick={() => navigate('/dashboard/guild/roles')}>Server Roles</TextButton>
                </Grid>
            </CategoryStyle>
        </Container>
    </div>;
};