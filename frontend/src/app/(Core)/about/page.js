import Image from "next/image";
import logo from "@/Photos/APO.png"
import GradientText from "@/componets/GradientText/GradientText";
import realmadrid from "@/Photos/realmadrid.png"
import barcolona from "@/Photos/barcelona.png"
export default async function Page() {



    return (
        <div className="h-screen w-screen overflow-x-hidden flex flex-col justify-start p-3 items-center gap-2">
            <div className="flex sm:flex-row flex-col justify-center items-center gap-6">
                <Image src={logo} className='object-cover rounded-lg' alt="thodex.live" />
                <GradientText
                    colors={[`#4079ff`, `#5eead4`, `#A3efac`, "#4079ff", "#5eead4"]}
                    animationSpeed={6}
                    showBorder={false}
                    className="text-2xl font-extrabold p-2"
                >
                    <p className="text-6xl font-bold flex flex-col justify-center items-center ">X</p>
                </GradientText>
                <Image src={"https://1xbet.com/genfiles/cms/pg/70/images/09ef1ad2e0b8613684c2d1cd91f4d3a6.svg"} height={200} width={200} />
            </div>

            <div className="flex sm:flex-row flex-col gap-2 border-t-2 border-green-300 p-2">
                <div dir="rtl" style={{ textAlign: "right", fontFamily: "Arial, sans-serif" }}>
                <iframe scrolling='no' frameBorder='0' className='p-0 m-0 border-0' width='285' height='190' src="https://refbanners.com/I?tag=d_4088877m_8421c_&site=4088877&ad=8421" ></iframe>
                    <h2 className="font-bold text-2xl">🏆💰 كيف يعمل نظام الرهانات في 1xbet؟</h2>
                    <p className="font-bold text-2xl">**مثال عملي:**</p>
                    <p className="font-bold text-2xl">لنفترض أن مباراة بين <br/> <b>ريال مدريد <Image src={realmadrid} width={36} height={36} /></b> و <Image src={barcolona} width={36} height={36} /><b>برشلونة </b>، والاحتمالات كالتالي:</p>
                    <ul>
                        <li className="font-bold text-2xl">🏅 <b>فوز ريال مدريد:</b> <b>5x</b></li>
                        <li className="font-bold text-2xl">⚖️ <b>التعادل:</b> <b>3x</b></li>
                        <li className="font-bold text-2xl">🔥 <b>فوز برشلونة:</b> <b>2x</b></li>
                    </ul>
                    <p className="font-bold text-2xl">🔹 <b>إذا راهنت بـ 100$ على فوز ريال مدريد (5x):</b> ✅ إذا فاز ريال مدريد، تربح: <b>100 × 5 = 500$</b> 🎉</p>
                    <p className="font-bold text-2xl">🔹 <b>إذا راهنت بـ 100$ على التعادل (3x):</b> ✅ إذا انتهت المباراة بالتعادل، تربح: <b>100 × 3 = 300$</b></p>
                    <p className="font-bold text-2xl">🔹 <b>إذا راهنت بـ 100$ على فوز برشلونة (2x):</b> ✅ إذا فاز برشلونة، تربح: <b>100 × 2 = 200$</b></p>
                    {/* <p className="font-bold text-2xl">⚠️ لكن إذا لم يتحقق توقعك، تخسر المبلغ الذي راهنت به.</p> */}
                    <p className="font-bold text-2xl">🔥⚽ الآن أنت تعرف كيف تعمل الاحتمالات في المراهنات!</p>
                </div>
            </div>


            <a href={"https://refpa4219945.top/L?tag=d_4088877m_1599c_&site=4088877&ad=1599"} target="_blank"  className='text-xl font-bold text-green-400 border-3 border-green-400 rounded-xl p-2' >جرب الان</a>

        </div>

    );
}


