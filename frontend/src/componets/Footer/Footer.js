import React from 'react';
import GradientText from '../GradientText/GradientText';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='w-screen border-t-2 border-green-300 flex flex-col justify-center gap-3 p-5 items-center mt-4'>


            <GradientText
                colors={["#a6ff00", "#4079ff", "#a6ff00", "#4079ff", "#a6ff00"]}
                animationSpeed={3}
                className="text-xl font-bold p-2  text-center"
            >
                POWERED BY THODEX.LİVE
            </GradientText>
            <Link href={"/DMCA"}>
                <GradientText
                    colors={["#a6ff00", "#4079ff", "#a6ff00", "#4079ff", "#a6ff00"]}
                    animationSpeed={3}
                    showBorder={true}
                    className="text-xl font-bold p-2  text-center"
                >
                    DMCA - حقوق الطبع والنشر
                </GradientText>
            </Link>

        </footer>
    );
}

export default Footer;
