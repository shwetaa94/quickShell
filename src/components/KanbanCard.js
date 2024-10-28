import React from "react";
import "../styles/KanbanCard.css";

const KanbanCard = ({ ticket }) => {
  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case "todo":
        return "/icons/icons_FEtask/To-do.svg";
      case "in progress":
        return "/icons/icons_FEtask/in-progress.svg";
      case "completed":
        return "/icons/icons_FEtask/Done.svg";
      case "cancelled":
        return "/icons/icons_FEtask/Cancelled.svg";
      case "backlog":
        return "/icons/icons_FEtask/Backlog.svg";
      default:
        return "/icons/icons_FEtask/To-do.svg";
    }
  };

  return (
    <div className="kanban-card" style={{ height: "60px", display: "flex", flexDirection: "column", overflow: "hidden", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <div className="card-header" style={{ display: "flex", alignItems: "center", gap: "8px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
        <input
          type="checkbox"
          className="card-checkbox"
          onChange={(e) =>
            console.log(`Card ${ticket.id} checked:`, e.target.checked)
          }
        />
        <h4 style={{ fontSize: "14px", fontWeight: "700", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{ticket.title}</h4>
      </div>
      <div
        className="feature-request"
        style={{ display: "flex", alignItems: "center", gap: "8px", padding: "4px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
      >
        <img
          src="/icons/icons_FEtask/3 dot menu.svg"
          alt="menu"
          className="dot-menu"
          style={{ marginRight: "8px" }}
        />
        <div
          className="status-circle"
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#D3D3D3",
            marginRight: "8px"
          }}
        />
        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{ticket.tag.join(", ")}</span>
      </div>
    </div>
  );
};

export default KanbanCard;
