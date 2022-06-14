import { NextApiRequest, NextApiResponse } from 'next'
// jsonrpc: "2.0"
// method: "eth_getBalance"
// "params": {
//  "address": "0xBcA68a7Dcb6710adca17f920865BF6e189Eae3A2",
//  "block": "latest"
//},
// id: 1
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    result: '0x208b1d135e4a8000',
  })
}
