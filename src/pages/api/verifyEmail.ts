import { NextApiRequest, NextApiResponse } from 'next'
// params: {
//   email: email
// }
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ data: { transactionId: '000000000', id: '1' } })
}
