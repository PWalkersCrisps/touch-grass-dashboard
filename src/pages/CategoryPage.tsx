import React from 'react';
import { useContext } from 'react';
import { GuildContext } from '../utils/contexts/GuildContext';

export const CategoryPage = () => {
    const { guildID } = useContext(GuildContext);
    return <div>
        CategoryPage {guildID}
    </div>;
};