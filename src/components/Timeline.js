import React, { useState, useEffect } from 'react';
import { Chrono } from 'react-chrono';
import axios from 'axios';

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
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://api.airtable.com/v0/${process.env.REACT_APP_AIR_TABLE_BASE_ID}/${process.env.REACT_APP_AIR_TABLE_NAME}?api_key=${process.env.REACT_APP_AIR_TABLE_API_KEY}
`);
      const transformData = response.data.records.map(item => item.fields);
      setTimelineData(transformData);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Timeline</h1>
      <div style={{ width: '500px', height: '950px' }}>
        <Chrono items={mockData} mode='TREE' />
      </div>
    </>
  );
};

export default Timeline;
