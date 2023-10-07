import Image from 'next/image'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Navigation from "./components/navigation";
import { createTheme } from '@mui/material/styles';


export default function Home() {
  return (
    <section>
      <header><Navigation /></header>
      <main>
      



      <div className="max-w-4xl mx-auto sm:pt-16">
        <h1 className="text-4xl sm:text-6xl font-medium mx-auto pb-6 tracking-tighter">
          Your
          <span className="text-yellow-600 "> American Sign Language</span> 
          <span className="block font-medium"> Journey Begins Here</span>
        </h1>
        <div className="  pb-8 max-w-xl mx-auto">
          <p className="mb-4 text-xl ">Our American Sign Language curriculum is free and open source</p>
<Button variant="outlined" color="error" href="lessons"> View Our Courses </Button>
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
