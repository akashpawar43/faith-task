import data from "../sample.json";
import test_profile from "/jonathan.jpg";

export default function Footer() {
  return (
    <>
     {data.Json.map((item, i)=>(
        <div key={i} className=" bg-slate-100 w-full h-80">
            <div className=" container m-auto h-full">
                <div className=" w-full h-full flex flex-row justify-between align-middle gap-32">
                    <div className=" flex items-center">
                        <div className="rounded-full h-8 w-8 bg-slate-300 flex justify-center items-center font-black">&lt;</div>
                    </div>
                    <div className=" flex flex-col justify-center align-middle">
                        <p className=" text-2xl font-bold text-center">"{item.testimonial.text}"</p>
                        <div className=" flex flex-row justify-center py-4 gap-2">
                            <img className=" rounded-full h-10 w-10" src={test_profile} alt="" />
                            <div className=" text-sm">
                                <p className=" font-semibold">{item.testimonial.reviewer_name}</p>
                                <p>{item.testimonial.reviewer_designation}</p>
                            </div>
                        </div>
                    </div>
                    <div className=" flex items-center">
                        <p className="rounded-full h-8 w-8 bg-slate-300 flex justify-center items-center font-black">&gt;</p>
                    </div>
                </div>
            </div>
        </div>
     ))} 
    </>
  )
}
