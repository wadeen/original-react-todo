/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ChangeEventHandler, FC, memo } from 'react'

type Props = {
  type: string
  title: string
  value?: string
  readOnly: boolean | undefined
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
}

export const LoginInputForm: FC<Props> = memo(
  ({ type, title, readOnly, onChange, value }) => {
    return (
      <dl css={wrapper}>
        <dt>{title}</dt>
        <dd>
          <input
            type={type}
            readOnly={readOnly}
            onChange={onChange}
            value={value}
          />
        </dd>
      </dl>
    )
  }
)

const wrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
  &:not(:last-child) {
    margin-bottom: 40px;
    @media screen and (max-width: 767px) {
      margin-bottom: 20px;
    }
  }
  dt {
    font-size: 2rem;
    width: 120px;
    @media screen and (max-width: 767px) {
      font-size: 1.6rem;
      margin-bottom: 10px;
    }
  }
  dd {
    font-size: 2rem;
    @media screen and (max-width: 767px) {
      font-size: 1.6rem;
    }
    input {
      border: 1px solid #333;
      border-radius: 4px;
      width: 300px;
      height: 35px;
      line-height: 35px;
      padding: 6px;
      @media screen and (max-width: 767px) {
        width: 280px;
      }
    }
  }
`
