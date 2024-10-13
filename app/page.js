"use client";
import Image from "next/image";
import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc ,serverTimestamp} from "firebase/firestore";
export default function Home() {
  const [career, setCareer] = useState("");
  const [username, setUsername] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(career);
    console.log(username);
 
    const formData = {
      career: career,
      username: username || "Anonymous",
      createdAt: serverTimestamp(), // username is optional
    };

    try {
      // Add a new document in Firestore
      const docRef = await addDoc(collection(db, "careers"), formData);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }


    setCareer("");
    setUsername("");
    window.location.href="/passion";
  }

  return (
    <>
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] backi">
      <center>
      <h1 className="text-4xl font-bold text-center font-black">If money didn’t exist, what career would light you up?</h1>
      <p className="text-lg w-8/12 text-center pt-16 font-light">"What if your career wasn't about chasing dollars but chasing dreams? Picture yourself doing what you love every single day. No limits. No bills. Just pure joy and fulfillment. Dive into a world where your passion defines your work, not your paycheck!"</p>
      

<form onSubmit={submitHandler}>
<div className="relative w-full  p-4">
  <label htmlFor="career" className="sr-only"> Email </label>

  <input
    type="text"
    id="career"
    placeholder="Enter your dream career"
    value={career}
    className=" rounded-md border-gray-200  shadow-sm sm:text-sm p-5 border mt-10 lg:w-4/12 md:w-8/12 w-full font-bold"
    onChange={(e) => setCareer(e.target.value)}
    required
  />

 
</div>
     

<label
  htmlFor="Username"
  className="relative block rounded-md border border-gray-200 shadow-sm lg:w-4/12 md:w-8/12 w-full"
>
  <input
    type="text"
    id="Username"
    value={username}
    className="peer bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-4 w-full rounded-md lg:w-4/12 md:w-8/12 w-full"
    placeholder="Username"
    onChange={(e) => setUsername(e.target.value)}
  />

  <span
    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2  p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
  >
    Username (optional)
  </span>
</label>
<button
    type="submit"
    id="submit"
    className="rounded-md border-gray-200 shadow-sm sm:text-sm p-5 border mt-10 w-4/12 hover:scale-102 hover:shadow-xl transition lg:w-4/12 md:w-8/12 w-full" 
  >Submit</button>
   </form>
      </center>
     
    </div>

    </>
  );
}
