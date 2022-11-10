import {createSlice} from "@reduxjs/toolkit";

export const filesSlice = createSlice({
    name: "files",
    initialState: {
        value: {
            allFiles: [],
            // name: "image1",
            // active: "true"
        }
    },
    reducers: {
        scanList: (state, action) => {
            // console.log(action.payload)
            const file = {
                name: action.payload.name,
                active: action.payload.active
            }
            state.value.allFiles.push(file)
            state.value.allFiles = action.payload
        }
    }
})

export const {scanList} = filesSlice.actions
export default filesSlice.reducer