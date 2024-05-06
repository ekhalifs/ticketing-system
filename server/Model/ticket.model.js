const ticketModel = require("./ticket.mongo");

async function insertTicket(data) {
  return await ticketModel.create(data);
}

async function getTicketsByUserId(data) {
  return await ticketModel.find(data);
}
module.exports = {
  insertTicket,
  getTicketsByUserId,
};
