import styled from 'styled-components'

export const LightSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25%;
  height: 85vh;
  padding-right: 10px;
  background-color: ${props => props.isDark ? '#313131' : '#f9f9f9'};
  color: ${props => props.isDark ? 'white' : 'black'};
`
export const DarkSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25%;
  background-color: #313131;
  height: 85vh;
  color:white;
`

export const TabListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  height: 300px;
`
export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SocialMediaLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`
