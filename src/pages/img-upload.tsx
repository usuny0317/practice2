import { useRef, useState } from "react";
import styled from "styled-components";

const ImageUpload = () => {
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const newImageUrls = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setImagePreviews((prev) => [...prev, ...newImageUrls]);
  };

  return (
    <div>
      <button
        onClick={() => {
          fileInputRef.current?.click();
        }}
      >
        '+ 등록하기'
      </button>
      <HideInput
        type="file"
        accept="image/*"
        ref={fileInputRef}
        multiple
        onChange={handleUpload}
      />

      <ImageGrid>
        {imagePreviews.map((url, index) => (
          <ImagePreview key={index} src={url} alt={`preview-${index}`} />
        ))}
      </ImageGrid>
    </div>
  );
};
export default ImageUpload;

//스타일 컴포넌트

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 한 줄에 2개
  gap: 6px;
  overflow-y: auto;
  height: 358px;
`;

const ImagePreview = styled.img`
  width: 152px;
  height: 140px;
  border: 1px solid #efefef;
  border-radius: 9px;
  object-fit: cover;
  overflow: hidden;
`;

const HideInput = styled.input`
  display: none;
`;
