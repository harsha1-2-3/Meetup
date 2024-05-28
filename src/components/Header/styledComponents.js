import styled from 'styled-components'

export const BgHeader = styled.div`
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

export const WebsiteLogo = styled.img`
  height: 33px;
  width: 120px;
  padding: 15px;
  @media (min-width: 768px) {
    padding: 20px;
    height: 80px;
    width: 200px;
  }
`
