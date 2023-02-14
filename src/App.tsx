import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { CategoryPage } from './pages/CategoryPage';
import { GuildStatsPage } from './pages/GuildStatsPage';
import { ModStatsPage } from './pages/ModStatsPage';
import { GuildContext } from './utils/contexts/GuildContext';
import { AppBar } from './components/AppBar';

function App() {
    const [guildID, setGuildID] = React.useState<string>('');

    const updateGuildID = (id: string) => { setGuildID(id); };
    return (
        <GuildContext.Provider value={{ guildID, updateGuildID}}>
            <Routes>
                <Route path="/dashboard/*" element={<AppBar />} />
            </Routes>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/dashboard/categories" element={<CategoryPage />} />
                <Route path="/dashboard/stats/guild" element={} />
                <Route path="/dashboard/guild/*" element={<h1>Guild</h1>} />
            </Routes>
        </GuildContext.Provider>
    );
}

export default App;
