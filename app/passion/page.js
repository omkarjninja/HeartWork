"use client";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebaseConfig"; // adjust path as per your project structure
import { collection, getDocs } from "firebase/firestore";
import { format } from 'date-fns';
export default function Passion() {
    const [careers, setCareers] = useState([]);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "careers"));
        const careersList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCareers(careersList);
      } catch (e) {
        console.error("Error fetching documents: ", e);
      }
    };
    // console.log(careers[0].createdAt);
    fetchCareers();
  }, []);
return(
    <>
   <div className="m-3">
      <h1 className="m-3">Discover the careers , others dream of when money’s out of the picture.</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-3">
        {careers.map((career) => ( 
            <article 
            className=" m-3 ml-3 hover:animate-background rounded-xl p-0.5 shadow-xl transition hover: hover:shadow-sm hover:[animation-duration:_4s] w-full bg-[url('https://images.beta.cosmos.so/3fa7f1c7-6cf0-4d0b-bff3-1ae62a16f9a8?format=jpeg')] bg-cover bg-center"
          > 
             <div className="rounded-[10px] p-4 !pt-20 sm:p-6">
    <time datetime="2022-10-10" className="block text-xs text-white"> {career.createdAt && (
              <span>
                {" "}
                {" "}
                {format(career.createdAt.toDate(), "MMMM d, yyyy")}
              </span>
            )} </time>

    <a href="#">
      <h3 className="mt-0.5 text-lg font-medium text-white">
      {career.career}
      </h3>
    </a>
    <div className="mt-4 flex flex-wrap gap-1">
      <span
        className="whitespace-nowrap rounded-full bg-black px-3 py-1 text-xs text-white"
      >
        {   career.username}
      </span>

     
    </div>
         
          </div>
          </article>
        ))}
      </div>
      {/*
  Heads up! 👋

theme: {
  extend: {
    animation: {    
      border: 'background ease infinite',
    },
    keyframes: {
      background: {
        '0%, 100%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
      },
    },
  },
}
*/}

{/* <article
  className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] w-1/4"
> */}
  {/* <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
    <time datetime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

    <a href="#">
      <h3 className="mt-0.5 text-lg font-medium text-gray-900">
        How to center an element using JavaScript and jQuery
      </h3>
    </a> */}

    {/* <div className="mt-4 flex flex-wrap gap-1">
      <span
        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
      >
        Snippet
      </span>

      <span
        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
      >
        JavaScript
      </span>
    </div> */}
  {/* </div> */}
{/* </article> */}
    </div>
    </>
)
}


