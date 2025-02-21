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
    <div onClick={handleClick} variant='underliend' className='border-b-2 cursor-pointer border-green-300  w-full'>

      <div className='font-extrabold flex flex-row gap-2 justify-center items-center'>

        <p >{team1.toUpperCase()}</p>

        <p >{team2.toUpperCase()}</p>

      </div>

      <GradientText
          colors={["#f8fafc", "#4079ff", "#86efac", "#4079ff", "#5eead4"]}
          animationSpeed={6}
        >
          <p className='text-xl text-center uppercase'>{date}</p>
        </GradientText>
    </div>

  );
}

export default Button;
