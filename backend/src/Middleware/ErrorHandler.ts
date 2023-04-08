import { Request, Response, NextFunction,  } from "express"

export function errorHandling(err: Error, req: Request, res: Response, next: NextFunction){
    if(err){
        res.status(500).json({message: "Internal Server Error"})
    }
    else{
        next()
    }
}
