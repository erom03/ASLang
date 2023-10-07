import React from 'react';
import Navigation from "../components/navigation";
import GetOutput from "../components/get_output"
import util from 'node:util';

const exec = util.promisify(require('node:child_process').exec);

const Lessons = () => {
  return (
    <section>
      <header><Navigation /></header>
            <div>lessons page here</div>
      <GetOutput />
    </section>
  )
}

export default Lessons