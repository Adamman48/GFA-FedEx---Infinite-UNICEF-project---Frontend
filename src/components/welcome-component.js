import React from "react";
import { Redirect } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div>
      <h1>Üdvözöllek a UNICEF Magyarorszag Ébresztőóra honlapján!</h1>
      <h3>Kíváncsiak vagyunk a véleményedre!</h3>
      <button type="button" onClick={() => {
      return (<Redirect to="/questions" />)
      }}>"Kérdések indítása!"</button>
    </div>
  );
};


export default WelcomePage;
