import React from 'react';

import styled from 'styled-components';
import '@ejemplo/counter';

const StyledApp = styled.div`
  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 50px auto;
`;

export const App = () => {
  const [value, setValue] = React.useState(20);
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.styled-components file.
   */
  return (
    <StyledApp>
      <my-counter></my-counter>
      <my-counter value={value} step="5"></my-counter>
    </StyledApp>
  );
};

export default App;
