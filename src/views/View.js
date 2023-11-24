import { FORMAT, MESSAGE, NUMBER, SYMBOL } from '../util/constants.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';

class View {
  #inputView = InputView;

  #outputView = OutputView;

  async readCoachNames() {
    const input = await this.#inputView.readMultipleStrings(
      MESSAGE.read.coachNames,
    );
    return input.split(SYMBOL.inputSeparator);
  }

  async readExcludedMenusForSingleCoach(coachName) {
    const input = await this.#inputView.readMultipleStrings(
      MESSAGE.read.excludedMenu(coachName),
    );
    if (!input.length) {
      return [];
    }
    return input.split(SYMBOL.inputSeparator);
  }

  printError(error) {
    this.#outputView.print(error.message);
  }

  printAppHeader() {
    this.#outputView.print(MESSAGE.header.application);
  }

  printResultHeader() {
    this.#outputView.print(SYMBOL.newLine + MESSAGE.header.result);
  }

  printDays() {
    const formattedDays = FORMAT.schedule(NUMBER.menuPicker.days);
    this.#outputView.print(formattedDays);
  }

  printCategories(categories) {
    const formattedCategories = FORMAT.categories(categories);
    this.#outputView.print(formattedCategories);
  }

  printResult(coaches, categories) {
    this.printResultHeader();
    this.printDays();
    this.printCategories(categories);
    coaches.forEach(item => this.printSingleMenuPickResult(item));
    this.printAppFooter();
  }

  printSingleMenuPickResult(coach) {
    const coachName = coach.getCoachName();
    const menuPicks = coach.getMenuPicks();
    const formattedMenuPicks = FORMAT.pickResult(coachName, menuPicks);
    this.#outputView.print(formattedMenuPicks);
  }

  printAppFooter() {
    this.#outputView.print(SYMBOL.newLine + MESSAGE.footer);
  }
}

export default View;
