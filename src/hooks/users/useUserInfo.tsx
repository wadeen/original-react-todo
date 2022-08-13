import axios from 'axios'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { User } from '../../types/User'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const useUserInfo = () => {
  const nav = useNavigate()

  const notifyLoginSuccess = () => toast('ログインに成功しました!')
  const notifyLoginfailed = () => toast('ユーザがー見つかりませんでした')

  const login = useCallback((id: number | string) => {
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((result) => {
        if (result.data.id) {
          notifyLoginSuccess()
          nav('/todo')
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
