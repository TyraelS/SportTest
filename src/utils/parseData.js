const parseData = res => {
  return res.text().then(json => ({
    ...JSON.parse(json),
    alive: true
  }));
};

export default parseData;
