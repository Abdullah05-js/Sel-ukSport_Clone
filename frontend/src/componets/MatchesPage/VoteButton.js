import React from 'react';
import Image from 'next/image';
import axios from 'axios';
const VoteButton = ({ A, Dir, Vote, setVotes, index, id }) => {
    let VoteDir;
    const handleVote = async (e) => {
        try {
            e.preventDefault()
            if (Dir) {
                VoteDir = {
                    ...Vote,
                    B: Vote.B + 1
                }
            }
            else {
                VoteDir = {
                    ...Vote,
                    A: Vote.A + 1
                }
            }
            setVotes(VoteDir)
            const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}api/Matchs/vote`, {
                select: Dir,
                index,
                id
            })
            if (response.status == 200)
                alert("Vote saved successfully")
            else
                throw new Error("didnt vote")

        } catch (error) {
            if (Dir) {
                VoteDir = {
                    ...Vote,
                    B: Vote.B - 1
                }
            }
            else {
                VoteDir = {
                    ...Vote,
                    A: Vote.A - 1
                }
            }
            setVotes(VoteDir)
            alert("Your Vote didn't save")
            console.log(error);
        }
    }

    return (
        <button
            type='button'
            onClick={handleVote}
            className={`flex overflow-hidden border-teal-200 border-2 items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 sm:max-w-44 sm:w-full max-w-28  whitespace-pre md:flex group relative  justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2 `}
        >
            <span
                class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
            ></span>
            <div class="ml-2 flex items-center justify-center gap-1 text-sm md:flex">
                <Image src={A} width={24} height={24} alt='img' />
                <span
                    class="inline-block tabular-nums tracking-wider font-display font-medium text-white"
                >{(Dir ? Vote.B : Vote.A) > 1000 ? ((Dir ? Vote.B : Vote.A) / 1000).toFixed(1) + "k" : (Dir ? Vote.B : Vote.A)}</span>
            </div>
        </button>
    );
}

export default VoteButton;
