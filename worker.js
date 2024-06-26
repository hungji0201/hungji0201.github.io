self.onmessage = function(e) {
  const items = e.data;
  const newPlanes = items.map(item => {
    return { item };
  });
  self.postMessage(newPlanes);
};
