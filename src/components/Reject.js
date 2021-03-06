import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import "../stylesheets/App.scss";
import "../stylesheets/components/Confirmation.scss";

const Reject = () => {
  return (
    <div className="confirmation__container">
      <div className="confirmation__wrap">
        <h2 className="confirmation__title">Solicitud de vacaciones Denegada</h2>
        <p className="confirmation__text">
          La solicitud de las vacaciones de <strong>Sara Marín</strong> para el día <span className="confirmation__date">09/10/2019</span> ha sido <strong>denegada</strong>.
          Lo sentimos.
      </p>
        <Link to="/gestor">
          <Button name="Volver a solicitudes" />
        </Link>
      </div>
    </div>
  );
};

export default Reject;
