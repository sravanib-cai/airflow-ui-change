import Joi from 'joi';

const AddUserDialogSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().required(),
  role: Joi.string().required(),
});

export default AddUserDialogSchema;
