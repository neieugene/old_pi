import React from "react";
import board from "board.jpg";

export default function BoardContent() {
  return (
    <div>
      <img
        src={board}
        alt="Редакционный совет"
        title="Редакционный совет"
        className="ContentPage-head-image"
      />
      <br />
      <div>ПРЕДСЕДАТЕЛЬ</div>
      <div>
        ГРУНТОВ Игорь Олегович, д. ю. н., доцент заведующий кафедрой уголовного
        права учреждения образования «Белорусский государственный университет»
      </div>
      <br />

      <div>ЧЛЕНЫ СОВЕТА:</div>
      <div>
        БАСТРЫКИН Александр Иванович, д. ю. н., профессор, Председатель
        Следственного комитета Российской Федерации
      </div>
      <div>
        ОВСЕПЯН Агван Гарникович, д. ю. н. Председатель Следственного комитета
        Республики Армения
      </div>
      <div>АНАНИЧ Валерий Антонович, д. и. н., к.ю. н., профессор</div>
      <div>ГОДУНОВ Валерий Николаевич, д.ю. н., профессор</div>
      <div>ГУЧОК Александр Евгеньевич, д.ю. н., доцент</div>
      <div>ЕРМОЛОВИЧ Владимир Фёдорович, д.ю. н., профессор</div>
      <div>
        КАПЛИНА Оксана Владимировна, член-корреспондент Национальной академии
        правовых наук Украины, д. ю. н., профессор
      </div>
      <div>
        КАЧАЛОВА Оксана Валентиновна, д. ю. н., профессор (Российская Федерация)
      </div>
      <div>КНЯЗЕВ Станислав Никифорович, д.ю. н., профессор</div>
      <div>РУБИС Александр Сергеевич, д.ю. н., доцент</div>
      <div>
        ТАЦИЙ Василий Яковлевич, академик Национальной академии наук Украины,
        д.ю. н., профессор
      </div>
      <div>ЧУЕШОВ Виктор Иванович, д.ф. н., профессор</div>
      <div>ШАБАНОВ Вячеслав Борисович, д.ю. н., профессор</div>
      <div>ШИЕНОК Владимир Петрович, д.ю. н., профессор</div>
      <div>БАРКОВ Александр Владимирович, к.ю. н, профессор</div>
      <div>ЗАЙЦЕВА Людмила Львовна, к.ю. н, доцент</div>
      <br />
    </div>
  );
}
