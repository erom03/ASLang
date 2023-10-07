import React from 'react';
import Navigation from "../components/navigation";
import util from 'node:util';

const exec = util.promisify(require('node:child_process').exec);

const page = () => {
  return (
    <section>
    <header><Navigation /></header>
    <div>lessons page here</div>
    <div>{/*getOutput()*/}</div>
    </section>
  )
}

async function getOutput() {
  let programOutput = "";

  const { stdout } = await exec('/test.bat');

  if(stdout) {
    for await (const data of stdout) {
      programOutput += data;
    }
  }

  return programOutput;
}

export default page