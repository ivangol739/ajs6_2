export default function destructor(data) {
  const result = [];
  for (const {
    id, name, description = 'Описание недоступно', icon,
  } of data.special) {
    result.push({
      id, name, description, icon,
    });
  }
  return result;
}
