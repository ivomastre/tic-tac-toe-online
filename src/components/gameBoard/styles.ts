import styled from 'styled-components'

const StyledGameBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 600px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #000;
  background-color: #fff;
`

export { StyledGameBoard }
