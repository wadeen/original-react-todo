/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

type Props = {
  inputText: string
  setInputText: any //✋
  onClick: () => void
  disabled: boolean
}

export const TodoInputForm: React.FC<Props> = React.memo(
  ({ inputText, setInputText, onClick, disabled = true }) => {
    const onChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(e.target.value)
    }

    return (
      <div css={inputArea}>
        <input type="text" value={inputText} onChange={onChangeInputText} />
        <button type="button" onClick={onClick} disabled={disabled}>
          入力
        </button>
      </div>
    )
  }
)

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
    width: 70px;
    background-color: teal;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    border-radius: 6px;
    &:disabled {
      opacity: 0.5;
    }
  }
`
