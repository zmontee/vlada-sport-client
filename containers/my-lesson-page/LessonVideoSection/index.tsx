import React, { useState } from "react";
import styles from "./_styles.module.scss";
import Button from "@/components/Button";
import VideoPlayer from "@/features/courses/VideoPlayer";
import { UserLessonDescriptor } from "@/types/courses";
import progressService from "@/services/progress";

const LessonVideoSection: React.FC<{
  lesson: UserLessonDescriptor;
  courseId: number;
  moduleId: number;
}> = ({ lesson, courseId, moduleId }) => {
  const [videoCompleted, setVideoCompleted] = useState(false);

  const handleVideoEnded = () => {
    setVideoCompleted(true);
    progressService.completeLesson(lesson.id);
  };

  const handleVideoProgress = (state: {
    played: number;
    playedSeconds: number;
  }) => {
    if (Math.floor(state.playedSeconds) % 10 === 0) {
      console.log(`Прогрес перегляду: ${Math.round(state.played * 100)}%`);
      progressService.updateLessonProgress(lesson.id, {
        position: state.playedSeconds,
      });
    }
  };

  return (
    <section className={styles.video_section}>
      <div className="container">
        <div className={styles.video_head}>
          <Button
            icon="arrowCircleLeft"
            className={styles.arrow_btn}
            secondary
            to={`/courses/my/${courseId}/modules/${moduleId}`}
          />
          <h3 className={styles.lesson_name}>{lesson.title}</h3>
        </div>
        <div className={styles.video_container}>
          {lesson.videoUrl && (
            <VideoPlayer
              url={lesson.videoUrl}
              onEnded={handleVideoEnded}
              onProgress={handleVideoProgress}
              onPlay={() => console.log("Відео запущено")}
              onPause={() => console.log("Відео на паузі")}
              onReady={() => console.log("Відео готове до відтворення")}
            />
          )}
        </div>
        <div className={styles.lessons_switch}>
          {lesson.prevLessonId ? (
            <Button
              icon="arrowCircleLeft"
              iconPosition="left"
              className={styles.prev_btn}
              to={`/courses/my/${courseId}/modules/${moduleId}/lessons/${lesson.prevLessonId}`}
            >
              Попередній урок
            </Button>
          ) : (
            <div />
          )}
          {lesson.nextLessonId && (
            <Button
              icon="arrowCircleRight"
              iconPosition="right"
              className={styles.next_btn}
              to={`/courses/my/${courseId}/modules/${moduleId}/lessons/${lesson.nextLessonId}`}
            >
              Наступний урок
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default LessonVideoSection;
