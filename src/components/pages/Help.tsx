/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
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
    margin-bottom: 30px
  }
  p {
    font-size: 1.8rem;
    line-height: 1.4;

  }
`
