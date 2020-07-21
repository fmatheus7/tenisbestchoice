import * as Yup from 'yup'

export default Yup.object().shape({
  name: Yup.string().min(2).required(),
  drop: Yup.number().required(),
  damping: Yup.string().required(),
  weight: Yup.string().required(),
  training: Yup.string().required(),
  addedby: Yup.string().required(),
})

