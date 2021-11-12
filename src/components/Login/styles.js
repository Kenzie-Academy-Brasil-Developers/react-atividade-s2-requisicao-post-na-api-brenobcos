import styled from "styled-components";

export const DivLogin = styled.div`
  width: 400px;
  height: 450px;
  border-radius: 5px;
  border: 2px solid #141cde;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  h1{
    color: #000;
    margin: 10px;
  }

  img{
    width: 80px;
    margin-bottom:10px;
  }
`;

export const ContainerLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 23px;
`;

export const InputLogin = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 5px;
  font-size: 16px;
`;

export const ErrorSpan = styled.span`
font-size: 12px;
color: #FA0F14;
`

export const LoginButton = styled.button`
  color: #fff;
  width: 150px;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 30px;
  text-align: center;
  border: none;
  clip-path: polygon(7% 0, 93% 0, 100% 50%, 93% 100%, 7% 100%, 0 50%);
  background-color: #000000;
  background-image: radial-gradient(
    200% 70% at center 20%,
    rgba(48, 44, 45, 1) -30%,
    rgba(50, 46, 47, 1) 49%,
    rgba(22, 18, 19, 1) 50%,
    rgba(22, 18, 19, 1) 150%
  );
  background-repeat: no-repeat;
`;
