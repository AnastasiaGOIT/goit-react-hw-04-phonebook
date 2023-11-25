import css from './filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <div className={css.container}>
      <label>Find contacts by name</label>
      <input
        className={css.form__input}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};
