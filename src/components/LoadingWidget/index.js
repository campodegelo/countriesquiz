import React, { useState, useEffect } from "react";
import Widget from "../Widget";
import db from "../../../db.json";

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Aguarde enquanto as perguntas são carregadas...
      </Widget.Header>
      <Widget.Content style={{ textAlign: "center" }}>
        <img src={db.loading} alt="loading" style={{ width: "30%" }} />
        <h3>.......... Loading ..........</h3>
      </Widget.Content>
    </Widget>
  );
}

export default LoadingWidget;
