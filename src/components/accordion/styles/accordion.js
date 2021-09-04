import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 8px solid #222;
    padding: 5px 0;

    @media (max-width:600px)
    {
        padding: 0;
    }
`;

export const Inner = styled.div`
    display: flex;
    padding:  70px 30px;
    flex-direction: column;
    max-width: 815px;
    margin: auto;

    @media (max-width:600px)
    {
        padding: 30px 0;
    }
`;


export const Frame = styled.div`
    margin-bottom: 40px;
`;


export const Title = styled.h1`
    font-size: 48px;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 8px;
    color: #fff;
    font-weight: 500;
    text-align:center;

    @media (max-width:600px){
        font-size: 35px;
    }
`;

export const Item = styled.div`
    color: #fff;
    margin-bottom: 7px;
    max-width: 700x;
    box-sizing: border-box;
    transition: all 0.2s ease-in;

    &:first-of-type{
        margin-top: 3em;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 1.25em;
    font-weight: normal;
    background: #303030;
    padding: 14px 39px 14px 21px;
    user-select: none;
    align-items: center;

    img{
        filter: brightness(0) invert(1);
        width: 24px;

        @media (max-width: 600px){
            width: 16px;
        }
    }


        @media (max-width: 600px){
            font-size:16px;
        }
`;

export const Body = styled.div`
    max-height: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5,0,0.1,1);
    font-size: 26px;
    font-weight: normal;
    line-height: normal;
    background-color: #303030;
    padding: 0.8em 2.2em 0.8em 1.2em;
    white-space: pre-wrap;
    user-select: none;

    @media (max-width:600px){
        font-size: 16px;
        line-height: 22px;
    }
`;
