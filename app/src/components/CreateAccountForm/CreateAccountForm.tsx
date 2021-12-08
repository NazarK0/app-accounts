import { useFormik, ErrorMessage, Field, FormikProvider, Form } from "formik";
import { EStatusType } from '../../types/AccountsTable.props';
import s from './CreateAccountForm.module.scss';
import classNames from 'classnames';
import ICreateAccounFormProps from '../../types/CreateAccountForm.props';
import CreateAccountSchema from "./CreateAccountSchema.yup";
import StatusOptions from "../StatusOptions";
import ValidationMessage from "../ValidationMessage";

const CreateAccountForm = ({ modal: Modal, closeModal }: ICreateAccounFormProps): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      name: "",
      accountName: "",
      email: "",
      status: EStatusType.disable,
      startDate: new Date(),
      expirationDate: new Date(),
    },
    validationSchema: CreateAccountSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <FormikProvider value={formik}>
        <Modal>
          <div className={s.modalBlock}>
            <h1>Create account</h1>
            <hr />
            <Form onSubmit={formik.handleSubmit}>
              <div className={s.formGroup}>
                <label htmlFor="name">Name*</label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  tabIndex={1}
                />
              <ErrorMessage name="name" render={(msg)=> <ValidationMessage errorMessage={msg} />} />
              </div>
              <div className={s.formGroup}>
                <label htmlFor="account">Account*</label>
                <Field
                  id="account"
                  name="accountName"
                  type="text"
                  tabIndex={2}
                />
              <ErrorMessage name="accountName" render={(msg) => <ValidationMessage errorMessage={msg} />} />
              </div>
              <div className={s.formGroup}>
                <label htmlFor="status">Status</label>
                <Field 
                  as="select" 
                  id="status"
                  name="status"
                  tabIndex={3}>
                  <StatusOptions />
                </Field>
              <ErrorMessage name="status" render={(msg) => <ValidationMessage errorMessage={msg} />} />
              </div>
              <div className={s.formGroup}>
                <label htmlFor="email*">E-mail*</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  tabIndex={4}
                />
              <ErrorMessage name="email" render={(msg) => <ValidationMessage errorMessage={msg} />} />
              </div>
              <div className={classNames(s.formGroup, s.dates)}>
                <div className={s.formGroup}>
                  <label htmlFor="startDate">Start date</label>
                  <Field
                    id="startDate"
                    name="startDate"
                    type="date"
                    tabIndex={5}
                  />
                <ErrorMessage name="startDate" render={(msg) => <ValidationMessage errorMessage={msg} />} />
                </div>
                <div className={s.formGroup}>
                  <label htmlFor="expirationDate">Expiration date</label>
                  <Field
                    id="expirationDate"
                    name="expirationDate"
                    type="date"
                    tabIndex={6}
                  />
                <ErrorMessage name="expirationDate" render={(msg) => <ValidationMessage errorMessage={msg} />} />
                </div>
              </div>
              <hr />
              <button className={classNames(s.submitBtn, "primary")} type="submit" tabIndex={7}>Save</button>
            </Form>
            <button className={classNames(s.cancelBtn, "secondary")} onClick={closeModal} tabIndex={8}>Cancel</button>
          </div>
        </Modal>
    </FormikProvider>
  )
}

export default CreateAccountForm;