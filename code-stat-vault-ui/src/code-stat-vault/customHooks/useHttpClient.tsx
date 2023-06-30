import React from "react";
import axios from "axios";
import { EXPLORE_APPI } from "../constants";
const useHttpClient = () => {
    const httpClient = axios.create();
    return {
        getExploreData: () => {
            return httpClient.get(`${EXPLORE_APPI}`);
        },
    }
}

export default useHttpClient;