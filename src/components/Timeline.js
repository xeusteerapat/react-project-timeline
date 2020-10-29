import React, { useState, useEffect } from 'react';
import { Chrono } from 'react-chrono';
import axios from 'axios';

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

  const fetchTimeline = () => {
    if (timelineData.length === 0) {
      return <div>Loading...</div>;
    }

    return <Chrono items={timelineData} mode='TREE' />;
  };

  return (
    <>
      <h1>Timeline</h1>
      <div style={{ width: '500px', height: '950px' }}>{fetchTimeline()}</div>
    </>
  );
};

export default Timeline;
