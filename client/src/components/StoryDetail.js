import React from 'react';
import { useParams } from 'react-router-dom';

const StoryDetail = ({ stories }) => {
  const { id } = useParams();
  const story = stories.find(story => story.id === id);

  if (!story) return <div>Loading...</div>;

  return (
    <div>
      <h2>{story.title}</h2>
      <p>{story.content}</p>
      <h3>Comments</h3>
      <ul>
        {story.comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default StoryDetail;
