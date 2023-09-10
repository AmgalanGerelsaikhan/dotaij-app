import ReactModal from "react-modal";

export default function GalleryImage({ src, isOpen, onRequestClose }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Gallery Image"
      className="modal fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="overlay fixed inset-0 bg-black opacity-70"
    >
      <img src={src} alt="Gallery" className="modal-image max-h-screen max-w-full" />
      <button onClick={onRequestClose} className="modal-close-button absolute top-4 right-4 text-white text-lg font-bold">
        Close
      </button>
    </ReactModal>
  );
}
