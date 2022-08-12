/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header css={header}>
      <div css={headerContainer}>
        <div css={headerLeft}>
          {/* <a href="#"> */}
          <Link to="/todo">
            <h1>
              <img src="../img/todoLogo.png" alt="todoロゴ" />
            </h1>
          </Link>
          {/* </a> */}
        </div>

        <nav css={headerRight}>
          <ul>
            <li>
              <Link to="/user_management">ユーザー設定</Link>
            </li>
            <li>
              <Link to="/help">ヘルプ</Link>
            </li>
            <li>
              <Link to="/">ログアウト</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

const header = css`
  width: 100%;
  height: 120px;
  background-color: whitesmoke;
`

const headerContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(100%, 1400px);
  margin: 0 auto;
  height: 100%;
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
