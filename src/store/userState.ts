import { atom } from 'recoil'

export const userState = atom({
  key: 'userState',
  default: {
    isLogin: true, //ログイン有無：ログイン画面のみログアウト設定
    loginUser: "", //ログインユーザー(IDから取得)

  },
})
