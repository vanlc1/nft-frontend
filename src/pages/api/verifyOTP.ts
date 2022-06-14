import { NextApiRequest, NextApiResponse } from 'next'
// params: {
//   transactionID
//   otp
//   id
// }
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    data: {
      access_token: '3281460e-6d98-30ea-a258-0a9ead73352c',
      refresh_token: '981049eb-794b-337c-8fa1-fce7a86fcdbf',
      id_token: 'eyJ4NXQiOiJN',
      token_type: 'Bearer',
      expires_in: 3600,
    },
    message: 'Success',
    description: '',
    statusCode: 0,
  })
}
