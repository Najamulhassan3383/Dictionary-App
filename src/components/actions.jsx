const changeTheme = (theme) => {
  return {
    type: "SET_THEME",
    payload: theme,
  };
};
export { changeTheme };
