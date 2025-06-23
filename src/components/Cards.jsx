import Card from './Card';
import { useState } from 'react';

function Cards({courses}){

console.log(courses.data);

const [likedCourses , setLikedCourses] = useState([])

function getCoursesinArray(){
    let allCourses = []

    Object.values(courses).forEach(array => {
        array.forEach(courseData =>{
            allCourses.push(courseData)
        })
    })

    return allCourses;

}
    return(
        <div className="flex flex-wrap justify-center">

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