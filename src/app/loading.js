import React from 'react';
import { Spinner } from '@heroui/react';
import GradientText from '@/componets/GradientText/GradientText';
const Loading = () => {
    return (
        <div className='flex flex-col items-center justify-center w-screen min-h-screen overflow-auto gap-4'>

                      <GradientText
                        colors={["#f8fafc", "#fde68a", "#40ffaa", "#f8fafc", "#fde68a"]}
                        animationSpeed={2}
                        className="text-xl font-bold p-2  text-center"
                      >
                        <h1 className="text-2xl">Powered By THODEX.live</h1>
                      </GradientText>
                      <Spinner color="success" size='lg' label="Loading..." labelColor="success" />
        </div>
    );
}

export default Loading;
