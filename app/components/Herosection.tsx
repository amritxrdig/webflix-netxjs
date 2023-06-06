import Link from "next/link";
import Image from "next/image";

export interface HerosectionProps {
  title: string;
  imageUrl: string;
  description: string;
}

function Herosection({ title, imageUrl, description }: HerosectionProps) {
  return (
    // <main className="bg-black flex justify-center items-center min-h-screen sm:h-auto w-full md:w-1/2">
    <main className="bg-black flex justify-center items-center min-h-screen">
      <div className="text-white text-left p-4 w-1/2">
        <h1 className="text-4xl font-bold leading-tight mb-6">{title}</h1>
        <p className="text-lg leading-relaxed pb-10">{description}</p>
        <Link
          href="/movie"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full py-2 px-4 mt-4"
        >
          Explore Movies
        </Link>
      </div>
      <div className="w-1/2">
        <Image src={imageUrl} alt="Home Image" width={500} height={20} />
      </div>
    </main>
  );
}

export default Herosection;
