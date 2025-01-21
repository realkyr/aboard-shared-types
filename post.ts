import { BaseQuery } from '@/shared-types/query';

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

export interface PostResponse {
  id: string;
  community: string;
  content: string;
  createdAt: string;
  createdBy: string;
  topic: string;
  updatedAt: string;
  commentsAmount: number;
}

export interface PostQuery extends BaseQuery {
  query: string;
  community: string;
  createdBy: string;
}
