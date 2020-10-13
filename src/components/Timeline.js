import React, { useState, useEffect } from 'react';
import { Chrono } from 'react-chrono';

const mockData = [
  {
    title: '8 Sep 2020',
    contentTitle: 'Micro Learning',
    contentText: 'Start develop Jump Dashboard',
  },
  {
    title: '21 Sep 2020',
    contentTitle: 'Micro Learning',
    contentText: 'Start develop Chatbot Manager',
  },
  {
    title: '28 Sep 2020',
    contentTitle: 'Chatbot',
    contentText: 'Start develop Flash',
  },
  {
    title: '16 Oct 2020',
    contentTitle: 'Micro Learning',
    contentText: 'Complete Jump Dashboard',
  },
];

const Timeline = () => {
  return (
    <h1>
      <h1>Timeline</h1>
      <div style={{ width: '500px', height: '950px' }}>
        <Chrono items={mockData} mode='TREE' />
      </div>
    </h1>
  );
};

export default Timeline;
