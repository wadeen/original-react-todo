import axios from 'axios'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { User } from '../../types/User'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSetRecoilState } from 'recoil'
import { userState } from '../../store/userState';

// ToDoアプリのログイン関連の処理
export const useUserInfo = () => {
  const nav = useNavigate()
  const setLoginState = useSetRecoilState(userState);

  const notifyLoginSuccess = () => toast('ログインに成功しました!')
  const notifyLoginfailed = () => toast('ユーザがー見つかりませんでした')

  const login = useCallback((id: number | string) => {
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((result) => {
        // ログイン成功
        if (result.data.id) {
          setLoginState({isLogin: true})
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

  return { login, notifyLoginSuccess }
}
