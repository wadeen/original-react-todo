/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ChangeEvent, useState } from 'react'
import { PrimaryButton } from '../../atoms/button/PrimaryButton'
import { LoginInputForm } from '../../molecules/Login/LoginInputForm'

export const LoginForm = () => {
  const [inputText, setInputText] = useState('')

  const onchangeText = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputText(e.target.value)

  return (
    <div css={wrapper}>
      <h2>ログインフォーム</h2>
      <dl>
        <LoginInputForm
          type={'text'}
          title={'ログインID'}
          readOnly={false}
          onChange={onchangeText}
          value={inputText}
        />

        <LoginInputForm
          type={'password'}
          title={'パスワード'}
          readOnly={true}
          value="password"
        />
        <PrimaryButton name="ログイン" linkTo={'/todo'} />
      </dl>
    </div>
  )
}

const wrapper = css`
  width: min(100%, 550px);
  margin: 120px auto;
  border: 2px solid teal;
  border-radius: 20px;
  padding: 50px 30px 60px;
  h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 40px;
    text-align: center;
  }
`
