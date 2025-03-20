import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(null);

  const fetchQuotes = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        method: 'GET',
        headers: {
          'X-Api-Key': 'hwO894pl2wS4hx7F2jZjVQ==wmZG2EEAD5bzteTg',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setQuotes(data);
    } catch (err) {
      error(err);
      setError(err.message);
    }
  };
  useEffect(() => {
    const quotid = setInterval(() => {
      fetchQuotes();
    },
    10000);
    return () => {
      clearInterval(quotid);
    };
  }, []);
  return (
        <div>
        <h1>Welcome to Quote page</h1>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        <ul>
            {quotes.map((quote, index) => (
                <li key={index}>
                <h4> {quote.author}</h4>
                    <h5>{quote.quote}</h5>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default Quote;