import React from 'react';
import MachesList from './MachesList';
import Video from './Video';

const Content = () => {

    const Data = [
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
                <MachesList Data={Data} />
              
            </aside>


            <section className="flex flex-col justify-center items-center gap-6 flex-1 h-full">
                <Video link={Data[0].link} />
                <h1 className="font-extrabold flex flex-row gap-4 justify-center items-center w-full">
                    <span className="font-bold text-xl">
                        {`${Data[0].team1} VS ${Data[0].team2}`}
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
