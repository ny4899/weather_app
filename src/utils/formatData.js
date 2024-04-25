function formatDate(dateInput) {
  const options = { weekday: "long", month: "numeric", year: "numeric" };
  const date = new Date(dateInput);
  return date.toLocaleDateString("en-US", options);
}

export default formatDate;
