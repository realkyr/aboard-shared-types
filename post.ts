export interface PostType {
  id: string;
  community: string;
  content: string;
  createdAt: Date;
  createdBy: string;
  topic: string;
  updatedAt: Date;
  commentsAmount: number;
}
