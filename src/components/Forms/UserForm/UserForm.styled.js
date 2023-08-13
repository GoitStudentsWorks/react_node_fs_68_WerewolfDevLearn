import styled from 'styled-components';
import { Field, ErrorMessage as FormikErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const FormContainer = styled.div`
  padding: 60px 165px 60px 164px;
  /* background-color: black; */
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 14px;
`;

export const AvatarAddIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 85%;
  left: 60%;
  color: white;
  background-color: #3e85f3;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    background-color: #2b78ef;
  }
`;

export const AvatarInputField = styled.input`
  display: none;
`;

export const AvatarImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 124px;
  height: 124px;
  border: 2px solid #3e85f3;
  border-radius: 50%;
  /* border: none; */
  color: grey;
`;

export const AvatarImg = styled.img`
  width: 124px;
  height: 124px;
  border: 2px solid #3e85f3;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserNameTitle = styled.h2`
  margin: 0;
  margin-bottom: 8px;
`;

export const FormInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 44px 0 88px 0;
  width: 758px;
  position: relative;
`;

export const FormLabelSpan = styled.span`
  display: flex;
  margin-bottom: 8px;
  margin-top: 16px;
`;

export const InputField = styled(Field)`
  width: 354px;
  height: 46px;
  border: 1px solid rgba(17, 17, 17, 15%);
  border-radius: 8px;
  padding: 0 18px;
  margin-bottom: 8px;

  &:hover {
    border: 1px solid black;
  }
`;

export const DateInput = styled(DatePicker)`
  width: 354px;
  height: 46px;
  border: 1px solid rgba(17, 17, 17, 15%);
  border-radius: 8px;
  padding: 0 18px;

  &:hover {
    border: 1px solid black;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 12px;
  padding-left: 18px;
  color: red;
`;

export const FormBtn = styled.button`
  width: 262px;
  height: 48px;
  border: none;
  border-radius: 16px;
  color: white;
  background-color: #3e85f3;

  &:hover {
    background-color: #2b78ef;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-top: 50px; */

  position: absolute;
  /* top: 100%;
  left: 70%; */
  bottom: 8%;
  right: -8%;

  /* bottom: 240px;
  right: 500px; */
`;

export const ChangePassBtn = styled.button`
  width: 172px;
  height: 48px;
  border: none;
  border-radius: 16px;
  color: white;
  background-color: #3e85f3;
  margin-bottom: 10px;

  &:hover {
    background-color: #2b78ef;
  }
`;

export const DeleteProfileBtn = styled.button`
  width: 172px;
  height: 48px;
  border: none;
  border-radius: 16px;
  color: white;
  background-color: #fad91b;

  &:hover {
    background-color: red;
  }
`;
