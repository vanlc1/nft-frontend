import { NextApiRequest, NextApiResponse } from 'next'
// jsonrpc: "2.0"
// method: ???
// params: ???  // wallet address + contract address?
// id: 1
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    jsonrpc: '2.0',
    result: {
      contractAddress: '0x7B51220F3B614d25b94a5a862b99A7bCb873A943',
      balance: 1,

      // MOCK API, SUBJECT TO CHANGE
      data: [
        {
          id: 1,
          metadata: {
            image:
              'https://images.dog.ceo/breeds/bulldog-boston/n02096585_2947.jpg',
            name: 'Ghost',
            properties: [
              {
                Key: 'backgroud',
                Value: 'Green_10',
              },
              {
                Key: 'body',
                Value: 'Spikes_8',
              },
              {
                Key: 'head',
                Value: 'Mushroom_9',
              },
              {
                Key: 'type',
                Value: 'Iron_Yellow_7',
              },
            ],
            state: 'IN_WALLET',
            type: 'NFT1',

            authorName: 'Team Azuki',
            authorContact: '0x2313552...12301',
            tokenId: '#12432545234',
            tokenStandard: 'ERC72141',
          },
        },
      ],
    },
    id: 1,
  })
}
