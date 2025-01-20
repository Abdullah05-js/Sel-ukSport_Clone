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
                <Image src={logo} className='object-cover rounded-lg' alt="kura.com" />
            </div>


            <div className='flex sm:flex-row flex-col justify-center items-center gap-6'>
           {/* <iframe src="https://giphy.com/embed/2sOsDKE99QbNx8MEfx" width="378" height="480" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/SWTVC-hasbro-tvc-thevintagecollection-2sOsDKE99QbNx8MEfx"></a></p> */}
                <iframe src="https://giphy.com/embed/ymM3xl5pIc7INDJPLv" width="500" height="100" frameBorder="0" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/starwars-star-wars-ahsoka-theres-hope-for-you-yet-FVHeyWtnNnpiNh6U7m"></a></p>
            </div>

            <ButtonLinks />


        </header>
    );
}


