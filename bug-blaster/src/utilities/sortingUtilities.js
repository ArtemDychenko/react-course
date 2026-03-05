export const sortTickets = (tickets, sortPreference) => {
  switch (sortPreference) {
    case "High to Low":
      return [...tickets].sort((a, b) => b.priority - a.priority);
    case "Low to High":
      return [...tickets].sort((a, b) => a.priority - b.priority);
    default:
      return tickets;
  }
};
