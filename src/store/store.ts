import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./contenterSlice";
// redux-persist解决数据缓存问题
import {persistStore, persistReducer} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

// 缓存采用session缓存
const storageConfig = {
  key: 'root', // 必须有的
  storage:storageSession // 缓存机制
  // whitelist: ['content'], // reducer 里持久化的数据,除此外均为不持久化数据
}

 const contentSessionReducer=persistReducer(storageConfig,contentReducer);

const store = configureStore({
    reducer: {
    content: contentSessionReducer,
  },
  // 没有序列值创建自定义的中间件取消警告
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export const persistor=persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
