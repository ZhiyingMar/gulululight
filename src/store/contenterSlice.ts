import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface NameState {
    value: string;
};

// 使用该类型定义初始 state
const initialState: NameState = {
    value: 'init',
  };
  

export const contentSlice = createSlice({
    name: 'content',
    // `createSlice` 将从 `initialState` 参数推断 state 类型
    initialState,
    reducers: {
      // 使用 PayloadAction 类型声明 `action.payload` 的内容
      assignmentName: (state, action: PayloadAction<string>) => {
        state.value = action.payload;
      },
    },
  });
  export const { assignmentName } = contentSlice.actions;

  // selectors 等其他代码可以使用导入的 `RootState` 类型
export const selectContent = (state: RootState) => state.content.value;

export default contentSlice.reducer;