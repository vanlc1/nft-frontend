import { NextApiRequest, NextApiResponse } from 'next'
// jsonrpc: "2.0"
// method: "vgc_listToken"
//  params = {
//  walletAddr: '0xbAddFC61d14Cf2d8Aa38789BAC617116FA3BA74f',
//  contractAddr: '0xb9816fc57977d5a786e654c7cf76767be63b966e',
// fromBlock: '0x0',
// toBlock: 'latest', }
// id: 1
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    result: [
      {
        hash: '0x835e2ee28215dd80250e76e03a8327b1bb5ff5037dfc11f1aaa7d4193aa78246',
        blockNumber: '0x1234',
        timestamp: '1654761771',
        nonce: '0x4d2',
        blockHash:
          '0x835e2ee28215dd80250e76e03a8327b1bb5ff5037dfc11f1aaa7d4193aa78123',
        from: '0x10b734a19661e8972522c01d2e0dd96cf1855abd',
        contractAddress: '0xbAddFC61d14Cf2d8Aa38789BAC617116FA3BA74f',
        to: '0x826E1B75E89287204F89f9E7C4c35A0d218C5774',
        value: '999000000000000000000',
        tokenName: 'Do-La',
        tokenSymbol: '$$$',
        tokenDecimal: '0x12',
        transactionIndex: '0x14',
        input:
          '0x3fb5c1cb000000000000000000000000000000000000000000000000000000000000007b',
        confirmations: '0x835e2ee28215dd80250e76e',
      },
      {
        hash: '0x835e2ee28215dd80250e76e03a8327b1bb5ff5037dfc11f1aaa7d4193aa78246',
        blockNumber: '0x1234',
        timestamp: '1654761771',
        nonce: '0x4d2',
        blockHash:
          '0x835e2ee28215dd80250e76e03a8327b1bb5ff5037dfc11f1aaa7d4193aa78123',
        from: '0xbAddFC61d14Cf2d8Aa38789226F17116FA3BA74f',
        contractAddress: '0xbAddFC61d14Cf2d8Aa38789BAC617116FA3BA74f',
        to: '0x10b734a19661e8972522c01d2e0dd96cf1855abd',
        value: '0x64',
        tokenName: 'Do-La',
        tokenSymbol: '$$$',
        tokenDecimal: '0x12',
        transactionIndex: '0x14',
        input:
          '0x3fb5c1cb000000000000000000000000000000000000000000000000000000000000007b',
        confirmations: '0x835e2ee28215dd80250e76e',
      },
      {
        hash: '0x835e2ee28215dd80250e76e03a8327b1bb5ff5037dfc11f1aaa7d4193aa78246',
        blockNumber: '0x1234',
        timestamp: '1594761771',
        nonce: '0x4d2',
        blockHash:
          '0x835e2ee28215dd80250e76e03a8327b1bb5ff5037dfc11f1aaa7d4193aa78123',
        from: '0x10b734a19661e8972522c01d2e0dd96cf1855abd',
        contractAddress: '0xbAddFC61d14Cf2d8Aa38789BAC617116FA3BA74f',
        to: '0x826E1B75E89287204F89f9E7C4c35A0d218C5774',
        value: '0x64',
        tokenName: 'Do-La',
        tokenSymbol: '$$$',
        tokenDecimal: '0x12',
        transactionIndex: '0x14',
        input:
          '0x3fb5c1cb000000000000000000000000000000000000000000000000000000000000007b',
        confirmations: '0x835e2ee28215dd80250e76e',
      },
      {
        hash: '0x835e2ee28215dd80250e76e03a8327b1bb5ff5037dfc11f1aaa7d4193aa78246',
        blockNumber: '0x1234',
        timestamp: '1694761771',
        nonce: '0x4d2',
        blockHash:
          '0x835e2ee28215dd80250e76e03a8327b1bb5ff5037dfc11f1aaa7d4193aa78123',
        from: '0x10b734a19661e8972522c01d2e0dd96cf1855abd',
        contractAddress: '0xbAddFC61d14Cf2d8Aa38789BAC617116FA3BA74f',
        to: '0x826E1B75E89287204F89f9E7C4c35A0d218C5774',
        value: '0x64',
        tokenName: 'Do-La',
        tokenSymbol: '$$$',
        tokenDecimal: '0x12',
        transactionIndex: '0x14',
        input:
          '0x3fb5c1cb000000000000000000000000000000000000000000000000000000000000007b',
        confirmations: '0x835e2ee28215dd80250e76e',
      },
      {
        hash: '0x835e2ee28215dd80250e76e03a8327b1bb5ff5037dfc11f1aaa7d4193aa78246',
        blockNumber: '0x1234',
        timestamp: '1554761771',
        nonce: '0x4d2',
        blockHash:
          '0x835e2ee28215dd80250e76e03a8327b1bb5ff5037dfc11f1aaa7d4193aa78123',
        from: '0xbAddFC61d14Cf2d8Aa38789226F17116FA3BA74f',
        contractAddress: '0xbAddFC61d14Cf2d8Aa38789BAC617116FA3BA74f',
        to: '0x10b734a19661e8972522c01d2e0dd96cf1855abd',
        value: '0x64',
        tokenName: 'Do-La',
        tokenSymbol: '$$$',
        tokenDecimal: '0x12',
        transactionIndex: '0x14',
        input:
          '0x3fb5c1cb000000000000000000000000000000000000000000000000000000000000007b',
        confirmations: '0x835e2ee28215dd80250e76e',
      },
      {
        hash: '0x835e2ee28215dd80250e76e03a8327b1bb5ff5037dfc11f1aaa7d4193aa78246',
        blockNumber: '0x1234',
        timestamp: '1554766771',
        nonce: '0x4d2',
        blockHash:
          '0x835e2ee28215dd80250e76e03a8327b1bb5ff5037dfc11f1aaa7d4193aa78123',
        from: '0xbAddFC61d14Cf2d8Aa38789226F17116FA3BA74f',
        contractAddress: '0xbAddFC61d14Cf2d8Aa38789BAC617116FA3BA74f',
        to: '0x10b734a19661e8972522c01d2e0dd96cf1855abd',
        value: '0x64',
        tokenName: 'Do-La',
        tokenSymbol: '$$$',
        tokenDecimal: '0x12',
        transactionIndex: '0x14',
        input:
          '0x3fb5c1cb000000000000000000000000000000000000000000000000000000000000007b',
        confirmations: '0x835e2ee28215dd80250e76e',
      },
      {
        hash: '0x835e2ee28215dd80250e76e03a8327b1bb5ff5037dfc11f1aaa7d4193aa78246',
        blockNumber: '0x1234',
        timestamp: '1554711771',
        nonce: '0x4d2',
        blockHash:
          '0x835e2ee28215dd80250e76e03a8327b1bb5ff5037dfc11f1aaa7d4193aa78123',
        from: '0x10b734a19661e8972522c01d2e0dd96cf1855abd',
        contractAddress: '0xbAddFC61d14Cf2d8Aa38789BAC617116FA3BA74f',
        to: '0xbAddFC61d14Cf2d8Aa38789226F17116FA3BA74f',
        value: '0x64',
        tokenName: 'Do-La',
        tokenSymbol: '$$$',
        tokenDecimal: '0x12',
        transactionIndex: '0x14',
        input:
          '0x3fb5c1cb000000000000000000000000000000000000000000000000000000000000007b',
        confirmations: '0x835e2ee28215dd80250e76e',
      },
    ],
  })
}
