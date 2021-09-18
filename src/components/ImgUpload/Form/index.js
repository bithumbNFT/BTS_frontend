import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Wrapper, ImgSection, ImageInput, InputSection } from './styles';

const Input = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} autoComplete="off" />
  </>
);

const Textarea = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <textarea {...register(label, { required })} />
  </>
);

export function priceToString(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
// you can use React.forwardRef to pass the ref too
// const Select = React.forwardRef(({ onChange, name, label }, ref) => (
//   <>
//     <label>{label}</label>
//     <select name={name} ref={ref} onChange={onChange}>
//       <option value="20">20</option>
//       <option value="30">30</option>
//     </select>
//   </>
// ));

function UploadForm() {
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm();
  const uploadImageInput = useRef(null);
  const watchPrice = watch('경매시작가격');
  // const [price, setPrice] = useState(watchPrice || 0);
  const currentKLAYPrice = 1542;
  const onSubmit = (data) => console.log(data);

  const handlePrice = (price, klay) => {
    const klayToWon = priceToString(price * klay);
    return `${klayToWon} ₩`;
  };

  const onImgChange = async (event) => {
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    // const response = await apiClient.post('/brand/logo_image', formData)
  };
  // setPrice(() => watchPrice * currentKLAYPrice);

  // useEffect(() => {
  //   setPrice();
  // }, [price]);

  const onImgDivClick = (event) => {
    event.preventDefault();
    uploadImageInput.current.click();
    console.log('click onImgae div');
  };

  console.log(typeof watch('경매시작가격'));
  // register -> formControlName 이라고 생각
  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <ImgSection onClick={onImgDivClick}>+ 이곳에 작품을 등록해주세요!</ImgSection>
      <ImageInput
        ref={uploadImageInput}
        type="file"
        id="uploadImg"
        accept="image/*"
        name="file"
        onChange={onImgChange}
      />
      <InputSection>
        <Input label="작품제목" register={register} required />
        {/* {errors.title && '제목을 입력해주세요'} */}
        <Textarea label="작품설명" register={register} required />
        <Input label="경매시작가격" register={register} required />
        {watchPrice && <span>{handlePrice(watchPrice, currentKLAYPrice)}</span>}
        <Input label="경매기간" register={register} required />
        <input type="submit" />
      </InputSection>
      {/* {errors.exampleRequired && <span>This field is required</span>} */}
    </Wrapper>
  );
}

export default UploadForm;
