import React from 'react';
import HorizontalCard from './HorizontalCard'; // Adjust the import path as needed
import { Box } from '@mui/material';
import './HorizontalPosts.css'; // Ensure this is correctly imported

interface Post {
  image: string;
  title: string;
  description: string;
}

interface HorizontalPostsProps {
  posts: Post[];
}

const HorizontalPosts: React.FC<HorizontalPostsProps> = ({ posts }) => {
  // Create a duplicate of the posts array for the seamless effect
  const duplicatedPosts = [...posts, ...posts];

  return (
    <Box className="scroll-container" sx={{ display: 'flex', padding: 2 }}>
      <div className="scroll-content">
        {duplicatedPosts.map((post: Post, index: number) => (
          <HorizontalCard
            key={index}
            image={post.image}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </Box>
  );
};

export default HorizontalPosts;
