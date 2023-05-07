import "./BookingForm.css";
import React from "react";
import useInput from "../../hooks/useInput";

const BookingForm = () => {
  const tower = useInput("");
  const floor = useInput("");
  const conferenceRoom = useInput("");
  const date = useInput("");
  const time = useInput("");
  const comment = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingFormData = {
      tower: tower.value,
      floor: floor.value,
      conferenceRoom: conferenceRoom.value,
      date: date.value,
      time: time.value,
      comment: comment.value,
    };
    console.log(bookingFormData);
  };

  const resetForm = () => {
    tower.resetValue();
    floor.resetValue();
    conferenceRoom.resetValue();
    date.resetValue();
    time.resetValue("");
    comment.resetValue("");
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="booking-form__image"></div>
      <h2 className="booking-form__title">Забронировать переговорную:</h2>
      <fieldset className="booking-form__field">
        <h3 className="booking-form__list-title">Башня</h3>
        <select
          className="booking-form__list"
          name="tower"
          value={tower.value}
          onChange={tower.onChange}
          required
        >
          <option value="">-</option>
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
      </fieldset>
      <fieldset className="booking-form__field">
        <h3 className="booking-form__list-title">Этаж</h3>
        <select
          className="booking-form__list"
          name="floor"
          value={floor.value}
          onChange={floor.onChange}
          required
        >
          <option value="">-</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
        </select>
      </fieldset>
      <fieldset className="booking-form__field">
        <h3 className="booking-form__list-title">Переговорная</h3>
        <select
          className="booking-form__list"
          name="conference room"
          value={conferenceRoom.value}
          onChange={conferenceRoom.onChange}
          required
        >
          <option value="">-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </fieldset>
      <fieldset className="booking-form__field">
        <p className="booking-form__input-title">Дата</p>
        <input
          className="booking-form__input"
          name="date"
          type="date"
          value={date.value}
          onChange={date.onChange}
          required
        ></input>
        <p className="booking-form__input-title">Время</p>
        <input
          className="booking-form__input"
          type="time"
          value={time.value}
          onChange={time.onChange}
          required
        ></input>
      </fieldset>
      <fieldset className="booking-form__field">
        <p className="booking-form__input-title">Комментарий</p>
        <textarea
          className="booking-form__comment"
          name="comment"
          value={comment.value}
          onChange={comment.onChange}
        ></textarea>
      </fieldset>
      <button className="booking-form__button" type="submit">Отправить</button>
      <button className="booking-form__button" type="reset" onClick={resetForm}>
        Очистить
      </button>
    </form>
  );
};

export default BookingForm;
