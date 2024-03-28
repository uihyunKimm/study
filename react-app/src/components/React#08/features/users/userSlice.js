import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name : "user", // slice 이름
    initialState:{// 초기 값
        count: 0,
        member: [],
    },
    reducers: {
        addMember: (state,action) => { //정답
            return{
                count: state.count + 1,
                member: [...state.member, action.payload] //
            }
        },
        deleteMember: (state,action) => { //정답
            return{
                count: state.count - 1,
                member: [...state.member, filter((user) => user.name !== action.payload)]
            }
        },
        
    }
})

// store에 counterSlice를 등록하기 위함
// Action creators are generated for each case reducer function
export const { setName, setAge, setAdd } = userSlice.actions

export default userSlice.reducer;