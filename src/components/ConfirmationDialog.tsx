import React, { Fragment } from "react";
import { ExclamationIcon, XCircleIcon } from "@heroicons/react/outline";
import { Transition, Dialog } from "@headlessui/react";

interface Props {
  open?: boolean;
  title: string;
  description?: string;
  okText?: string;
  cancelText?: string;
  setOpen: (open: false) => void;
}

const ConfirmationDialog: React.FC<Props> = ({
  open,
  setOpen,
  title,
  description,
  okText,
  cancelText,
}) => {
  console.log(open);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog open={open} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          entered="opacity-50"
          enterTo="opacity-50"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-50"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay
            className={"fixed inset-0 z-30 bg-black"}
          ></Dialog.Overlay>
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition-transform duration-300"
          enterFrom="-translate-y-full"
          enterTo="translate-y-0"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-50"
          leaveTo="opacity-0"
        >
          <div className="fixed transform rounded-xl p-5 left-1/2 bg-gray-200 top-1/2 -mt-32 -ml-36 w-72 z-40 border-4 border-black">
            <button onClick={() => setOpen(false)}>
              <XCircleIcon className="absolute top-5 left-60 text-black hover:text-red-600 w-6"></XCircleIcon>
            </button>
            <ExclamationIcon className="text-primary-400 w-20 py-2 m-auto text-gray-600"></ExclamationIcon>
            <h4 className="text-center text-2xl pb-2">{title}</h4>
            {description && <p className="text-center pb-3">{description}</p>}
            <div className="flex justify-between">
              <button
                className="px-4 border text-white rounded-xl bg-green-700 hover:bg-green-600"
                onClick={() => setOpen(false)}
              >
                {okText}
              </button>
              <button
                className="px-4 border text-white rounded-xl bg-red-700 hover:bg-red-600"
                onClick={() => setOpen(false)}
              >
                {cancelText}
              </button>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

ConfirmationDialog.defaultProps = {
  open: false,
  okText: "Ok",
  cancelText: "Cancel",
};
export default ConfirmationDialog;
