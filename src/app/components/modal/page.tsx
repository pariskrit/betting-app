"use client";
import CommonModal from "@/components/CommonModal";
import { DataTable } from "@/components/DataTable";
import CreateBookModal from "@/components/Modals/CreateBookModal/CreateBookModal";
import TextField from "@/components/TextField/TextField";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

import BetSlipModal from "@/components/BetSlip/BetSlipModal";
import BestSlipListItem from "@/components/BetSlip/BetSlipListItem/BestSlipListItem";
import { AccountsData, BET_SLIP_DATA, Table_Column } from "@/data/dummyData";

const Modal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [betSlipData, setBetSlipData] = useState(BET_SLIP_DATA);
  const handleModalStateChange = () => {
    setOpenModal((prev) => !prev);
  };
  const removeBetSlip = (index: number) => {
    setBetSlipData((prevBets) => prevBets.filter((_, i) => i !== index));
  };
  return (
    <main className="flex  h-screen overflow-auto flex-row items-start justify-start p-24 gap-5 bg-background">
      {/* modal with controller outside the modal-component */}
      <div>
        <h1 className="">Create Book Modal</h1>
        <Button
          variant="outline"
          className="w-40 bg-white rounded-[3px]"
          onClick={() => setOpenModal(true)}
        >
          Create Book
        </Button>
        {/* create book modal component */}
        <CreateBookModal
          modalState={openModal}
          handleModalStateChange={handleModalStateChange}
        />
      </div>

      {/* modals with controller inside the modal-component */}
      {/* footer component and trigger component can be passed as a prop */}
      <div>
        <h1 className="">Join Book</h1>
        <CommonModal
          modalTitle="Join Book"
          modalTrigger={
            <Button variant="outline" className="w-40 bg-white">
              Join Book
            </Button>
          }
          footerContent={
            <Button
              type="submit"
              className="bg-greenBg-500 h-[45px] text-[15px] flex-1  hover:bg-greenBg-400 text-white font-bold py-2 px-4 rounded-[3px] min-w-40"
            >
              Join
            </Button>
          }
        >
          <form className="flex justify-start items-center flex-col w-full gap-5">
            <TextField
              borderType="default"
              variant="large"
              placeholder="Invite Code"
              type="text"
              className="bg-white  text-[#282828]"
              disabled={false}
            />
          </form>
        </CommonModal>
      </div>
      <div>
        <h1 className="">Request Additional Chips</h1>
        <CommonModal
          modalTitle="Request Additional Chips"
          modalTrigger={
            <Button variant="outline" className="w-40 bg-white">
              Additional Chips
            </Button>
          }
          footerContent={
            <Button
              type="submit"
              className="bg-greenBg-500 h-[45px] text-[15px]  hover:bg-greenBg-400 text-white font-bold py-2 px-4 rounded-[3px] min-w-40"
            >
              Confirm
            </Button>
          }
        >
          <form className="flex justify-start items-center flex-col w-full gap-5">
            <TextField
              borderType="default"
              variant="large"
              placeholder="Chip Count"
              type="text"
              className="bg-white  text-[#282828]"
              disabled={false}
            />
          </form>
        </CommonModal>
      </div>
      <div>
        <h1 className="">Chips Request</h1>
        <CommonModal
          className="max-w-[790px]"
          modalTitle="Request Chips"
          modalTrigger={
            <Button variant="outline" className="w-40 bg-white">
              Chip Request
            </Button>
          }
        >
          <form className="flex justify-start items-center flex-col w-full gap-5">
            <DataTable
              data={AccountsData}
              columns={Table_Column}
              tableStyle=" border-0 rounded-xl w-full bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end overflow-hidden"
            />
            <TextField
              borderType="default"
              variant="large"
              placeholder="Chip Count"
              type="text"
              className="bg-white  text-[#282828]"
              disabled={false}
            />
            <div className="flex w-full justify-center items-center gap-10">
              <Button
                variant="destructive"
                className=" max-h-[45px] text-[15px]  bg-red-700 text-white font-bold py-2 px-4 rounded-[3px] min-w-40"
              >
                Disapprove
              </Button>
              <Button
                type="submit"
                className="bg-greenBg-500 max-h-[45px] text-[15px]  hover:bg-greenBg-400 text-white font-bold py-2 px-4 rounded-[3px] min-w-40"
              >
                Approve
              </Button>
            </div>
          </form>
        </CommonModal>
      </div>

      <div>
        <h1 className="">Withdrawal Request</h1>
        <CommonModal
          className="max-w-[790px]"
          modalTitle="Withdrawal Request"
          modalTrigger={
            <Button variant="outline" className="w-40 bg-white">
              Withdrawal Request
            </Button>
          }
        >
          <form className="flex justify-start items-center flex-col w-full gap-5">
            <DataTable
              data={AccountsData}
              columns={Table_Column}
              tableStyle=" border-0 rounded-xl w-full bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end overflow-hidden"
            />

            <div className="flex w-full justify-center items-center gap-10">
              <Button
                variant="destructive"
                className=" max-h-[45px] text-[15px] bg-red-700  text-white font-bold py-2 px-4 rounded-[3px] min-w-40"
              >
                Disapprove
              </Button>
              <Button
                type="submit"
                className="bg-greenBg-500 max-h-[45px] text-[15px]  hover:bg-greenBg-400 text-white font-bold py-2 px-4 rounded-[3px] min-w-40"
              >
                Approve
              </Button>
            </div>
          </form>
        </CommonModal>
      </div>

      <div>Betslip</div>
      <BetSlipModal
        slipTitle="Bet Slip"
        description="Bet Slip Detail"
        modalTrigger={
          <Button variant="outline" className="text-white">
            Bet Slip
          </Button>
        }
      >
        {/* remove all button */}
        {betSlipData?.length ? (
          <BestSlipListItem className="min-h-12">
            <div
              className="pl-4 cursor-pointer text-greenBg-500 text-[14px] flex justify-start items-center h-full font-medium"
              onClick={() => setBetSlipData([])}
            >
              Remove All
            </div>
          </BestSlipListItem>
        ) : null}

        {/* betslip items */}
        {betSlipData.map((bet, index) => (
          <BestSlipListItem
            key={index}
            title={bet.title}
            description={bet.description}
            odd={bet.odd}
            returns={bet.returns}
            onRemove={() => removeBetSlip(index)}
          />
        ))}
      </BetSlipModal>
    </main>
  );
};

export default Modal;
