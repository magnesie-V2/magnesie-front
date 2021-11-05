import { RcFile, UploadFile } from "antd/lib/upload/interface";
import { useState } from "react";

const getBase64 = (image: RcFile) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

const useImageUpload = () => {
  const [previewImage, setPreviewImage] = useState<UploadFile | null>(null);

  const handleOpenPreview = async (image: UploadFile) => {
    if (!image.url && !image.preview && image.originFileObj) {
      image.preview = await getBase64(image.originFileObj);
    }
    setPreviewImage(image);
  };

  const handleClosePreview = () => {
    setPreviewImage(null);
  };

  const previewImageTitle =
    previewImage?.name ||
    previewImage?.url?.substring(previewImage?.url.lastIndexOf("/") + 1);

  const customImageUploadRequest: any = ({
    onSuccess,
  }: {
    onSuccess: () => void;
  }) => {
    onSuccess();
  };

  return {
    previewImage,
    previewImageTitle,
    handleOpenPreview,
    handleClosePreview,
    customImageUploadRequest,
  };
};

export default useImageUpload;
