import styled from '@emotion/styled';

export const Wrapper = styled.div`
  border-bottom: 1px solid #dbdbdb;
  width: 250px;
`;
export const UserInfo = styled.div`
  display: grid;
  place-items: center;
  margin: 2rem 0;
`;
export const ProfileImage = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const UserName = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
  margin-top: 1.2rem;
`;

export const UserEmail = styled.div`
  margin: 2rem;
  font-weight: 400;
  p {
    font-weight: 700;
    color: #9c9c9c;
    margin-bottom: 15px;
    font-size: 16px;
  }
  .desc {
    font-size: 16px;
  }
  .warn-msg {
    font-size: 16px;
    color: #9e9e9e;
    margin-bottom: 1rem;
    display: inline-block;
  }
  button {
    position: relative;
    font-weight: 500;
  }
  svg {
    vertical-align: middle;
    font-size: 1rem;
  }
  .menu {
    margin-top: 10px;
    padding: 20px 20px 0 20px;
    color: #000000;
    background: #ffffff;
    border-radius: 8px;
    position: absolute;
    width: 300px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  }

  .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  nav {
    .me {
      font-size: 16px;
      margin-bottom: 1.5rem;
    }
    div {
      &:nth-of-type(1) {
        color: #4a4a4a;
      }
    }
  }
`;

export const CopyInputBtn = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  margin-bottom: 1.5rem;
  border: 1px solid #d1d1d1;
  input {
    width: 100%;
    padding: 7px;
    color: #000000;
    border-right: 1px solid #d1d1d1;
    background-color: #f6f6f6;
    border-radius: 5px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    font-size: 14px;
  }
  button {
    width: fit-content;
    margin: 0;
    padding: 7px;
  }
`;
export const ImageInput = styled.input`
  display: none;
`;

export const EditButton = styled.button`
  border: 1px solid #d1d1d1;
  background-color: #f6f6f6;
  text-align: center;
  width: 90%;
  padding: 8px 15px;
  border-radius: 5px;
  margin: 0 1rem 1rem 1.2rem;
`;

export const SaveButton = styled.button`
  background-color: #fe5000;
  text-align: center;
  padding: 10px 0;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  width: 100%;
  font-size: 16px;
`;

export const CancelButton = styled.button`
  border: 1px solid #d1d1d1;
  background-color: #f6f6f6;
  text-align: center;
  padding: 5px 0;
  border-radius: 5px;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  padding-left: 15px;
`;

export const EditImgIcon = styled.div`
  padding: 5px;
  background-color: #ffffff;
  border: 1px solid #f6f6f6;
  text-align: center;
  position: absolute;
  top: 60%;
  left: 75%;
  border-radius: 50%;
  font-size: 1.2rem;
  color: #fe5000;
`;

export const InputBox = styled.input`
  width: 100%;
  border: 1px solid #dee2e6;
  font-size: 14px;
  padding: 5px;
  border-radius: 4px;
  background-color: #fff;
  line-height: 1.47;
`;

export const CopySuccess = styled.div`
  position: relative;
  background: #212121;
  border-radius: 3px;
  width: fit-content;
  height: 23px;
  position: absolute;
  top: 25px;
  right: 4px;
  span {
    color: #fff;
    font-size: 12px;
    padding: 0;
    margin: 10px;
    font-weight: 500;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-top-color: #212121;
    border-bottom: 0;
    margin-left: -6px;
    margin-bottom: -6px;
  }
`;
