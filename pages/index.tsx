import React from 'react';

import { Trending } from 'apps/trending';
import { Default } from '../layouts/default';

interface HomePageProps {
  data: Array<any>;
}

const Home = (props: HomePageProps) => {
  return (
    <Default>
      <Trending data={props.data} />
    </Default>
  );
};

export default Home;

export async function getServerSideProps() {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API}&limit=25&rating=g`
  );
  const responseData = await response.json();
  return {
    props: {
      data: responseData.data,
    },
  };
}
