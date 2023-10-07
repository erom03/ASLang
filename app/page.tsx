import Image from 'next/image'
import Navigation from "./components/navigation";

export default function Home() {
  return (
    <section>
      <header><Navigation /></header>
      <main>

      <div className="max-w-4xl mx-auto sm:pt-16">
        <h1 className="text-4xl sm:text-6xl text-gray-700  font-medium mx-auto pb-6 tracking-tighter">
          Your
          <span className="text-yellow-600 "> American Sign Language</span> 
          <span className="block font-medium"> Journey Begins Here</span>
        </h1>
        <div className="text-gray-600  pb-8 max-w-xl mx-auto">
          <p className="mb-4 text-xl text-gray-500 ">Our American Sign Language curriculum is free and open source</p>
        </div>
      </div>

      <Image
      src="/icon.png"
      alt="Image"
      width="0"
      height="0"
      sizes="fit"
      className="w-full h-auto"
      />


      </main>
    </section>
  );
}
