"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import VoteButton from './VoteButton';
const MatchCard = ({ Matche, index,A,B,id}) => {
    const [Votes,setVotes] = useState({
        A,
        B
    })
    return (
        <>

            <div className="flex flex-row justify-around items-center p-5 border-b-2 border-teal-200 w-full flex-1">
                <h1 className="sm:text-2xl sm:font-extrabold text-xl font-bold text-left flex-1">
                    {Matche.ChampionshipName || "غير معروف"}
                </h1>

                <h1 className="sm:text-2xl font-extrabold text-xl  text-center ">
                    {new Date(Number(Matche.Date.split("Date(")[1].split(")")[0])).toLocaleTimeString("ar",{
                        day:"numeric"
                    }).split(" ").slice(1,3)}
                </h1>

                <h1 className="sm:text-2xl sm:font-extrabold text-xl font-bold text-right flex-1">
                    {Matche.StadiumName || "غير معروف"}
                </h1>
            </div>

            <div className="flex flex-row justify-around w-full items-center p-5 gap-3">
                <div className="flex flex-row justify-start items-center  gap-2 flex-1">
                    <Image src={"https:" + Matche.HomeTeamLogoUrl} width={60} height={60} alt={Matche.HomeTeamName} />
                    <h1 className="text-xl font-extrabold">{Matche.HomeTeamName}</h1>
                </div>
                <div className="flex sm:flex-row flex-col gap-2 justify-between items-center">
                    <VoteButton A={"https:" + Matche.HomeTeamLogoUrl} Dir={false} Vote={Votes} setVotes={setVotes} index={index} id={id}/>
                    <VoteButton A={"https:" + Matche.AwayTeamLogoUrl} Dir={true} Vote={Votes} setVotes={setVotes} index={index} id={id}/>
                </div>
                <div className="flex flex-row justify-end items-center gap-2 flex-1">
                    <h1 className="text-xl font-extrabold"> {Matche.AwayTeamName}</h1>
                    <Image src={"https:" + Matche.AwayTeamLogoUrl} width={60} height={60} alt={Matche.AwayTeamName} />
                </div>
            </div>

            <div className="flex flex-row justify-around items-center p-3 border-t-1 border-teal-200 w-full flex-1">
                {
                    <h1 className="sm:text-2xl sm:font-extrabold text-xl font-bold text-left flex-1" key={Math.random()}>{Matche.TvCoverage.length == 0 ? "غير معروف" : Matche.TvCoverage[0]?.TvChannelName}</h1>
                }
                {
                    <h1 className="sm:text-2xl font-extrabold text-xl  text-center sm:block hidden" key={Math.random()}>{Matche.WeekOrRound || "غير معروف"}</h1>
                }
                {
                    <h1 className="sm:text-2xl sm:font-extrabold text-xl font-bold text-right flex-1" key={Math.random()}>{Matche.TvCoverage.length == 0 ? "المعلق غير معروف" : Matche.TvCoverage[0]?.CommenterName || "المعلق غير معروف"}</h1>
                }
            </div>
        </>
    );
}

export default MatchCard;
