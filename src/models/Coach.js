import CoachNameValidator from '../util/validators/CoachNameValidator.js';
import ExcludedMenuValidator from '../util/validators/ExcludedMenuValidator.js';

class Coach {
  #coachName;

  #excludedMenus;

  #menuPicks = [];

  constructor(coachName) {
    CoachNameValidator.validateSingleCoachName(coachName);
    this.#coachName = coachName;
  }

  setExcludedMenus(excludedMenus) {
    ExcludedMenuValidator.validateMenus(excludedMenus);
    this.#excludedMenus = excludedMenus;
  }

  setMenuPicks(pickedMenu) {
    this.#menuPicks = pickedMenu;
  }

  getCoachName() {
    return this.#coachName;
  }

  getExcludedMenus() {
    return this.#excludedMenus;
  }

  getMenuPicks() {
    return this.#menuPicks;
  }
}

export default Coach;
