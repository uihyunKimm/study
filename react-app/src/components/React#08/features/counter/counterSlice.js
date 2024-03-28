import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

const counterSlice = createSlice({
name : "counter", // slice 이름
initialState, // 초기 값
reducers: {
// 리듀서 함수
    increment: (state) => {state.value += 1},
    decrement: (state) => {state.value -= 1},
    incrementByAmount: (state, action) => {state.value += action.payload},
}
})

// store에 counterSlice를 등록하기 위함
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer;