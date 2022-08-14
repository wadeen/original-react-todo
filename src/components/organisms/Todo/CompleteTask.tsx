/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { useState } from 'react'

type Props = {
  completeText: string[]
  setCompleteText: any //✋
  // checked: any //✋
  // onchange:  any //✋
  checkedRemoveButton: any //✋
}

export const CompleteTask: React.FC<Props> = React.memo(
  ({ completeText, checkedRemoveButton, setCompleteText }) => {
    // 確認メッセージ後全て削除
    const allTaskRemove = () => {
      if (window.confirm('本当に全て削除してもいいですか？')) {
        setCompleteText([])
      }
    }

    // 削除
    const checkedRemove = () => {
      const targetCheckbox = [
        ...document.querySelectorAll('.todoCheckboxLabel'),
      ]
      let newTodo: string[] = []
      // console.log(targetCheckbox)
      targetCheckbox.map((item: any) => {
        if (item.querySelector('input').checked === false) {
          const removeText = item.textContent
          newTodo = [...newTodo, removeText] //チェック入っていないものだけ取得
        }
        console.log((item.querySelector('input').checked = false)) //削除後全てチェック外す
        setCompleteText(newTodo)
      })
    }

    return (
      <div css={completeTask}>
        <h3>完了したタスク</h3>
        <ul>
          {completeText.map((todo: string, index: any) => (
            <>
              <li key={index}>
                <label className={'todoCheckboxLabel'}>
                  <input type="checkbox" className={'checkbox'} />
                  {todo}
                </label>
              </li>
            </>
          ))}
        </ul>
        <div css={remove}>
          <button disabled={checkedRemoveButton} onClick={checkedRemove}>
            選択した項目を削除
          </button>
          <button disabled={checkedRemoveButton} onClick={allTaskRemove}>
            完了したタスクを全て削除
          </button>
        </div>
      </div>
    )
  }
)

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
      opacity: 0.5;
    }
  }
`
