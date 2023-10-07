import Image from 'next/image'
import * as React from 'react'
import Navigation from "./components/navigation";

export default function Home() {
  return (
    <section>
      <main>
        <div className="max-w-4xl mx-auto sm:pt-16 text-center">
          <h1 className="text-4xl sm:text-6xl font-medium mx-auto pb-6 tracking-tighter">
            Your
            <span className="text-yellow-600"> American Sign Language</span>
            <span className="block font-medium"> Journey Begins Here</span>
          </h1>
          <p className="mb-4 text-xl">Our curriculum is free and open source</p>
          <div className="pb-8 max-w-xl mx-auto">
            {/* Change the button text and outline color to yellow using sx prop 
            unfortunately cant figure out how to change the hover color to yellow 
            need to change the hex value for yellow to be precisely the one of the lion */}
            <button className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100">Outline</button>
          </div>
        </div>

        <Image
          src="/Images/logoBW.png"
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
