"use client"
import GradientText from './GradientText/GradientText';
import Link from 'next/link';
import { Button as ButtonH } from '@heroui/button';
import { useRouter } from 'next/navigation';
const Button = ({ link, team1, team2, date, index }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/Watch/${index + 1}`);
  }

  return (
    <div onClick={handleClick} variant='underliend' className='border-b-2 cursor-pointer border-green-300  '>

      <div className='font-extrabold flex flex-row gap-2 justify-between items-center '>

        <p className='flex-1 text-start'>{team1.toUpperCase()}</p>

        <GradientText
          colors={["#f8fafc", "#4079ff", "#86efac", "#4079ff", "#5eead4"]}
          animationSpeed={6}
        >
          <span className='text-2xl font-extrabold'>VS</span>
        </GradientText>


        <p className='flex-1 text-end'>{team2.toUpperCase()}</p>

      </div>

      <p className='text-xl text-center'>{date}</p>
    </div>

  );
}

export default Button;
