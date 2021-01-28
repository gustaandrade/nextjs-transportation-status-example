import React from 'react';
import ContentLoader from 'react-content-loader';

const PokeItemSkeleton: React.FC = () => {
  return (
    <ContentLoader
      viewBox="0 0 400 300"
      speed={3}
      width={400}
      height={300}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="40" cy="30" r="25" />
      <rect x="80" y="10" rx="3" ry="3" width="60" height="6" />
      <rect x="80" y="25" rx="3" ry="3" width="150" height="6" />
      <rect x="80" y="40" rx="3" ry="3" width="150" height="6" />
    </ContentLoader>
  );
};

export default PokeItemSkeleton;
