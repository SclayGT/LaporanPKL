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
          background: 'url("/background.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative', // Ensures relative positioning
          height: '100vh', // Ensures full viewport height
          width: '100%', // Ensures full viewport width
        }
      : {
          backgroundColor: '#0B0C2A',
        };

        

  const contentStyle =
    pathname === '/about'
      ? {
          position: 'relative', // Ensure content remains above background
          zIndex: 1, // Ensure content is above background
          padding: '250px 40px',
        }
      : {};

  return (
    <Layout>
      <Layout style={{ minHeight: '100vh', backgroundColor: '#0B0C2A' }}>
        <Content
          style={{
            ...backgroundStyle,
            backgroundColor: '#0B0C2A', // Ensure background color is visible
          }}
        >
          {children}
        </Content>
        <div
          style={{
            ...contentStyle,
          }}
        />
      </Layout>
    </Layout>
  );
};

export default AuthenticatedLayout;
