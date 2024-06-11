import styled from 'styled-components'

export const LiContainer = styled.li`
  color: ${props => (props.isDark ? 'white' : 'black')};
  display: flex;
`

export const ViewCountAndYearsContainer = styled.div`
  color: ${props => (props.isDark ? 'white' : 'black')};
  display: flex;
`
