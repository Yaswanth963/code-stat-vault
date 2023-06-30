import React, { useState } from "react";

const useExplore = () => {
    const [exploreData, setExploreData] = useState();
    return {
        exploreData
    }
}

export default useExplore;