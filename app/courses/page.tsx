import React from "react";
import CoursesListSection from "@/containers/courses-page/list-section";
import coursesService from "@/services/courses";

const CoursesPage = async () => {
  const coursesList = await coursesService.getCourses();

  return (
    <main>{coursesList && <CoursesListSection list={coursesList} />}</main>
  );
};

export default CoursesPage;
