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

        </div>
    )
}

export default Cards;