import styled from "@emotion/styled";

const StyleResult = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Image = styled.img`
    display: block;
    width: 120px;
`

const Text = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Price = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`

const Result = ({result}) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = result

    return (
        <StyleResult>
            <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="image" />
            <div>
                <Price>Price is: <span>{PRICE}</span></Price>
                <Text>Highest price of the day: <span>{HIGHDAY}</span></Text>
                <Text>Lowest price of the day: <span>{LOWDAY}</span></Text>
                <Text>Variation last 24 hours: <span>{CHANGEPCT24HOUR}</span></Text>
                <Text>Last update: <span>{LASTUPDATE}</span></Text>
            </div>
        </StyleResult>
    );
};

export default Result;