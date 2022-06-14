export interface VerifyEmailResponse {
  transactionId: string
  id: string
}

export interface SuccessVerifyEmail {
  transactionId?: string
  id?: string
  email?: string
}
