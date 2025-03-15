import Modal from "./Modal";
import CheckCircle from "../Icons/CheckCircle";

export default function Success({ title, showModal, handleClose }) {
  return (
    <Modal isModalOpen={showModal} onClose={handleClose} padding="58px 107px">
      <div className="flex justify-center flex-col items-center gap-[20px]">
        <CheckCircle />
        <span className="text-[22px] leading-[24px] text-gray-headline font-normal font-firaGo">
          {title}
        </span>
      </div>
    </Modal>
  );
}
