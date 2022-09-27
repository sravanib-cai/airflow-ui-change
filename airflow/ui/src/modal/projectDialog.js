import Joi from 'joi';

const AddProjectDialogSchema = Joi.object({
  name: Joi.string().required(),
  projectType: Joi.string().required(),
});

export default AddProjectDialogSchema;
