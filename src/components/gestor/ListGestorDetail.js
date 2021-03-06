import React from "react";

import GestorDetailInfo from "./GestorDetailInfo";
import "../../stylesheets/components/ListGestorDetail.scss";

const ListGestorDetail = props => {
  return (
    <div className="detailmain">
      <h2 className="detailwrap__title">Solicitudes proyecto Wadus</h2>
      <GestorDetailInfo time={props.time} name={props.userLogin} />
    </div>
  );
};

export default ListGestorDetail;
