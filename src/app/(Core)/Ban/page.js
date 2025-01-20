import GradientText from "@/componets/GradientText/GradientText";
import logo from "@/Photos/APO.png"
import Image from "next/image";
export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center  min-h-screen overflow-auto gap-5">
              <GradientText
                colors={["#f8fafc", "#fde68a", "#40ffaa", "#f8fafc", "#fde68a"]}
                animationSpeed={2}
                className="text-xl font-bold p-2  text-center"
              >
                <h1 className="text-2xl">Powered By THODEX.live</h1>
              </GradientText>
              <GradientText
                      colors={["#f8fafc", "#fde68a", "#40ffaa", "#f8fafc", "#fde68a"]}
                      animationSpeed={3}
                      showBorder={true}
                      className="text-xl font-bold p-2  text-center"
                    >
                      <Image src={logo} className='object-cover rounded-lg' alt="kura.com" />
                    </GradientText>
        <h1 className="font-extrabold text-2xl">YOUR <span className="text-red-600">Banned</span> Get Out Here Gezeer.</h1>
        <GradientText
                colors={["#f8fafc", "#fde68a", "#40ffaa", "#f8fafc", "#fde68a"]}
                animationSpeed={2}
                className="text-xl font-bold p-2  text-center"
              >
                <h1 className="text-2xl">Contact us kurasporthd@gmail.com</h1>
              </GradientText>
        <p className="text-7xl animate-pulse text-center">&#128540;</p>
    </div>
  );
}
