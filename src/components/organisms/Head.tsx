import React, { FC, memo } from 'react'
import { Helmet } from 'react-helmet-async'
import { useViewport } from '../../hooks/useViewPort'

type Props = {
  title: string
}

export const Head: FC<Props> = memo(({ title }) => {
  const { viewport } = useViewport()

  return (
    <>
      <Helmet>
        <meta name="viewport" content={viewport} />
        <title>{title ?? 'Todoアプリ'}</title>
      </Helmet>
    </>
  )
})
