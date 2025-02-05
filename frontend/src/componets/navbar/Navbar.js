import React from 'react';
import logo from "@/Photos/APO.png"
import Image from 'next/image';
import ButtonLinks from './ButtonLinks';
export async function Navbar() {
    // const PathName = usePathname();

    //    console.log(PathName);
    return (
        <header className='p-4 flex sm:flex-row flex-col justify-between items-center gap-6   w-full min-h-16  border-b-2 border-green-300' >

            <div className='flex sm:flex-row flex-col justify-center items-center gap-6'>
                <Image src={logo} className='object-cover rounded-lg' alt="thodex.live" />
            </div>


            <div className='flex sm:flex-row flex-col justify-center items-center gap-6'>




            {/* <a href="https://moy.auraodin.com/redirect.aspx?pid=121792&bid=1644"><img alt="" src="https://moy.auraodin.com/renderimage.aspx?pid=121792&bid=1644"></img></a> */}
            
            
            
            
            
            
            </div>

            <ButtonLinks />


        </header>
    );
}


