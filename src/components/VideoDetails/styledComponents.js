import styled from 'styled-components'

export const VideoDetailsMainContainer = styled.div`
  height: 100vh;
`

export const VideoDetailsLightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`

export const Title = styled.p`
  font-weight: 600;
  align-self: flex-start;
`

export const ViewsAndLikesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Name = styled.p`
  font-size: 12px;
  color: gray;
  margin-right: 10px;
`

export const LikesContainer = styled.div`
  diplay: flex;
`

export const IconButtonLike = styled.button`
  background-color: transparent;
  border-width: 0px;
  margin-right: 5px;
  cursor: pointer;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
`

export const IconButtonDislike = styled.button`
  background-color: transparent;
  border-width: 0px;
  margin-right: 5px;
  cursor: pointer;
  color: ${props => (props.isDisliked ? '#2563eb' : '#64748b')};
`

export const IconButtonSave = styled.button`
  background-color: transparent;
  border-width: 0px;
  margin-right: 5px;
  cursor: pointer;
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
`

export const ProfileContainer = styled.div`
  display: flex;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const RetryBtn = styled.button`
  color: white;
  background-color: #0b69ff;
  border-width: 0px;
  border-radius: 6px;
  height: 36px;
  width: 130px;
  margin: 25px;
  cursor: pointer;
`
