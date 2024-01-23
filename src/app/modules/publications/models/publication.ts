export interface Publication {
  id: number;
  title: string;
  description?: string;
  user?: number;
  date_in: string;
  image: string;
  path: string;
  like: number;
  userName: any;
  userEmail: any;
  createdAt: string;
}
