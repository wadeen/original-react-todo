/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

export const TodoInputForm: React.FC = React.memo(() => {
  return (
    <div css={inputArea}>
      <input type="text" />
      <button type="button">入力</button>
    </div>
  )
})

const inputArea = css`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  input {
    width: 300px;
    background-color: #fff;
    border-radius: 4px;
    height: 40px;
    line-height: 40px;
    padding: 6px;
    border: 1px solid teal;
  }
  button {
    width: 60px;
    background-color: teal;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    border-radius: 6px;
  }
`
