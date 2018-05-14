import React from "react";
import noskevich from "noskevic.jpg";
import "CollegiumContent.css";

export default function CollegiumContent() {
  return (
    <div className="CollegiumContent">
      <div className="CollegiumContent-card">
        <div className="float-left">
          <img
            src={noskevich}
            alt="Носкевич Иван Данилович"
            title="Носкевич Иван Данилович"
            className="CollegiumContent-avatar"
          />
        </div>
        <div>
          <div>ПРЕДСЕДАТЕЛЬ</div>
          <div>
            НОСКЕВИЧ Иван Данилович, Председатель Следственного комитета
            Республики Беларусь
          </div>
        </div>
      </div>
      <br />

      <div>ЗАМЕСТИТЕЛЬ ПРЕДСЕДАТЕЛЯ</div>
      <div>ГАЙДУЧЁНОК Валерий Александрович</div>
      <br />

      <div>ЧЛЕНЫ КОЛЛЕГИИ:</div>
      <div>АНДРЕЕВА Наталья Александровна</div>
      <div>ВАВУЛО Михаил Николаевич</div>
      <div>ВАРАВКО Юрий Валерьевич</div>
      <div>КАБАКОВИЧ Сергей Васильевич</div>
      <div>ЛАВРИНОВИЧ Светлана Геннадьевна</div>
      <div>МАЛИНОВСКИЙ Эдуард Викторьевич</div>
      <div>МОТОЛЬКО Андрей Фёдорович</div>
      <div>УДОВИКОВ Сергей Александрович</div>
      <div>ШАНДАРОВИЧ Олег Станиславович</div>
      <br />
    </div>
  );
}
