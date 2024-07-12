"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const fontFamily = 'Inika, serif';
  const router = useRouter();

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
          <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>About Us</span>
        </div>
        <div style={{ width: '100px' }} />
      </div>
      <div style={{ width: '300px', height: '60px', backgroundColor: '#1E0E41', margin: '150px 100px' }}>
        <p style={{ color: 'white', padding: '15px 18px', fontFamily, fontSize: '25px' }}>Welcome to our report</p>
      </div>
      <div style={{ padding: '0 100px', marginTop: '-230px', display: 'flex', alignItems: 'center' }}>
        <h1 style={{ color: 'white', fontSize: '40px', lineHeight: '1.3', marginBottom: '200px', fontFamily }}>
          HI, WE ARE FROM DIGNITAS<br />ACADEMY WHICH IS ABLE TO<br />DEVELOP THE WEB
        </h1>
        <img 
          src="/dignitas.svg" // Ganti dengan path gambar Anda
          alt="Dignitas Academy"
          style={{ width: '50%', marginLeft: '200px', marginTop: '90px' }} // Sesuaikan ukuran gambar
        />
      </div>
      <p style={{ color: 'white', fontFamily}}> 
          At Dignitas, we study a dynamic web that is able to adapt and has the ability to change 
          content and layout in real-time based on user interactions. We also learn various technologies
          that support dynamic web development, such as JavaScript and modern frameworks such as React 
          Apart from that, we also understand the importance of optimizing performance and security in
          web development so that users get the best experience. We created this project through the 
          use of NestJS for the backend and Next.js for the frontend.
        </p>
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
