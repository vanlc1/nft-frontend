import { NextApiRequest, NextApiResponse } from 'next'
// jsonrpc: "2.0"
// method: "vgc_getNFTContracts"
// params: [ "walletAddress"]
// id: 1
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    result: [
      {
        contractAddress: '0xA598297086c52CB73837673b368d66cB4b27998d',
        name: 'NFT name1',
        balance: 0,
        image:
          'https://forkast.news/wp-content/uploads/2021/03/Nyan-Cat-Rob-Bulmahn-CC-BY-2.0.jpg',
      },
      {
        contractAddress: '0x7B51220F3B614d25b94a5a862b99A7bCb873A943',
        name: 'NFT name 2',
        balance: 0,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxiJzQ5nUQSAj2_SYMK5EC5eadXAcssvENLOFvrNONlloNuynGqJvVWmvQNYBU5W1KLy4&usqp=CAU',
      },
    ],
  })
}
