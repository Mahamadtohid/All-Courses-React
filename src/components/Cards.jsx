import Card from './Card';
import { useState } from 'react';

function Cards({courses , category}){

console.log(courses.data);

const [likedCourses , setLikedCourses] = useState([])

function getCoursesinArray(){
    if(category === "All"){
        let allCourses = []

    Object.values(courses).forEach(array => {
        array.forEach(courseData =>{
            allCourses.push(courseData)
        })
    })

    return allCourses;
    }
    else{
        return courses[category]
    }
    

}
    return(
        <div className="flex flex-wrap justify-center gap-4">

            {
            
                getCoursesinArray().map((course)=>{
                    console.log(course.id)
                    console.log(course.title)
                    return<Card key ={course.id} course={course} likedCourses={likedCourses}
                    setLikedCourses={setLikedCourses}/>
                    
                })
            }
            

        </div>
    )
}

export default Cards;