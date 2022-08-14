/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react';

type Props = {
  name: string
}

export const ChangeButton: React.FC<Props> = React.memo(({name}) => {
  return (
    <button css={button}>{name}</button>
  )
})

const button = css`
  background-color: teal;
  border-radius: 4px;
  padding: 5px 10px;
  color: #ffff;
`;