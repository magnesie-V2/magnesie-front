import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import { UploadChangeParam, UploadFile } from "antd/lib/upload/interface";
import useImageUpload from "../../hooks/form/useImageUpload";

type ImageUploadProps = {
  images: UploadFile[];
  handleImagesChange: ({ fileList }: UploadChangeParam<UploadFile>) => void;
};

const ImageUpload = ({ images, handleImagesChange }: ImageUploadProps) => {
  const {
    previewImage,
    previewImageTitle,
    handleOpenPreview,
    handleClosePreview,
    customImageUploadRequest,
  } = useImageUpload();
  return (
    <>
      <Upload
        multiple
        accept="image/*"
        listType="picture-card"
        fileList={images}
        onPreview={handleOpenPreview}
        onChange={handleImagesChange}
        customRequest={customImageUploadRequest}
      >
        <div>
          <PlusOutlined />
          <div className="mt-2">Importer</div>
        </div>
      </Upload>
      <Modal
        centered
        visible={!!previewImage}
        title={previewImageTitle}
        onCancel={handleClosePreview}
        footer={null}
      >
        <img
          className="w-full"
          alt={previewImageTitle}
          src={previewImage?.url || previewImage?.preview}
        />
      </Modal>
    </>
  );
};

export default ImageUpload;
