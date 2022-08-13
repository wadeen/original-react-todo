/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { v4 as uuidv4 } from 'uuid'

type Props = {
  inCompleteText: string[]
  setInCompleteText: any //✋
  completeText: string[]
  setCompleteText: any //✋
}

export const InCompleteTask: React.FC<Props> = React.memo(
  ({ inCompleteText, completeText, setCompleteText, setInCompleteText }) => {
    // 完了ボタン押下
    const onClickComplete = (todo: string) => {
      setCompleteText([...completeText, todo])
      setInCompleteText(
        inCompleteText.filter((todoTarget: string) => todo !== todoTarget)
      )
    }

    // 残りのタスクの数
    const inCompleteLength = inCompleteText.length
    return (
      <div css={incompleteTask}>
        <h3>未完了のタスク</h3>
        <ul>
          {inCompleteText.map((todo: any) => (
            <li key={uuidv4()}>
              {todo}
              <button
                css={completeButton}
                onClick={() => onClickComplete(todo)}
              >
                完了
              </button>
            </li>
          ))}
        </ul>
        {inCompleteLength === 0 || (
          <p>⚠️{inCompleteLength}件のタスクが残っています</p>
        )}
      </div>
    )
  }
)

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
        content: '◉';
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

const completeButton = css`
  padding: 4px 8px;
  width: 50px;
  height: 30px;
  text-align: center;
  background-color: #0d6efd;
  border-radius: 4px;
  color: #fff;
  margin-left: 20px;
  white-space: nowrap;
`
