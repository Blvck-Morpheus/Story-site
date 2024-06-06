import React from 'react';
import StoryDetail from '../components/StoryDetail';

const Story = ({ stories }) => {
  return (
    <div>
      <h1>Story Page</h1>
      <StoryDetail stories={stories} />
    </div>
  );
};

export default Story;
