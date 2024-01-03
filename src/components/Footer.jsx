import data from "../sample.json";

export default function Footer() {
  return (
    <>
     {data.Json.map((item, i)=>(
        <div key={i} className=" bg-slate-100 w-full h-80">
            <div className=" container m-auto h-full">
                <div className=" w-full h-full flex flex-row justify-between align-middle gap-32">
                    <div className="">
                        <p className="rounded-full p-2 bg-slate-300"></p>
                    </div>
                    <div className=" flex flex-col justify-center align-middle">
                        <p className=" text-2xl font-bold text-center">"{item.testimonial.text}"</p>
                        <div className=" flex flex-row justify-center py-4">
                            <img className=" rounded-full" src="" alt="" />
                            <div>
                                <p className=" font-semibold">{item.testimonial.reviewer_name}</p>
                                <p>{item.testimonial.reviewer_designation}</p>
                            </div>
                        </div>
                    </div>
                    <div className=" ">
                        <p className="rounded-full p-2 bg-slate-300"></p>
                    </div>
                </div>
            </div>
        </div>
     ))} 
    </>
  )
}
