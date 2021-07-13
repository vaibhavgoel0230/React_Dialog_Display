import React, { useState } from "react";
import ConfirmationDialog from "./components/ConfirmationDialog";

function App() {
  const [open, setOpen] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openWarn, setOpenWarn] = useState(false);
  return (
    <div className="absolute inset-0 font-sans bg-black">
      <ConfirmationDialog
        open={open}
        setOpen={setOpen}
        title="Are Your Sure?"
        okText="Yes"
        cancelText="No"
      />
      <ConfirmationDialog
        open={openConfirm}
        setOpen={setOpenConfirm}
        title="Confirmation"
        description="Are you sure you want to do this?"
        okText="Confirm"
      />
      <ConfirmationDialog
        open={openDelete}
        setOpen={setOpenDelete}
        title="Delete Note"
        description="Permanently delete this file"
        okText="Cancel"
        cancelText="Delete"
      />
      <ConfirmationDialog
        open={openWarn}
        setOpen={setOpenWarn}
        title="Warning!"
        description="Your Account will be locked"
      />
      <div className="flex flex-col items-center mt-32 bg-gray-200">
        <button
          className="border rounded border-black p-4 my-5 hover:bg-green-400"
          onClick={() => setOpenConfirm(true)}
        >
          Dialog Box 1
        </button>

        <button
          className="border rounded border-black p-4 my-5 hover:bg-red-400"
          onClick={() => setOpenDelete(true)}
        >
          Dialog Box 2
        </button>

        <button
          className="border rounded border-black p-4 my-5 hover:bg-yellow-400"
          onClick={() => setOpenWarn(true)}
        >
          Dialog Box 3
        </button>

        <button
          className="border rounded border-black p-4 my-5 hover:bg-blue-400"
          onClick={() => setOpen(true)}
        >
          Dialog Box 4
        </button>
      </div>
    </div>
  );
}

export default App;
