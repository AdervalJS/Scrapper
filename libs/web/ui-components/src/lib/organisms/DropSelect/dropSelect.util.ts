import { SetterOrUpdater } from 'recoil';
import { DropSelectOptions } from '.';

export function handleOptionSelect(
  optionSelected: DropSelectOptions[0],
  selecteds: DropSelectOptions,
  setSelecteds: SetterOrUpdater<DropSelectOptions>,
  enableToggle?: boolean
) {
  if (selecteds.includes(optionSelected)) {
    // remove
    setSelecteds(() => selecteds.filter((option) => option !== optionSelected));
  } else if (enableToggle) {
    setSelecteds(() => [optionSelected]);
  } else if (!selecteds.includes(optionSelected)) {
    // add
    setSelecteds((selected) => [...selected, optionSelected]);
  }
}
