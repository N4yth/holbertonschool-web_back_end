export default function loadBalancer(chinaDownload, USDownload) {
  const invert = (p) => new Promise((res, rej) => p.then(rej, res));
  const firstOf = (ps) => invert(Promise.all(ps.map(invert)));
  return firstOf([chinaDownload, USDownload]);
}
