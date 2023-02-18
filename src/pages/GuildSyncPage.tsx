import { Button, Container, Flex, Page, Title } from "../styles"

export const GuildSyncPage = () => {
    return <Page>
        <Container>
            <Title>Update Role Syncing Settings</Title>
            <form>
                <div>
                    <label htmlFor="role">Configure Imports From Database</label>
                </div>
                <Flex justifyContent="flex-start">
                    <Button variant="primary">Enable</Button>
                    <Button variant="danger">Disable</Button>
                </Flex>
                <div>
                    <label htmlFor="role">Configure Exports To Database</label>
                </div>
                <Flex justifyContent="flex-start">
                    <Button variant="primary">Enable</Button>
                    <Button variant="danger">Disable</Button>
                </Flex>
            </form>
        </Container>
    </Page>
}