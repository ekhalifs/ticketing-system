const { insertTicket, getTicketsByUserId } = require("../Model/ticket.model");

async function createTicket(req, res) {
  const {
    userId,
    title,
    category,
    department,
    urgency,
    description,
    duration,
  } = req.body;

  if (
    !userId ||
    !title ||
    !category ||
    !department ||
    !urgency ||
    !description ||
    !duration
  ) {
    return res.status(400).json("All fields are required");
  }

  try {
    await insertTicket({
      userId,
      title,
      category,
      department,
      urgency,
      description,
      duration,
    });
    return res.status(201).json("Ticket submitted successfully");
  } catch (e) {
    console.log(e);
    return res.status(500).json("internal server error");
  }
}

async function getUserTickets(req, res) {
  const { userId } = req.params;
  try {
    const response = await getTicketsByUserId({ userId });
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(500).json("internal server error");
  }
}

module.exports = {
  createTicket,
  getUserTickets,
};
