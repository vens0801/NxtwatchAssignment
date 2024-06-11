import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  margin: 5px;
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 250px;
  color: ${props => props.isDark ? 'white' : 'black'};
`

export const Title = styled.p`
  font-size: 14px;
  color: ${props => props.isDark ? 'white' : 'black'};
`

export const Name = styled.p`
  font-size: 12px;
  color: gray;
  margin-right: 10px;
`
