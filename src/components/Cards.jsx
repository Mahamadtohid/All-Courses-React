import Card from './Card';

function Cards(courses){

    let allCourses=[];

    const getCoursesinArray = ()=>{

        Objects.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course)=>{

                allCourses.push(course)
            })

            return allCourses
            
        });
        
    }
    return(
        <div>
            {
                allCourses.map((course)=>{
                    return<Card key ={course.id} course={course}/>
                })
            }

        </div>
    )
}

export default Cards;