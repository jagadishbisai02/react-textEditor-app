import styled from 'styled-components'

export const EditorOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #25262c;
  height: 100vh;
  padding: 25px;
`
export const EditorInnerContainer = styled.div`
  background-color: #1b1c22;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const EditorContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`
export const EditorHeading = styled.h1`
  color: #f8fafc;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-bottom: 15px;
`
export const EditorImage = styled.img`
  width: 350px;
  margin: 25px;
`
export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  background-color: #25262c;
  margin: 25px;
  height: 80vh;
  border: 1px solid #334155;
  border-radius: 9px;
`
export const EditorBtnContainer = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
`
export const Button = styled.button`
  background: none;
  color: ${props => props.btnColor};
  border: none;
  cursor: pointer;
  outline: none;
`

export const BtnList = styled.li`
  margin: 0px;
`

export const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid #334155;
`
export const ContentArea = styled.textarea`
  background: none;
  width: 100%;
  height: 75vh;
  border: none;
  outline: none;
  font-weight: ${props => props.boldStyle};
  font-style: ${props => props.italicStyle};
  text-decoration: ${props => props.underlineStyle};
  color: #ffffff;
`
