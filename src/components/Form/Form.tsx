import React, { FC, useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { addUser, getPositions } from '../../api/api';
import { Position } from '../../types/Position';
import TextField from './TextField';
import s from './Form.module.scss';
import successImage from './success-image.svg';
import { PrimaryBtn } from '../PrimaryBtn/PrimaryBtn';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});

interface Props {
  isSubmited: boolean,
  onSubmit: (state: boolean) => unknown
}

export const Form: FC<Props> = ({ isSubmited, onSubmit }) => {
  const [positions, setPositions] = useState<Position[]>([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+380');
  const [positionId, setPositionId] = useState(1);
  const [photo, setPhoto] = useState<File | null>(null);

  useEffect(() => {
    getPositions()
      .then(res => setPositions(res.positions));
  }, []);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setPhoto(file);
    }
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setPositionId(1);
    setPositionId(1);
    setPhoto(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('position_id', String(positionId));
    if (photo) {
      formData.append('photo', photo);
    }

    addUser(formData)
      .then(() => {
        onSubmit(true);
        clearForm();
      });
  };

  return isSubmited
    ? (
      <div className={s.success}>
        <h2 className={s.success__title}>User successfully registered</h2>
        <img src={successImage} alt="Success" className={s.success__image} />
      </div>
    )
    : (
      <form className={s.form} onSubmit={handleSubmit}>

        <ul className={s.form__textFieldList}>
          <li className={s.form__textFieldItem}>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              id="outlined-basic"
              label="Your name"
            />
          </li>

          <li className={s.form__textFieldItem}>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </li>

          <li className={s.form__textFieldItem}>
            <TextField
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              fullWidth
              id="outlined-basic"
              label="Phone"
              helperText="+38 (XXX) XXX - XX - XX"
            />
          </li>
        </ul>

        <div className={s.form__positionField}>
          <ThemeProvider theme={theme}>
            <FormControl>
              <h3 className={s.form__subtitle}>Select your position</h3>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                value={positionId}
                onChange={e => setPositionId(+e.target.value)}
              >
                {positions.map(position => (
                  <FormControlLabel
                    key={position.id}
                    value={position.id}
                    control={(
                      <Radio sx={{
                        color: '#D0CFCF',
                        padding: '5px',
                        marginRight: '7px',
                        '&.Mui-checked': {
                          color: '#00BDD3',
                        },
                      }}
                      />
                    )}
                    label={position.name}
                    style={{ fontFamily: 'Nunito' }}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </ThemeProvider>
        </div>

        <div className={s.form__imageField}>
          <label htmlFor="imageInput" className={s.uploadField}>
            <input
              className={s.uploadField__input}
              type="file"
              id="imageInput"
              onChange={handlePhotoChange}
            />
            <span className={s.uploadField__btn}>
              Upload
            </span>
            <input
              className={s.uploadField__label}
              placeholder="Upload your photo"
              value={photo?.name || ''}
            />
          </label>
        </div>

        <PrimaryBtn type="submit">Sign Up</PrimaryBtn>
      </form>
    );
};
