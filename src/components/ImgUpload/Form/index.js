import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
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
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm();

  const [imgSrc, setImgSrc] = useState(undefined);
  const uploadImageInput = useRef(null);
  const watchPrice = watch('price');
  const currentKLAYPrice = 1542;
  const onSubmit = (data) => console.log(data);

  const handlePrice = (price, klay) => {
    const klayToWon = priceToString(price * klay);
    return `${klayToWon} ₩`;
  };

  const onChangeImg = (evt) => {
    if (evt.target.files.length) {
      const imgTarget = evt.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(imgTarget);
      fileReader.onload = (e) => {
        setImgSrc(e.target.result);
      };
    }
  };

  // const onImgChange = async event => {
  //   const formData = new FormData();
  //   formData.append('file', event.target.files[0]);
  //   // const response = await apiClient.post('/brand/logo_image', formData)
  // };

  const onImgDivClick = (event) => {
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
        <Input
          label="📅 경매기간"
          regiName="period"
          register={register}
          required
        />
        <input type="submit" />
      </InputSection>
      {/* {errors.exampleRequired && <span>This field is required</span>} */}
    </Wrapper>
  );
}

export default UploadForm;