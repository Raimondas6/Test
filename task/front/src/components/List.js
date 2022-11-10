import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {scanList} from "../features/files";

const List = () => {

    const dispatch = useDispatch()

    function getImgList() {
        const options = {
            method: "GET",
            headers: {
                "content-type": "application/json"
            },
            credentials: "include"
        }
        fetch("http://localhost:3001/list", options)
            .then(res => res.json())
            .then((data) => {
                dispatch(scanList(data))
                // console.log(data)
            })
    }

    useEffect(() => {
        getImgList()
    }, [])

    const files = useSelector((state) => state.files.value.allFiles)
    // const renderedFiles = files.map(file => console.log(file))
    //     <div>{file.name}</div>
    //     <div>{file.active}</div>
    // ))
    // const active = useSelector((state) => state.image.value.active)




    console.log(files)
    return (
        <div>
            {/*{renderedFiles}*/}
            {/*<div>*/}
            {/*    name: {file.name}*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    active: {file.active}*/}
            {/*</div>*/}
        </div>

    );
};

export default List;