const API_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

export const fetchTickets = async () => {
  try {
    const response = await fetch(API_URL);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.tickets;
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return [];
  }
};

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_URL}`);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
