/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

type GuildContextType = {
    guildID: string;
    updateGuildID: (id: string) => void;
}

export const GuildContext = createContext<GuildContextType>({
    guildID: '',
    updateGuildID: () => {},
});