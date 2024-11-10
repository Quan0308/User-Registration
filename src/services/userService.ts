import { ISuccessResponse, IUser } from '../types/interfaces';
import { doGet } from '../utils/axios';

export const getProfile = async (): Promise<ISuccessResponse<IUser>> => {
  try {
    const res = await doGet('users/profile');
    return res.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
};
