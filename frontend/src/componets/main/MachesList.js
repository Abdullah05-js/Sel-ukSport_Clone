import React from 'react';
import Button from '../Button';
import "./style.css"



const MachesList = ({ Data }) => {

    const ButtonList = Data?.map((e, index) => {
        return <Button key={index} index={index} link={e.url} date={e.date} team1={e.teamA} team2={e.teamB} />
    })

    return (
        <aside className='h-[600px] w-full border-green-300 border-2 rounded-lg flex flex-col gap-2 p-4 overflow-auto'>
            {ButtonList}
        </aside>
    );
}

export default MachesList;
