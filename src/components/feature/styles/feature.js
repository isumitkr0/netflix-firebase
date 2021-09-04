import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    border-bottom: 8px solid #222;
    padding: 165px 45px;

    @media (max-width:600px)
    {
        text-align: center;
        padding: 45px 20px 30px 20px;
    }
`;

export const Title = styled.h1`
    color: #fff;
    max-width: 640px;
    font-size: 50px;
    font-weight: 600;
    margin: 10px auto;

    @media (max-width:600px)
    {
        font-size: 27px;
    }
`;

export const SubTitle = styled.h2`
    color: #fff;
    max-width: 640px;
    font-size: 1.5em;
    font-weight: 400;
    margin: auto;

    @media (max-width:600px)
    {
        font-size: 20px;
    }
`;

export const Break = styled.p`
    flex-basis: 100%;
    height: 0;
`;