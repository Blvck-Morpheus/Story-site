import React from 'react';
import { Link } from 'react-router-dom';

const StoryList = ({ stories }) => {
    return (
        <div>
            {stories.map(story => (
                <div key={story._id} className="card my-3">
                    <div className="card-body">
                        <h2 className="card-title">{story.title}</h2>
                        <h3 className="card-subtitle mb-2 text-muted">by {story.author}</h3>
                        <p className="card-text">{story.content.substring(0, 100)}...</p>
                        <Link to={`/story/${story._id}`} className="btn btn-primary">Read More</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StoryList;
