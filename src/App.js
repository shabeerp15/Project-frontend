// import { useState, useEffect } from "react";
import HomeMain from "./component/Home-Main/HomeMain";
// import Login from "./component/Login/Login";
// import Register from "./component/Register/Register";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Admin } from "./component/admin/Admin";


function App() {

  // const [data,setData] = useState([])

  // useEffect(()=>{
  //   fetch('http://localhost:9000/')
  //   .then(res => res.text())
  //   .then(res => setData(res))
  // },[])

  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact >  <HomeMain />  </Route>
          {/* <Route path="/login" >  <Login />  </Route> */}
          {/* <Route path="/register" >  <Register />  </Route> */}
        </div>
        <Route path="/admin"  > <Admin /></Route>
      </Switch>
    </Router>
  );
}

export default App;
