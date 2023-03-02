import React, { useState, useEffect } from 'react';
import { server_calls } from '../api';

export const useGetData =() =>{
    const [wineData, setData] = useState<[]>([]);

    async function handleDataFetch(){
        const result = await server_calls.get(); //Pulling the data from our backend API
        setData(result)
    }
    useEffect( () => {
        handleDataFetch(); //Applies side effects to our API or HTTP request/ fetch our apis
    }, [])

        return {wineData, getData:handleDataFetch} //getData is called to get {wineData}
}

