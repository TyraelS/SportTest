const parseData = (res, alive) => {
  return res.text().then(json => ({
    ...JSON.parse(json),
    alive: alive
  }));
};

export default parseData;
