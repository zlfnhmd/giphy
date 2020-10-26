export interface TrendingStore {
  isModalVisible: boolean;
  gifData: any[];
  visibleGifIndex: number;
}

export interface TrendingStoreAction {
  type: TRENDING_STORE_ACTION;
  payload?: any;
}

export enum TRENDING_STORE_ACTION {
  TOGGLE_MODAL = 'TOGGLE_MODAL',
  LOAD_GIF_DATA = 'LOAD_GIF_DATA',
  VISIBLE_GIF_INDEX = 'VISIBLE_GIF_INDEX',
}
