/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import React, { FC, memo } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  name: string
  linkTo: string
}

export const PrimaryButton: FC<Props> = memo(({ name, linkTo }) => {
  return (
    <button type="button" css={button}>
      <Link to={linkTo}>{name}</Link>
    </button>
  )
})

const button = css`
  font-size: 2rem;
  text-align: center;
  display: block;
  background-color: #0d6efd;
  color: #fff;
  margin: 60px auto 0;
  width: 200px;
  height: 50px;
  line-height: 30px;
  border-radius: 10px;
  transition: .3s ease;
  :hover  {
    opacity: .8;
  }
`
