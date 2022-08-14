/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userState } from '../../store/userState'

import logoImage from '../../img/todoLogo.png'

export const Header = () => {
  // Recoil: ログイン有無の状態監視
  const [loginState, setLoginState] = useRecoilState(userState)

  const onClickLogout = () => {
    setLoginState({ isLogin: false, loginUser: '' })
  }

  return (
    <header css={header}>
      <div css={headerContainer}>
        <div css={headerLeft}>
          <Link to={loginState.isLogin ? '/todo' : '/'}>
            <h1>
              <img src={logoImage} alt="todoロゴ" />
            </h1>
          </Link>
        </div>

        <nav css={headerRight}>
          <ul>
            {loginState.isLogin && (
              <li>
                <Link to="/user_management">ユーザー設定</Link>
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
  @media screen and (max-width: 767px) {
    position: fixed;
    top: 0;
    height: 60px;
    z-index: 10;
    background-color: whitesmoke;
  }
`

const headerContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(100%, 1400px);
  margin: 0 auto;
  height: 100%;
  padding: 0 25px;
  @media screen and (max-width: 767px) {
    padding: 0 10px;
  }
`

const headerLeft = css`
  display: flex;
  align-items: center;
  h1 {
    width: 240px;
    height: 120px;
    @media screen and (max-width: 767px) {
      width: 110px;
      height: 60px;
    }
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
    margin-right: 20px;
    @media screen and (max-width: 767px) {
      margin-right: 15px;
      column-gap: 20px;
    }
    li {
      font-size: 2rem;
      transition: opacity 0.3s ease;
      @media screen and (max-width: 767px) {
        font-size: 1.2rem;
      }
      &:hover {
        opacity: 0.8;
      }
    }
  }
`
