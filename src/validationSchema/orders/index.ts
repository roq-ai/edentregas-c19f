import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  status: yup.string().required(),
  delivery_manager_id: yup.string().nullable(),
  delivery_personnel_id: yup.string().nullable(),
});
