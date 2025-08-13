const inputEle = document.getElementById("ai");
const responseEle = document.getElementById("output");





// ⚠️ REPLACE this with your real Gemini API key for testing (then delete!)
const GEMINI_API_KEY = "AIzaSyBtw1RYZACUL3BU87OX0h_pqZV4eeWHgT8"; 

document.getElementById("click").addEventListener("click", async function () {
  const userMessage = inputEle.value;

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: userMessage
                }
              ]
            }
          ]
        })
      }
    );

    const data = await res.json();

    // Show the bot's response
    const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
    responseEle.textContent = botResponse;
  } catch (error) {
    console.error("Error:", error);
    responseEle.textContent = "Something went wrong.";
  }
});