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
      <Layout style={{ height: 'calc(100vh - 64px)' }}>
        <Content
          style={{
            padding: 24,
            backgroundColor: '#0B0C2A',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AuthenticatedLayout;
