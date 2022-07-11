import axios from 'axios';
import React from 'react';

const UseData = (url) => {

const [Data, setData] = useState({})

useEffect(() => {

    axios.get(url)
    .then(res => setData(res.data))
  
}, [])




    return {Data}
            
        
};

export default UseData;