/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { Head } from '../organisms/Head'
import { ChangeButton } from '../atoms/button/ChangeButton'
import { useRecoilState } from 'recoil'
import { userState } from '../../store/userState'

export const UserManagement = () => {
  // Recoil: ログイン有無の状態監視
  const [loginState, setLoginState] = useRecoilState(userState)

  return (
    <div css={wrapper}>
      <Head title={'ユーザー管理'} />
      <h2>ユーザー設定</h2>
      <ul css={loginUser}>
        <li>ログインユーザー：</li>
        <li>{loginState.loginUser}</li>
      </ul>

      <dl css={settings}>
        <div>
          <dt>設定◯◯</dt>
          <dd>
            <ChangeButton name={'変更'} />
          </dd>
        </div>
        <div>
          <dt>設定◯◯</dt>
          <dd>
            <ChangeButton name={'変更'} />
          </dd>
        </div>
        <div>
          <dt>設定◯◯</dt>
          <dd>
            <ChangeButton name={'変更'} />
          </dd>
        </div>
        <div>
          <dt>設定◯◯</dt>
          <dd>
            <ChangeButton name={'変更'} />
          </dd>
        </div>
        <div>
          <dt>設定◯◯</dt>
          <dd>
            <ChangeButton name={'変更'} />
          </dd>
        </div>
      </dl>
    </div>
  )
}

const wrapper = css`
  width: min(100%, 600px);
  margin: 60px auto;
  background-color: #fff;
  @media screen and (max-width: 767px) {
    width: calc(100% - 40px);
  }
  h2 {
    font-size: 3rem;
    text-align: center;
    font-weight: 700;
    line-height: 2;
    border-bottom: 1px solid teal;
    @media screen and (max-width: 767px) {
      font-size: 2.4rem;
    }
  }
  dl {
    dt {
      @media screen and (max-width: 767px) {
        font-size: 1.4rem;
      }
    }
  }
`

const settings = css`
  padding: 50px;
  width: 60%;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    padding: 30px 20px 20px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`

const loginUser = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  font-size: 2rem;
  @media screen and (max-width: 767px) {
    font-size: 1.6rem;
  }
  li {
    &:last-child {
      font-size: 2.6rem;
      font-weight: 700;
      @media screen and (max-width: 767px) {
        font-size: 2.2rem;
      }
    }
  }
`
