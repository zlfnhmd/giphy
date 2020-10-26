import { createContext } from 'react';

import { TRENDING_STORE_ACTION, TrendingStore, TrendingStoreAction } from './types';

export const initialState: TrendingStore = {
  gifData: [],
  isModalVisible: false,
  visibleGifIndex: 0,
};

export const initialContextState = {
  trendingState: initialState,
  dispatch: (action: any) => action,
};

export const TrendingStoreContext = createContext(initialContextState);

export const trendingStoreReducer = (state: TrendingStore, action: TrendingStoreAction): TrendingStore => {
  const { type, payload } = action;
  switch (type) {
    case TRENDING_STORE_ACTION.TOGGLE_MODAL:
      return {
        ...state,
        isModalVisible: !state.isModalVisible,
      };
    case TRENDING_STORE_ACTION.LOAD_GIF_DATA:
      return {
        ...state,
        gifData: payload,
      };
    case TRENDING_STORE_ACTION.VISIBLE_GIF_INDEX:
      return {
        ...state,
        visibleGifIndex: payload,
      };
    default:
      return state;
  }
};
