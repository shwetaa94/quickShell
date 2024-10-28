const priorityLabels = ['No Priority', 'Low', 'Medium', 'High', 'Urgent'];

export const groupTickets = (tickets, grouping, ordering) => {
  const groups = {};
  
  tickets.forEach((ticket) => {
    let groupKey;
    if (grouping === 'priority') {
      groupKey = priorityLabels[ticket.priority]; // Use priority label instead of number
    } else {
      groupKey = ticket[grouping];
    }
    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(ticket);
  });
  
  if (ordering === 'priority') {
    for (const key in groups) {
      groups[key].sort((a, b) => b.priority - a.priority);
    }
  } else if (ordering === 'title') {
    for (const key in groups) {
      groups[key].sort((a, b) => a.title.localeCompare(b.title));
    }
  }
  
  return groups;
};
