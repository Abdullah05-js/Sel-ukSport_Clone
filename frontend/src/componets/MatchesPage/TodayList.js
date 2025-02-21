import GradientText from "../GradientText/GradientText";
import Link from "next/link";
import Votes from "./Votes";
import Image from "next/image";
export async function TodayList() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/Matchs/get`);
    let data = await response.json();
    
    return (
        <section className=" flex flex-col p-2 h-screen sm:w-4/5">
            <article key={"main"} className="flex flex-row justify-center items-center">
                <GradientText
                    colors={["#f8fafc", "#4079ff", "#86efac", "#4079ff", "#5eead4"]}
                    animationSpeed={6}
                    showBorder={false}
                    className="text-2xl font-extrabold p-2  text-center"
                >
                    {new Date(data.serverDate).toLocaleString('ar-SA', {
                        weekday: 'long',
                    })
                    }
                    ,
                    {
                        new Date(data.serverDate).toLocaleString().split(",")[0]
                    }
                </GradientText>


            </article>

            {data.liveScores.map((liveScore, index) => {
                let index1 = index
                return (
                    <article key={Math.random()} className="mb-4">

                        <GradientText
                            colors={[`#f8fa${index}${index}`, `#4079${index}${index}`, `#${index}${index}efac`, "#4079ff", "#5eead4"]}
                            animationSpeed={6}
                            showBorder={false}
                            className="text-2xl font-extrabold p-2"
                        >
                            {liveScore.competition.name}
                        </GradientText>

                        {liveScore.matches.map((match, index) => (
                            // <Link href={"/Watch/1"}>
                            <article key={Math.random()} className="p-4 border-b border-green-400">
                                <p className='flex flex-col justify-center items-center text-xl font-extrabold'>{match.venue?.name} - {new Date(match.startDate).toLocaleString("en-SA", {
                                    timeZone: "Asia/Riyadh",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    hour12: true,
                                }).replace("AM", "ص").replace("PM", "م")}</p>
                                <div className="flex sm:flex-row flex-col flex-wrap justify-between items-center sm:gap-2">
                                    <div className='flex flex-col gap-1 justify-center items-start flex-1'>
                                        <Link href={"/Watch/1"}>
                                            <div className="flex flex-row gap-2 justify-start items-center ">
                                                <Image
                                                    height={70}
                                                    width={70}
                                                    src={`https://www.goal.com${match.teamA.image.url}`}
                                                    alt={match.teamA.name}
                                                />
                                                <p className="text-2xl font-extrabold text-green-500">{match.teamA.name}</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <span className='text-2xl font-extrabold text-center'>vs <br /> {match.teamA.full + match.teamB.full} مجموع الأصوات</span>
                                    <br className='hidden sm:block' />

                                    <div className='flex flex-col gap-1 justify-center items-end flex-1'>
                                        <Link href={"/Watch/1"}>
                                            <div className="flex flex-row gap-2 justify-start items-center ">
                                                <p className="text-2xl font-extrabold text-[#F5A524]">{match.teamB.name} </p>
                                                <Image
                                                    height={70}
                                                    width={70}
                                                    src={`https://www.goal.com${match.teamB.image.url}`}
                                                    alt={match.teamB.name}
                                                />
                                            </div>
                                        </Link>
                                    </div>

                                </div>
                                <Votes serverDate={data.serverDate} diraction={true} diraction1={false} id={data._id}  index={index1+"-"+index}  total={match.teamA.full + match.teamB.full}  value={match.teamA.full} value1={match.teamB.full} />
                            </article>

                        ))}
                    </article>
                )
            })}
        </section>
    );
}


