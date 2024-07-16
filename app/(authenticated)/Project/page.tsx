'use client';

import React from 'react';
import { Button, Card, Col, Row } from 'antd';
import { store } from '#/store';
import { Header } from 'antd/es/layout/layout';
import { useRouter } from 'next/navigation';

const Page = () => {
  const fontFamily = 'Inika, serif';
  const router = useRouter();

  <title>Project</title>;

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
          <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Project</span>
        </div>
        <div style={{ width: '100px' }} />
      </div>
      <div>
        <Card
          style={{
            width: '70%',
            height: '450px',
            backgroundColor: '#070720',
            border: 'none',
            borderRadius: '0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            right: '300px',
            top: '200px',
          }}
        >
          <div>
            <div
              style={{
                width: '800px',
                height: '430px',
                backgroundColor: '#D9D9D9',
                borderRadius: '0px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                left: '10px',
                top: '10px',
              }}
            >
              <img src="/login.png" style={{ width: '800px', height: '430px' }} />
            </div>
            <div
              style={{
                marginTop: '10px',
                marginLeft: '800px',
              }}
            >
              <Row style={{ marginTop: '0px' }}>
                <Col>
                  <h1 style={{ color: 'white' }}>Project Info</h1>
                </Col>
              </Row>
              <Row style={{ marginTop: '10px' }}>
                <Col>
                  <h2 style={{ color: 'white' }}>Project Name : Inventaris Sekolah</h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2 style={{ color: 'white', marginTop: '0px' }}>
                    Build with : NestJs, NextJS, TypeScript,
                  </h2>
                </Col>
              </Row>
              <Row>
                <h2 style={{ color: 'white' }}>React, AntDesain , PostgreSQL, Postman</h2>
              </Row>
              <Row style={{}}>
                <Col>
                  <h2 style={{ color: 'white' }}>Year : 2024</h2>
                </Col>
              </Row>
              <Row style={{ marginBottom: '30px' }}>
                <Col>
                  <h2 style={{ color: 'white' }}>Development Time : 6 Mounth</h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <button
                    style={{
                      width: '120px',
                      height: '40px',
                      backgroundColor: '#282931',
                      border: 'none',
                      borderRadius: '0px',
                    }}
                    onClick={() => router.push('/github')}
                  >
                    <span style={{ color: 'white', marginRight: '50px' }}>Github</span>
                  </button>
                </Col>
              </Row>
            </div>
          </div>
        </Card>
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
