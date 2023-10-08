import React from 'react';
import GetOutput from "../components/getOutput"
import util from 'node:util';
import { auth, db } from '../firebase';
import { onValue, ref } from 'firebase/database';


const exec = util.promisify(require('node:child_process').exec);

let userId;
if(auth.currentUser) {
  userId = auth.currentUser.uid;
} else {
  // Do toast message for user to log in
}

let numDone = 0;

if(userId) {
  const numDoneRef = ref(db, 'users/' + userId + '/numDone') 
  onValue(numDoneRef, (snapshop) => {
    const data = snapshop.val();
    numDone = +data;
  })
}

const Lessons = () => {
  return (
    <section>
    <center>
      <div className="flex-start">
        
    <div className="p-8 border-gray-200 dark:border-gray-600">
      <div className="flex justify-between rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 mx-auto p-10 w-2/3">
        <div className="my-auto">Lesson</div>
      <div><button className="h-12 px-12 m-auto text-white transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Begin</button></div>
    </div>
    </div>

    <div className="p-8 border-gray-200 dark:border-gray-600">
      <div className="flex justify-between rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 mx-auto p-10 w-2/3">
        <div className="my-auto">Lesson</div>
      <div><button className="h-12 px-12 m-auto text-white transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Begin</button></div>
    </div>
    </div>

    <div className="p-8 border-gray-200 dark:border-gray-600">
      <div className="flex justify-between rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 mx-auto p-10 w-2/3">
        <div className="my-auto">Lesson</div>
      <div><button className="h-12 px-12 m-auto text-white transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Begin</button></div>
    </div>
    </div>

    <div className="p-8 border-gray-200 dark:border-gray-600">
      <div className="flex justify-between rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 mx-auto p-10 w-2/3">
        <div className="my-auto">Lesson</div>
      <div><button className="h-12 px-12 m-auto text-white transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Begin</button></div>
    </div>
    </div>
      
      </div>
      test
    </center>
      test 2 no center!
      </section>
  )
}

export default Lessons;
