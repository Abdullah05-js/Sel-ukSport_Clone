import React from 'react';
import Button from '../Button';
import "./style.css"
const MachesList = ({Data}) => {

    const ButtonList = Data?.map((e,index) => {
        return <Button key={index} link={e.link} date={e.date} team1={e.team1} team2={e.team2} />
    })

    return (
        <aside className='h-[400px] border-green-300 border-2 rounded-lg flex flex-col gap-2 p-4 overflow-auto'>
            {ButtonList}
        </aside>
    );
}

export default MachesList;
