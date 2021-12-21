import { SetterOrUpdater } from 'recoil';
import { DropSelectOptions, DropSelectSelecteds } from '.';

export function handleOptionSelect(
  optionSelected: DropSelectOptions[0],
  selecteds: DropSelectSelecteds,
  setSelecteds: SetterOrUpdater<DropSelectSelecteds>,
  enableToggle?: boolean
) {
  const selectedValue = String(optionSelected.value);

  if (selecteds.includes(selectedValue)) {
    // remove
    setSelecteds(() => selecteds.filter((option) => option !== selectedValue));
  } else if (enableToggle) {
    setSelecteds(() => [selectedValue]);
  } else if (!selecteds.includes(selectedValue)) {
    // add
    setSelecteds((selected) => [...selected, selectedValue]);
  }
}
