import Joi from 'joi';

export const ManageUserAccessSchema = Joi.array().items(Joi.number());
