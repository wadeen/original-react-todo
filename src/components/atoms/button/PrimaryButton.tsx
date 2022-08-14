/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import React from 'react'

type Props = {
  name: string
  disabled: boolean
  onClick: () => void
}

export const PrimaryButton: React.FC<Props> = React.memo(
  ({ name, disabled, onClick }) => {
    return (
      <button type="button" disabled={disabled} css={button} onClick={onClick}>
        {name}
      </button>
    )
  }
)

const button = css`
  font-size: 2rem;
  text-align: center;
  display: block;
  background-color: #0d6efd;
  color: #fff;
  margin: 60px auto 0;
  width: 200px;
  height: 50px;
  line-height: 50px;
  border-radius: 10px;
  transition: 0.3s ease;
  @media screen and (max-width: 767px) {
    font-size: 1.6rem;
    width: 160px;
    height: 40px;
    line-height: 40px;
    margin: 40px auto 0;
  }
  :hover {
    opacity: 0.8;
  }
  &:disabled {
    background-color: gray;
    opacity: 1;
    cursor: default;
    cursor: not-allowed;
  }
`
