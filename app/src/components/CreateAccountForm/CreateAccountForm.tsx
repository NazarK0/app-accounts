import { useFormik, ErrorMessage } from "formik";
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
      account_name: "",
      email: "",
      status: EStatusType.disable,
      start_date: 0,
      expiration_date: 0,
    },
    validationSchema: CreateAccountSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div>
        <Modal>
          <div className={s.modalBlock}>
            <h1>Create account</h1>
            <hr />
            <form onSubmit={formik.handleSubmit}>
              <div className={s.formGroup}>
                <label htmlFor="name">Name*</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  tabIndex={1}
                />
              <ErrorMessage name="name" render={ValidationMessage} />
              </div>
              <div className={s.formGroup}>
                <label htmlFor="account">Account*</label>
                <input
                  id="account"
                  name="accountName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.account_name}
                  tabIndex={2}
                />
              <ErrorMessage name="account" render={ValidationMessage} />
              </div>
              <div className={s.formGroup}>
                <label htmlFor="status">Status</label>
                <select id="status"
                  name="status"
                  onChange={formik.handleChange}
                  value={formik.values.status}
                  tabIndex={3}>
                  <StatusOptions />
                </select>
              <ErrorMessage name="status" render={ValidationMessage} />
              </div>
              <div className={s.formGroup}>
                <label htmlFor="Email*">Name*</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  tabIndex={4}
                />
              </div>
              <div className={classNames(s.formGroup, s.dates)}>
                <div className={s.formGroup}>
                  <label htmlFor="startDate">Start date</label>
                  <input
                    id="startDate"
                    name="startDate"
                    type="date"
                    onChange={formik.handleChange}
                    value={formik.values.start_date}
                    tabIndex={5}
                  />
                <ErrorMessage name="startDate" render={ValidationMessage} />
                </div>
                <div className={s.formGroup}>
                  <label htmlFor="expirationDate">Expiration date</label>
                  <input
                    id="expirationDate"
                    name="expirationDate"
                    type="date"
                    onChange={formik.handleChange}
                    value={formik.values.expiration_date}
                    tabIndex={6}
                  />
                <ErrorMessage name="expirationDate" render={ValidationMessage} />
                </div>
              </div>
              <hr />
              <button className={classNames(s.submitBtn, "primary")} type="submit" tabIndex={7}>Save</button>
            </form>
            <button className={classNames(s.cancelBtn, "secondary")} onClick={closeModal} tabIndex={8}>Cancel</button>
          </div>
        </Modal>
    </div>
  )
}

export default CreateAccountForm;