import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* flex-direction: row; */
`;

export const Content = styled.form`
  width: 100%;
  flex-direction: column;
  /* margin-top: 20px; */
`;

export const Label = styled.span`
  font-size: 16px;
  color: #919191;
`;

export const TextArea = styled.textarea`
  margin-top: 12px;
  background-color: #F5F5F5;
  border: 1px solid #ECECEC;
  min-height: 120px;
  border-radius: 10px;
  color: #565656;
  font-size: 14px;
  padding: 5px 0 0 10px;
  max-width: 100%;
  min-width: 100%;


  &:focus{
    outline: 1px solid #8363F690;
  }
`;

export const SubmitButton = styled.button`
  background-color: #8363F6;
  border: 1px solid #ECECEC;
  height: 48px;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;

  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const Divisor = styled.div`
  /* margin: 20px 0 16px 0; */
  margin-top: 20px;
  /* border-color: #F2F2F2; */
  /* border-bottom-width: 2px; */
  border-bottom: 2px solid #f2f2f2;
`;

export const ContentBlock = styled.div`
  /* margin-top: 8px; */
  margin-top: 15px;
  /* margin: 15px 0; */
  /* border: 1px solid red; */
`;

export const RadioButtonText = styled.p`
  font-size: 14px;
  color: #565656;
  word-break: break-all;
`

export const SelectArea = styled.div`
  margin-top: 12px;
`;

export const SelectWrapper = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  /* border: 1px solid red; */
  gap: 12px;
`;

export const Select = styled.select`
  background-color: black;
  width: 100%;
  /* min-width: 41%; */
  min-height: 48px;
  background-color: #F5F5F5;
  border: 1px solid #ECECEC;
  color: #565656;
  font-size: 14px;
  padding: 10px;
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  -o-border-radius: 10px;
  /* padding: 0 10px; */

  &:focus{
    outline: 1px solid #8363F690;
  }

  @media (max-width: 640px){
    &:focus{
      /* outline: 1px solid #8363F690; */
      outline: none;
      /* outline-offset: 1px solid #8363F690 */
    }
  }
`;

export const Option = styled.option`
  color: black;
`;

export const ErrorMessage = styled.p`
  /* position: absolute; */
  color: #F66363;
  /* top: 0; */
  font-size: 13px;
  text-align: left;
  padding: 6px 0;
  /* padding-bottom: 10px; */
`;

export const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  /* color: #000; */
  /* margin-bottom: 10px; */
  /* max-width: 48px; */
  cursor: pointer;
  width: 100%;
  height: 48px;
  border-radius: 10px;
  border-width: 1px;
  /* border-style: dashed; */
  /* background-color: #FFE4E4; */
  /* transition: all 0.3s;
  &:hover{
    background-color: #F66363;
  } */
  transition: all 0.3s;
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px -1px, rgba(0, 0, 0, 0.005) 0px 2px 40px -1px;
  }
  &:focus{
    outline: none;
  }
`;

export const ActionButtonText = styled.p`
  font-size: 16px;
  color: #8363F6;
`;

export const SwalTitle = styled.span`
  color: #8363F6;
  font-size: 20px;
`;

export const SwalDescription = styled.p`
  color: #565656;
  font-size: 16px;
`;