import { NextApiRequest, NextApiResponse } from 'next'
// params: {
//   email
// }
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ transactionID: '99999999' })
}
