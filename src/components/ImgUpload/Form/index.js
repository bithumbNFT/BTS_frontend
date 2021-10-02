import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Wrapper, ImgSection, ImageInput, InputSection } from './styles';

const Input = ({ label, regiName, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register(regiName, { required })} autoComplete="off" />
  </>
);

const Textarea = ({ label, regiName, register, required }) => (
  <>
    <label>{label}</label>
    <textarea {...register(regiName, { required })} />
  </>
);

export function priceToString(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function UploadForm() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm();

  const [imgSrc, setImgSrc] = useState(undefined);
  const [imgData, setImgData] = useState({});

  const uploadImageInput = useRef(null);
  const watchPrice = watch('price');
  const currentKLAYPrice = 1542;

  // [TODO] form 제출
  const onSubmit = data => {
    data.file = imgData;
    console.log(data);
  };

  const handlePrice = (price, klay) => {
    const klayToWon = priceToString(price * klay);
    return `${klayToWon} ₩`;
  };

  const onChangeImg = evt => {
    if (evt.target.files.length) {
      const imgTarget = evt.target.files[0];
      console.log('imgTarget', imgTarget);
      // 업로드 이미지 미리보기
      const fileReader = new FileReader();
      fileReader.readAsDataURL(imgTarget);
      fileReader.onload = e => {
        setImgSrc(e.target.result);
        setImgData(imgTarget);
      };
    }
  };

  // const onImgChange = async event => {
  //   const formData = new FormData();
  //   formData.append('file', event.target.files[0]);
  //   // const response = await apiClient.post('/brand/logo_image', formData)
  // };

  const goToPrevPage = () => {
    history.goBack();
  };

  const onImgDivClick = event => {
    event.preventDefault();
    uploadImageInput.current.click();
  };

  // register -> formControlName 이라고 생각
  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <ImgSection onClick={onImgDivClick}>
        {imgSrc ? (
          <img src={imgSrc} alt="uploadImage" />
        ) : (
          <span>+ 이곳에 작품을 등록해주세요!</span>
        )}
      </ImgSection>
      <ImageInput
        ref={uploadImageInput}
        type="file"
        id="uploadImg"
        accept="image/*"
        name="file"
        // ref={register}
        onChange={onChangeImg}
      />
      <InputSection>
        <Input
          label="🎨 작품제목"
          regiName="title"
          register={register}
          required
        />
        <Textarea
          label="🎬 작품설명"
          regiName="description"
          register={register}
          required
        />
        <Input
          label="💰 경매시작가격(KLAY)"
          regiName="price"
          register={register}
          required
        />
        {watchPrice && <span>{handlePrice(watchPrice, currentKLAYPrice)}</span>}

        <>
          <label>📅 경매기간</label>
          <span className="date-info">
            &lsquo;경매시작&rsquo; 버튼을 누른 후 입력하신 기간동안 경매가
            진행됩니다.
          </span>
          <div className="date-input">
            <input
              {...register('period', { required: true })}
              autoComplete="off"
            />
            <select {...register('unit', { required: true })}>
              {['d', 'h', 'm', 's'].map(value => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </>
        <input type="submit" />
        <button type="button" onClick={goToPrevPage}>
          취소
        </button>
      </InputSection>
      {/* {errors.exampleRequired && <span>This field is required</span>} */}
    </Wrapper>
  );
}

export default UploadForm;
