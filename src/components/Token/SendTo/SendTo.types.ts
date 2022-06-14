type UserProfile = {
  userName: ''
  image: ''
  walletAddress: ''
}
export interface SendToProps {
  // eslint-disable-next-line no-unused-vars
  onNextStep: (userProfile: UserProfile) => void
}
