import React from 'react';
import GetOutput from "../components/get_output"
import util from 'node:util';
import Webcam from "react-webcam";


const exec = util.promisify(require('node:child_process').exec);

const Webcam_Test = () => {
  return (
    <Webcam></Webcam>
    <section>
      <div></div>
      <GetOutput />
    </section>
  )
}

export default Webcam_Test;
