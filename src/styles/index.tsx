import styled, {css} from "styled-components";

type FlexProps = Partial<{
    alignItems: string;
    justifyContent: string;
    flexDirection: string;
}>;

type ButtonProps = {
    variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'link' | 'inactive';
}

export const Page = styled.div`
    padding: 50px;
`;

export const Container = styled.div`
    width: 60%;
    margin: 0 auto;
`;

export const Flex = styled.div<FlexProps>`
    display: flex;
    align-items: ${({ alignItems }) => alignItems || "center"};
    justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
    flex-direction: ${({ flexDirection }) => flexDirection || "row"};
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const Header = styled.div`
    font-size: 64px;
`;

export const Title = styled.h1`
    font-size: 32px;
`;

export const AppBarHeader = styled.h1`
    font-weight: normal;
    font-size: 32px;
`;

export const CategoryTitle = styled.p`
    font-size: 32px;
`;

export const MainButton = styled.div`
    display: flex;
    width 350px;
    align-items: center;
    justify-content: space-between;
    background-color: #212121;
    padding: 5px 50px;
    box-sizing: border-box;
    border-radius: 5px;
    margin: 10px 0;
`;

export const TextButton = styled(MainButton)`
    padding: 18px;
    width: 100%
    background-color: #212121;
`; 

export const GuildIcon = styled.img`
    border-radius: 50%;
`;

export const AppBarStyle = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 25px;
    box-sizing: border-box;
    border-bottom: 2px solid #212121;
`;

export const HomePageStyle = styled.div`
    height: 100%;
    padding 50px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const HomePageMiscStyle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 600px;
`;

export const GuildMenuItemStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    background-color: #212121;
    border-radius: 5px;
    margin: 10px 0;
`;

export const CategoryStyle = styled.div`
    border-top: 1px solid #212121;
    margin-top: 30px;
`;

export const FirstCategoryStyle = styled(CategoryStyle)`
    border-top: none;
    margin-top: 0;
`;

export const Button = styled.button<ButtonProps>`
    padding: 10px 24px;
    border-radius: 5px;
    outline: none;
    border: none;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    ${({ variant }) => variant === 'primary' && css`background-color: #006ed3; `}
    ${({ variant }) => variant === 'secondary' && css`background-color: #212121; `}
    ${({ variant }) => variant === 'success' && css`background-color: #00a300; `}
    ${({ variant }) => variant === 'danger' && css`background-color: #ff0000; `}
    ${({ variant }) => variant === 'warning' && css`background-color: #ff9f00; `}
    ${({ variant }) => variant === 'link' && css`background-color: #006ed3; `}
    ${({ variant }) => variant === 'inactive' && css`background-color: #212121; opacity: 0.5; cursor: not-allowed; `}
`;

export const Select = styled.select`
    padding: 10px;
    background-color: inherit;
    border-radius: 5px;
    font-size: 18px;
    color: #ffffff;
    & > option {
        background-color: #212121;
    }
`;