import { Random } from '@woowacourse/mission-utils';
import { CATEGORIES, MENU_SAMPLE } from '../util/constants.js';
import CoachNameValidator from '../util/validators/CoachNameValidator.js';

class MenuPickerService {
  #coaches;

  #categories;

  constructor(coaches) {
    const coachNames = coaches.map(item => item.getCoachName());
    CoachNameValidator.validateMultipleCoachNames(coachNames);
    this.#coaches = coaches;
  }

  executeMenuPicker() {
    this.pickCategories();
    this.pickAllCoachesMenus();
  }

  getCoaches() {
    return this.#coaches;
  }

  pickRandomCategory() {
    const randomNumber = Random.pickNumberInRange(1, 5);
    return CATEGORIES[randomNumber];
  }

  pickCategories() {
    const categories = [];
    let duplicateAllowed = true;
    while (categories.length < 5) {
      const category = this.pickRandomCategory();
      if (!categories.includes(category)) {
        categories.push(category);
      } else if (duplicateAllowed) {
        categories.push(category);
        duplicateAllowed = false;
      }
    }
    this.#categories = categories;
  }

  getCategories() {
    return this.#categories;
  }

  pickRandomMenuFromCategory(category) {
    const menuIndexes = MENU_SAMPLE[category].map((_item, idx) => idx + 1);
    const randomIndex = Random.shuffle(menuIndexes)[0];
    return MENU_SAMPLE[category][randomIndex - 1];
  }

  pickCoachesMenuFromCategories(coach) {
    const picks = [];
    const excludedMenus = coach.getExcludedMenus();

    this.#categories.forEach(category => {
      let menu;
      do {
        menu = this.pickRandomMenuFromCategory(category);
      } while (picks.includes(menu) || excludedMenus.includes(menu));
      picks.push(menu);
    });
    coach.setMenuPicks(picks);
  }

  pickAllCoachesMenus() {
    this.#coaches.forEach(coach => this.pickCoachesMenuFromCategories(coach));
  }
}

export default MenuPickerService;
