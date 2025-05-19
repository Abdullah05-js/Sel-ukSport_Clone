import { Spinner } from "@heroui/spinner";
import GradientText from "../GradientText/GradientText";
import MatchCard from "./MatchCard";
import { Suspense } from "react";
import Link from "next/link";
export async function TodayList() {
    let Data = []
    let id;
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/Matchs/get`);
        let data = await response.json();
        Data = data.Matches
        id = data._id
    } catch (error) {
        Data = []
        id = 0
    }

    return (
        <section className=" flex flex-col justify-center items-center p-2  w-screen gap-2 sm:w-4/5">
            <article key={"main"} className="flex flex-row justify-center items-center">
                <GradientText
                    colors={["#f8fafc", "#4079ff", "#86efac", "#4079ff", "#5eead4"]}
                    animationSpeed={6}
                    showBorder={false}
                    className="text-2xl font-extrabold p-2  text-center"
                >
                    {
                        new Date().toLocaleString().split(" ")[0]
                    }
                    {new Date().toLocaleString('ar-SA', {
                        weekday: 'long',
                    })
                    }
                </GradientText>


            </article>

            {Data?.length === 0 ? "No matches Found" : (
                Data.map((Match, index) => {
                    return <Link href={`/Watch/${id}`} key={index} className="flex flex-col justify-center sm:w-8/12 w-full items-center sm:min-h-60  min-h-72  border-2 rounded-xl border-sky-200">
                        <Suspense fallback={<Spinner size="md" color="success" />}>
                            <MatchCard Match={Match} index={index} A={Match.voteA} B={Match.voteB} id={id} />
                        </Suspense>
                    </Link>
                })
            )}
        </section>
    );
}


