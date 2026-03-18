import { NextFunction, Request, Response } from "express";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import { libraryModel } from "../models/libraryModel";
import * as libraryService from "../services/resourceService";

export const getResources = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const resources: libraryModel[] = await libraryService.getResources();
        res.status(HTTP_STATUS.OK).json({
            message: "Library resources retrieved",
            count: resources.length,
            data: resources
        });
    } catch (error) {
        next(error)
    }
}