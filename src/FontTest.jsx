import { styled } from "@mui/material";
import CumulioWrapper from "./Dashboard";

const Container = styled("div")`
    font-family: iomoto;
    font-size: 32px;
`;

const FontTest = () => {

    return (
        <>
            <Container>hello world</Container>
            <CumulioWrapper
                language={"en"}
                authKey={"2f8f29b9-874f-4d0c-b608-1f4b089b506c"}
                authToken={"ueB2VMAgK37qCRK3Mb1LqTW8jgVSS3OFV9nw2cvO0hQe2ZSLuY9AX29W929DViF1wFR16aYIHFNrTSmIdW6pQocmgHb6diqxYaEQkwUSLOIGDuCIIGbtDyawuTGKUzn9f9IK3kAdlgIaqnf4O4egIo"}
            />
        </>
    )
}

export default FontTest;