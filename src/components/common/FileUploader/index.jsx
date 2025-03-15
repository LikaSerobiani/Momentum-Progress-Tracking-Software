import { useState } from "react";
import PropTypes from "prop-types";
import Gallery from "../Icons/Gallery";
import TrashCircle from "../Icons/TrashCircle";
import ExclamationMark from "../Icons/ExclamationMark";

const FileUploader = ({ onFileChange, error }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
      onFileChange(selectedFile);
    }
  };

  const handleRemoveImage = () => {
    setFile(null);
    onFileChange(null);

    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.value = null;
    }
  };

  return (
    <div className="flex flex-col gap-[8px]">
      <label className="font-firaGo font-bold text-[14px] leading-[16.8px] text-gray-subheadline">
        ავატარი
      </label>
      <div className="relative w-[813px] h-[120px] rounded-[8px] border border-dashed border-borderGray error bg-white">
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleFileChange}
        />
        <label
          htmlFor="fileInput"
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
        >
          {!file ? (
            <div className="flex justify-center flex-col items-center gap-1">
              <Gallery />
              <p className="font-firaGo text-gray-subheadline text-[14px] ">
                ატვირთე ფოტო
              </p>
            </div>
          ) : (
            <img
              src={file}
              alt="Uploaded"
              className="absolute w-[88px] h-[88px] rounded-[100px] object-cover"
            />
          )}
        </label>
        {file && (
          <div
            className="absolute top-[80px] left-[428px] cursor-pointer"
            onClick={handleRemoveImage}
          >
            <TrashCircle />
          </div>
        )}
      </div>
      {error && (
        <div className="flex items-center gap-1 text-[14px] font-normal text-red font-firaGo">
          <ExclamationMark color="#F93B1D" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

FileUploader.propTypes = {
  onFileChange: PropTypes.func.isRequired,
};

export default FileUploader;
