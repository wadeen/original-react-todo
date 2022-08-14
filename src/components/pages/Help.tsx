/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { Head } from '../organisms/Head'
import { userState } from '../../store/userState'
import { useRecoilValue } from 'recoil'

export const Help = () => {
  // Recoil: ログイン有無の状態監視
  const loginState = useRecoilValue(userState)

  return (
    <>
      <Head title={'ヘルプ'} />
      <div css={wrapper}>
        <h2>ヘルプ</h2>

        {loginState.isLogin ? (
          <>
            <p>
              入力欄に本日のタスクを入れて、<br className="br-767"/>入力ボタンを押して下さい。
              <br />
              未入力タスクに同じタスクが追加された場合は、<br className="br-767"/>完了時に統一されます。
            </p>
            <div css={back}>
              <Link to="/todo">ToDoアプリへ戻る</Link>
            </div>
          </>
        ) : (
          <>
            <p>
              1~10の好きな数字をログインIDに入力してください。
              <br />
              パスワードは自動入力されます。
            </p>
            <div css={back}>
              <Link to="/">ログインページへ戻る</Link>
            </div>
          </>
        )}
      </div>
    </>
  )
}

const wrapper = css`
  width: min(100%, 800px);
  margin: 0 auto;
  padding: 100px 20px;
  text-align: center;
  @media screen and (max-width: 767px) {
    padding: 60px 20px;
  }
  h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 30px;
    @media screen and (max-width: 767px) {
      font-size: 2.4rem;
      margin-bottom: 20px;
    }
  }
  p {
    font-size: 1.8rem;
    line-height: 1.4;
    @media screen and (max-width: 767px) {
      font-size: 1.4rem;
      font-feature-settings: "palt";
    }
    .br-767 {
      display: none;
      @media screen and (max-width: 767px) {
        display: block;
    }
    }
  }
`

const back = css`
  margin-top: 30px;
  text-align: center;
  color: blue;
  text-decoration: underline;
  transition: 0.3s ease;
   @media screen and (max-width: 767px) {
    margin-top: 20px;
    font-size: 1.4rem;
   }
  :hover {
    opacity: 0.8;
  }
`

