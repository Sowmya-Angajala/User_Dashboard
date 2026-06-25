import { useState, useEffect } from "react";

export default function UserForm({
  isOpen,
  onClose,
  user,
  saveUser,
}) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  useEffect(() => {
    if (user) {
      setForm(user);
    } else {
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        department: "",
      });
    }
  }, [user]);

  const handleSubmit = () => {
    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.department
    ) {
      alert("All fields are required");
      return;
    }

    saveUser(form);
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          width: "400px",
          borderRadius: "10px",
        }}
      >
        <h2>
          {user ? "Edit User" : "Add User"}
        </h2>

        <input
          type="text"
          placeholder="First Name"
          value={form.firstName}
          onChange={(e) =>
            setForm({
              ...form,
              firstName: e.target.value,
            })
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="text"
          placeholder="Last Name"
          value={form.lastName}
          onChange={(e) =>
            setForm({
              ...form,
              lastName: e.target.value,
            })
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="text"
          placeholder="Department"
          value={form.department}
          onChange={(e) =>
            setForm({
              ...form,
              department: e.target.value,
            })
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            onClick={handleSubmit}
            style={{
              flex: 1,
              padding: "10px",
              background: "#3182ce",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Save
          </button>

          <button
            onClick={onClose}
            style={{
              flex: 1,
              padding: "10px",
              background: "#e2e8f0",
              border: "none",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}