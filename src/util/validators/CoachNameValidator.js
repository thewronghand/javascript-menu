import CustomError from '../../errors/CustomError.js';
import { ERROR, NUMBER } from '../constants.js';

function validateCoachNameLength(coachName) {
  if (
    coachName.length > NUMBER.coach.nameLength.max ||
    coachName.length < NUMBER.coach.nameLength.min
  ) {
    throw CustomError.coach(ERROR.coachName.invalidLength);
  }
}

function validateCoachNamesCount(coachNames) {
  if (
    coachNames.length > NUMBER.coach.count.max ||
    coachNames.length < NUMBER.coach.count.min
  ) {
    throw CustomError.menuPickerService(ERROR.coachName.invalidCount);
  }
}

function validateCoachNameDuplicate(coachNames) {
  if (new Set(coachNames).size !== coachNames.length) {
    throw CustomError.menuPickerService(ERROR.coachName.duplicateName);
  }
}

const CoachNameValidator = {
  validateSingleCoachName(coachName) {
    validateCoachNameLength(coachName);
  },
  validateMultipleCoachNames(coachNames) {
    validateCoachNamesCount(coachNames);
    validateCoachNameDuplicate(coachNames);
  },
};

export default CoachNameValidator;
