import { Console } from '@woowacourse/mission-utils';
import { SYMBOL } from '../util/constants.js';
import InputViewValidator from '../util/validators/InputViewValidator.js';

const InputView = {
  async readMultipleStrings(queryMessage) {
    const input = await Console.readLineAsync(
      SYMBOL.newLine + queryMessage + SYMBOL.newLine,
    );
    InputViewValidator.validateInput(input);
    return input;
  },
};

export default InputView;
