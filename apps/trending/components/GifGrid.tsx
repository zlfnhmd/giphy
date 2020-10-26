import React, { useContext } from 'react';
import { TrendingStoreContext } from '../store';
import { TRENDING_STORE_ACTION } from '../types';

export const GifGrid = () => {
  const { trendingState, dispatch } = useContext(TrendingStoreContext);
  const data = trendingState.gifData;

  const handleClick = (index: number) => {
    dispatch({ type: TRENDING_STORE_ACTION.VISIBLE_GIF_INDEX, payload: index });
    dispatch({ type: TRENDING_STORE_ACTION.TOGGLE_MODAL, payload: true });
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', margin: '0px 10px' }}>
        {data
          ? data.map((image, index) =>
              index < 5 ? (
                <div
                  tabIndex={index}
                  role='button'
                  aria-pressed='false'
                  onClick={() => handleClick(index)}
                  onKeyPress={() => handleClick(index)}
                >
                  <img
                    style={{ width: '100%', margin: '10px 0px', cursor: 'pointer' }}
                    key={image.id}
                    src={image.images.original.url}
                    alt='asd'
                  />
                </div>
              ) : null
            )
          : null}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', margin: '0px 10px' }}>
        {data
          ? data.map((image, index) =>
              index >= 5 && index < 10 ? (
                <div
                  tabIndex={index}
                  role='button'
                  aria-pressed='false'
                  onClick={() => handleClick(index)}
                  onKeyPress={() => handleClick(index)}
                >
                  <img
                    style={{ width: '100%', margin: '10px 0px', cursor: 'pointer' }}
                    key={image.id}
                    src={image.images.original.url}
                    alt='asd'
                  />
                </div>
              ) : null
            )
          : null}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', margin: '0px 10px' }}>
        {data
          ? data.map((image, index) =>
              index >= 10 && index < 15 ? (
                <div
                  tabIndex={index}
                  role='button'
                  aria-pressed='false'
                  onClick={() => handleClick(index)}
                  onKeyPress={() => handleClick(index)}
                >
                  <img
                    style={{ width: '100%', margin: '10px 0px', cursor: 'pointer' }}
                    key={image.id}
                    src={image.images.original.url}
                    alt='asd'
                  />
                </div>
              ) : null
            )
          : null}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', margin: '0px 10px' }}>
        {data
          ? data.map((image, index) =>
              index >= 15 && index < 20 ? (
                <div
                  tabIndex={index}
                  role='button'
                  aria-pressed='false'
                  onClick={() => handleClick(index)}
                  onKeyPress={() => handleClick(index)}
                >
                  <img
                    style={{ width: '100%', margin: '10px 0px', cursor: 'pointer' }}
                    key={image.id}
                    src={image.images.original.url}
                    alt='asd'
                  />
                </div>
              ) : null
            )
          : null}
      </div>
    </>
  );
};
