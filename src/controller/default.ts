import {Request , Response } from 'express';
import  path  from 'path';

export const handleRoute = (req : Request, res : Response) => {
    res.sendFile(path.join(__dirname + '/../views/index.html'));
};