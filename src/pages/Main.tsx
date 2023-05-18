import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from 'components/Layout';

function Main() {
  const navigate = useNavigate();

  const onClickHandler = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <Layout>
      <div className="main">
        <h1>메인페이지</h1>
        <button type="button" onClick={onClickHandler}>
          로그아웃
        </button>
      </div>
    </Layout>
  );
}

export default Main;
