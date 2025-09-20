import { useState, useEffect } from "react";

export default function QuoteOfTheDay() {
  const quotes = [
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Success is not for the lazy.",
    "Don’t stop until you’re proud.",
    "Dream it. Wish it. Do it.",
    "Failure is simply the opportunity to begin again, this time more intelligently. – Henry Ford",
    "Stay positive, work hard, make it happen.",
    "Success is not final; failure is not fatal: It is the courage to continue that counts.” —Winston Churchill",
    "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.” —Helen Keller",

  ];

  const [quote, setQuote] = useState("");

  useEffect(() => {
    // Pick a random quote based on the current date (so it changes daily)
    const today = new Date().toDateString();
     const index =Math.abs(today.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)) % quotes.length;
    setQuote(quotes[index]);
  }, []);

  return (
    <div className="bg-gradient-to-r from-orange-200 to-pink-200 text-gray-800 p-4 rounded-lg shadow-md my-6 text-center">
      <h2 className="text-xl font-semibold mb-2">Quote of the Day:-</h2>
      <p className="italic">“{quote}”</p>
    </div>
  );
}
