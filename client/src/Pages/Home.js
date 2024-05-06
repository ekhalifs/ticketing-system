import React, { useState } from "react";
import Modal from "./Modal/Modal";
import ActiveTickets from "./ActiveTickets";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px",
      }}
    >
      <div>
        <h2 className="text-center">Generate a new ticket</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              padding: "15px 60px",
              backgroundColor: "green",
              borderRadius: "15px",
              fontSize: "20px",
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              width: "250px",
            }}
            role="button"
            onClick={() => setOpenModal(true)}
          >
            New ticket
          </p>
        </div>
        {openModal && <Modal closeModal={setOpenModal} />}
        <ActiveTickets />
      </div>
    </div>
  );
};

export default Home;
