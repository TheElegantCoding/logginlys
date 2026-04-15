const getTime = () => {
  return new Date().toLocaleTimeString('en-GB', { hour12: false });
};

export { getTime };