import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%), 
    url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) 
    top left / cover no-repeat;
  }
`;

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 74px;
    padding: 25px 0;
    justify-content: space-between;
    align-items: center;

    a{
        display: flex;
    }

    @media (max-width:1000px){
        margin: 0 30px;
    }
`;

export const Frame = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    top:0;
`;

export const Logo = styled.img`
    height: 36px;
    width: 134px;
    margin-right: 40px;

    @media (min-width:1449px){
        height: 45px;
        width: 167px;
    }

    @media (max-width:1000px)
    {
        height: 30px;
        width: 110;
    }
`;

export const ButtonLink = styled(ReactRouterLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e50914;
    width: 84px;
    height: 36px;
    color: #fff;
    border: 0;
    box-sizing: border-box;
    font-size: 1em;
    font-weight: 500;
    border-radius: 3px;
    cursor: pointer;
    text-decoration:none;

    &:hover{
        background-color: #f40612;
    }
`;
