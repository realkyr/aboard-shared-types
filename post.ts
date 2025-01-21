import { firestore } from "firebase-admin";
import Timestamp = firestore.Timestamp;

export interface PostDocument {
  id: string;
  community: string;
  content: string;
  createdAt: Timestamp;
  createdBy: string;
  title: string;
  updatedAt: Timestamp;
}

export interface Post {
  id: string;
  community: string;
  content: string;
  createdAt: Date;
  createdBy: string;
  title: string;
  updatedAt: Date;
}