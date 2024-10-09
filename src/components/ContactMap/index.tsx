import React from "react";
import { YMaps, Map } from "@pbe/react-yandex-maps";
export const ContactMap: React.FC = () => {
  return (
    <YMaps>
      <div>
        <Map width="100%" height={334} defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
      </div>
    </YMaps>
  );
};
