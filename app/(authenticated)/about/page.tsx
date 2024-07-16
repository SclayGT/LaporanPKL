'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import '../../globals.css';

const Page = () => {
  const fontFamily = 'Inter, sans-serif';
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
          onClick={() => router.push('/menu')}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <img
            src="/iconBack.svg"
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
          <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>About Us</span>
        </div>
        <div style={{ width: '100px' }} />
      </div>
      <div
        style={{ width: '300px', height: '50px', backgroundColor: '#1E0E41', margin: '150px 90px' }}
      >
        <p style={{ color: 'white', padding: '17px 40px', fontFamily, fontSize: '20px' }}>
          Welcome to our report
        </p>
      </div>
      <div
        style={{
          padding: '0 100px',
          marginTop: '-140px',
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        <div>
          <h1
            style={{
              color: 'white',
              fontSize: '40px',
              lineHeight: '1.3',
              marginBottom: '20px',
              fontFamily,
            }}
          >
            HI, WE ARE FROM DIGNITAS
            <br />
            ACADEMY WHICH IS ABLE TO
            <br />
            DEVELOP THE WEB
          </h1>
          <p style={{ color: 'white', fontFamily, fontSize: '20px', lineHeight: '1.2' }}>
            At Dignitas, we study a dynamic web that is able to adapt and has the ability to change
            content and layout in real-time based on user interactions. We also learn various
            technologies that support dynamic web development, such as JavaScript and modern
            frameworks such as React. Apart from that, we also understand the importance of
            optimizing performance and security in web development so that users get the best
            experience. We created this project through the use of NestJS for the backend and
            Next.js for the frontend.
          </p>
        </div>
        <img src="/dignitas.svg" style={{ width: '70%', marginLeft: '20px', marginTop: '-10px' }} />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          marginTop: '100px',
        }}
      >
        <div className="card">
          <div className="card-borders">
            <div className="border-top"></div>
            <div className="border-right"></div>
            <div className="border-bottom"></div>
            <div className="border-left"></div>
          </div>
          <div className="card-content">
            <Image src="/avatar.jpg" alt="avatar" className="avatar" width={100} height={100} />
            <p className="username">Keyframe Effects</p>
            <p className="designation">Web & Graphic Designer</p>
            <p className="bio">
              Keyframe Effects is a YouTube channel in which I share Creative Website Design, HTML,
              CSS, JavaScript, jQuery, Bootstrap & much more.
            </p>
            <div className="social-icons">
              <Link
                href="https://www.instagram.com/keyframe_effects_youtube/"
                legacyBehavior
                passHref
              >
                <a className="social-icon" target="_blank">
                  <i className="fa fa-instagram icon"></i>
                </a>
              </Link>
              <Link href="https://www.youtube.com/@KeyframeEffects" legacyBehavior passHref>
                <a className="social-icon" target="_blank">
                  <i className="fa fa-youtube-play icon"></i>
                </a>
              </Link>
              <Link href="https://twitter.com/keyframeeffects" legacyBehavior passHref>
                <a className="social-icon" target="_blank">
                  <i className="fa fa-twitter icon"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-borders">
            <div className="border-top"></div>
            <div className="border-right"></div>
            <div className="border-bottom"></div>
            <div className="border-left"></div>
          </div>
          <div className="card-content">
            <Image src="/avatar.jpg" alt="avatar" className="avatar" width={100} height={100} />
            <p className="username">Keyframe Effects</p>
            <p className="designation">Web & Graphic Designer</p>
            <p className="bio">
              Keyframe Effects is a YouTube channel in which I share Creative Website Design, HTML,
              CSS, JavaScript, jQuery, Bootstrap & much more.
            </p>
            <div className="social-icons">
              <Link
                href="https://www.instagram.com/keyframe_effects_youtube/"
                legacyBehavior
                passHref
              >
                <a className="social-icon" target="_blank">
                  <i className="fa fa-instagram icon"></i>
                </a>
              </Link>
              <Link href="https://www.youtube.com/@KeyframeEffects" legacyBehavior passHref>
                <a className="social-icon" target="_blank">
                  <i className="fa fa-youtube-play icon"></i>
                </a>
              </Link>
              <Link href="https://twitter.com/keyframeeffects" legacyBehavior passHref>
                <a className="social-icon" target="_blank">
                  <i className="fa fa-twitter icon"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-borders">
            <div className="border-top"></div>
            <div className="border-right"></div>
            <div className="border-bottom"></div>
            <div className="border-left"></div>
          </div>
          <div className="card-content">
            <Image src="/avatar.jpg" alt="avatar" className="avatar" width={100} height={100} />
            <p className="username">Keyframe Effects</p>
            <p className="designation">Web & Graphic Designer</p>
            <p className="bio">
              Keyframe Effects is a YouTube channel in which I share Creative Website Design, HTML,
              CSS, JavaScript, jQuery, Bootstrap & much more.
            </p>
            <div className="social-icons">
              <Link
                href="https://www.instagram.com/keyframe_effects_youtube/"
                legacyBehavior
                passHref
              >
                <a className="social-icon" target="_blank">
                  <i className="fa fa-instagram icon"></i>
                </a>
              </Link>
              <Link href="https://www.youtube.com/@KeyframeEffects" legacyBehavior passHref>
                <a className="social-icon" target="_blank">
                  <i className="fa fa-youtube-play icon"></i>
                </a>
              </Link>
              <Link href="https://twitter.com/keyframeeffects" legacyBehavior passHref>
                <a className="social-icon" target="_blank">
                  <i className="fa fa-twitter icon"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
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
