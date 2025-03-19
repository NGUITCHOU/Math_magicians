import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(null);

  const fetchQuotes = async() =>{
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
          method: 'GET',
          headers: {
            'X-Api-Key': 'VBYixFI8vUY8+Gu8yob7iw==wyzA3zkD7bM06NC2', 
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setQuotes(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };
useEffect(()=>{
    const quotid = setInterval(() =>{
    fetchQuotes();
},
 20000);
return()=>{
    clearInterval(quotid);
};
}, []);
  return (
        <div>
        <h1>Welcome to Quote page</h1>
        <h1>Quotes</h1>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        <ul>
            {quotes.map((quote, index) => (
                <li key={index}>
                    <strong>{quote.quote}</strong> - {quote.author}
                </li>
            ))}
        </ul>
    </div>
  );
};
export default Quote;