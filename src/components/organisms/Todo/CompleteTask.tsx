/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

type Props = {
  completeText: string[]
}

export const CompleteTask: React.FC<Props> = React.memo(({completeText}) => {

  // console.log(completeText);

  return (
    <div css={completeTask}>
      <h3>完了したタスク</h3>
      <ul>
      {completeText.map((todo) => (
        <li><input type="checkbox" id="1"/><label htmlFor='1'>{todo}</label></li>
      ))}
        {/* <li><input type="checkbox" id="2"/><label htmlFor='2'>プログラミング学習</label></li>
        <li><input type="checkbox" id="3"/><label htmlFor='3'>筋トレをする</label></li> */}
      </ul>
      <div css={remove}>
        <button disabled={true}>選択した項目を削除</button>
        <button>完了したタスクを全て削除</button>
      </div>
    </div>
  )
})

const completeTask = css`
  border: 2px solid teal;
  padding: 30px 60px 60px;
  border-radius: 5px;
  margin-bottom: 80px;
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
      input {
        margin-right: 15px;
      }
    }
  }
`


const remove = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  bottom: -30px;
  button {
    color: gray;
    font-size: 1.6rem;
    font-weight: 700;
    &:last-child {
      color: red;
    }
    &:disabled {
      opacity: .5;
    }
  }

`;