import { NextApiRequest, NextApiResponse } from 'next'
// jsonrpc: "2.0"
// method: "vgc_listNFTs"
// params: {
//  contractAddress: string
//  address: string
// }
// id: 1
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    result: {
      contractAddress: '0x5e7d08ae2dd030dc17525f5a932d206455eda9b7',
      balance: 2,
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
        {
          id: 2,
          metadata: {
            image:
              'https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_6397.jpg',
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
        {
          id: 3,
          metadata: {
            image:
              'https://images.dog.ceo/breeds/wolfhound-irish/n02090721_3940.jpg',
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
            state: 'ON_MARKET',
            type: 'NFT1',
            authorName: 'Team Azuki',
            authorContact: '0x2313552...12301',
            tokenId: '#12432545234',
            tokenStandard: 'ERC72141',
          },
        },
        {
          id: 4,
          metadata: {
            image:
              'https://images.dog.ceo/breeds/wolfhound-irish/n02090721_3940.jpg',
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
            state: 'ON_DAPPS',
            type: 'NFT1',
            authorName: 'Team Azuki',
            authorContact: '0x2313552...12301',
            tokenId: '#12432545234',
            tokenStandard: 'ERC72141',
          },
        },
        {
          id: 5,
          metadata: {
            image:
              'https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_6397.jpg',
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
            state: 'ON_DAPPS',
            type: 'NFT1',
            authorName: 'Team Azuki',
            authorContact: '0x2313552...12301',
            tokenId: '#12432545234',
            tokenStandard: 'ERC72141',
          },
        },
        {
          id: 6,
          metadata: {
            image:
              'https://images.dog.ceo/breeds/wolfhound-irish/n02090721_3940.jpg',
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
            state: 'ON_DAPPS',
            type: 'NFT1',
            authorName: 'Team Azuki',
            authorContact: '0x2313552...12301',
            tokenId: '#12432545234',
            tokenStandard: 'ERC72141',
          },
        },
        {
          id: 7,
          metadata: {
            image:
              'https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_6397.jpg',
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
            state: 'ON_DAPPS',
            type: 'NFT1',
            authorName: 'Team Azuki',
            authorContact: '0x2313552...12301',
            tokenId: '#12432545234',
            tokenStandard: 'ERC72141',
          },
        },
        {
          id: 8,
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
            state: 'ON_MARKET',
            type: 'NFT1',
            authorName: 'Team Azuki',
            authorContact: '0x2313552...12301',
            tokenId: '#12432545234',
            tokenStandard: 'ERC72141',
          },
        },
      ],
    },
  })
}
