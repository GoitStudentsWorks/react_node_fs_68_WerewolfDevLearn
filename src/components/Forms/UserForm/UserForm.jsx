import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
// import { toast } from 'react-hot-toast';
import { BsPlusCircle } from 'react-icons/bs';
import {
  FormContainer,
  AvatarAddIcon,
  AvatarContainer,
  AvatarInputField,
  AvatarImgContainer,
  AvatarImg,
  UserNameTitle,
  FormInputContainer,
  FormLabelSpan,
  InputField,
  DateInput,
  ErrorMessage,
  FormBtn
} from './UserForm.styled';

const SUPPORTED_FORMATS = ['image/webp', 'image/jpg', 'image/jpeg', 'image/gif', 'image/png'];
const PATTERN_FOR_PHONE = /^\+380\d{9}$/;

const schema = yup.object().shape({
  avatar: yup
    .mixed()
    .test(
      'fileType',
      'Only PNG, JPEG, JPG or GIF formats are supported',
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    ),
  name: yup
    .string('Enter your name')
    .max(16, 'Name is too long - should be 16 chars maximum.')
    .required('Name is required'),
  phone: yup.string().matches(PATTERN_FOR_PHONE, 'Invalid phone number'),
  birthday: yup.date('yyyy - mm - dd'),
  skype: yup.string().max(16, 'Too long - should be 16 chars maximum.'),
  email: yup.string('Enter your email').email('Invalid email').required('Email is required')
});

export default function UserForm({ avatarUrl, name, phone, birthday, skype, email }) {
  // const dispatch = useDispatch();
  // const userData = useSelector(getUser);
  const fileInputRef = useRef(null);

  const initialValues = {
    avatarUrl: avatarUrl || '',
    name,
    phone: phone || '',
    birthday,
    skype: skype || '',
    email
  };

  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [imagePreview, setImagePreview] = useState(initialValues.avatarUrl);
  const [selectedDate, setSelectedDate] = useState(new Date(initialValues.birthday || new Date()));

  const handleAddImageClick = () => fileInputRef.current.click();

  const handleDateChange = (date) => setSelectedDate(date);

  const handleSubmit = (values) => {
    const formData = new FormData();

    if (values.avatar) {
      formData.append('avatarUrl', values.avatar);
    }
    if (values.name) {
      formData.append('name', values.name.trim());
    }
    if (values.phone) {
      formData.append('phone', values.phone);
    }
    if (values.birthday) {
      formData.append('birthday', values.birthday);
    }
    if (values.skype) {
      formData.append('skype', values.skype.trim());
    }
    if (values.email) {
      formData.append('email', values.email.trim());
    }

    // dispatch(updateUserDataThunk(formData));

    const formDataObject = {};
    for (let [key, value] of formData.entries()) {
      formDataObject[key] = value;

      console.log(formDataObject);
    }

    // console.log(values);
    // console.log(formData);
    // resetForm();
  };

  const FormikInput = ({ label, type, name, placeholder }) => {
    return (
      <label htmlFor={name}>
        <FormLabelSpan>{label}</FormLabelSpan>
        <InputField id={name} type={type} name={name} placeholder={placeholder} />
        <ErrorMessage name={name} component="div" />
      </label>
    );
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
        // enableReinitialize
      >
        {(formik) => {
          return (
            <Form encType="multipart/form-data">
              <FormContainer>
                <AvatarContainer>
                  <AvatarAddIcon>
                    <BsPlusCircle onClick={handleAddImageClick} />
                  </AvatarAddIcon>
                  <label>
                    <AvatarInputField
                      type="file"
                      name="avatarUrl"
                      ref={fileInputRef}
                      onBlur={() => formik.setTouched({ avatar: true })}
                      onChange={(e) => {
                        const avatar = e.target.files[0];
                        console.log('AVATAR', avatar);

                        if (avatar && SUPPORTED_FORMATS.includes(avatar.type)) {
                          formik.setFieldValue('avatar', avatar);
                          setSelectedAvatar(URL.createObjectURL(avatar));
                          setImagePreview('');
                          return;
                        }
                      }}
                    />
                    {selectedAvatar && (
                      <AvatarImgContainer>
                        <AvatarImg src={selectedAvatar} alt={initialValues.name} />
                      </AvatarImgContainer>
                    )}
                    {imagePreview && (
                      <AvatarImgContainer>
                        <AvatarImg src={imagePreview} alt={initialValues.name} />
                      </AvatarImgContainer>
                    )}
                  </label>
                </AvatarContainer>
                <UserNameTitle>{name}</UserNameTitle>
                <h3>User</h3>
                <FormInputContainer>
                  <FormikInput label="User Name" type="text" name="name" placeholder="Enter name" />
                  <FormikInput label="Phone" type="tel" name="phone" placeholder="+380971234567" />
                  <label htmlFor="birthday">
                    <FormLabelSpan>Birthday</FormLabelSpan>
                    <DateInput
                      id="birthday"
                      name="birthday"
                      selected={selectedDate}
                      dateFormat="dd/MM/yyyy"
                      onChange={handleDateChange}
                    />
                    <ErrorMessage name="birthday" component="div" />
                  </label>
                  <FormikInput label="Skype" type="text" name="skype" placeholder="Enter skype" />
                  <FormikInput label="Email" type="email" name="email" placeholder="Enter email" />
                </FormInputContainer>
                <FormBtn type="submit" disabled={!formik.isValid || formik.isSubmitting}>
                  Save changes
                </FormBtn>
              </FormContainer>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
