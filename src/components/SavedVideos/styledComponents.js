import styled from 'styled-components'

export const SavedVideosMainContainer = styled.div`
  background-color: ${props => (props.isDark ? '#313131' : '#f9f9f9')};
  height: 100vh;
`

export const SidebarAndContentContainer = styled.div`
  background-color: ${props => (props.isDark ? '#313131' : '#f9f9f9')};
  display: flex;
  width: 100%
  justify-content: space-around;
`

export const SavedVideosContentContainer = styled.div`
  background-color: ${props => (props.isDark ? '#313131' : '#f9f9f9')};
  width: 100%;
  padding: 25px;
`

export const SavedVideosListContainer = styled.ul`
  background-color: ${props => (props.isDark ? '#313131' : '#f9f9f9')};
`
