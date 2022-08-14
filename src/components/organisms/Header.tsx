/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userState } from '../../store/userState'

export const Header = () => {
  // Recoil: ログイン有無の状態監視
  const [loginState, setLoginState] = useRecoilState(userState)

  const onClickLogout = () => {
    setLoginState({ isLogin: false })
  }

  return (
    <header css={header}>
      <div css={headerContainer}>
        <div css={headerLeft}>
          <Link to={loginState.isLogin ? "/todo" : "/"} >
            <h1>
              <img src="../img/todoLogo.png" alt="todoロゴ" />
            </h1>
          </Link>
        </div>

        <nav css={headerRight}>
          <ul>
            {loginState.isLogin && (
              <li>
                <Link to="/user_management" >ユーザー設定</Link>
              </li>
            )}
            <li>
              <Link to="/help">ヘルプ</Link>
            </li>
            {loginState.isLogin && (
              <li>
                <Link to="/" onClick={onClickLogout}>
                  ログアウト
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

const header = css`
  width: 100%;
  height: 120px;
  background-color: #fff;
  box-shadow: 0 1px 40px 0 rgba(0, 0, 0, 0.05);
`

const headerContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(100%, 1400px);
  margin: 0 auto;
  height: 100%;
  padding: 0 25px;
`

const headerLeft = css`
  display: flex;
  align-items: center;
  h1 {
    width: 240px;
    height: 120px;
    img {
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
  }
`

const headerRight = css`
  ul {
    display: flex;
    align-items: center;
    column-gap: 40px;
    li {
      font-size: 2rem;
      transition: opacity 0.3s ease;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`
