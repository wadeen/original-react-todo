/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const Page404 = () => {
  return <div css={page404}>お探しのページは見つかりません。</div>
}

const page404 = css`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
`
