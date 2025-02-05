"use client"
import axios from 'axios';
import React from 'react';
import Gol from './Gol';
import { Progress } from '@heroui/react';
import { useState } from 'react';
const Votes = ({ diraction, id, total, value, index, diraction1, value1, name, name1, serverDate }) => {
    const [isClick, setisClick] = useState(false)
    const [isClick1, setisClick1] = useState(false)
    const handleClick = async () => {
        
        if (JSON.parse(localStorage.getItem("votes"))?.includes(index)) {
            alert("try to vote after 12 hours")
            return;
        }
        else if ((new Date()).toISOString().split("T")[0] !== serverDate.split("T")[0]) {
            localStorage.setItem("votes", JSON.stringify([]))
        }
        try {
            const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}api/Matchs/vote`, {
                index,
                id,
                select: diraction
            })
            setisClick((e) => !e)
            setTimeout(() => {
                setisClick((e) => !e)
            }, 1500)
            const votes = JSON.parse(localStorage.getItem("votes")) || [];
            localStorage.setItem("votes", JSON.stringify([...votes, index]));
            location.reload();
        } catch (error) {
            alert("try to vote after 12 hours")
        }
    }


    const handleClick1 = async () => {
        if (JSON.parse(localStorage.getItem("votes"))?.includes(index)) {
            alert("try to vote after 12 hours")
            return;
        }
        else if ((new Date()).toISOString().split("T")[0] !== serverDate.split("T")[0]) {
            localStorage.setItem("votes", JSON.stringify([]))
        }
        try {
            const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}api/Matchs/vote`, {
                index,
                id,
                select: diraction1
            })
            setisClick1((e) => !e)
            setTimeout(() => {
                setisClick1((e) => !e)
            }, 1500)
            const votes = JSON.parse(localStorage.getItem("votes")) || [];
            localStorage.setItem("votes", JSON.stringify([...votes, index]));
            location.reload();
        } catch (error) {
            alert("try to vote after 12 hours")
        }
    }

    return (
        <div className='flex flex-row justify-between gap-4 items-center p-2'>

            <div onClick={handleClick} className='flex justify-center flex-col items-start cursor-pointer '>
                {isClick && <Gol vote={"Gooool...."} />}
                <Gol vote={value} />
                <Progress
                    className={`sm:w-96 w-36  ${diraction ? "" : 'rotate-180'}`}
                    color={diraction ? "success" : 'warning'}
                    radius="md"
                    size="lg"
                    maxValue={total}
                    value={value}
                />
            </div>

            <div onClick={handleClick1} className='flex flex-col justify-center items-end cursor-pointer '>
                {isClick1 && <Gol vote={"Gooool...."} />}
                <Gol vote={value1} />
                <Progress
                    className={`sm:w-96 w-36 ${diraction1 ? "" : 'rotate-180'}`}
                    color={diraction1 ? "success" : 'warning'}
                    radius="md"
                    size="lg"
                    maxValue={total}
                    value={value1}
                />
            </div>
        </div>
    );

}

export default Votes;
