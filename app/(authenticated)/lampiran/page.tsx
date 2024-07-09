"use client";

import React from "react";
import { Button, Card } from "antd";
import { store } from "#/store";
import { Header } from "antd/es/layout/layout";
import { useRouter } from "next/navigation";

const Page = () => {

  const router = useRouter();

    <title>Our Attachment</title>
  return (
    <>
      <Header
        className="header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#070720',
          zIndex: 1, // Ensure it stays on top of other content
        }}
      >
                <div>
            <button
            onClick={() => router.push('/Menu')}>
             <span style={{ color: 'white' }}>balik lur</span>
            </button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Our Attachment</span>
        </div>
      </Header>
      
    </>
  );
};

export default Page;
