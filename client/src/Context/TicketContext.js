import React, { createContext, useCallback, useEffect, useState } from "react";
import { BASE_URL, getRequest, postRequest } from "../Services/util";

export const TicketContext = createContext();

const TicketContextProvider = ({ children, user }) => {
  const [ticketInfo, setTicketInfo] = useState({
    title: "",
    category: "",
    department: "",
    urgency: "",
    description: "",
    duration: "",
  });
  const [ticketError, setTicketError] = useState(null);
  const [isTicketSubmitting, setIsTicketSubmitting] = useState(false);
  const [successMessage, setSuccesssMessage] = useState(null);

  const [tickets, setTickets] = useState([]);
  const [filterRecords, setFilterRecords] = useState([]);

  useEffect(() => {
    let ticketTimeout;
    if (ticketError) {
      ticketTimeout = setTimeout(() => {
        setTicketError(null);
      }, 2000);
    }
    return () => {
      clearTimeout(ticketTimeout);
    };
  }, [ticketError]);

  useEffect(() => {
    let successTimeout;
    if (successMessage) {
      successTimeout = setTimeout(() => {
        setSuccesssMessage(null);
      }, 2000);
    }
    return () => {
      clearTimeout(successTimeout);
    };
  }, [successMessage]);

  const updateTicketInfo = useCallback(
    (info) => {
      setTicketInfo(info);
    },
    [ticketInfo]
  );

  const submitTicket = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setTicketError("");
        setIsTicketSubmitting(true);
        const response = await postRequest(
          `${BASE_URL}/tickets`,
          JSON.stringify(ticketInfo)
        );
        console.log(response);
        setIsTicketSubmitting(false);
        if (response.error) {
          return setTicketError(response.message);
        }
        clearInputs();
        setSuccesssMessage(response);
      } catch (e) {
        console.log(e);
        throw new Error(e);
      }
    },
    [ticketInfo]
  );

  const clearInputs = () => {
    setTicketInfo({
      title: "",
      category: "",
      department: "",
      urgency: "",
      description: "",
      duration: "",
    });
  };

  useEffect(() => {
    console.log("get tickets triggered");
    const getTickets = async () => {
      const response = await getRequest(`${BASE_URL}/tickets/${user?._id}`);
      setTickets(response);
      setFilterRecords(response);
    };
    getTickets();
  }, [ticketInfo, user]);

  return (
    <TicketContext.Provider
      value={{
        ticketInfo,
        updateTicketInfo,
        ticketError,
        isTicketSubmitting,
        successMessage,
        submitTicket,
        tickets,
        setTickets,
        filterRecords,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export default TicketContextProvider;
