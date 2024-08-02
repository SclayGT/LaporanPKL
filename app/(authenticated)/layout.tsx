'use client';

import React from 'react';
import { Layout } from 'antd';
import { usePathname } from 'next/navigation';

const { Content } = Layout;

interface AuthenticatedLayoutProps {
  children: React.ReactNode;
}

const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  const backgroundStyle =
    pathname === '/about'
      ? { 
          backgroundImage: 'url("/background.svg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }
      : {
          backgroundColor: '#0B0C2A',
        };

        

  return (
    <Layout>
      <Layout style={{ height: 'calc(100vh - 64px)' }}>
        <Content
          style={{
            padding: '70px 40px',
            ...backgroundStyle,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AuthenticatedLayout;
