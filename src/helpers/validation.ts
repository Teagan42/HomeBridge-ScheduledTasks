export const validatePhoneNumber = (input: string): string | null => {
    const matches = input.match(REGEX_PHONE_NUMBER);

    if (!matches) {
        return null;
    } else {

        let phoneNumber = matches
            .filter((match) => match !== undefined && match !== null)
            .reduce((result, match, idx) => idx === 0 ? '' : result.concat(match || ''), '');

        if (phoneNumber.indexOf('+') < 0) {
            phoneNumber = '+1'.concat(phoneNumber);
        }

        return phoneNumber;
    }
};