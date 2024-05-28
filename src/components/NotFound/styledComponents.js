import styled from 'styled-components'

export const BgNf = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`
export const NfImg = styled.img`
  height: 210px;
  width: 250px;
  margin: 0px;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    height: 460px;
    width: 550px;
    margin-bottom: 20px;
  }
`

export const NfHead = styled.h1`
  color: #475569;
  font-size: 20px;
  font-weight: bold;
  margin: 0px;
  margin-bottom: 5px;
  @media (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 10px;
  }
`

export const NfPara = styled.p`
  color: #7b8794;
  font-size: 15px;
  margin: 0px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`
