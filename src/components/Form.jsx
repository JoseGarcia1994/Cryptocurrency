import {useEffect, useState} from 'react'
import styled from '@emotion/styled';
import ErrorMessage from './ErrorMessage';
import useSelectCoins from '../hooks/useSelectCoins';
import {coins} from '../data/coins'

    const InputSubmit = styled.input`
        background-color: #9497ff;
        border: none;
        width: 100%;
        padding: 10px;
        color: #fff;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 20px;
        border-radius: 5px;
        transition: background-color .3s ease;
        margin-top: 30px;
        &:hover {
            background-color: #7a7dfe;
            cursor: pointer;
        }
    `
const Form = ({setCoins}) => {
    const [cryptos, setCryptos] = useState([])
    const [error, setError] = useState(false)

    const [ coin, SelectCoins ] = useSelectCoins('Select your Currency', coins);

    const [ cryptocoin, SelectCryptoCoin ] = useSelectCoins('Select your Cryptocurrency', cryptos);

    useEffect(() => {
      const consultAPI = async () => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
        const res = await fetch(url)
        const result = await  res.json()
        
        const arrayCryptos = result.Data.map( crypto => {

            const obj = {
                id: crypto.CoinInfo.Name,
                name: crypto.CoinInfo.FullName
            }
            return obj
        })
        setCryptos(arrayCryptos);
      }
      consultAPI();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        if ([coin, cryptocoin].includes('')) {
            setError(true)
        }

        setTimeout(() => {
            setError(false)
        }, 3000);

        setCoins({
            coin,
            cryptocoin
        })
    }
    
    return (
        <>
            {error && <ErrorMessage>All fields are required</ErrorMessage>}
            <form onSubmit={handleSubmit}>

                <SelectCoins />
                <SelectCryptoCoin />

                <InputSubmit 
                type="submit" 
                value='Quote' 
                />
            </form>
        </>
    );
};

export default Form;