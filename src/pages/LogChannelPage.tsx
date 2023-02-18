import { Container, Title, Page, Select } from "../styles"

export const LogChannelPage = () => {
    return <Page>
        <Container>
            <Title>Update Logging Settings</Title>
            <div>
                <section>
                    <div>
                        <label>Current NSFW-Ban Log Channel</label>
                    </div>
                    <Select>
                        <option disabled>Please Select a Fucking Channel Dipshit</option>
                        <option>55439159</option>
                        <option>97374099</option>
                        <option>54886620</option>
                        <option>81033942</option>
                        <option>29376271</option>
                        <option>48661245</option>
                    </Select>
                </section>
                <section>
                    <div>
                        <label>Current Verified Log Channel</label>
                    </div>
                    <Select>
                        <option disabled>Please Select a Fucking Channel Dipshit</option>
                        <option>55439159</option>
                        <option>97374099</option>
                        <option>54886620</option>
                        <option>81033942</option>
                        <option>29376271</option>
                        <option>48661245</option>
                    </Select>
                </section>
            </div>
        </Container>
    </Page>
}