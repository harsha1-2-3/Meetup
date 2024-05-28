import styled from 'styled-components'

export const BgReg = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const RegCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  @media (min-width: 768px) {
    width: 75%;
    flex-direction: row;
    justify-content: space-around;
  }
`
export const RegImg = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  @media (min-width: 768px) {
    height: 370px;
    width: 370px;
  }
  @media (min-width: 992px) {
    height: 450px;
    width: 450px;
  }
`

export const RegForm = styled.form`
  display: flex;
  flex-direction: column;
`

export const RegHead = styled.h1`
  color: #475569;
  font-size: 25px;
  font-weight: bold;
  margin: 0px;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 40px;
  }
  @media (min-width: 992px) {
    font-size: 55px;
  }
`
export const InputCont = styled.div`
  display: flex;
  flex-direction: column;
`
export const InputLabel = styled.label`
  text-align: left;
  color: #64748b;
  font-size: 13px;
  font-weight: bold;
  margin: 0px;
  margin-bottom: 5px;
  @media (min-width: 768px) {
    font-size: 15px;
  }
`

export const InputBox = styled.input`
  padding: 10px;
  border: 1px solid #cbd5e1;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: transparent;
`

export const InputBoxSelect = styled.select`
  padding: 10px;
  border: 1px solid #cbd5e1;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: transparent;
`
export const InputOption = styled.option`
  color: red;
`

export const RegBtn = styled.button`
  color: white;
  background-color: #3b82f6;
  border: 0px;
  border-radius: 5px;
  height: 40px;
  width: 130px;
  cursor: pointer;
  text-align: center;
  outline: none;
  font-weight: bold;
  margin-top: 10px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 13px;
  margin: 0px;
`
