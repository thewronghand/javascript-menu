import CustomError from '../../errors/CustomError.js';
import { ERROR, MENU_SAMPLE } from '../constants.js';

const combinedMenu = Object.values(MENU_SAMPLE).flat();

function validateSingleMenu(menuName) {
  if (!combinedMenu.includes(menuName)) {
    throw CustomError.coach(ERROR.excludedMenu.invalidName);
  }
}

function validateUniqueness(menus) {
  if (new Set(menus).size !== menus.length) {
    throw CustomError.coach(ERROR.excludedMenu.duplicateName);
  }
}

const ExcludedMenuValidator = {
  validateMenus(menus) {
    if (menus.length === 0) {
      return;
    }
    validateUniqueness(menus);
    menus.forEach(item => validateSingleMenu(item));
  },
};

export default ExcludedMenuValidator;
