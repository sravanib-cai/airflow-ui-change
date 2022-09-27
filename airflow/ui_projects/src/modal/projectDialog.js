import Joi from 'joi';

export const AddProjectDialogSchema = Joi.object({
  name: Joi.string().required(),
  projectType: Joi.string().required()
});
