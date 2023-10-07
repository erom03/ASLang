import React from 'react';
import Navigation from "../components/navigation";
import { exec } from "child_process"

const page = () => {
  return (
    <section>
    <header><Navigation /></header>
    <div>lessons page here</div>
    <GetOutput />
    </section>
  )
}

const GetOutput = async () => {
  let programOutput = "";

  const { stdout } = exec("%cd%/app/lessons/test.bat");

  if(stdout) {
    console.log("here");

    for await (const data of stdout) {
      programOutput += data;
    }
  }

  if(programOutput.includes("testing"))
    return <div>Working</div>
  else
    return <div>Working</div>
};

export default page