import styled from "styled-components"

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    background-color: #f5f5f5;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 48px 20px;
  min-width: 30%;
  min-height: 40%;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.1);
  font-size: 24px;
  color: #7b1fa2;
  text-transform: uppercase;

  & input {
    border: 1px solid #7b1fa2;
    border-radius: 10px;
    padding: 5px 10px;
    line-height: 40px;
    margin-top: 24px;
    width: 75%;
    color: #7b1fa2;

    &:focus {
      border: 1px solid #7b1fa2;
      outline-color: #7b1fa2;
    }
  }
`

export const LoginSignup = styled.a`
    text-align: center;
    text-decoration: none;
    color: #7b1fa2;
    font-size: 16px;
    text-transform: none;
    margin-top: 24px;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`
