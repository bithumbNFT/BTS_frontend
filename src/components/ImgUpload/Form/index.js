import React, { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addAuction } from 'reducers/auction';
import { coinRequestAction } from 'reducers/chart';
import { Wrapper, ImgSection, ImageInput, InputSection } from './styles';

const Input = ({ label, regiName, register, ptn }) => (
  <>
    <label>{label}</label>
    <input
      {...register(regiName, { required: true, pattern: ptn })}
      autoComplete="off"
    />
  </>
);

const Textarea = ({ label, regiName, register }) => (
  <>
    <label>{label}</label>
    <textarea {...register(regiName, { required: true })} />
  </>
);

export function priceToString(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function UploadForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const watchPrice = watch('price');

  const [imgSrc, setImgSrc] = useState(undefined);
  const [imgData, setImgData] = useState();

  const getKlaytnData = () => dispatch(coinRequestAction());
  const { coinData } = useSelector(state => state.chartReducer);

  const uploadImageInput = useRef(null);

  // [TODO] debounce를 걸어야함 + error 처리
  useEffect(() => getKlaytnData(), [watchPrice]);
  const currentKLAYPrice = coinData?.now_price;

  const formData = new FormData();
  // console.log('errors', errors);

  // [TODO] form 제출
  const onSubmit = data => {
    const NFTInfo = {
      name: data.title,
      description: data.description,
      image: imgData.name,
      owner: String(JSON.parse(localStorage.getItem('userInfo')).id),
      auction: 'READY',
      price: data.price,
      term: parseInt(data.period, 10),
    };
    formData.append(
      'NFTInfo',
      new Blob([JSON.stringify(NFTInfo)], { type: 'application/json' }),
    );
    formData.append('image', imgData);

    dispatch(addAuction(formData));
  };

  const handlePrice = (price, klay) => {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(Number(price))) {
      return '숫자를 입력해주세요';
    }
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

  const goToPrevPage = () => {
    history.goBack();
  };

  const onImgDivClick = event => {
    event.preventDefault();
    uploadImageInput.current.click();
  };

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
        multiple
        onChange={onChangeImg}
      />
      <InputSection>
        <Input label="🎨 작품제목" regiName="title" register={register} />
        <Textarea
          label="🎬 작품설명"
          regiName="description"
          register={register}
        />
        <Input
          label="💰 경매시작가격(KLAY)"
          regiName="price"
          register={register}
          ptn={/\d+/}
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
              {...register('period', { required: true, pattern: /\d+/ })}
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
    </Wrapper>
  );
}

export default UploadForm;
