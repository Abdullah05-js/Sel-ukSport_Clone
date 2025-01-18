import Link from 'next/link';
import React from 'react';
import logo from "@/Photos/APO.png"
import Image from 'next/image';
export function Navbar (){
    return (
        <header className='p-4 flex sm:flex-row flex-col justify-between items-center gap-6   w-full min-h-16  border-b-2 border-green-300' >
            
        <div className='flex sm:flex-row flex-col justify-center items-center gap-6'>
        <Image src={logo} className='object-cover' alt="kura.com" />
        </div>


        <div className='flex sm:flex-row flex-col justify-center items-center gap-6'>

        <iframe
                  
                  src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTBnbXpiejZsMTRhd2xnaTUxMTcwcnZ6NzU4bjhzMjVib3E4cWd0dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/10hO3rDNqqg2Xe/giphy.gif"
                height={100}
                width={500}
                  frameBorder="0"
                  allowFullScreen
              ></iframe>
            
          
        </div>

        <div>
            <Link href="mailto:akcamaluminyum@gmail.com" className='text-green-300 animate-pulse text-xl font-bold border-2 border-green-300 p-3 rounded-lg'>Ads & Contact & شراء وكيل</Link>
        </div>
        
        
        </header>
    );
}


