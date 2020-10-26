import React from 'react';

import styles from '../styles/tile.module.css';

interface TileProps {
  imageUrl: string;
  imageIndex: number;
  handleClick(index: number): void;
}

export const Tile = (props: TileProps) => {
  const { imageIndex, imageUrl, handleClick } = props;
  return (
    <div
      className={styles.tileContainer}
      tabIndex={imageIndex}
      role='button'
      aria-pressed='false'
      onClick={() => handleClick(imageIndex)}
      onKeyPress={() => handleClick(imageIndex)}
    >
      <img className={styles.tileImg} src={imageUrl} alt='asd' />
    </div>
  );
};
