import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.form`
  width: 100%;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: 16px;
  color: #919191;
`;

export const TextArea = styled.textarea`
  max-width: 100%;
  min-width: 100%;
  min-height: 120px;
  
  padding: 5px 0 0 10px;
  margin-top: 12px;
  
  background-color: #F5F5F5;
  
  border: 1px solid #ECECEC;
  border-radius: 10px;
  
  color: #565656;
  font-size: 14px;

  &:focus{
    outline: 1px solid #8363F690;
  }
`;

export const SubmitButton = styled.button`
  height: 48px;
  width: 100%;
  margin: 20px 0;
  
  justify-content: center;
  align-items: center;
  
  border: 1px solid #ECECEC;
  border-radius: 10px;
  
  cursor: pointer;
  background-color: #8363F6;
`;

export const Divisor = styled.div`
  margin-top: 20px;
  border-bottom: 2px solid #f2f2f2;
`;

export const ContentBlock = styled.div`
  margin-top: 15px;
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
  width: 100%;
  padding-bottom: 15px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 12px;
`;

export const Select = styled.select`
  width: 100%;
  min-height: 48px;
  padding: 10px;
  
  background-color: #F5F5F5;
  border: 1px solid #ECECEC;
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  -o-border-radius: 10px;
  
  color: #565656;
  font-size: 14px;

  &:focus{
    outline: 1px solid #8363F690;
  }

  @media (max-width: 640px){
    &:focus{
      outline: none;
    }
  }
`;

export const Option = styled.option`
  color: black;
`;

export const ErrorMessage = styled.p`
  font-size: 13px;
  text-align: left;
  color: #F66363;
  padding: 6px 0;
`;

export const ActionButton = styled.button`
  width: 100%;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  border-radius: 10px;
  border-width: 1px;

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
  font-size: 20px;
  color: #8363F6;
`;

export const SwalDescription = styled.p`
  font-size: 16px;
  color: #565656;
`;