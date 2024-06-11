import styled from 'styled-components'

export const NotfoundContainer = styled.div``

export const NotfoundImage = styled.img`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 250px;
`

export const NotFoundContentContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  display: flex;
`

export const ContentContainer = styled.div`
  diplay: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
`
export const Heading = styled.h1`
  color: ${props => (props.isDark ? 'white' : 'black')};
`
export const Paragraph = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
`
