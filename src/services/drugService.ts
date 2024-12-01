import axios from 'axios';
import { Drug, PaginatedResponse } from '../types/drug';

const API_URL = 'http://localhost:8080/api/drugs';

export const getDrugs = async (page: number, size: number): Promise<PaginatedResponse<Drug>> => {
  try {
    const response = await axios.get(`${API_URL}?page=${page}&size=${size}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching drugs:', error);
    throw error;
  }
};

export const addDrug = async (drug: Omit<Drug, 'id'>): Promise<Drug> => {
  try {
    const response = await axios.post(API_URL, drug);
    return response.data;
  } catch (error) {
    console.error('Error adding drug:', error);
    throw error;
  }
};

export const deleteDrug = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting drug:', error);
    throw error;
  }
};