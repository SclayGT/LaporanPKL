'use client';

import React from 'react';
import { Button, Card, Row } from 'antd';
import { store } from '#/store';
import { Header } from 'antd/es/layout/layout';
import { useRouter } from 'next/navigation';

const Page = () => {
  const fontFamily = 'Inika, serif';
  const router = useRouter();

  <title>Our Attachment</title>;
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
          <img
            src="/panah.svg"
            style={{ width: '17px', height: '17px', marginRight: '10px', marginLeft: '20px' }}
          />
          <span style={{ color: 'white', fontFamily, fontSize: '20px' }}>Back</span>
        </button>
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
            Our Attachment
          </span>
        </div>
        <div style={{ width: '100px' }} />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '100px',
          marginTop: '100px',
          flexDirection: 'column',
          gap: '20px',
        }}
      >

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '50px',
          height: '350px',          
          width: '1200px',
          backgroundColor: 'white',
        }}
      >
        <img src="" alt="" />
      </div>
      <Row>
        <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
          height: '580px',          
          width: '570px',
          backgroundColor: 'white',
        }}
        >
        </div>
        
        <div
        style={{
          marginLeft: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
          height: '285px',          
          width: '282px',
          backgroundColor: 'white',
        }}
        >
        </div>

        <div
        style={{
          marginLeft: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
          height: '285px',          
          width: '282px',
          backgroundColor: 'white',
        }}
        >
        </div>

        </Row>
        <Row>
        <div
                style={{

                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '20px',
                  height: '285px',          
                  width: '282px',
                  backgroundColor: 'white',
                }}
        >
        </div>

        <div
                style={{
                  marginLeft: '20px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '20px',
                  height: '285px',          
                  width: '282px',
                  backgroundColor: 'white',
                }}
        >
        </div>

        <div
        style={{
          marginLeft: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '-274px',
          height: '585px',          
          width: '582px',
          backgroundColor: 'white',
        }}
        >
        </div>

        </Row>
        <Row>

        <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '285px',          
          width: '580px',
          backgroundColor: 'white',
        }}
        >
        </div>

        <div
        style={{
          marginLeft: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '285px',          
          width: '282px',
          backgroundColor: 'white',
        }}
        >
        </div>

        <div
        style={{
          marginLeft: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '285px',          
          width: '282px',
          backgroundColor: 'white',
        }}
        >
        </div>

        </Row>

        </div>

            {/* Footer */}
      <div
        style={{
          backgroundColor: '#070720',
          height: '90px',
          padding: '20px 0',
          position: 'relative',
          marginTop: '40px',
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
