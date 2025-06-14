"use client";
import React, { useEffect, useState } from "react";
import ProfileInfo from "@/features/profile/ProfileInfo";
import coursesService from "@/services/courses";
import type { CourseDTO } from "@/types/dto";
import useAuthStore from "@/store/authStore";
import styles from "./_styles.module.scss";
import { getCDNUrl } from "@/utils/functions";
import Link from "next/link";

const ProfileSection = () => {
  const [myCourses, setMyCourses] = useState<CourseDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isAuth = useAuthStore((state) => state.isAuth);

  useEffect(() => {
    const fetchCourses = async () => {
      if (isAuth) {
        try {
          const courses = await coursesService.getPurchasedCourses();

          if (courses) {
            setMyCourses(courses);
          }
        } catch (error) {
          console.error("Failed to fetch courses", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, [isAuth]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section className={styles.profile}>
      <div className="container">
        <h3 className={styles.profile_title}>Мій профіль</h3>
        <div className={styles.profile_grid}>
          <ProfileInfo />
          <div className={styles.my_courses}>
            <h5 className={styles.my_courses_title}>Мої курси</h5>
            <div className={styles.my_courses_grid}>
              {myCourses?.map((course) => (
                <Link href={`/courses/my/${course.id}`} key={course.id}>
                  <div key={course.id} className={styles.course}>
                    <div className={styles.course_img_wrapper}>
                      <img
                        src={
                          course.imageUrl
                            ? getCDNUrl(course.imageUrl)
                            : "/assets/images/courses/course-4.jpg"
                        }
                        alt={course.title}
                      />
                    </div>
                    <h6 className={styles.course_title}>{course.title}</h6>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
