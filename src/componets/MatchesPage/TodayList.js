import GradientText from "../GradientText/GradientText";
import Link from "next/link";
import Image from "next/image";
export async function TodayList() {
    // await new Promise((resolve) => setTimeout(resolve, 15000));
    const response = await fetch("http://localhost:5000/api/Matchs");
    const data = await response.json();

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

            {data.liveScores.map((liveScore, index) => (
                <article key={Math.random()} className="mb-4">
                 
                    <GradientText
                        colors={[`#f8fa${index}${index}`, `#4079${index}${index}`, `#${index}${index}efac`, "#4079ff", "#5eead4"]}
                        animationSpeed={6}
                        showBorder={false}
                        className="text-2xl font-extrabold p-2"
                    >
                        {liveScore.matches[0].round.name}
                    </GradientText>

                    {liveScore.matches.map((match) => (
                        <Link href={"/Watch/1"}>
                            <article key={Math.random()} className="p-4 border-b border-green-400">
                                <div className="flex sm:flex-row flex-col flex-wrap justify-between items-center sm:gap-2">
                                    <div className='flex flex-row gap-2 justify-start items-center flex-1'>
                                        <img
                                            className="w-15 h-15"
                                            src={`https://www.goal.com${match.teamA.image.url}`}
                                            alt={match.teamA.name}
                                        />
                                        <p className="text-2xl font-extrabold">{match.teamA.name}</p>
                                    </div>
                                    <span className='text-2xl font-extrabold'>vs</span>
                                    <br className='hidden sm:block' />
                                    <div className='flex flex-row gap-2 justify-end items-center flex-1'>
                                        <p className="text-2xl font-extrabold">{match.teamB.name}</p>
                                        <img
                                            className="w-15 h-15"
                                            src={`https://www.goal.com${match.teamB.image.url}`}
                                            alt={match.teamB.name}
                                        />
                                    </div>
                                </div>
                                <p className='flex flex-col justify-center items-center text-xl font-extrabold'>{match.venue.name}-{new Date(match.startDate).toLocaleString("en-SA", {
                                    timeZone: "Asia/Riyadh",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    hour12: true,
                                }).replace("AM", "ص").replace("PM", "م")}</p>
                            </article>
                        </Link>
                    ))}
                </article>
            ))}
        </section>
    );
}


