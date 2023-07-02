import css from './filter.module.css';

const Filter = ({ handleOnChange }) => {
  return (
    <div className={css.div}>
      <label className={css.labele}>
        Find contacts by name
        <input
          className={css.input}
          onChange={handleOnChange}
          type="text"
          name="name"
        />
      </label>
    </div>
  );
};

export default Filter;
