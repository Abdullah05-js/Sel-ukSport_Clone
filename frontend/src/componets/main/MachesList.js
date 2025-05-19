import React from 'react';
import Button from '../Button';
import "./style.css"



const MachesList = ({ Data }) => {

    const ButtonList = Data?.map((e, index) => {
        const date = new Date(e.StartTime).toLocaleString()
        return <Button key={index} id={e.id} date={date} team1={e.teamA} team2={e.teamB} />
    }) ?? <p className='font-bold text-center text-green-300 text-xl'>No stream available</p>

    return (
        <aside className='h-[600px] w-full border-green-300 border-2 rounded-lg flex flex-col gap-2 p-4 overflow-auto'>
            {ButtonList}
        </aside>
    );
}

export default MachesList;
