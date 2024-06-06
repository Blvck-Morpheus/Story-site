import React, { useEffect, useState } from 'react';
import StoryList from '../components/StoryList';
import StoryForm from '../components/StoryForm';

const Home = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch('/api/stories')
            .then(response => response.json())
            .then(data => setStories(data));
    }, []);

    return (
        <div className="container">
            <h1 className="my-4">Story Site</h1>
            <StoryForm />
            <StoryList stories={stories} />
        </div>
    );
};

export default Home;
