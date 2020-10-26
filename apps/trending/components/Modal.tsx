import React, { useContext, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { BsCaretLeftFill, BsCaretRightFill, BsXSquareFill } from 'react-icons/bs';

import { TrendingStoreContext } from '../store';
import { TRENDING_STORE_ACTION } from '../types';

const fadeIn = keyframes`from { opacity: 0; }`;

export const Modal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const {
    trendingState: { gifData, isModalVisible, visibleGifIndex },
    dispatch,
  } = useContext(TrendingStoreContext);

  const closeModal = () => {
    dispatch({ type: TRENDING_STORE_ACTION.TOGGLE_MODAL, payload: false });
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef]);

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
      <Dialog ref={modalRef}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <NavigationButton onClick={() => arrowHandler('left')}>
              <BsCaretLeftFill style={{ color: 'white' }} />
            </NavigationButton>
            <NavigationButton onClick={() => arrowHandler('right')}>
              <BsCaretRightFill style={{ color: 'white' }} />
            </NavigationButton>
            <NavigationButton style={{ marginLeft: 'auto' }} onClick={closeModal}>
              <BsXSquareFill style={{ color: 'white' }} />
            </NavigationButton>
          </div>
          <div
            style={{
              flexGrow: 1,
              height: '80%',
              marginTop: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              alt='asd'
              style={{ maxHeight: '100%', maxWidth: '100%' }}
              src={gifData[visibleGifIndex].images.original.url}
            />
          </div>
        </div>
      </Dialog>
    </Overlay>
  ) : null;
};

const NavigationButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  outline: inherit;
  cursor: pointer;
`;

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
  background: black;
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
