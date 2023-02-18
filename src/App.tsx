import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { CategoryPage } from './pages/CategoryPage';
import { GuildStatsPage } from './pages/GuildStatsPage';
import { ModStatsPage } from './pages/ModStatsPage';
import { GuildContext } from './utils/contexts/GuildContext';
import { AppBar } from './components/AppBar';
import { GuildSyncPage } from './pages/GuildSyncPage';
import { ImageOnlyChannelPage } from './pages/ImageOnlyChannelPage';
import { LogChannelPage } from './pages/LogChannelPage';
import { ServerRolesPage } from './pages/ServerRolesPage';

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
                <Route path="/dashboard/stats/guild" element={<GuildStatsPage />} />
                <Route path="/dashboard/stats/moderator" element={<ModStatsPage />} />
                <Route path="/dashboard/guild/sync" element={<GuildSyncPage />} />
                <Route path="/dashboard/guild/imageOnly" element={<ImageOnlyChannelPage />} />
                <Route path="/dashboard/guild/logging" element={<LogChannelPage />} />
                <Route path="/dashboard/guild/roles" element={<ServerRolesPage />} />
            </Routes>
        </GuildContext.Provider>
    );
}

export default App;
