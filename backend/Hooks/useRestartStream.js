export default async function useRestartStream(hls, token) {
    try {
      const response = await fetch("http://localhost:5000/api/ActiveStreams/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({ hls, token }), 
      });
  
     
      if (!response.ok) {
        throw new Error("Failed to restart stream");
      }
  
      
      const data = await response.json();
      console.log("Stream restarted successfully", data);
  
    } catch (error) {
      console.error("Error in restarting stream:", error); 
    }
  }