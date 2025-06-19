"use client";
import React, { use, useEffect, useState } from "react";
import useAuthStore from "@/store/authStore";
import coursesService from "@/services/courses";
import MyModuleHeroSection from "@/containers/my-module-page/hero-section";
import LessonsSection from "@/containers/my-module-page/lessons-section";
import EquipSection from "@/containers/course-info-page/equip-section";
import type { UserModuleDescriptor } from "@/types/courses";
import PrivateRoute from "@/components/PrivateRoute";

const MyModulePage: React.FC<{
  params: Promise<{ id: string; moduleId: string }>;
}> = ({ params }) => {
  const resolvedParams = use(params);
  const isAuth = useAuthStore((state) => state.isAuth);

  const [myModule, setMyModule] = useState<UserModuleDescriptor | null>(null);

  const moduleId = Number(resolvedParams.moduleId);

  useEffect(() => {
    const fetchMyModule = async () => {
      if (isAuth && !isNaN(moduleId)) {
        try {
          const moduleInfo = await coursesService.getUserModuleById(moduleId);

          console.log("my module info:", moduleInfo);

          if (moduleInfo) {
            setMyModule(moduleInfo);
          } else {
            console.error("Module not found or not purchased");
          }
        } catch (error) {
          console.error("Failed to fetch module", error);
        }
      }
    };

    fetchMyModule();
  }, [isAuth, moduleId]);

  return (
    <PrivateRoute>
      {myModule && (
        <main>
          <MyModuleHeroSection
            courseId={myModule.courseId}
            moduleId={myModule.id}
            isCompleted={myModule.progress.isCompleted}
            moduleName={myModule.title}
            moduleImg={myModule.imageUrl}
            description={myModule.description}
          />
          <LessonsSection
            lessons={myModule.lessons}
            courseId={myModule.courseId}
          />
          <EquipSection equip={myModule.equipment} />
        </main>
      )}
    </PrivateRoute>
  );
};

export default MyModulePage;
