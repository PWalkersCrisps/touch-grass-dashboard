import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { CategoryPage } from './pages/CategoryPage';
import { GuildContext } from './utils/contexts/GuildContext';

function App() {
    const [guildID, setGuildID] = React.useState<string>('');

    const updateGuildID = (id: string) => { setGuildID(id); };
    return (
        <GuildContext.Provider value={{ guildID, updateGuildID}}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/categories" element={<CategoryPage />} />
            </Routes>
        </GuildContext.Provider>
    );
}

export default App;
