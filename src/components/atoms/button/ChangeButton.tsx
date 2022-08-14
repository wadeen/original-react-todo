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
   @media screen and (max-width: 767px) {
    padding: 3px 8px;
    font-size: 1.4rem;
  }
`;