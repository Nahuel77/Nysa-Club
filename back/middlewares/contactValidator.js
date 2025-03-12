import { body, validationResult } from "express-validator";

export const contactValidator = [
    body('nombre').trim().notEmpty().withMessage('El nombre es obligatorio'),
    body('email').trim().isEmail().withMessage('Email invalido'),
    body('mensaje').trim().notEmpty().withMessage('El mensaje es obligatorio'),

    (req, res, next) => {
        const err = validationResult(req);
        if(!err.isEmpty()){
            return res.status(400).json({errors: err.array()});
        }
        next();
    }
];