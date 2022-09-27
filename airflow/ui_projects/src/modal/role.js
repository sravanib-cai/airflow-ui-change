import Joi from 'joi';

export const RoleSchema = Joi.number().valid('1', '2');
