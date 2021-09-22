import axios from 'axios';

// 서버주소 입력
const API_SERVER_PATH = 'http://localhost:8081';

export const kakaoLogin = async code => {
  const response = await axios({
    method: 'GET',
    url: `${API_SERVER_PATH}/test?code=${code}`,
  });

  return response;
};

export const naverLogin = async (code, state) => {
  const response = await axios({
    method: 'GET',
    url: `${API_SERVER_PATH}/test?code=${code}&state=${state}`,
  });

  return response;
};
