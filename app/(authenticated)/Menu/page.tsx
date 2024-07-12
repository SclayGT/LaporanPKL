"use client";

import React from "react";
import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
import { useRouter } from "next/navigation";

const Page = () => {
  const fontFamily = 'Inter, sans-serif';
  const router = useRouter();

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
          <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', fontFamily }}>Menu</span>
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
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#070720',
            borderColor: '#070720',
            borderBottom: '2px solid #282694',  
            color: 'black',
            boxShadow: '0px 7px 10px rgba(0, 0, 0, 0.1)',
            height: '60px',
            width: '100%',
            fontFamily: 'inherit',
            paddingLeft: '20px'
          }}
          onClick={() => router.push('/about')}
        >
          <img src="/aboutUs.svg" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
          <span style={{ color: 'white', fontFamily }}>About Us</span>
        </Button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#070720',
            borderColor: '#070720',
            borderBottom: '2px solid #282694' ,            
            color: 'black',
            boxShadow: '0px 7px 10px rgba(0, 0, 0, 0.1)',
            height: '60px',
            width: '100%',
            fontFamily: 'inherit',
            paddingLeft: '20px'
          }}
          onClick={() => router.push('/Project')}
        >
          <img src="/project.svg" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
          <span style={{ color: 'white' }}>Project</span>
        </Button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#070720',
            borderColor: '#070720',
            borderBottom: '2px solid #282694' ,  
            color: 'black',
            boxShadow: '0px 7px 10px rgba(0, 0, 0, 0.1)',
            height: '60px',
            width: '100%',
            fontFamily: 'inherit',
            paddingLeft: '20px'
          }}
          onClick={() => router.push('/lampiran')}
        >
          <img src="/lampiran.svg" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
          <span style={{ color: 'white' }}>Our Attachment</span>
        </Button>
      </div>
    </>
  );
};

export default Page;
