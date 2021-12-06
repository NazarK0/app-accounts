function enumToArray(en: any) {
  return Object.keys(en)
  .map(key => en[key]);
}

export default enumToArray;

