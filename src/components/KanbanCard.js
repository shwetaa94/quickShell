import React from 'react';
import '../styles/KanbanCard.css';

const KanbanCard = ({ ticket }) => {
  const priorityLabels = ['No Priority', 'Low', 'Medium', 'High', 'Urgent'];

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

  return (
    <div className="kanban-card">
      <div className="card-header">
        <input 
          type="checkbox"
          className="card-checkbox"
          onChange={(e) => console.log(`Card ${ticket.id} checked:`, e.target.checked)}
        />
        <h3>{ticket.title}</h3>
      </div>
      <p></p>
      <span className={`priority-label priority-${ticket.priority}`}>
        {priorityLabels[ticket.priority]}
      </span>
      {/* Add the feature request label */}
      <div className="feature-request">
        <img 
          src="/icons/icons_FEtask/3 dot menu.svg" 
          alt="menu" 
          className="dot-menu"
        />
        <img 
          src={getStatusIcon(ticket.status)} 
          alt={ticket.status} 
          className="status-icon"
        />
        {ticket.tag.join(', ')}
      </div>
    </div>
  );
};

export default KanbanCard;
