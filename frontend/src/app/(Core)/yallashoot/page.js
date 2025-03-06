import { Button } from '@heroui/button';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ad1 from "@/Photos/200x200__THODEXLIVE_arabic.png"
import ad2 from "@/Photos/200x200_1x_THODEXLIVE_AR.gif"
import ad3 from "@/Photos/APO_Big.png"
export default function Home() {
    return (
        <>
            <Head>
                <title>يلا شوت بلس - يلا كورة - Yalla Live - Yalla Shoot SX - بث مباشر</title>
                <meta name="description" content="مشاهدة مباريات اليوم بث مباشر عبر يلا شوت بلس و يلا كورة و Yalla Live و Yalla Shoot SX بجودة عالية بدون تقطيع." />
                <meta name="keywords" content="يلا شوت بلس, يلا كورة, Yalla Live, Yalla Shoot SX, بث مباشر, يلا شوت تركيا" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="يلا شوت بلس - يلا كورة - Yalla Live - Yalla Shoot SX - بث مباشر" />
                <meta property="og:description" content="مشاهدة مباريات اليوم بث مباشر عبر يلا شوت بلس و يلا كورة و Yalla Live و Yalla Shoot SX بجودة عالية بدون تقطيع." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://thodex.live" />
                <meta property="og:image" content="https://thodex.live/opengraph-image.png" />
            </Head>
            <main className='w-full  flex flex-col gap-3 justify-start items-center'>
            <Image alt='img' src={ad3} width={600} height={300} className='rounded-xl p-2' />
                <h1 className='text-3xl font-extrabold'>يلا شوت بلس - بث مباشر لمباريات اليوم</h1>
                <p className='text-2xl font-extrabold'>
                    شاهد أهم المباريات بث مباشر عبر يلا شوت بلس و يلا كورة و Yalla Live و Yalla Shoot SX بدون تقطيع بجودة عالية.
                </p>
                <section className='p-4 flex flex-col gap-3'>
                    <article>
                        <Link href={"/Watch/1"}>
                            <Button color='success' variant="shadow" className='text-2xl font-extrabold'>لمشاهدة البث المباشر - Bein sport 1</Button>
                        </Link>
                    </article>
                    <article>
                        <Link href={"/Watch/2"}>
                            <Button color='success' variant="shadow" className='text-2xl font-extrabold'>لمشاهدة البث المباشر - Bein sport 2</Button>
                        </Link>
                    </article>
                    <article>
                        <Link href={"/Watch/3"}>
                            <Button color='success' variant="shadow" className='text-2xl font-extrabold'>لمشاهدة البث المباشر - Bein sport 3</Button>
                        </Link>
                    </article>
                </section>

                <div className='flex sm:flex-row flex-col gap-1'>
                    <a href="https://refpa.top/L?tag=d_4088877m_1599c_&site=4088877&ad=1599&r=registration">
                        <Image width={300} height={300} className='rounded-xl' src={ad1} alt='THODEX.LİVE ad' />
                    </a>
                    <a href="https://refpa.top/L?tag=d_4088877m_1599c_&site=4088877&ad=1599&r=registration">
                        <Image width={300} height={300} className='rounded-xl' src={ad2} alt='THODEX.LİVE ad' />
                    </a>
                </div>


                <p>
                    يلا شوت بلس
                    يلا كورة
                    Yalla live
                    Yalla shoot sx
                    بث مباشر

                </p>
            </main>
        </>
    );
}