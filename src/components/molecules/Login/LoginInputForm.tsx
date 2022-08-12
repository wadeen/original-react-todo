/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FC, memo } from 'react'

type Props = {
  type: string
  title: string
}

export const LoginInputForm: FC<Props> = memo(({ type, title }) => {
  return (
    <div css={wrapper}>
      <dt>{title}</dt>
      <dd>
        <input type={type} />
      </dd>
    </div>
  )
})

const wrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 30px;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
  dt {
    font-size: 2rem;
  }
  dd {
    font-size: 2rem;
    input {
      border: 1px solid #333;
      border-radius: 4px;
      width: 300px;
      height: 35px;
      line-height: 35px;
      padding: 6px;
    }
  }
`
