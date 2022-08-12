/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { PrimaryButton } from '../../atoms/button/PrimaryButton'
import { LoginInputForm } from '../../molecules/Login/LoginInputForm'

export const LoginForm = () => {
  return (
    <div css={wrapper}>
      <h2>ログインフォーム</h2>
      <dl>
        <LoginInputForm type={'text'} title={'ログインID'} />
        <LoginInputForm type={'password'} title={'パスワード'} />
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
