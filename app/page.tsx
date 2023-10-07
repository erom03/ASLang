import Image from 'next/image'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
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
          <div className="pb-8 max-w-xl mx-auto">
            <p className="mb-4 text-xl">Our curriculum is free and open source</p>

            {/* Change the button text and outline color to yellow using sx prop 
            unfortunately cant figure out how to change the hover color to yellow 
            need to change the hex value for yellow to be precisely the one of the lion */}
            <Button variant="outlined" color="primary" href="lessons" sx={{ color: '#FFD600', borderColor: '#FFD600', padding: '10px 20px'  }}>
              View Our Courses
            </Button>
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
