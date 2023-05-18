import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import useValidation from 'hooks/useValidation';
import Layout from 'components/Layout';

function Login() {
  const { user, uidChange, pwChange, errMsg } = useValidation();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (errMsg.uid === '' && errMsg.pwd === '') {
      setLoginError(false);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/main');
    } else setLoginError(true);
  };

  return (
    <Layout>
      <h1>로그인</h1>

      <form name="loginForm" action="" method="post" className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="uid">아이디</label>
        <input type="text" name="uid" id="uid" onChange={uidChange} />
        {errMsg.uid && <p>{errMsg.uid}</p>}
        <label htmlFor="pwd">비밀번호</label>
        <input type="password" name="pwd" id="pwd" onChange={pwChange} />
        {errMsg.pwd && <p>{errMsg.pwd}</p>}
        <button type="submit">로그인</button>
        {loginError && <p className="error-message">로그인에 실패하였습니다. 다시 시도해주세요.</p>}
      </form>
    </Layout>
  );
}

export default Login;
