const input = [
  { name: "Sai" },
  { name: "Sai" },
  { name: "Nang" },
  { name: "1111111" },
  { name: "Nang" },
  { name: "Sai" },
];

// Use a Set to track unique names
const seen = new Set();
const uniqueObjects = input.filter((obj) => {
  if (seen.has(obj.name)) return false;
  seen.add(obj.name);
  return true;
});

console.log(uniqueObjects);
