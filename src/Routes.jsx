import React from 'react';
import {
  useLocation,
  Switch,
  Route,
} from "react-router-dom";
import Page1 from './components/page1/Page1';
import Page2 from './components/page2/Page2';
import Modal from './components/modal/Modal';

function App() {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (

    // This piece of state is set when one of the
    // modal links is clicked. The `background` state
    // is the location that we were at when one of
    // the modal links was clicked. If it's there,
    // use it as the location for the <Switch> so
    // we show the modal in the background, behind
    // the modal.

    <div>
      <Switch location={background || location}>
        <Route exact path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/modal" component={Modal} />
      </Switch>

      {background && <Route path="/modal" component={Modal} />}
    </div>
  );
}

export default App;
