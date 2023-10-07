'use client';

import { signOut, useSession } from 'next-auth/react'
import React from 'react';
import Navigation from "../components/navigation";

export default function Login()  {
  return (
    <section>
    <header><Navigation /></header>
    <div>login page goes here</div>
    </section>
  )
}
