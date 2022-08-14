import { Head } from '../organisms/Head'
import { LoginForm } from '../organisms/Login/LoginForm'
import { userState } from '../../store/userState'
import { useSetRecoilState } from 'recoil'
import { useEffect } from 'react'

export const Login = () => {
  // Recoil: ログイン有無の状態監視
  const setUserLoginInfo = useSetRecoilState(userState)

  useEffect(() => {
    setUserLoginInfo({ isLogin: false, loginUser: '' })
  }, [])

  return (
    <>
      <Head title={'ログイン'} />
      <LoginForm />
    </>
  )
}
