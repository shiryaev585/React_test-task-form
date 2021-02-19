import React from "react";
import "./Map.scss";

const Map = (props) => {
  return (
    <div className="map">
      <iframe
        width="280"
        height="200"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=280&amp;height=200&amp;hl=en&amp;q=%20Moscow+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>

      {/* Вариант с яндекс картой, на котором реализуется указанная в макете высота
      В гугл картах 200px минимум
      */}
      
      {/* <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Adcef9d216118ee01de1e91fde8702c220734c03404112153c61c24f9aa245d29&amp;source=constructor"
        width="280"
        height="143.17"
        frameborder="0"
      ></iframe> */}
    </div>
  );
};

export default Map;
