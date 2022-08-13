/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { Head } from '../organisms/Head'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TodoInputForm } from '../molecules/Todo/TodoInputForm'
import { InCompleteTak } from '../organisms/Todo/InCompleteTask'
import { Spacer } from '../atoms/spacer/Spacer'
import { CompleteTask } from '../organisms/Todo/CompleteTask';

export const Todo: React.FC = React.memo(() => {
  return (
    <>
      <Head title={'Todoリスト'} />
      <div css={wrapper}>
        <h2>本日のタスク</h2>
        <TodoInputForm />
        <Spacer size={60}/>
        <InCompleteTak />
        <Spacer size={60}/>
        <CompleteTask />
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
