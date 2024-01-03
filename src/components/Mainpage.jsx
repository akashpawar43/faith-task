import data from "../sample.json";
import inst_profile from "/about_img.jpg";
import facebook_logo from "/face.webp";
import twitter from "/twitter.png";
import youtube from "/youtube.png";
import instagram_logo from "/insta.webp";

export default function Mainpage() {
  return (
    <div className=" container m-auto h-full pt-14 pb-14 flex gap-12">
      <div className=" w-2/3 flex flex-col justify-start ">
        <nav>
          <ul className="flex flex-row gap-6 font-semibold">
            <li className=" px-9 py-2 border-b-2 border-purple-500">About</li>
            <li className=" px-9 py-2">Instructor</li>
            <li className=" px-9 py-2">Reviews</li>
          </ul>
        </nav>
        {data.Json.map((item, i) => (
          <div key={i} className="flex flex-col ">
            <p className=" font-black text-xl font pt-5 pb-4">About the course</p>
            <div className="flex flex-col gap-3">
              <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatern accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            </div>
            <p className=" font-black text-xl font pt-5 pb-4">What to expect from the course</p>
            <div className="">
              <div dangerouslySetInnerHTML={{ __html: item.course.what_to_expect.html_content }} />
            </div>
            <p className=" font-black text-xl font pt-5 pb-4">Key topics covered</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam excepturi officia dignissimos adipisci quae exercitationem et asperiores tenetur obcaecati doloremque sequi ducimus voluptates aliquam, numquam, architecto blanditiis vero corrupti labore fugit earum voluptatum voluptatibus nesciunt nulla. Ea odit quasi dolore cumque nisi impedit, dignissimos illo vero voluptatibus sequi minus sit reiciendis? Quas quod mollitia quisquam soluta eaque minima! Ea?</p>
            <div className=" py-4 gap-6 flex flex-col">
              <div dangerouslySetInnerHTML={{ __html: item.course.key_topics.html_content }} />
            </div>
            <p className=" font-black text-xl font pt-5 pb-4">About the Instructor</p>
            <div className="flex flex-row gap-2">
              <img className="w-1/5 h-32 rounded-full" src={inst_profile} alt="" />
              <div className="w-2/5 flex flex-col justify-between">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <div className="flex flex-row justify-start py-2 gap-4">
                  {item.instructor.social_media.facebook && (
                    <a href="https://github.com/akashpawar43" target="_blank" rel="noreferrer noopener">
                      <div className="  h-5 flex flex-row items-center gap-2 "><img className=" h-full" src={facebook_logo} alt="" />Facebook</div>
                    </a>
                  )}
                  {item.instructor.social_media.twitter && (
                    <a href="https://twitter.com/AkashPawar1643" target="_blank" rel="noreferrer noopener">
                      <div className=" h-5 flex flex-row items-center gap-2"><img className=" h-full rounded-sm" src={twitter} alt="" />Twitter</div>
                    </a>
                  )}
                </div>
              </div>
              <div className="w-2/5 flex flex-col justify-between">
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                </p>
                <div className="flex flex-row justify-start py-2 gap-4">
                  {item.instructor.social_media.youtube && (
                    <a href="akashpawardev.netlify.app" target="_blank" rel="noreferrer noopener">
                      <div className=" w-1/2 h-5 flex flex-row items-center gap-2"><img className=" h-full" src={youtube} alt="" />Youtube</div>
                    </a>
                  )}
                  {item.instructor.social_media.instagram && (
                    <a href="https://www.instagram.com/mr.akki_1604/" target="_blank" rel="noreferrer noopener">
                      <div className=" w-1/2 h-5 flex flex-row items-center gap-2"><img className=" h-full" src={instagram_logo} alt="" />Instagram</div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" w-1/3 h-80 bg-purple-100 p-6 relative bottom-28 rounded-md">
        <p className=" font-bold">Course fees</p>
        <p className=" text-4xl font-black">₹5,000</p>
        <p className=" pt-6 font-bold">What's to included:</p>
        <div className=" pt-2 pb-6">
          <p>5 on-demand videos</p>
          <p>2 Evestream sessions</p>
          <p>Live Q&A sessions with Nityanand Charan Das</p>
        </div>
        <button className=" bg-purple-700 w-full rounded-full py-2 text-white">
          Register today
        </button>
      </div>
    </div>
  )
}
