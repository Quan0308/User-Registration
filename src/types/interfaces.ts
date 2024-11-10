export interface ImageItemProps {
  id: string;
  urls: {
    thumb: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
}

export interface IAuthData {
  email: string;
  password: string;
}

export interface ISuccessResponse<T> {
  status: string;
  message: string;
  data: T;
}

export interface IToken {
  accessToken: string;
}

export interface IUser {
  id: string;
  email: string;
  username: string;
}
