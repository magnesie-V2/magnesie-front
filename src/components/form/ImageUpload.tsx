import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import "antd/dist/antd.css";
import useImageUpload from "../../hooks/form/useImageUpload";

const ImageUpload = () => {
  const {
    images,
    previewImage,
    previewImageTitle,
    handleImagesChange,
    handleOpenPreview,
    handleClosePreview,
    customImageUploadRequest,
  } = useImageUpload();

  return (
    <>
      <Upload
        multiple
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
