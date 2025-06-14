import { ReviewDTO } from "@/types/dto";

export type Feedback = ReviewDTO & {
  user: {
    name: string;
    surname: string;
    imageUrl: string;
    experience: string;
  };
};
