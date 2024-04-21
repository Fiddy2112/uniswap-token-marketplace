import React, { Fragment, useState, useRef } from "react";
import { Loading } from "@nextui-org/react";
import { Dialog, Transition } from "@headlessui/react";

function TransactionStatus() {
  const [open, setOpen] = useState(true);

  // to prevent closing of the dialog
  function handleClose() {
    setOpen(true);
  }
  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        className="fixed z-[9999] inset-0 overflow-y-auto"
        as="div"
        onClose={handleClose}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="status inline-block align-bottom py-6 bg-white border rounded-lg text-center overflow-hidden shadow-xl transform transition-all md:w-[35%] sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="px-4 py-4 items-center justify-center sm:px-6 sm:flex sm:flex-row-reverse">
                <Loading>Completing the transaction</Loading>
              </div>
              <p className="px-4 py-4 sm:px-6 text-black sm:flex sm:flex-row-reverse items-center text-sm justify-center">
                (Transaction would usually take &lt; 12 secs...)
              </p>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default TransactionStatus;
