import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import { Order } from "../Order";

import "./FinalPopUp.scss";

const FinalPopup = () => {
  const history = useHistory();
  const { storeToDetail } = useSelector((store) => store.storesReducer);
  const { page } = useSelector((store) => store.hocsReducer);

  const goHome = () => {
    history.push("/");
  }
  return (
    <div className={page === "last_pop_up" ? "page-background final-pop-up visible" : "page-background final-pop-up hidden"}>
      <div
        className={
          page === "last_pop_up"
            ? "final-pop-up box visible"
            : "final-pop-up box hidden"
        }
      >
        <div className="text-container final-pop-up">
          <div className="text-portion first">
            Gracias por comprar en {storeToDetail.name} a través de{" "}
            <span className="app-name final-pop-up">next2U</span>. El resumen de
            tu pedido es:
          </div>
          <Order cassName/>
          <div className="text-portion second">
            Recibirás tu pedido según las condiciones de entrega de la tienda.
            <span className="remarkable final-pop-up">¡Disfrútalo!</span>
          </div>
          
        </div>
        <div className="restart button container">
          <button className="restart button" onClick={goHome}>Hacer un nuevo pedido</button>
        </div>
      </div>
    </div>
  );
};

export default FinalPopup;
