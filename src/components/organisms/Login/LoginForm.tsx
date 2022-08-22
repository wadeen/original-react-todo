/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useEffect } from 'react'
import { PrimaryButton } from '../../atoms/button/PrimaryButton'
import { LoginInputForm } from '../../molecules/Login/LoginInputForm'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { useUserInfo } from '../../../hooks/users/useUserInfo'

import { ToastContainer } from 'react-toastify'

export const LoginForm = () => {
  const { login } = useUserInfo()

  const [inputText, setInputText] = useState('')

  const onchangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const onClickLogin = () => {
    login(inputText)
  }

  return (
    <div css={wrapper}>
      <h2>ログイン</h2>
      <div>
        <LoginInputForm
          type={'text'}
          title={'ログインID'}
          readOnly={false}
          onChange={onchangeText}
          value={inputText}
        />
        <Popup
          trigger={<button css={hint}>💡ヒント</button>}
          position="top center"
        >
          <div css={hintText}>
            1~10の好きな数字を
            <br />
            ログインIDに入力して下さい
          </div>
        </Popup>

        <LoginInputForm
          type={'password'}
          title={'パスワード'}
          readOnly={true}
          value="password"
        />
        <PrimaryButton
          name="ログイン"
          disabled={inputText === ''}
          onClick={onClickLogin}
        />
      </div>
      <ToastContainer />
    </div>
  )
}

const wrapper = css`
  width: min(100%, 550px);
  margin: 120px auto;
  border: 2px solid teal;
  border-radius: 20px;
  padding: 50px 30px 60px;
  position: relative;
  background-color: #fff;
  box-shadow: 2px 1px 10px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 767px) {
    margin: 60px 20px;
    width: calc(100% - 40px);
  }
  h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 40px;
    text-align: center;
    @media screen and (max-width: 767px) {
      font-size: 2.4rem;
      margin-bottom: 20px;
    }
  }
`

const hint = css`
  margin: 0 auto;
  margin-top: -60px;
  position: absolute;
  top: calc(50% + 30px);
  right: 30px;
  padding-right: 30px;
  font-weight: 700;
  outline: none;
  @media screen and (max-width: 767px) {
    font-size: 1.2rem;
    top: calc(50% + 35px);
    right: 10px;
  }
`

const hintText = css`
  font-size: 1.4rem;
  @media screen and (max-width: 767px) {
    width: 150px;
    font-size: 1rem;
  }
`
