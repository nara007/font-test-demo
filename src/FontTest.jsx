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
            <CumulioWrapper
                language={"en"}
                authKey={"d46d281d-e295-4e18-a248-19b11e0bbf08"}
                authToken={"XxAruBZhONGek8FVTlKjPjyewXatVPieF59iHxbU4RUwB3VZthrXfyf8ozBOW0MfoY9i80CGBTpk3iI8PWmtSIHZl2paQgsfhLz7GQdslImzBN9AzJsoPa2cWQykzeNaabAKsnhkupMH0ppPaL07bh"}
            />
        </>
    )
}

export default FontTest;