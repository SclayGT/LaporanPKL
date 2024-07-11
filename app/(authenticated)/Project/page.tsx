"use client";

import React from "react";
import { Button, Card, Col, Row } from "antd";
import { store } from "#/store";
import { Header } from "antd/es/layout/layout";
import { useRouter } from "next/navigation";

const Page = () => {

  const router = useRouter();


    <title>Project</title>

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
          <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Project</span>
        </div>
      </Header>
      <body>
        <Card
        style={
          {
            width: '80%',
            height: '450px',
            backgroundColor: '#070720',
            border: 'none',
            borderRadius: '0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            right: '200px',
            top: '200px',
          }
        }>
      <div
                style={{
                  width: '850px',
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
                <img src="/kk.png" style={{ width: '70%', borderRadius: '20px' }} />
              </div>
              <div
              style={{
                marginTop: '10px',
                marginLeft: '600px',
              }}
              >
              <Row style={{ marginBottom: '30px' }}>
                <Col>
                  <h1 style={{ color: 'white' }}>Project Info</h1>
                </Col>

              </Row>
              <Row style={{ marginBottom: '30px' }}>
                <Col>
                  <h2 style={{ color: 'white' }}>Project Name :  Inventaris Sekolah</h2>
                </Col>
               
              </Row>
              <Row>
                <Col>
                  <h2 style={{ color: 'white' }}>Build with : NestJs, NextJS, TypeScript,</h2>
                </Col>
               
              </Row>
              <Row>
                  <h2 style={{ color: 'white' }}>React, AntDesain , PostgreSQL, Postman</h2>
                </Row>
                <Row style={{ marginBottom: '30px' }}>
                <Col>
                  <h2 style={{ color: 'white' }}>Year : 2024</h2>
                </Col>
               
              </Row>
              <Row style={{ marginBottom: '30px' }}>
                <Col>
                  <h2 style={{ color: 'white' }}>Development Time : 6 Mounth</h2>
                </Col>
               
              </Row>
              
              </div>
          </Card>
      </body>
    </>
  );
};

export default Page;
