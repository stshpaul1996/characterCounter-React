import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  @media screen and (max-width: 567px) {
    flex-direction: column;
  }
`
export const CharacterContainer = styled.div`
  height: 100vh;
  background: #ffc533;
  width: 50%;
  @media screen and (max-width: 567px) {
    width: 100%;
    height: 70%;
  }
`
export const CharacterHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  color: #334155;
  background: #ffbf1f;
  margin: 0;
  padding: 30px;
`
export const CharacterInputContainer = styled.div`
  height: 100vh;
  background: #0f172a;
  width: 50%;
  padding: 30px;
  @media screen and (max-width: 567px) {
    width: 100%;
    height: 30%;
  }
`
export const CharacterInputHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffbf1f;
  margin-bottom: 20px;
  text-align: center;
`
export const Input = styled.input`
  border: none;
  outline: none;
  height: 35px;
  padding-left: 10px;
  border-radius: 7px;
  font-family: 'Roboto';
  font-weight: 14px;
  color: #475569;
  width: 100%;
`
export const FormContainer = styled.form`
  display: flex;
`
export const Button = styled.button`
  border: none;
  outline: none;
  background-color: #ffc533;
  color: #334155;
  font-family: 'Roboto';
  height: 35px;
  font-size: 15px;
  border-radius: 6px;
  padding: 10px 20px;
  margin-left: 10px;
`
export const UserInputLists = styled.ul`
  list-style: none;
  padding-left: 0;
  padding: 30px;
  height: 50vh;
`
export const Image = styled.img`
  width: 100%;
`
export const ErrorMsg = styled.small`
  font-family: 'Roboto';
  color: #ffc533;
`
