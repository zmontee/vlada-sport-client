import React from "react";
import ProfileSection from "@/containers/profile-page/profile-section";
import PrivateRoute from "@/components/PrivateRoute";

const ProfilePage = () => {
  return (
    <PrivateRoute>
      <main>
        <ProfileSection />
      </main>
    </PrivateRoute>
  );
};

export default ProfilePage;
