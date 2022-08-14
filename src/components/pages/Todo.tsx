/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { Head } from '../organisms/Head'
import { useState, useEffect } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TodoInputForm } from '../molecules/Todo/TodoInputForm'
import { InCompleteTask } from '../organisms/Todo/InCompleteTask'
import { Spacer } from '../atoms/spacer/Spacer'
import { CompleteTask } from '../organisms/Todo/CompleteTask'

export const Todo: React.FC = React.memo(() => {
  // 入力ボタンの制御
  const [inputButtonDisabled, setInputButtonDisabled] = useState(false)
  // 入力したテキスト
  const [inputText, setInputText] = useState<any>()
  // 未完了テキスト(入力ボタン押下して確定したテキスト)
  const [inCompleteText, setInCompleteText] = useState<string[]>([])
  // 完了したテキスト
  const [completeText, setCompleteText] = useState<string[]>([])

  // 日時の取得
  let now: any = new Date()
  let today = `${now.getMonth() + 1}/${now.getDate()}`

  // 入力ボタン押下
  const onClickInutAdd = () => {
    if (inputText == '') return
    setInputButtonDisabled(true)
    setInCompleteText([...inCompleteText, inputText])
    setInputText('')
  }

  return (
    <>
      <Head title={'Todoリスト'} />
      <div css={wrapper}>
        <h2>【{today}】本日のタスク</h2>
        <TodoInputForm
          inputText={inputText}
          setInputText={setInputText}
          onClick={onClickInutAdd}
          inputButtonDisabled={inputText === ''}
        />
        <Spacer size={60} />
        <InCompleteTask
          inCompleteText={inCompleteText}
          setInCompleteText={setInCompleteText}
          completeText={completeText}
          setCompleteText={setCompleteText}
        />
        <Spacer size={60} />
        <CompleteTask
          completeText={completeText}
          checkedRemoveButton={completeText.length === 0}
          setCompleteText={setCompleteText}
        />
      </div>
      <ToastContainer />
    </>
  )
})

const wrapper = css`
  width: min(100%, 700px);
  margin: 80px auto;
  padding: 0 20px;
  h2 {
    font-size: 3rem;
    font-weight: 700;
    list-style: 0.05;
    text-align: center;
    margin-bottom: 30px;
  }
  span {
    display: block;
    margin: 100px 0;
  }
`
