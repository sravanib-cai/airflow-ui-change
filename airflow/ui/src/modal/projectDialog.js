import Joi from 'joi';

const AddProjectDialogSchema = Joi.object({
  name: Joi.string().required(),
  // projectDescription: Joi.string().required(),
});

export default AddProjectDialogSchema;
