import { useState } from "react";
import data from "./data";
export default function Accordian() {
  const [selected, setSelected] = useState(null);

  function singlefeature(currentid) {
    setSelected(currentid === selected ? null : currentid);
  }

  return (
    <div className="wholediv">
      <div className="wrapper">
        {data.length > 0 ? (
          data.map((dataitem) => (
            <div>
              <div className="title" onClick={() => singlefeature(dataitem.id)}>
                <h3>{dataitem.title}</h3>
                <span>+</span>
                {selected === dataitem.id ? (
                  <div className="content">{dataitem.content}</div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div>no data present</div>
        )}
      </div>
    </div>
  );
}
