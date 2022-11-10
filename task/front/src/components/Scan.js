import React from 'react';
import {useSelector} from "react-redux";

const Scan = () => {

    const files = useSelector((state) => state.files.value.allFiles)

    function scan() {
        const options = {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(files)
        }

        fetch('http://localhost:4000/scan', options)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }




    return (
        <div>
            <button onClick={scan}>Scan</button>
        </div>
    );
};

export default Scan;