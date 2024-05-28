import styled from 'styled-components'

export const BgHome = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotRegCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const NotRegHead = styled.h1`
  color: #334155;
  font-size: 20px;
  margin: 0px;
  font-weight: bold;
  margin-bottom: 5px;
  @media (min-width: 768px) {
    font-size: 36px;
  }
`
export const NotRegPara = styled.p`
  color: #475569;
  font-size: 15px;
  margin: 0px;
  margin-bottom: 15px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export const NotRegBtn = styled.button`
  color: white;
  background-color: #2563eb;
  border: 0px;
  border-radius: 5px;
  height: 40px;
  width: 100px;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  @media (min-width: 768px) {
    height: 50px;
    width: 130px;
    font-size: 20px;
  }
`
export const RegDoneCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`
export const RegDoneHead = styled.h1`
  color: #2563eb;
  font-size: 25px;
  font-weight: bold;
  margin: 0px;
  margin-bottom: 5px;
  @media (min-width: 768px) {
    font-size: 50px;
  }
`

export const RegDonePara = styled.p`
  color: #475569;
  font-weight: bold;
  font-size: 15px;
  margin: 0px;
  margin-bottom: 5px;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`
export const HomeImg = styled.img`
  margin-top: 20px;
  height: 160px;
  width: 280px;
  @media (min-width: 768px) {
    height: 350px;
    width: 650px;
  }
`
