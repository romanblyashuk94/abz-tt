import React, { FC, useEffect, useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { toast } from 'react-toastify';
import { addUser, getPositions } from '../../api/api';
import { Position } from '../../types/Position';
import successImage from './success-image.svg';
import { PrimaryBtn } from '../PrimaryBtn/PrimaryBtn';
import FormikInput from './FormikInput';
import userSchema from './userValidationSchema';
import s from './Form.module.scss';

interface Props {
  isSubmited: boolean,
  setIsSubmited: (state: boolean) => void
}

export const Form: FC<Props> = ({ isSubmited, setIsSubmited }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    getPositions()
      .then(res => setPositions(res.positions))
      .catch(() => toast.error("Can't load positions"));
  }, []);

  interface FormValues {
    name: string,
    email: string,
    phone: string,
    positionId: number,
    photo?: File,
  }

  const sendFormData = (values: FormValues) => {
    setIsLoading(isLoading);

    const formData = new FormData();

    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('phone', values.phone);
    formData.append('position_id', String(values.positionId));
    if (values.photo) {
      formData.append('photo', values.photo);
    }

    addUser(formData)
      .then(() => {
        setIsSubmited(true);
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const initialFormValues: FormValues = {
    name: '', email: '', phone: '+380', positionId: 1, photo: undefined,
  };

  return isSubmited
    ? (
      <img src={successImage} alt="Success" className={s.successImage} />
    )
    : (
      <Formik
        initialValues={initialFormValues}
        validationSchema={userSchema}
        onSubmit={sendFormData}
      >
        {({
          handleSubmit, setFieldValue, setFieldTouched, values, errors, touched,
        }) => (
          <form className={s.form} onSubmit={handleSubmit}>
            <ul className={s.form__textFieldList}>
              <li className={s.form__textFieldItem}>
                <FormikInput
                  name="name"
                  type="text"
                  label="Your name"
                />
              </li>

              <li className={s.form__textFieldItem}>
                <FormikInput
                  name="email"
                  type="email"
                  label="Email"
                />
              </li>

              <li className={s.form__textFieldItem}>
                <FormikInput
                  name="phone"
                  type="tel"
                  label="Phone"
                  helperText="+38 (XXX) XXX - XX - XX"
                />
              </li>
            </ul>

            <div className={s.form__positionField}>
              <FormControl>
                <h3 className={s.form__subtitle}>Select your position</h3>
                <RadioGroup
                  value={values.positionId}
                  onChange={e => setFieldValue('positionId', e.target.value)}
                >
                  {positions.map(position => (
                    <FormControlLabel
                      key={position.id}
                      value={position.id}
                      control={<Radio />}
                      label={position.name}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>

            <div className={s.form__imageField}>
              <label htmlFor="photo" className={s.uploadField}>
                <input
                  name="photo"
                  className={s.uploadField__input}
                  type="file"
                  accept="image/jpg, image/jpeg"
                  id="photo"
                  onChange={(e) => {
                    setFieldTouched('photo', true);
                    setFieldValue('photo', e.target.files?.[0]);
                  }}
                />
                <span className={s.uploadField__btn}>
                  Upload
                </span>
                <input
                  className={`${s.uploadField__label} ${errors.photo && touched.photo && s.error}`}
                  placeholder="Upload your photo"
                  readOnly
                  value={values?.photo?.name || ''}
                />
                <div className={s.uploadField__error}>
                  <ErrorMessage name="photo" />
                </div>
              </label>
            </div>

            <PrimaryBtn type="submit" disabled={isLoading}>Sign Up</PrimaryBtn>
          </form>
        )}
      </Formik>
    );
};
