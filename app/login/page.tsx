'use client';

import { signOut, useSession } from 'next-auth/react'
import React from 'react';
import Navigation from "../components/navigation";

const Login = () => {
  return (
    <section>
    <header><Navigation /></header>
    <div>login page goes here</div>
    </section>
  )
}

export default Login