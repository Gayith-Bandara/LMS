import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from 'humanize-duration'

export const AppContext = createContext()

export const AppContextProvider = (props) => {
    
    const currency = import.meta.env.VITE_CURRENCY

    const navigate = useNavigate();

    const [allCourses, setAllCourses] = useState([]);//use state hook 
    const [isEducator, setIsEducator] = useState(true);//use state hook 

    //set all courses
    const fetchAllCourses = async ()=>{
        setAllCourses(dummyCourses);
    }

    //call the fetchAllCourses funtion(everytime this project renders this useEffect react method will be called)
    useEffect(()=>{
        fetchAllCourses(), []
    })

    //function to calculate average rating of course
    const calculateRating = (course) =>{
        if(course.courseRatings.length === 0){return 0;}
        let totalRating = 0;
        course.courseRatings.forEach((rating => {
            totalRating += rating.rating;
        }))
        return totalRating / course.courseRatings.length;
    }

    //function to calculate course chapter time
    const calculateChapterTime = (chapter)=>{
        let time = 0;
        chapter.chapterContent.map((lecture)=> time += lecture.lectureDuration)
        return humanizeDuration(time * 60 * 1000, {units : ["h", "m"]})
    }

    //function to calculate the course duration
    const calculateCourseDuration = (course) =>{
        let time = 0;
        course.courseContent.map((chapter)=> chapter.chapterContent.map((lecture)=>{
            time += lecture.lectureDuration
        }))
        return humanizeDuration(time * 60 * 1000, {units : ["h", "m"]})
    }

    //function to calculate the total number of lecture in course
    const calculateNumberOfLectures=(course)=>{
        let lectureCount = 0;
        course.courseContent.forEach((chapter)=>{
            if(Array.isArray(chapter.chapterContent)){
                lectureCount += chapter.chapterContent.length;
            }
        })

        return lectureCount;
    }

    const value = {
        currency, allCourses, navigate, calculateRating, isEducator, setIsEducator, calculateChapterTime, calculateCourseDuration, calculateNumberOfLectures
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}