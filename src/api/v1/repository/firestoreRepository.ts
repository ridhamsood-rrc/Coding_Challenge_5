import { db } from "../../../config/firebaseConfig";
import { libraryModel } from "../models/libraryModel";
import { QuerySnapshot, DocumentData } from "firebase-admin/firestore";

// Gets all the existing resources from the firestore database
export const getResources = async (): Promise<libraryModel[]> => {
    const snapshot: QuerySnapshot = await db.collection("resources").get();

    return snapshot.docs.map(doc => {
        const data: DocumentData = doc.data();

        return {
            id: Number(doc.id),
            title: data.title,
            type: data.type,
            url: data.url,
            description: data.description,
            createdAt: data.createdAt
        };
    });
};