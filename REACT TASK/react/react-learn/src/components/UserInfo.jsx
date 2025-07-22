import React, { useState, useEffect } from "react";

function UserInfo() {
  const [user, setUser] = useState(null);        // For storing user data
  const [loading, setLoading] = useState(true);  // For loading state
  const [error, setError] = useState(false);     // For error state

  useEffect(() => {
    // Function to fetch user data
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:3500/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const userData = await response.json();
        setUser(userData[0]);       // Get the first user from the array
        setLoading(false);          // Stop loading
      } catch (err) {
        setError(true);             // Set error state if fetch fails
        setLoading(false);          // Stop loading
      }
    };

    fetchUserData();  // Call fetch function on mount
  }, []); // Empty dependency array ensures it runs only once

  // Conditional rendering
  if (loading) {
    return <h2>Loading data…</h2>;
  }

  if (error || !user) {
    return <h2>Error fetching data</h2>;
  }

  return (
    <div>
      <h2>User Information</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
}

export default UserInfo;
