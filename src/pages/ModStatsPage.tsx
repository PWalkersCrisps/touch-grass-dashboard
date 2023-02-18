import { Container, Page, Title } from "../styles"

export const ModStatsPage = () => {
    return <Page>
        <Container>
            <Title>Your Mod Stats</Title>
            <div>
                <label>Your NSFW-Ban Count:</label>
                <p>0</p>
            </div>
            <div>
                <label>Your Verified Count:</label>
                <p>0</p>
            </div>
        </Container>
    </Page>
}