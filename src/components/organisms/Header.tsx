/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import React from 'react'

export const Header = () => {
  return (
    <header css={header}>
      <div css={headerContainer}>
        {/* <div className="header__container"> */}
        <h1>ToDoアプリ</h1>
      </div>
    </header>
  )
}

const header = css`
  width: 100%;
  height: 100px;
`

const headerContainer = css`
  width: min(100%, 1440px);
  margin: 0 auto;
  background-color: whitesmoke;
  height: 100%;
`
