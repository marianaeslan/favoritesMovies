import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
`;

export const Input = styled.input`
  width: 300px;
  height: 45px;
  background-color: #0d0d0d;
  color: #ecefde;
  border: 1px solid #ecefde;
  padding: 0 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    background-color: #ecefde;
    color: #0d0d0d;
  }
`;

export const SearchButton = styled.button`
  height: 47px;
  padding: 0 16px;
  background-color: #ecefde;
  color: #0d0d0d;
  font-weight: 800;
  border: none;
  border-left: 1px solid #0d0d0d;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ced0c1;
    cursor: pointer;
  }
`;
