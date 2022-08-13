import React from 'react'
import { Head } from '../organisms/Head'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Todo: React.FC = React.memo(() => {
  return (
    <>
      <Head title={'Todoリスト'} />
      <p>todoリスト</p>
      <ToastContainer />
    </>
  )
})
