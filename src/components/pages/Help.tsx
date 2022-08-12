/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { Head } from '../organisms/Head'

export const Help = () => {
  return (
    <>
      <Head title={'ヘルプ'} />
      <div css={wrapper}>
        <h2>ヘルプ</h2>
        <p>
          1~9の好きな数字をログインIDに入力してください。
          <br />
          パスワードは自動入力されます。
        </p>
        <div css={back}>
          <Link to="/">ログインページへ戻る</Link>
        </div>
      </div>
    </>
  )
}

const wrapper = css`
  width: min(100%, 800px);
  margin: 0 auto;
  padding: 100px 20px;
  text-align: center;
  h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 30px;
  }
  p {
    font-size: 1.8rem;
    line-height: 1.4;
  }
`

const back = css`
  margin-top: 30px;
  text-align: center;
  color: blue;
  text-decoration: underline;
  transition: 0.3s ease;
  :hover {
    opacity: 0.8;
  }
`
