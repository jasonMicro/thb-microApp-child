export const setDefaultActive = (type) => {
  let active = 0;
  switch (type) {
    case 'concentrate':
    case 'controlNum':
      active = 1;
      break;
    case 'home':
    case 'unNucleicNum':
      active = 2;
      break;
    case 'disisolation':
      active = 3;
      break;
    case 'local':
      active = 4;
      break;
    case 'external':
      active = 5;
      break;
    default:
      active = 0;
      break;
  }
  return active;
};

export default { setDefaultActive };
