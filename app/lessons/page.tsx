import React from 'react';
import Navigation from "../components/navigation";
import GetOutput from "../components/get_output"

const page = () => {
  return (
    <section>
    <header><Navigation /></header>
    <div>lessons page here</div>
    <GetOutput />
    </section>
  )
}

export default page