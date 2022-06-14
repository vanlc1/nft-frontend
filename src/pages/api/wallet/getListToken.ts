import { NextApiRequest, NextApiResponse } from 'next'
// jsonrpc: "2.0"
// method: "vgc_listToken"
// params: {
// contractAddress: ""
// address: ""
//}
// id: 1
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    result: [
      {
        contractAddress: '0xb9816fc57977d5a786e654c7cf76767be63b966e',
        name: 'BUSD',
        symbol: 'BUSD',
        decimal: 18,
        balance: '0',
        displayBalance: '0',
        image: 'https://top1exchange.com/uploads/1634039115_icon.png',
      },
      {
        contractAddress: '0x2146a226cb69A0cF273faf29CaF586C531A46964',
        name: 'HaiNguyen1',
        symbol: 'ABC',
        decimal: 18,
        balance: '999000000000000000000',
        displayBalance: '999',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMVzGBy3ZAJrryD8Pj2FyawPoL6rRaAG0Tw&usqp=CAU',
      },
      {
        contractAddress: '0xaeb0c6d1872285587be140964d38db36132b56b9',
        name: 'HaiNguyen',
        symbol: 'HN',
        decimal: 18,
        balance: '100000000000000000000',
        displayBalance: '100',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMVzGBy3ZAJrryD8Pj2FyawPoL6rRaAG0Tw&usqp=CAU',
      },
    ],
  })
}
