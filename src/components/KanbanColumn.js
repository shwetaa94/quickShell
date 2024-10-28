import React from 'react';
import KanbanCard from './KanbanCard';
import '../styles/KanbanColumn.css';

const KanbanColumn = ({ title, tickets, groupBy }) => {
    
  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'todo':
        return '/icons/icons_FEtask/To-do.svg';
      case 'in progress':
        return '/icons/icons_FEtask/in-progress.svg';
      case 'completed':
        return '/icons/icons_FEtask/Done.svg';
      case 'cancelled':
        return '/icons/icons_FEtask/Cancelled.svg';
      case 'backlog':
        return '/icons/icons_FEtask/Backlog.svg';
      default:
        return '/icons/icons_FEtask/To-do.svg';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 0:
        return '/icons/icons_FEtask/No-priority.svg';
      case 1:
        return '/icons/icons_FEtask/Low Priority.svg';
      case 2:
        return '/icons/icons_FEtask/Medium Priority.svg';
      case 3:
        return '/icons/icons_FEtask/High Priority.svg';
      case 4:
        return '/icons/icons_FEtask/Urgent Priority colour.svg';
      default:
        return '/icons/icons_FEtask/No-priority.svg';
    }
  }; // Added missing closing brace

  return (
    <div className="kanban-column">
      <div className="column-header">
        {groupBy === 'status' && (
          <img src={getStatusIcon(title)} alt={title} className="header-status-icon" />
        )}
        {groupBy === 'priority' && (
          <img src={getPriorityIcon(Number(title.split(' ')[0]))} alt={title} className="header-priority-icon" />
        )}
        <h2>{title}</h2>
        <div className="header-icons">
          <img src="icons/icons_FEtask/add.svg" alt="Add" className="header-icon" />
          <img src="icons/icons_FEtask/3 dot menu.svg" alt="Menu" className="header-icon" />
        </div>
      </div>
      {tickets.map((ticket) => (
        <KanbanCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default KanbanColumn;