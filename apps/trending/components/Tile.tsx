import React, { useContext } from 'react';

import styles from '../styles/tile.module.css';
import { TrendingStoreContext } from '../store';
import { TRENDING_STORE_ACTION } from '../types';

interface TileProps {
  imageUrl: string;
  imageId: string;
}

export const Tile = (props: TileProps) => {
  const { imageUrl, imageId } = props;
  const {
    trendingState: { gifData },
    dispatch,
  } = useContext(TrendingStoreContext);

  const handleClick = (Id: string) => {
    const index = gifData.findIndex(image => image.id === Id);
    dispatch({ type: TRENDING_STORE_ACTION.VISIBLE_GIF_INDEX, payload: index });
    dispatch({ type: TRENDING_STORE_ACTION.TOGGLE_MODAL, payload: true });
  };

  return (
    <button className={styles.tileContainer} onClick={() => handleClick(imageId)}>
      <img className={styles.tileImg} src={imageUrl} alt='asd' />
    </button>
  );
};
