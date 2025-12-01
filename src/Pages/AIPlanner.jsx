import React, { useState } from "react";
import toast from "react-hot-toast";

export default function AIPlanner() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [interests, setInterests] = useState("");
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  // ✈️ Generate AI travel plan
  const handleGenerate = async () => {
    if (!destination || !days || !interests) {
      toast.error("Please fill in all fields!");
      return;
    }
    setLoading(true);
    setResult(""); // clear previous result
    try {
      const prompt = `Plan a ${days}-day trip to ${destination} focusing on ${interests}. Include attractions, local experiences, and travel tips.`;
      const plan = await generateTripPlan(prompt);
      setResult(plan);
    } catch (error) {
      setResult("⚠️ Error generating trip plan. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Ask AI a travel question
  const handleAsk = async () => {
    if (!question) {
      toast.error("Please type your question!");
      return;
    }
    setLoading(true);
    setAnswer(""); // clear previous answer
    try {
      const reply = await askAIQuestion(question);
      setAnswer(reply);
    } catch (error) {
      setAnswer("⚠️ Error getting an answer. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4 text-amber-800">
        Plan Your Dream Trip ✈️
      </h1>

      {/* Trip Planner Section */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg space-y-4">
        <input
          type="text"
          placeholder="Destination (e.g., Paris)"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full border p-3 rounded"
        />
        <input
          type="number"
          placeholder="Number of days (e.g., 5)"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          className="w-full border p-3 rounded"
        />
        <input
          type="text"
          placeholder="Your interests (e.g., food, history, adventure)"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          className="w-full border p-3 rounded"
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="bg-[#FF6B35] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#FFD166] hover:text-[#1B263B] transition"
        >
          {loading ? "Generating..." : "Generate AI Travel Plan"}
        </button>

        {result && (
          <div className="mt-6 bg-gray-50 p-4 rounded-lg text-left">
            <h2 className="text-xl font-bold mb-2 text-blue-700">
              Your Travel Plan:
            </h2>
            <p className="whitespace-pre-line text-gray-700">{result}</p>
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-amber-800">
          Ask AI a Question 🤖
        </h2>
        <input
          type="text"
          placeholder="Type your travel question (e.g., Best time to visit Tokyo?)"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full border p-3 rounded"
        />
        <button
          onClick={handleAsk}
          disabled={loading}
          className="bg-[#FF6B35] w-50 text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#FFD166] hover:text-[#1B263B] transition"
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>

        {answer && (
          <div className="mt-4 bg-gray-50 p-4 rounded-lg text-left">
            <h3 className="font-bold mb-2 text-green-700">Answer:</h3>
            <p className="text-gray-700">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}
