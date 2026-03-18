import * as libraryRepository from "../repository/firestoreRepository";
import { libraryModel } from "../models/libraryModel";

// Defining service to get all the loans from database
export const getResources = async (): Promise<libraryModel[]> => {
    const loans: libraryModel[] = await libraryRepository.getResources();
    return loans;
};