"use client";

import React from "react";
import { Button, Card } from "antd";
import { store } from "#/store";
import { Header } from "antd/es/layout/layout";
import { useRouter } from "next/navigation";

const Page = () => {

  const router = useRouter();

  <title>Menu</title>

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
      
      <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '100px',
          paddingTop: 100,
            }}>
        <Button
          style={{
            backgroundColor: '#070720',
            color: 'black',
            boxShadow: '0px 7px 10px rgba(0, 0, 0, 0.1)',
            height: '40px',
            width: '100%',
            fontFamily: 'inherit',
          }}
          onClick={() => router.push('/about')}
        >
          <span style={{ color: 'white' }}>About Us</span>
        </Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Button
          style={{
            backgroundColor: '#070720',
            color: 'black',
            boxShadow: '0px 7px 10px rgba(0, 0, 0, 0.1)',
            height: '40px',
            width: '100%',
            fontFamily: 'inherit',
          }}
          onClick={() => router.push('/Project')}
        >
          <span style={{ color: 'white' }}>Project</span>
        </Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Button
          style={{
            backgroundColor: '#070720',
            color: 'black',
            boxShadow: '0px 7px 10px rgba(0, 0, 0, 0.1)',
            height: '40px',
            width: '100%',
            fontFamily: 'inherit',
          }}
          onClick={() => router.push('/lampiran')}
        >
          <span style={{ color: 'white' }}>Our Attachment</span>
        </Button>
      </div>
    </>
  );
};

export default Page;
