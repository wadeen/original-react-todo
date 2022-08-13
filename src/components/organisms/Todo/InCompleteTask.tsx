/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

export const InCompleteTak: React.FC = React.memo(() => {
  return (
    <div css={incompleteTask}>
      <h3>未完了のタスク</h3>
      <ul>
        <li>散歩する</li>
        <li>プログラミング学習</li>
        <li>筋トレをする</li>
      </ul>
      <p>⚠️3件のタスクが残っています</p>
    </div>
  )
})

const incompleteTask = css`
  border: 2px solid teal;
  padding: 30px 60px 60px;
  border-radius: 5px;
  position: relative;
  background-color: #fff;
  h3 {
    font-size: 2.6rem;
    font-weight: 700;
    list-style: 0.05;
    text-align: center;
    margin-bottom: 30px;
  }
  ul {
    min-height: 80px;
    li {
      font-size: 1.8rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      &:not(:last-child) {
        margin-bottom: 15px;
      }
      &::before {
        content: "◉";
        margin-right: 12px;
      }
    }
  }
  p {
    color: gray;
    font-size: 1.4rem;
    position: absolute;
    right: 20px;
    bottom: 10px;
  }
`
