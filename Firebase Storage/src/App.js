// App.js
import React, { useState } from "react";
import useFirestore from "./hooks/useFirestore";
import Form from "./components/Form";
import DataTable from "./components/DataTable";
import Notification from "./components/Notification"; // Import the Notification component
import "./styles.css";

const App = () => {
  const { data, addData, updateData, deleteData } = useFirestore();
  const [notification, setNotification] = useState({ message: "", type: "", visible: false });

  const showNotification = (message, type) => {
    setNotification({ message, type, visible: true });
  };

  const handleAddData = (formData) => {
    addData(formData);
    showNotification("Data added successfully!", "success");
  };

  const handleUpdateData = (id, updatedData) => {
    updateData(id, updatedData);
    showNotification("Data updated successfully!", "info"); // Pass "info" type for updates
  };

  const handleDeleteData = (id) => {
    deleteData(id);
    showNotification("Data deleted successfully!", "error"); // Pass "error" type for deletion
  };

  return (
    <div className="app">
      <h1>Firestore CRUD App</h1>
      <Form addData={handleAddData} />
      <DataTable
        data={data}
        updateData={handleUpdateData}
        deleteData={handleDeleteData}
      />
      {notification.visible && (
        <Notification
          message={notification.message}
          type={notification.type} // Pass the type to Notification
          onClose={() => setNotification({ ...notification, visible: false })}
        />
      )}
    </div>
  );
};

export default App;
