import { GuildIcon, GuildMenuItemStyle } from "../styles";

type Props = {
    guild: {
        id: string;
        name: string;
        icon: string;
    };
};

export const GuildMenuItem = ({ guild }: Props) => {
    return <GuildMenuItemStyle>
        <GuildIcon src={guild.icon} alt={guild.name} width={50} height={50} />
        <p>{guild.name}</p>
    </GuildMenuItemStyle>;
}