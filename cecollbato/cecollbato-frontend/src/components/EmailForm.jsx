import { useState } from "react";
import axios from "axios";

const EmailForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("/:email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // You can add more data if needed
      });

      if (response.ok) {
        // Handle success
        console.log("Email sent successfully!");
      } else {
        // Handle failure
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className="flex flex-col"
            onSubmit={handleSubmit}>
        <input className="text-red-500 bg-slate-50 border-2 border-rose-400 rounded-full p-2 m-4"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
            setEmail(e.target.value);
            }}
        />
        <button 
            className="text-cyan-500 bg-slate-200 border-solid"
            type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;