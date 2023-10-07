import React from 'react';
import Navigation from "../components/navigation";
import util from 'node:util';

const exec = util.promisify(require('node:child_process').exec);

const Login = () => {
  return (
    <section>
    <header><Navigation /></header>
    <div>login page goes here</div>
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

export default Login