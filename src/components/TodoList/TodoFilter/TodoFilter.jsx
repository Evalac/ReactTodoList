function Filter({ value, filterChange }) {
  return (
    <label>
      Фільтр по імені
      <input type="text" value={value} onChange={filterChange} />
    </label>
  );
}

export { Filter };
