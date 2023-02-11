import styled from 'styled-components'

const StyledGameCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  width: 75px;
  border: 1px solid #000;
  background-color: '#2E51A2';
  color: 'ffffff';
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #eee;
  }
`

export { StyledGameCell }
