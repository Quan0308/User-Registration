import { IAuthData, ISuccessResponse, IToken } from '../types/interfaces';
import { doPost } from '../utils/axios';

export const register = async (data: IAuthData) => {
  try {
    const response = await doPost('auth/register', data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const login = async (data: IAuthData): Promise<ISuccessResponse<IToken>> => {
  try {
    const response = await doPost('auth/login', data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
