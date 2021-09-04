import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  max-width: 800px;
  width: auto;
  margin-top: 20px;
  flex-wrap: wrap;
  margin: auto;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 450px;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;

  @media (max-width:600px){
        height: 46px;
        width: 92%;
        margin: auto;
        margin-top: 15px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #e50914;
  color: white;
  text-transform: capitalize;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;
  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
    @media (max-width: 1000px) {
      width: 16px;
    }
  }
  &:hover {
    background: #f40612;
  }
  @media (max-width: 1000px) {
    height: 36px;
    width: 135px;
    padding: 10px;
    font-size: 16px;
    margin-top: 10px;
    font-weight: 400;
  }
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    width: 89%;
    margin: auto;
  }
`;