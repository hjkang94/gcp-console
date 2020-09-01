export function allChecked(items, checked) {
  return items.map(item => {
    item.isChecked = checked;
    return item;
  });
}

export function checked(items, id, checked) {
  return items.map(item => {
    if (item.id === id) {
      item.isChecked = checked;
    }
    return item;
  });
}
