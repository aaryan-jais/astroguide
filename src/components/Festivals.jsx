import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCalendarAlt,
} from "react-icons/fa";

function Festivals() {

  const festivals = [
    {
      title:"Pongal 2026",
      date:"2026-01-14",
      desc:"Harvest festival celebrated with gratitude."
    },
    {
      title:"Basant Panchmi 2026",
      date:"2026-01-23",
      desc:"Festival dedicated to Goddess Saraswati."
    },
    {
      title:"Holika Dahan 2026",
      date:"2026-03-02",
      desc:"Victory of good over evil."
    },
    {
      title:"Holi 2026",
      date:"2026-03-03",
      desc:"Festival of colors."
    },
    {
      title:"Chaitra Navratri",
      date:"2026-03-20",
      desc:"Nine-day spiritual celebration."
    },
    {
      title:"Ram Navami",
      date:"2026-03-28",
      desc:"Birth of Lord Rama."
    },
    {
      title:"Raksha Bandhan",
      date:"2026-08-09",
      desc:"Celebration of sibling love."
    },
    {
      title:"Janmashtami",
      date:"2026-09-03",
      desc:"Birth celebration of Krishna."
    },
    {
      title:"Diwali",
      date:"2026-11-08",
      desc:"Festival of lights."
    },
    {
      title:"Christmas",
      date:"2026-12-25",
      desc:"Celebration of Jesus Christ."
    }
  ];

  const itemsPerPage=2;

  const [currentPage,setCurrentPage]=useState(1)

  const totalPages=Math.ceil(
    festivals.length/itemsPerPage
  );

  const start=(currentPage-1)*itemsPerPage;

  const currentFestivals=
  festivals.slice(
    start,
    start+itemsPerPage
  );

  const [selectedDate,setSelectedDate]=
  useState(new Date());

  return (

<section className="py-24 px-5 bg-[#f8f5ef] relative" style={{
        backgroundImage: "url('/images/service-bg.png')",
        
      }}>
         <div className="absolute inset-0 bg-[#fff]/65"></div>

<div className="relative z-10 max-w-7xl mx-auto">

<div className="text-center mb-14">

<span className="
px-5
py-2
rounded-full
bg-[#D5846E]/10
text-[#D5846E]
uppercase
">
Festivals
</span>

<h2 className="
text-4xl
md:text-6xl
font-josefin
mt-6
">
Festivals & Calendar ✨
</h2>

</div>

<div className="
grid
lg:grid-cols-3
gap-8
">

{/* Festival List */}

<div className="
lg:col-span-2
bg-white
rounded-3xl
p-8
shadow-xl
">

<h3 className="
text-3xl
font-josefin
mb-8
">
Festival 2026
</h3>

<div className="space-y-5">

{currentFestivals.map(
(item,index)=>(

<div
key={index}
className="
border
rounded-2xl
p-5
hover:shadow-lg
hover:border-[#D5846E]
duration-300
"
>

<div className="
flex
justify-between
items-center
">

<div>

<h4 className="
text-xl
font-semibold
">
{item.title}
</h4>

<p className="
text-gray-500
mt-2
">
{item.date}
</p>

</div>

<FaCalendarAlt
className="
text-[#D5846E]
text-2xl
"
/>

</div>

<p className="
mt-4
text-gray-600
leading-7
">
{item.desc}
</p>

</div>

))}
</div>

{/* Pagination */}

<div className="
flex
justify-center
items-center
gap-4
mt-10
">

<button
onClick={()=>
setCurrentPage(
prev=>Math.max(prev-1,1)
)
}
className="
w-12
h-12
rounded-full
bg-[#21212C]
text-white
inline-block
px-4
"
>
<FaChevronLeft/>
</button>

<span>
{currentPage} / {totalPages}
</span>

<button
onClick={()=>
setCurrentPage(
prev=>Math.min(
prev+1,
totalPages
)
)
}
className="
w-12
h-12
rounded-full
bg-[#D5846E]
text-white
inline-block
px-4
"
>
<FaChevronRight/>
</button>

</div>

</div>

{/* Calendar */}

<div className="
bg-white
rounded-3xl
shadow-xl
p-6
">

<h3 className="
text-2xl
font-josefin
mb-6
">
Calendar 2026
</h3>

<Calendar
onChange={setSelectedDate}
value={selectedDate}
/>

<div className="
mt-6
bg-[#FFF6E9]
p-4
rounded-xl
">

<p className="
font-semibold
">
Selected Date
</p>

<p className="text-gray-600">
{selectedDate.toDateString()}
</p>

</div>

</div>

</div>

</div>

</section>

  );
}

export default Festivals;