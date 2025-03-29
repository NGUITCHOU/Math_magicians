import React, { useState, useEffect, useCallback } from 'react';

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(null);

  const fetchQuotes = useCallback(async () => {
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
      setError(null); // Clear any previous errors
    } catch (err) {
      setError(err.message);
    }
  }, []); // Ensure no dependencies here to avoid changes on every render

  useEffect(() => {
    // Fetch quotes immediately on mount
    fetchQuotes();

    const quotid = setInterval(() => {
      fetchQuotes();
    }, 10000);

    return () => {
      clearInterval(quotid);
    };
  }, [fetchQuotes]); // <- These dependencies should include fetchQuotes

  return (
    <div>
      <h1>Welcome to the Quote Page</h1>
      {error && (
        <p style={{ color: 'red' }}>
          Error:
          {' '}
          {error}
        </p>
      )}
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>
            {' '}
            {/* Ensure quote.id is unique */}
            <h4>{quote.author}</h4>
            <h5>{quote.quote}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quote;
