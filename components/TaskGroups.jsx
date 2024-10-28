const TaskGroups = () => {
  return (
    <div className="task-groups-container">
      {/* No Priority Group */}
      <div className="task-group">
        <div className="group-header">
          <img 
            src="/icons/icons_FEtask/No-priority.svg" 
            alt="No priority"
            className="priority-icon" 
          />
          <span>No priority</span>
          <span className="task-count">2</span>
        </div>
        {/* Task list content */}
      </div>

      {/* Urgent Priority Group */}
      <div className="task-group">
        <div className="group-header">
          <img 
            src="/icons/icons_FEtask/SVG - Urgent Priority colour.svg" 
            alt="Urgent priority"
            className="priority-icon" 
          />
          <span>Urgent</span>
          <span className="task-count">2</span>
        </div>
        {/* Task list content */}
      </div>

      {/* High Priority Group */}
      <div className="task-group">
        <div className="group-header">
          <img 
            src="/icons/icons_FEtask/Img - High Priority.svg" 
            alt="High priority"
            className="priority-icon" 
          />
          <span>High</span>
          <span className="task-count">3</span>
        </div>
        {/* Task list content */}
      </div>

      {/* Medium Priority Group */}
      <div className="task-group">
        <div className="group-header">
          <img 
            src="/icons/icons_FEtask/Img - Medium Priority.svg" 
            alt="Medium priority"
            className="priority-icon" 
          />
          <span>Medium</span>
          <span className="task-count">2</span>
        </div>
        {/* Task list content */}
      </div>
    </div>
  );
};
