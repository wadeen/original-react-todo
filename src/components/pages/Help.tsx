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
              入力欄に本日のタスクを入れて、入力ボタンを押して下さい。
              <br />
              未入力タスクに同じタスクが追加された場合は、完了時に統一されます。
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
