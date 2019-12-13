import React, {useState} from 'react';
import {
  useLocation,
  Link,
} from "react-router-dom";

const Page1 = () => {
  const [somedata, setSomeData] = useState('');

  let location = useLocation();

  return (
    <div>
      <button onClick={() => setSomeData('tatata')}>
        Set some state
      </button>
      <h1>Page 1</h1>
      <p>{somedata && `Some state: ${somedata}`}</p>
      <Link
        to={{
          pathname: `/modal?id=12`,
          // This is the trick! This link sets
          // the `background` in location state.
          state: { background: location }
        }}
      >MODAL</Link>
    </div>
  );
}

export default Page1;