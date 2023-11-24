import Coach from '../models/Coach.js';
import MenuPickerService from '../models/MenuPickerService.js';
import View from '../views/View.js';

class MenuPickerController {
  #view = new View();

  #menuPickerService;

  async run() {
    this.#view.printAppHeader();
    await this.#initializeMenuPickerService();
    const coaches = this.#menuPickerService.getCoaches();
    await this.#processCoaches(coaches);
    this.#menuPickerService.executeMenuPicker();
    this.#view.printResult(coaches, this.#menuPickerService.getCategories());
  }

  async #retryOnFailure(callBack) {
    try {
      return await callBack();
    } catch (error) {
      this.#view.printError(error);
      return this.#retryOnFailure(callBack);
    }
  }

  async #initializeMenuPickerService() {
    await this.#retryOnFailure(async () => {
      const coachNames = await this.#view.readCoachNames();
      const coaches = coachNames.map(item => new Coach(item));
      this.#menuPickerService = new MenuPickerService(coaches);
    });
  }

  async #processCoaches(coaches) {
    await coaches.reduce(async (previousPromise, coach) => {
      await previousPromise;
      await this.#retryOnFailure(async () => {
        const excludedMenus = await this.#view.readExcludedMenusForSingleCoach(
          coach.getCoachName(),
        );
        coach.setExcludedMenus(excludedMenus);
      });
    }, Promise.resolve());
  }
}

export default MenuPickerController;
