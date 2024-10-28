import React, { useEffect, useState } from "react";
import "../styles/KanbanCard.css";
import { fetchUsers } from "../api/ticketService";

const KanbanCard = ({ ticket }) => {
  console.log("ticket", ticket);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsersData = async () => {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
    };
    fetchUsersData();
  }, []);

  const username = React.useMemo(() => {
    const user = users.find((user) => user.id === ticket.userId); // Assuming ticket has userId
    return user ? user.name : "";
  }, [users, ticket]);

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

  const getInitials = (name) => {
    const parts = name.split(" ");
    return parts.length > 1
      ? parts[0][0] + parts[parts.length - 1][0]
      : parts[0][0];
  };

  const getRandomColor = () => {
    const colors = ["#007bff", "#28a745", "#dc3545", "#ffc107", "#17a2b8"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      className="kanban-card"
      style={{
        height: "auto", // Changed height from 80px to auto
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        position: "relative", // Added for positioning the initials icon
      }}
    >
      <div
        className="initials-icon"
        style={{
          position: "absolute",
          top: "15px", // Adjusted to move it down
          right: "8px",
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          backgroundColor: getRandomColor(),
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
        }}
      >
        {getInitials(username)}
      </div>
      <div
        className="card-header"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        <input
          type="checkbox"
          className="card-checkbox"
          onChange={(e) =>
            console.log(`Card ${ticket.id} checked:`, e.target.checked)
          }
        />
        <div style={{ maxWidth: "80%", overflowWrap: "break-word", whiteSpace: "normal" }}>
          <h4
            style={{
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            {ticket.title}
          </h4>
        </div>
      </div>
      <div
        className="feature-request"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "4px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
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
        <span
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {ticket.tag.join(", ")}
        </span>
      </div>
    </div>
  );
};

export default KanbanCard;
