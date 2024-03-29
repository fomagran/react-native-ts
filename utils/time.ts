export function secToMin(sec: number): string {
  return (sec / 60).toFixed(1);
}

export function formatSec(sec: number): string {
  const _min = Math.floor(sec / 60);
  const _sec = sec % 60;
  const minText = `${_min} min`;
  const secText = `${_sec} min`;
  const connector = "and";

  const sentence = [];

  if (_min > 0) {
    sentence.push(minText);
  }

  if (_min > 0 && _sec > 0) {
    sentence.push(connector);
  }

  if (_sec > 0) {
    sentence.push(secText);
  }
  return sentence.join(" ");
}
