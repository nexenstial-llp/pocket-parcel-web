import React, { useState } from "react";
import { Button, Modal } from "antd";

import InvoiceSequence from "../InVoiceSequence";
const InvoiceSequenceModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="default" onClick={showModal}>
        + New Sequence
      </Button>
      <Modal
        title={
          <div className="pb-3 border-b border-gray-300">
            <h2 className="text-2xl">New Template</h2>
          </div>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        width={"50%"}
        centered
      >
        <InvoiceSequence />
      </Modal>
    </>
  );
};
export default InvoiceSequenceModal;
