import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH_AUTH, PATH_DASHBOARD } from 'src/routes/paths';
// third party
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useAuthContext } from 'src/auth/useAuthContext';
// UI Component
import AnimateButton from 'src/components/animate-button';
// Assets
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

type FormValuesProps = {
  email: string;
  password: string;
};

const AuthLogin = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const initialValues: FormValuesProps = {
    email: 'admin@test.com',
    password: '12345678',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
    password: Yup.string()
      .required('Password is required!')
      .min(8, 'At least 8 characters')
      .max(255)
      .matches(/^\S*$/, 'Must not contain spaces')
      .matches(/^(?=.*[!@#$%^&*])/, 'Must contain a special character'),
  });

  const onSubmit = async () => {
    try {
      setTimeout(() => {
        navigate(PATH_DASHBOARD.dashboard);
      }, 500);
    } catch (error) {
      navigate(PATH_AUTH.login);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const { values, handleBlur, handleChange, errors, touched, isSubmitting } = formik;

  return (
    <>
      <div className="w-full flex flex-col space-y-4 md:space-y-6">
        <div>
          <label htmlFor="email" className="block mb-2 text-md font-regular text-text-secondary">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-text-primary sm:text-sm rounded-lg focus:ring-primary-light focus:border-primary-light focus:outline-none block w-full p-2.5"
            placeholder="name@company.com"
          />
          {errors && errors.email && touched.email && (
            <p className="mt-2 text-error-dark text-sm">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-md font-regular text-text-secondary">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder={showPassword ? '12345678' : '••••••••'}
              className="bg-gray-50 border border-gray-300 text-text-primary sm:text-sm rounded-lg focus:ring-primary-light focus:border-primary-light focus:outline-none block w-full p-2.5 pr-8"
            />
            <div
              className="absolute top-0 bottom-0 right-0 flex items-center pr-3 cursor-pointer text-text-secondary hover:text-text-primary"
              onClick={handleClickShowPassword}
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </div>
          </div>
          {errors && errors.password && touched.password && (
            <p className="mt-2 text-error-dark text-sm">{errors.password}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                checked={checked}
                onChange={(event) => setChecked(event.target.checked)}
                className="w-4 h-4 border border-gray-300 rounded bg-transparent focus:ring-none focus-visible:outline-none"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="remember" className="text-gray-500 cursor-pointer">
                Remember me
              </label>
            </div>
          </div>
          <a href="#" className="text-sm font-medium text-text-primary hover:underline">
            Forgot password?
          </a>
        </div>
        <AnimateButton>
          <button
            type="submit"
            className="w-full text-white capitalize bg-primary-main hover:bg-primary-light focus:outline-none focus:ring-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={onSubmit}
            disabled={isSubmitting}
          >
            Sign in
          </button>
        </AnimateButton>
        <p className="text-sm font-light text-gray-500">
          Don’t have an account yet?{' '}
          <a href="#" className="font-medium text-primary-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </>
  );
};

export default AuthLogin;
