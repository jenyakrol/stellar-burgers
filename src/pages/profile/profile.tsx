import { updateUserApi } from '@api';
import { getAuth, getUser, getUserAction } from '@slices/userSlice';
import { useDispatch, useSelector } from '@store';
import { ProfileUI } from '@ui-pages';
import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserAction());
  }, []);

  const auth = useSelector(getAuth);

  useEffect(() => {
    if (!auth) {
      navigate('/login', {
        state: {
          from: pathname
        }
      });
    }
  }, [auth]);

  /** TODO: взять переменную из стора */
  const user = useSelector(getUser);

  const [formValue, setFormValue] = useState({
    name: user.name,
    email: user.email,
    password: ''
  });

  useEffect(() => {
    setFormValue((prevState) => ({
      ...prevState,
      name: user.name || '',
      email: user.email || ''
    }));
  }, [user]);

  const isFormChanged =
    formValue.name !== user?.name ||
    formValue.email !== user?.email ||
    !!formValue.password;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    updateUserApi(formValue).then(() => dispatch(getUserAction()));
    setFormValue((prevState) => ({ ...prevState, password: '' }));
  };

  const handleCancel = (e: SyntheticEvent) => {
    e.preventDefault();
    setFormValue({
      name: user.name,
      email: user.email,
      password: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <ProfileUI
      formValue={formValue}
      isFormChanged={isFormChanged}
      handleCancel={handleCancel}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
    />
  );
};
