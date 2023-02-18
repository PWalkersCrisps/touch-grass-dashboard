import { Container, Page, Title } from "../styles"

export const GuildStatsPage = () => {
    return <Page>
        <Container>
            <Title>Your Guild Stats</Title>
            <div>
                <label>Guild NSFW-Ban Count:</label>
                <p>0</p>
            </div>
            <div>
                <label>Guild Verified Count:</label>
                <p>0</p>
            </div>
        </Container>
    </Page>
}