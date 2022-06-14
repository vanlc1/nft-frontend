import { NextApiRequest, NextApiResponse } from 'next'
// jsonrpc: "2.0"
// method: "vgc_getProfile"
// params: [ "accesstoken"]
// id: 1
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    result: {
      email: 'globe.beta@gmail.com',
      username: '',
      userId: 'c7c522bb-52f1-42ec-9da3-c6ce4ae5bac9',
      walletAddress: '0x10b734a19661e8972522c01d2e0dd96cf1855abd',
      signerAddress: '0x10b734a19661e8972522c01d2e0dd96cf1855abd',
    },
  })
}
