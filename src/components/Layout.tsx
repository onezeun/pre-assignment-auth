import React from 'react';
import 'styles/Layout.css';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <div className="container">{children}</div>;
}

export default Layout;
