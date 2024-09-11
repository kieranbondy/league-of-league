import Image from "next/image";
import Tile from "./components/Tile";
import Logo from "@/assets/Logo.svg"
import AnimatedApplyButton from "./components/Apply";
export default function Home() {
  return (
    <div className="h-screen bg-bg-gray flex flex-col items-center">
      <Image src={Logo} alt="Logo" width={200} height={200}/>
    <div className="flex  justify-center">
      <Tile />
      <Tile />
      <Tile />
    </div>
    <AnimatedApplyButton/>
    </div>
  );
}
