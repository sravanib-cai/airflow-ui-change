import Joi from 'joi';

const ManageUserAccessSchema = Joi.array().items(Joi.number());

export default ManageUserAccessSchema;
