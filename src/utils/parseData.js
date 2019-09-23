const parseData = (res, timestamp) => {
  console.log(timestamp);
  return res.text().then(json => ({
    ...JSON.parse(json),
    timestamp: timestamp
  }));
};

export default parseData;
