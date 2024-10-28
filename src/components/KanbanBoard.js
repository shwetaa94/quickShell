import React, { useState, useEffect } from 'react';
import { fetchTickets } from '../api/ticketService';
import KanbanColumn from './KanbanColumn';
import { groupTickets } from '../utils/groupTickets';
// import '../styles/KanbanBoard.css';
//backlog
const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [ordering, setOrdering] = useState('priority');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const loadTickets = async () => {
      const data = await fetchTickets();
      setTickets(data);
    };
    loadTickets();
  }, []);

  useEffect(() => {
    localStorage.setItem('kanbanGrouping', grouping);
    localStorage.setItem('kanbanOrdering', ordering);
  }, [grouping, ordering]);

  const groupedTickets = groupTickets(tickets, grouping, ordering);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="kanban-board" style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
      <div className="kanban-controls" style={{ position: 'relative' }}>
        <button className="display-button" onClick={toggleDropdown} style={{
          height: '32px',
          padding: '8px 12px',
          fontSize: '14px',
          cursor: 'pointer',
          backgroundColor: '#f5f5f5',
          border: '1px solid #ddd',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          
        <img 
          src="/icons/icons_FEtask/Display.svg" 
          alt="file" 
          className="file-icon"
        />
          Display
          <img 
            src="icons/icons_FEtask/down.svg" 
            alt="dropdown" 
            style={{ width: '16px', height: '16px' }}
          />
        </button>

        {isDropdownOpen && (
          <div className="display-dropdown" style={{
            position: 'absolute',
            top: '40px',
            left: '0',
            backgroundColor: 'white',
            border: '1px solid #ddd',
            borderRadius: '4px',
            padding: '8px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            minWidth: '200px'
          }}>
            <div>
              <span style={{
                display: 'block',
                marginBottom: '2px',
                fontSize: '14px',
                color: '#666'
              }}>Grouping</span>
              <select
                style={{
                  width: '100%',
                  padding: '4px',
                  marginBottom: '6px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
                value={grouping}
                onChange={(e) => setGrouping(e.target.value)}
              >
                <option value="status">Status</option>
                <option value="userId">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div>
              <span style={{
                display: 'block',
                marginBottom: '2px',
                fontSize: '14px',
                color: '#666'
              }}>Ordering</span>
              <select
                style={{
                  width: '100%',
                  padding: '4px',
                  marginBottom: '6px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
                value={ordering}
                onChange={(e) => setOrdering(e.target.value)}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
      <div style={{width: '100%', display: 'flex', gap: '16px', backgroundColor: '#F5F5F5' , padding:'16px',}}>
      {Object.keys(groupedTickets).map((groupKey) => (
        <KanbanColumn 
          key={groupKey} 
          title={groupKey} 
          tickets={groupedTickets[groupKey]} 
          groupBy={grouping}  // Add this prop
        />
      ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
