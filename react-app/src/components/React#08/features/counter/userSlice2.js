import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "",
    age: 0,
}

const userSlice2 = createSlice({
    name : "user", // slice 이름
    initialState, // 초기 값
    reducers: {
    // 리듀서 함수
        setName: (state,action) => {state.name = action.payload},
        setAge: (state,action) => {state.age = action.payload},
    }
})

// store에 counterSlice를 등록하기 위함
// Action creators are generated for each case reducer function
export const { setName, setAge } = userSlice2.actions

export default userSlice2.reducer;