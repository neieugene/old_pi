import React from "react";
import about from "about.jpg";

export default function AboutContent() {
  return (
    <div>
      <img
        src={about}
        alt="О журнале"
        title="О журнале"
        className="ContentPage-head-image"
      />
      <br />
      <div>Издается с 2017 года. Выходит 1 раз в полугодие.</div>
      <br />
      <div>Учредитель – Следственный комитет Республики Беларусь.</div>
      <div>Publisher – Investigative Committee of the Republic of Belarus</div>
      <br />
      <div>Главный редактор – Суздалева Галина Валерьевна</div>
      <div>Chief editor – Galina V. Suzdaleva</div>
      <br />
      <div>
        Научный редактор – к.&thinsp;ю.&thinsp;н. Каменецкий Юрий Францевич
      </div>
      <div>
        Science editor – Candidate of Juridical Sciences (PhD in Law) Yuriy F.
        Kamenetskiy
      </div>
      <br />
      <div>Адрес редакции: ул. Фрунзе, 19, г. Минск, 220034</div>
      <div>
        The address of the Editorial office: 19 Frunze st., 220034 Minsk,
        Belarus
      </div>
      <div>тел./факс (phone/fax): +375 17 389 52 29</div>
      <div>
        е-mail:{" "}
        <a href="mailto:journal_investigation@sledcom.by">
          journal_investigation@sledcom.by
        </a>
      </div>
      <br />
      <br />
      <div>
        Свидетельство о государственной регистрации средства массовой информации
        № 1838 от 12.01.2017, выданное Министерством информации Республики
        Беларусь.
      </div>
      <br />
    </div>
  );
}
