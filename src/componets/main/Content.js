import React, { Suspense } from 'react';
import MachesList from './MachesList';
import Video from './Video';



const Content = ({ param }) => {

    const Data = [
        {
            team1: "real mad5555irid",
            team2: "barcolan",
            date: "10:00-SA",
            link: "https://due.b809cf1861b7c7b2.click/ar/player.html?byaayxyyda#poster=https%3A%2F%2Fblogger.googleusercontent.com%2Fimg%2Fb%2FR29vZ2xl%2FAVvXsEj8CEtL3mwmCMomVlu7nEuxd4mSjxav1nUQXt8gfLyFFho-ZsnqKx9gF8-rtf9r1lXctp0vUESwjR9BwBAhfKUl0QNN3Ip3FRUP6oarn2eP64MW_NcF1_vsPWqkYFpTu6TeQHw8dglnEOXbIYurZKZuY8dTwDFkik707MOKVTdhooPYDzPpvkGbCjeRJjO4%2Fs16000%2Fcrtswp-s-min.png&reklamResim=https%3A%2F%2Fblogger.googleusercontent.com%2Fimg%2Fb%2FR29vZ2xl%2FAVvXsEh4aAioTaLgNi0hZqjfBTrtvMpGgO9lKvPL9nzWbPkwKQBj8J5TH5BzFPwD22XroM9AmJwWmZ_MvOV2MfGF5nZ7TvmydGBlhZ6UjU64syprVpNX8o13C0ZrdmsleP6oIgWTvJZW6mhhRPo_sH_K4Gn9gkoIKyxTg_iV3H22PmY3ZAc1D5JCql46yzfDftp7%2Fs16000%2Fpshg-min-min.gif&reklamGidis=https%3A%2F%2Fcutt.ly%2Fselcuksportspsh"
        },
        {
            team1: "r4 madirid",
            team2: "barcolan",
            date: "10:00-SA",
            link: "https://blogadsformoneykura.blogspot.com/2025/01/document_40.html"
        },
        {
            team1: "real madirid",
            team2: "barcolan",
            date: "10:00-SA",
            link: "https://blogadsformoneykura.blogspot.com/2025/01/document_40.html"
        },
        {
            team1: "r3l mad555irid",
            team2: "barcolan",
            date: "10:00-SA",
            link: "https://blogadsformoneykura.blogspot.com/2025/01/document_40.html"
        },
        {
            team1: "real madirid",
            team2: "barcolan",
            date: "10:00-SA",
            link: "https://blogadsformoneykura.blogspot.com/2025/01/document_40.html"
        },
        {
            team1: "real madirid",
            team2: "barcolan",
            date: "10:00-SA",
            link: "https://blogadsformoneykura.blogspot.com/2025/01/document_40.html"
        },
        {
            team1: "real madirid",
            team2: "barcolan",
            date: "10:00-SA",
            link: "https://blogadsformoneykura.blogspot.com/2025/01/document_40.html"
        },
        {
            team1: "real madirid",
            team2: "barcolan",
            date: "10:00-SA",
            link: "https://blogadsformoneykura.blogspot.com/2025/01/document_40.html"
        },
        {
            team1: "real madirid",
            team2: "barcolan",
            date: "10:00-SA",
            link: "https://blogadsformoneykura.blogspot.com/2025/01/document_40.html"
        },
        {
            team1: "real madirid",
            team2: "barcolan",
            date: "10:00-SA",
            link: "https://blogadsformoneykura.blogspot.com/2025/01/document_40.html"
        }, {
            team1: "real madirid",
            team2: "barcolan",
            date: "10:00-SA",
            link: "https://blogadsformoneykura.blogspot.com/2025/01/document_40.html"
        },
        {
            team1: "real madirid",
            team2: "barcolan",
            date: "10:00-SA",
            link: "https://blogadsformoneykura.blogspot.com/2025/01/document_40.html"
        }
    ]

    console.log(param === undefined ? Data[0].link : Data[param - 1].link);
    console.log();


    return (
        <div className="flex sm:flex-row flex-col items-center gap-1 p-2 w-full sm:h-screen">

            <aside className="flex flex-col justify-center  gap-1 sm:w-[380px] w-full">
                <iframe

                    src="https://giphy.com/embed/DqILdGsqAUkms"
                    width="380"
                    height="140"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
                <Suspense fallback={<div className="text-white">loaidng</div>}>
                    <MachesList Data={Data} />
                </Suspense>

            </aside>


            <section className="flex flex-col justify-center items-center gap-6 flex-1 h-full">
                <Suspense fallback={<div className="text-white">loaidng</div>}>
                    <Video link={param === undefined ? Data[0].link : Data[param - 1].link} />
                </Suspense>
                <h1 className="font-extrabold flex flex-row gap-4 justify-center items-center w-full">
                    <span className="font-bold text-xl">
                        {`${param === undefined ? 0 : Data[param - 1]?.team1} VS ${param === undefined ? 0 : Data[param - 1]?.team2}`}
                    </span>
                    <span className="font-bold  text-white text-xl shadow-md bg-red-600 shadow-red-700 animate-pulse rounded-2xl p-3">
                        LİVE
                    </span>
                </h1>
            </section>
        </div>

    );
}

export default Content;
