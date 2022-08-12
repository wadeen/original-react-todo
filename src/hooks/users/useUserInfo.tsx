import axios from 'axios'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { User } from '../../types/User'

export const useUserInfo = () => {
  const nav = useNavigate()
  const login = useCallback((id: number | string) => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((result) => {
        result.data.filter((user) => {
          if (user.id == id) {
            nav('/todo')
          } else {
            return(
              alert('正しいログインIDを入力して下さい: 1~9')
            )
          }
          return false;
        })
      })
      .catch(() => {
        alert('ユーザー情報の取得に失敗しました。')
      })
  }, [])

  return { login }
}
