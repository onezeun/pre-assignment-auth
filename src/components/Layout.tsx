import React from 'react';
import 'styles/Layout.css';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className='wrap'>{children}</div>
  );
}

export default Layout;
