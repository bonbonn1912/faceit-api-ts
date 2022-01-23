import {Request , Response } from 'express';
import  path  from 'path';

export const handleRoute = (req : Request, res : Response) => {
    res.sendFile(__dirname + '../../client/index.html');
};