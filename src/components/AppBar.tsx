import React, { useContext } from "react"
import { AppBarHeader, AppBarStyle, GuildIcon } from "../styles"
import Ashley from "../__mocks__/assets/Ashley.PNG"
import { GuildContext } from "../utils/contexts/GuildContext";

export const AppBar = () => {
    const { guildID } = useContext(GuildContext);
    return <AppBarStyle>
        <AppBarHeader>Configuring</AppBarHeader>
        <GuildIcon src={Ashley} height={60} width={60} alt="Ashley" />
    </AppBarStyle>
}
