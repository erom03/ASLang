'use client';

import { signOut, useSession } from 'next-auth/react';
import React from 'react';
import Navigation from "../components/navigation";
import util from 'node:util';
import GetOutput from '../components/get_output';

const exec = util.promisify(require('node:child_process').exec);

const Login = () => {
  return (
    <section>
    <header><Navigation /></header>
    <div>login page goes here</div>
    <div>{GetOutput()}</div>
    </section>
  )
}

export default Login