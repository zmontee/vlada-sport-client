"use client";
import React from "react";
import Button from "@/components/Button";
import { SEX_MAP } from "@/utils/constants";
import useAuthStore from "@/store/authStore";
import { UserSex } from "@/types/auth";
import styles from "./_styles.module.scss";
import { useModal } from "@/hooks/useModal";
import { getCDNUrl } from "@/utils/functions";

const ProfileInfo: React.FC = () => {
  const { user, logout } = useAuthStore();
  const { openModal } = useModal();

  if (!user) {
    return null;
  }

  const handleEditProfile = () => {
    openModal(
      <div>
        <h1>Це буде модальне вікно</h1>
      </div>,
      {
        position: "right",
        closeOnOverlayClick: true,
        width: "500px",
        height: "400px",
      },
    );
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className={styles.profile_info}>
      <div className={styles.profile_info_avatar}>
        <div className={styles.avatar_wrapper}>
          <img
            src={
              user.imageUrl
                ? getCDNUrl(user.imageUrl)
                : `/assets/images/${user.sex === UserSex.MALE ? "boy-default.png" : "girl-default.png"}`
            }
            alt="Avatar"
            className={styles.avatar}
          />
        </div>
        <button className={styles.upload_btn}>Завантажити фото</button>
      </div>
      <div className={styles.profile_info_body}>
        <div className={styles.profile_info_head}>
          <span className={styles.profile_info_title}>Персональні дані</span>
          <Button icon="edit" secondary onClick={handleEditProfile} />
        </div>
        <div className={styles.profile_info_list}>
          <div className={styles.profile_info_item}>
            <label className={styles.profile_info_label}>Ім'я:</label>
            <span className={styles.profile_info_value}>
              {user.name || "Не вказано"}
            </span>
          </div>
          <div className={styles.profile_info_item}>
            <label className={styles.profile_info_label}>Прізвище:</label>
            <span className={styles.profile_info_value}>
              {user.surname || "Не вказано"}
            </span>
          </div>
          <div className={styles.profile_info_item}>
            <label className={styles.profile_info_label}>Стать:</label>
            <span className={styles.profile_info_value}>
              {SEX_MAP[user.sex]}
            </span>
          </div>
          <div className={styles.profile_info_item}>
            <label className={styles.profile_info_label}>Вік:</label>
            <span className={styles.profile_info_value}>
              {user.birthDate} років
            </span>
          </div>
          <div className={styles.profile_info_item}>
            <label className={styles.profile_info_label}>Досвід:</label>
            <span className={styles.profile_info_value}>
              {user.experience} років
            </span>
          </div>
        </div>
      </div>
      <div className={styles.profile_info_security}>
        <div className={styles.profile_info_head}>
          <span className={styles.profile_info_title}>Безпека</span>
          <Button icon="edit" secondary />
        </div>
        <div className={styles.profile_info_list}>
          <div className={styles.profile_info_item}>
            <label className={styles.profile_info_label}>Пароль:</label>
            <span className={styles.profile_info_value}>********</span>
          </div>
        </div>
      </div>
      <Button
        secondary
        icon="logout"
        className={styles.logout_btn}
        onClick={handleLogout}
      >
        Вийти
      </Button>
    </div>
  );
};

export default ProfileInfo;
