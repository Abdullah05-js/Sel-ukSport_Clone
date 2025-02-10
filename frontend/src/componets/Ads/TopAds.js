import React from 'react';
import Ads2 from "@/componets/Ads/Ads2";
const TopAds = () => {
    return (
        <footer className='flex sm:flex-row flex-col justify-center sm:items-center items-start  sm:m-auto flex-wrap p-2 w-screen  '>
            <Ads2 />
            <div className='flex flex-row'>
            <iframe scrolling='no' frameBorder='0' className='p-0 m-0 border-0' width={200} src="https://refbanners.com/I?tag=d_4088877m_10793c_&site=4088877&ad=10793" ></iframe>
            <iframe scrolling='no' frameBorder='0' className='p-0 m-0 border-0' width={200} src="https://refbanners.com/I?tag=d_4088877m_37421c_&site=4088877&ad=37421" ></iframe>
            </div>
        </footer>
    );
}

export default TopAds;
