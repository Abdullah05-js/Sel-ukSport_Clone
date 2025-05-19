"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import VoteButton from './VoteButton';
const MatchCard = ({ Match, index, A, B, id }) => {
    const [Votes, setVotes] = useState({
        A,
        B
    })

    return (
        <>

            <div className="flex flex-row justify-around items-center p-5 border-b-2 border-teal-200 w-full flex-1">
                <h1 className="sm:text-2xl sm:font-extrabold text-xl font-bold text-left flex-1">
                    {Match?.competition_name || "غير معروف"}
                </h1>

                <h1 className="sm:text-2xl font-extrabold text-xl  text-center ">
                    {new Date(Match.StartTime).toLocaleTimeString("ar", {
                        day: "numeric"
                    }).split(" ").slice(1, 3)}
                </h1>

                <h1 className="sm:text-2xl sm:font-extrabold text-xl font-bold text-right flex-1">
                    {Match?.stadium || "غير معروف"}
                </h1>
            </div>

            <div className="flex flex-row justify-around w-full items-center p-5 gap-3">
                <div className="flex flex-row justify-start items-center  gap-2 flex-1">
                    <Image src={"https:" + Match.teamA_logo} width={60} height={60} alt={Match.teamA} />
                    <h1 className="text-xl font-extrabold">{Match.teamA}</h1>
                </div>
                <div className="flex sm:flex-row flex-col gap-2 justify-between items-center">
                    <VoteButton A={"https:" + Match.teamA_logo} Dir={false} Vote={Votes} setVotes={setVotes} index={index} id={id} />
                    <VoteButton A={"https:" + Match.teamB_logo} Dir={true} Vote={Votes} setVotes={setVotes} index={index} id={id} />
                </div>
                <div className="flex flex-row justify-end items-center gap-2 flex-1">
                    <h1 className="text-xl font-extrabold"> {Match.teamB}</h1>
                    <Image src={"https:" + Match.teamB_logo} width={60} height={60} alt={Match.teamB} />
                </div>
            </div>

            <div className="flex flex-row justify-around items-center p-3 border-t-1 border-teal-200 w-full flex-1">
                {
                    <h1 className="sm:text-2xl sm:font-extrabold text-xl font-bold text-left flex-1" key={Math.random()}>{Match.channel.length == 0 ? "غير معروف" : Match.channel}</h1>
                }
                {
                    <h1 className="sm:text-2xl font-extrabold text-xl  text-center sm:block hidden" key={Math.random()}>{Match.week || "غير معروف"}</h1>
                }
              
            </div>
        </>
    );
}

export default MatchCard;
