import axios from 'axios'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { User } from '../../types/User'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRecoilState } from 'recoil'
import { userState } from '../../store/userState'

// import { useCookies } from 'react-cookie'

// ToDoアプリのログイン関連の処理
export const useUserInfo = () => {
  const nav = useNavigate()
  // const setLoginState = useRecoilState(userState) //Cookie動作確認後削除予定
  const [loginState, setLoginState] = useRecoilState(userState)

  // const [cookies, setCookie] = useCookies(['loginInfo'])

  const notifyLoginSuccess = () => toast('ログインに成功しました!')
  const notifyLoginfailed = () => toast('ユーザがー見つかりませんでした')

  const login = useCallback((id: string) => {
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((result) => {
        // ログイン成功
        if (result.data.id) {
          setLoginState({ isLogin: true, loginUser: id })
          // setCookie('loginInfo', notifyLoginSuccess)
          notifyLoginSuccess()
          nav('/todo')
          // ログイン失敗
        } else {
          notifyLoginfailed()
        }
      })
      .catch(() => {
        notifyLoginfailed()
      })
  }, [])

  return { login }
}
