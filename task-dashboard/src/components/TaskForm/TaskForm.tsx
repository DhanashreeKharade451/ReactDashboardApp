import React, { useState } from 'react';

interface Props {}

const SimpleInputForm: React.FC<Props> = () => {
  const [name, setName] = useState<string>(''); // State holds the input value

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update state when the input changes
    setName(event.target.value);
  };

  return (
    <form>
      <label htmlFor="nameInput">Name:</label>
      <input
        type="text"
        id="nameInput"
        value={name} // Input value is controlled by state
        onChange={handleChange} // State is updated on change
      />
      <p>Current value: {name}</p>
    </form>
  );
};

export default SimpleInputForm;