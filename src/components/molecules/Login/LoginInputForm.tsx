/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FC, memo } from 'react'

type Props = {
  type: string
  title: string
  value?: string
  readOnly: any
  onChange?: any
}

export const LoginInputForm: FC<Props> = memo(
  ({ type, title, readOnly, onChange, value }) => {
    return (
      <div css={wrapper}>
        <dt>{title}</dt>
        <dd>
          <input type={type} readOnly={readOnly} onChange={onChange}  value={value}/>
        </dd>
      </div>
    )
  }
)

const wrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
  dt {
    font-size: 2rem;
    width: 120px;
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
