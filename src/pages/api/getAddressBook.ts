import { NextApiRequest, NextApiResponse } from 'next'
// jsonrpc: "2.0"
// method: "vgc_getProfile"
// params: [ "accesstoken"]
// id: 1
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    result: [
      {
        userId: '1',
        userPic: '/assets/images/profilePic.svg',
        userName: 'QUOCANH',
        walletAddress: '0xifoiaweifwiwrgnsadasds',
        nickName: 'BẠN HÀNG XÓM',
      },
      {
        userId: '2',
        userPic: '/assets/images/profilePic.svg',
        userName: 'QUOCANH 2',
        walletAddress: '0xifowdsvsdvwnsdascdds',
        nickName: 'BẠN CẤP 2',
      },
      {
        userId: '3',
        userPic: '/assets/images/profilePic.svg',
        userName: 'BLAH BLAH',
        walletAddress: '0xifoiaweifwiwrgnsadasds',
        nickName: 'BẠN CẤP 3',
      },
      {
        userId: '4',
        userPic: '/assets/images/profilePic.svg',
        userName: 'QUOCANH 3',
        walletAddress: '0xifoiaweifwiwrgnsadasds',
        nickName: 'BẠN ĐẠI HỌC',
      },
      {
        userId: '5',
        userPic: '/assets/images/profilePic.svg',
        userName: 'QUOCANH 4',
        walletAddress: '0xifoiaweifwiwrgnsadasds',
        nickName: 'BẠN TÌNH',
      },
      {
        userId: '6',
        userPic: '/assets/images/profilePic.svg',
        userName: 'QUOCANH 5',
        walletAddress: '0xifoiaweifwiwrgnsadasds',
        nickName: 'BẠN NỢ',
      },
      {
        userId: '7',
        userPic: '/assets/images/profilePic.svg',
        userName: 'QUOCANH 6',
        walletAddress: '0xifoiaweifwiwrgnsadasds',
        nickName: 'BẠN XÃ GIAO',
      },
    ],
  })
}
