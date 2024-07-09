'use client';

import React, { useState } from 'react';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Button, Dropdown, Layout, Menu, theme } from 'antd';
import { useRouter } from 'next/navigation';

const { Header, Content, Sider } = Layout;

interface AuthenticatedLayoutProps {
  children: React.ReactNode;
}

const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({ children }) => {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menu1 = (
    <Menu style={{ backgroundColor: '#070720' }}>
      <Menu.Item key="1">
        <span style={{ color: 'white' }}>link kosong</span>
      </Menu.Item>
    </Menu>
  );

  const handleDropdownClick = () => {
    setOpenDropdown(!openDropdown);
  };

  // const menu: MenuProps['items'] = [
  //   {
  //     key: `/home`,
  //     icon: <HomeFilled />,
  //     label: `Home`,
  //   },
  //   {
  //     key: `/about`,
  //     icon: <InfoCircleFilled />,
  //     label: `About`,
  //   },
  // ];

  return (
    <Layout>
      <Header
        className="header"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#070720',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Menu</span>
        </div>
      </Header>
      <Layout style={{ height: 'calc(100vh - 64px)' }}>
        <Content
          style={{
            padding: 24,
            backgroundColor: '#0B0C2A',
          }}
        >
          <Dropdown
            overlay={menu1}
            placement={openDropdown ? 'bottomLeft' : 'bottomRight'}
            visible={openDropdown}
            onVisibleChange={setOpenDropdown}
          >
            <Button
              style={{
                backgroundColor: '#070720',
                color: 'black',
                boxShadow: '0px 7px 10px rgba(0, 0, 0, 0.1)',
                height: '40px',
                width: '100%',
                fontFamily: 'inherit',
              }}
              onClick={handleDropdownClick}
            >
              <span style={{ color: 'white' }}>About Us</span>{' '}
              {openDropdown ? (
                <DownOutlined style={{ fontSize: '12px' }} />
              ) : (
                <RightOutlined style={{ fontSize: '12px' }} />
              )}
            </Button>
          </Dropdown>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AuthenticatedLayout;
