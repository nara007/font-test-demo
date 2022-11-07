import { styled } from "@mui/material";
import CumulioWrapper from "./Dashboard";

const Container = styled("div")`
    font-family: TT Norms Pro;
    font-size: 32px;
`;

const FontTest = () => {

    return (
        <>
            <Container>hello world</Container>
            {/* <CumulioWrapper
                language={"en"}
                authKey={"756a37aa-4f5b-4f58-861c-22a6b060c0bf"}
                authToken={"CHrOQtIq9r9R4bVG3g4YRIfJBVudVti7DrKEMTRhvvAwQu7sDwwiv8EhFuk5YSVpqZQoIy0hd9rUEmwdYJ6zvZNEXixDVlc8gsjJZGsl8CFzBB8EvMVM9nl4xFxd6HWiV7o6LwspDTakawy1NxWBBD"}
            /> */}
        </>
    )
}

export default FontTest;