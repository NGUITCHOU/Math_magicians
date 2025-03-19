import React, { useState } from 'react';

import { create, all } from 'mathjs';

const Calculator = () => {
  const math = create(all);
  const [displayValue, setDisplayValue] = useState('');

  const handleDisplayvalue = (value) => {
    setDisplayValue(displayValue + value);
  };
  const clearAll = () => {
    setDisplayValue('');
  };

  const clearOne = () => {
    setDisplayValue(displayValue.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      const result = math.evaluate(displayValue);
      setDisplayValue(String(result));
    } catch (error) {
      setDisplayValue('error you monkey');
    }
  };

  return (
        <div className="calculator">
        <div>
            <h1>Welcome to the calculator page</h1>
        </div>
        <div className="calculator-grid">

                <div className="calculator-set">
                   <input type="text" className="screen" value={displayValue}/>
                </div>
                <div>
                    <input type="button" value={'AC'} onClick={() => clearAll()}/>
                    <input type="button" value={'DE'} onClick={() => clearOne()}/>
                    <input type="button" value={'%'} onClick={() => handleDisplayvalue('%')}/>
                    <input type="button" value={'/'} onClick={() => handleDisplayvalue('/')}/>
                </div>
                <div>
                    <input type="button" value={7} onClick={() => handleDisplayvalue('7')}/>
                    <input type="button" value={8} onClick={() => handleDisplayvalue('8')}/>
                    <input type="button" value={9} onClick={() => handleDisplayvalue('9')}/>
                    <input type="button" value={'*'} onClick={() => handleDisplayvalue('*')}/>
                </div>
                <div>
                    <input type="button" value={4} onClick={() => handleDisplayvalue('4')}/>
                    <input type="button" value={5} onClick={() => handleDisplayvalue('5')}/>
                    <input type="button" value={6} onClick={() => handleDisplayvalue('6')}/>
                    <input type="button" value={'-'} onClick={() => handleDisplayvalue('-')}/>
                </div>

                <div>
                    <input type="button" value={1} onClick={() => handleDisplayvalue('1')}/>
                    <input type="button" value={2} onClick={() => handleDisplayvalue('2')}/>
                    <input type="button" value={3} onClick={() => handleDisplayvalue('3')}/>
                    <input type="button" value={'+'} onClick={() => handleDisplayvalue('+')}/>
                </div>
                <div>
                    <input type="button" value={'00'} onClick={() => handleDisplayvalue('00')}/>
                    <input type="button" value={0} onClick={() => handleDisplayvalue('0')}/>
                    <input type="button" value={'.'} onClick={() => handleDisplayvalue('.')}/>
                    <input type="button" value={'='} onClick={() => calculateResult()}/>
                </div>

        </div>
        </div>
  );
};

export default Calculator;