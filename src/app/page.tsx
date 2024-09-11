import Image from "next/image";
import Carousal from "./_components/Carousal";
import Category from "./_components/Category";
import Featured from "./_components/Featured";

export default function Home() {
  return (
   <div className="container max-auto">
        <Carousal/>
        <Category/>
        <Featured/>
       
   </div>
  );
}
