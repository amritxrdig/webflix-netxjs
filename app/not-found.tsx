import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="py-12 mx-auto max-w-7xl text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl text-gray-500 mb-6">Oops! Page not found.</p>
        <div className="flex justify-center">
          <Image
            src="/404.png"
            alt="Sad Face"
            className="h-42 mb-8"
            width={200}
            height={150}
          />
        </div>
        <p className="text-xl text-gray-500 mb-6">
          The page you are looking for might have been moved or deleted. Please
          try searching for it again.
        </p>
        <Link href="/">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full py-2 px-4 mt-4">
            Go to homepage
          </button>
        </Link>
      </div>
    </div>
  );
}
