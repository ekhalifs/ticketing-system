const {
  createTicket,
  getUserTickets,
} = require("../Controllers/ticket.controller");
const express = require("express");
const ticketRouter = express.Router();

ticketRouter.post("/", createTicket);
ticketRouter.get("/:userId", getUserTickets);

module.exports = ticketRouter;
