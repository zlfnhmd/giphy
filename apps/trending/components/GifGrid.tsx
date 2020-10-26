import React, { useContext, useEffect, useState } from 'react';
import chunk from 'lodash/chunk';

import { useWindowSize } from '../../../utils/useWindowSize';
import { TrendingStoreContext } from '../store';
import { TRENDING_STORE_ACTION } from '../types';

import { GridRow } from './GridRow';

export const GifGrid = () => {
  const { width } = useWindowSize();
  const {
    trendingState: { gifData },
    dispatch,
  } = useContext(TrendingStoreContext);
  const [gridRows, setGridRows] = useState<number>(4);

  const [gifDataByRow, setGifDataByRow] = useState<any[]>([]);

  useEffect(() => {
    setGifDataByRow(chunk(gifData, Math.ceil(gifData.length / gridRows)));
  }, [gridRows, gifData]);

  useEffect(() => {
    if (width < 640) {
      setGridRows(2);
    }
    if (width > 639 && width < 1024) {
      setGridRows(3);
    }
    if (width > 1023) {
      setGridRows(4);
    }
  }, [width]);

  const handleClick = (index: number) => {
    dispatch({ type: TRENDING_STORE_ACTION.VISIBLE_GIF_INDEX, payload: index });
    dispatch({ type: TRENDING_STORE_ACTION.TOGGLE_MODAL, payload: true });
  };

  return (
    <>
      {gifDataByRow.map((rowData, rowIndex) => (
        <GridRow rows={gridRows} key={`gif-row-${rowIndex}`} rowData={rowData} handleClick={handleClick} />
      ))}
    </>
  );
};
