import React, { useReducer } from 'react';

import styles from './styles/trending.module.css';

import { GifGrid } from './components/GifGrid';
import { Modal } from './components/Modal';
import { TrendingStoreContext, trendingStoreReducer } from './store';

interface TrendingPageProps {
  data: Array<any>;
}

export const Trending = (props: TrendingPageProps) => {
  const [globalState, dispatch] = useReducer(trendingStoreReducer, {
    gifData: props.data,
    isModalVisible: false,
    visibleGifIndex: 0,
  });

  return (
    <TrendingStoreContext.Provider value={{ trendingState: globalState, dispatch }}>
      <div className={styles.trendingContainer}>
        <GifGrid />
        <Modal />
      </div>
    </TrendingStoreContext.Provider>
  );
};
