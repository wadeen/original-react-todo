import React, { FC, memo, ReactNode } from 'react'
import { Header } from '../organisms/Header'

type Props = {
  children: ReactNode
}

export const HeaderBasicLayout: FC<Props> = memo(({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
})
