import {FcLike , FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';

function Card({course , likedCourses , setLikedCourses}){

    function clickHandler() {
    if (likedCourses.includes(course.id)) {
        setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
        toast.warning("Like Removed");
    } else {
        if (likedCourses.length === 0) {
            setLikedCourses([course.id]); // ✅ fix here
        } else {
            setLikedCourses((prev) => [...prev, course.id]);
        }
        toast.success("Liked");
    }
}

    // console.log(course.); 
    console.log("Hello")
    console.log(course.id)
    return(
        <div className="w-[300px] bg-slate-800 rounded-md overflow-hide text-white">
            
            
            <div className="relative">
                <img src={course.image.url}></img>
                <button onClick={clickHandler} className="w-[40px] bg-white rounded-full h-[40px] right-2 bottom-3 absolute grid place-items-center">
                    {
                        likedCourses.includes(course.id) ? <FcLike fontSize="1.75rem"/> : <FcLikePlaceholder fontSize="1.75rem"/>
                    }
                </button>
            </div>

            <div className="py-4">
                <p className=" text-white font-bold text-lg leading-6">{course.title}</p>
                <p className="mt-2">{course.description}
                    {
                        course.description.length > 100 ? (course.description.substr(0,10)) + "..." : (course.description)
                    }
                </p>
            </div>


        </div>
    )
}

export default Card;