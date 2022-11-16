import { styled } from "@mui/material";
import CumulioWrapper from "./Dashboard";

const Container = styled("div")`
    font-family: TT Norms;
    font-size: 32px;
`;

const FontTest = () => {

    return (
        <>
            <Container>hello world</Container>
            <CumulioWrapper
                language={"en"}
                authKey={"93b165d3-0656-48de-95ab-9ba27e624cad"}
                authToken={"KQ6k6Ce6ax6fVWdZYxheQAlh312H99JEMU65G6kQX3mV0cU4Zp0o2DSKD3a7C6JDSItzXdtTEVgVIHMs1f0bUlerlep9MWx3RFLOQwOQW36HlhgJfOCQa2Ad2eUrdS3CjBAkrGSkeJPmGp3rp8A1aB"}
            />
        </>
    )
}

export default FontTest;