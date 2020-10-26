import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import { TrendingStoreContext } from '../store';
import { TRENDING_STORE_ACTION } from '../types';

const fadeIn = keyframes`from { opacity: 0; }`;

export const Modal = () => {
  const {
    trendingState: { gifData, isModalVisible, visibleGifIndex },
    dispatch,
  } = useContext(TrendingStoreContext);

  const closeModal = () => {
    dispatch({ type: TRENDING_STORE_ACTION.TOGGLE_MODAL, payload: false });
  };

  const arrowHandler = (direction: 'left' | 'right') => {
    const currentPosition = visibleGifIndex;
    if (direction === 'left') {
      const prevGif = currentPosition === 0 ? gifData.length - 1 : currentPosition - 1;
      dispatch({ type: TRENDING_STORE_ACTION.VISIBLE_GIF_INDEX, payload: prevGif });
    } else {
      const nextGif = currentPosition === gifData.length - 1 ? 0 : visibleGifIndex + 1;
      dispatch({ type: TRENDING_STORE_ACTION.VISIBLE_GIF_INDEX, payload: nextGif });
    }
  };

  return isModalVisible ? (
    <Overlay>
      <Dialog>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <button onClick={closeModal}>CLOSE MODAL</button>
          </div>
          <div
            style={{
              flexGrow: 1,
              marginTop: '5px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <button onClick={() => arrowHandler('left')}>Prev</button>
            </div>
            <div
              style={{
                border: '1px red solid',
                margin: '0px 10px',
                flexGrow: 1,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img style={{ height: '100%', maxWidth: '100%' }} src={gifData[visibleGifIndex].images.original.url} />
            </div>
            <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <button onClick={() => arrowHandler('right')}>Next</button>
            </div>
          </div>
        </div>
      </Dialog>
    </Overlay>
  ) : null;
};

const Overlay = styled.div`
  animation: ${fadeIn} 200ms ease-out;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;

const Dialog = styled.div`
  background: white;
  border-radius: 5px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: 70%;
  height: 70%;
`;
