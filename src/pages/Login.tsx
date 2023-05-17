import React from 'react';
import Layout from 'components/Layout';
import 'styles/Login.css';

function Login() {
  return (
    <Layout>
      <h1>로그인</h1>

      <form name="loginForm" action="" method="post" className="login-form">
        <label htmlFor="uid">아이디</label>
        <input type="text" name="uid" id="uid"></input>
        <label htmlFor="pwd">비밀번호</label>
        <input type="password" name="pwd" id="pwd"></input>
        <button type="submit">로그인</button>
      </form>
    </Layout>
  );
}

export default Login;
