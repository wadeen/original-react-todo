/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Head } from '../organisms/Head'
import { ChangeButton } from '../atoms/button/ChangeButton';

export const UserManagement = () => {
  return (
    <div css={wrapper}>
      <Head title={'ユーザー管理'} />
      <h2>ユーザー設定</h2>
      <div css={settings}>
        <p>ログイン情報を公開したい<br />→ログインIDに合わせた</p>
      </div>


      <dl css={settings}>
        <div>
        <dt>設定◯◯</dt>
        <dd><ChangeButton name={"変更"} /></dd>
        </div>
        <div>
        <dt>設定◯◯</dt>
        <dd><ChangeButton name={"変更"} /></dd>
        </div>
        <div>
        <dt>設定◯◯</dt>
        <dd><ChangeButton name={"変更"} /></dd>
        </div>
        <div>
        <dt>設定◯◯</dt>
        <dd><ChangeButton name={"変更"} /></dd>
        </div>
        <div>
        <dt>設定◯◯</dt>
        <dd><ChangeButton name={"変更"} /></dd>
        </div>
      </dl>
    </div>
  )
}


const wrapper = css`
  width: min(100%, 600px);
  margin: 60px auto;
  background-color: #fff;
  h2 {
    font-size: 3rem;
    text-align: center;
    font-weight:700;
    line-height: 2;
    border-bottom: 1px solid teal;
  }
`;

const settings = css`
  /* background-color: orange; */
  padding: 50px;
  width: 60%;
  margin: 0 auto;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;