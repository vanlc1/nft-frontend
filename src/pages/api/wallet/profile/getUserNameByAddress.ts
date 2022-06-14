import { NextApiRequest, NextApiResponse } from 'next'

type UserResType = {
  username: string
  address: string
  avatarUrl: string
}
const userList: UserResType[] = [
  {
    username: 'nftUser1',
    address: '0x10b734a19661e8972522c01d2e0dd96cf1855abd',
    avatarUrl:
      'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/6/13/812414/Luu-Diec-Phi.jpg',
  },
  {
    username: 'nftUser2',
    address: '0x10b734a19661e8972522c01d2e0dd96cf1855aaa',
    avatarUrl:
      'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/6/13/812414/Luu-Diec-Phi.jpg',
  },
  {
    username: 'nftUser3',
    address: '0x10b734a19661e8972522c01d2e0dd96cf1855bbb',
    avatarUrl:
      'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/6/13/812414/Luu-Diec-Phi.jpg',
  },
  {
    username: 'nftUser4',
    address: '0x10b734a19661e8972522c01d2e0dd96cf1855ccc',
    avatarUrl:
      'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/6/13/812414/Luu-Diec-Phi.jpg',
  },
  {
    username: 'nftUser5',
    address: '0x10b734a19661e8972522c01d2e0dd96cf1855ddd',
    avatarUrl:
      'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/6/13/812414/Luu-Diec-Phi.jpg',
  },
]
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    body: { params },
  } = req
  const user = userList.find((user: UserResType) => user.address === params[0])
  res.status(200).json({
    result: user,
  })
}
