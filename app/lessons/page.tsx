import React from 'react';
import Navigation from "../components/navigation";
import GetOutput from "../components/get_output"
import util from 'node:util';

const exec = util.promisify(require('node:child_process').exec);

const Lessons = () => {
  return (
    <section>
    <center>
      <div className="flex-start">
        
    <div>
      <div className="rounded-md border border-black mx-auto p-10 w-2/3 shadow-xl">
        text?
      <button className="h-auto px-auto m-auto text-white transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Regular</button>
    </div>
    </div>

    <div>
      <button className="h-auto px-auto m-auto text-white transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Regular</button>
    </div>
    <div>
      <button className="">Regular</button>
    </div>
    <div>
      <button className="">Regular</button>
    </div>  
      
      </div>
      test
    </center>
      test 2 no center!
      </section>
  )
}

export default Lessons;
