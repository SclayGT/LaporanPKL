"use client";

import React from "react";
import { Button, Card } from "antd";
import { store } from "#/store";
import { Header } from "antd/es/layout/layout";
import { useRouter } from "next/navigation";

const Page = () => {
  const fontFamily = 'Inika, serif';
  const router = useRouter();


    <title>Our Attachment</title>
  return (
    <>
        <div
          className="header"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#070720',
            height: '80px',
            zIndex: 1,
            padding: '0 20px',
          }}
        >
          <button
            onClick={() => router.push('/Menu')}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <img src="/panah.svg" style={{ width: '17px', height: '17px', marginRight: '10px', marginLeft: '20px' }} />
            <span style={{ color: 'white', fontFamily, fontSize: '20px' }}>Back</span>
          </button>
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Our Attachment</span>
          </div>
          <div style={{ width: '100px' }} />
        </div>





        <div
        style={{
          backgroundColor: '#070720',
          height: '90px',
          padding: '20px 0',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/iconBKA.svg" style={{ width: '90px', height: '90px', marginLeft: '100px' }} />
        </div>
        <div style={{ flex: 1, textAlign: 'right', paddingRight: '20px' }}>
          <span style={{ fontSize: '14px', fontFamily }}>Copyright ©2024. All Rights Reserved</span>
        </div>
        
      </div>
    </>
  );
};

export default Page;
