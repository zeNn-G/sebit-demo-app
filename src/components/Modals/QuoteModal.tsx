import { Modal, Button } from "flowbite-react";
import { useState } from "react";
import { Icon } from "@iconify/react";

type Props = {};

const QuoteModal = (props: Props) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Icon
        icon="material-symbols:new-window"
        onClick={() => setVisible(true)}
        className="w-6 h-6 text-purple-400 cursor-pointer"
      />
      <Modal
        show={visible}
        size="md"
        popup={true}
        onClose={() => setVisible(false)}
        className="bg-postBg text-postBg"
      >
        <Modal.Header>
          <div className="bg-postBg">
            <h1>Modal</h1>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="bg-postBg">
            <h3 className="mb-5 text-lg font-normal">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4"></div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default QuoteModal;
