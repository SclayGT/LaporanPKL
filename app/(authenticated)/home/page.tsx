'use client';

import React from 'react';
import { Button, Card } from 'antd';
import { store } from '#/store';
import { sampleRepository } from '#/repository/sample';

const Page = () => {
  <title>Home</title>;
  const { data, error, isLoading } = sampleRepository.hooks.useJoke();
  return <div></div>;
};

export default Page;
