import styled from 'styled-components'

export const DarkModeHeader = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: #383838;
  padding: 10px;
  align-items: center;
`

export const LightModeHeader = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: #f9f9f9;
  padding: 10px;
  align-items: center;
  cursor: pointer;
`

export const NavListContainer = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  width: 200px;
  justify-content: space-between;
`

export const ImageButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`

export const LightButton = styled.button`
  background-color: white;
  color: #3b82f6;
  border: 2px solid #3b82f6;
  border-radius: 4px;
  width: 60px;
  height: 30px;
  cursor: pointer;
`

export const DarkButton = styled.button`
  background-color: ${props => (props.isDark ? '#3b82f6' : 'white')};
  color: ${props => (props.isDark ? 'white' : '#3b82f6')};
  border: 2px solid #3b82f6;
  border-radius: 4px;
  width: 60px;
  height: 30px;
  cursor: pointer;
`
