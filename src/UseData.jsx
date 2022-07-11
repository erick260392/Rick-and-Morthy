import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseData = (URL) => {

    const [Data, setData] = useState({})

    useEffect(() => {

        axios.get(URL)
        .then(res => setData(res.data))
      
    }, [])
    




    return {Data}
       
};

export default UseData;