module.exports = {
  convertNumberToPaddedString: (number) => {
    const string = number.toString();
    return string.padStart(2, '0');
  },

  formatDateAsString: (date) => {
    const dateFormat = {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };

    return date.toLocaleString('en-US', dateFormat);
  },

  formatDateOfBirthString: (dateOfBirth) => {
    const datetimeString = `${dateOfBirth}T00:00:00`;
    const date = new Date(datetimeString);
    const dateFormat = {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    };

    return date.toLocaleString('en-US', dateFormat);
  },

  formatDatetimeString: (datetimeString) => {
    const date = new Date(datetimeString);
    const dateFormat = {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };

    return date.toLocaleString('en-US', dateFormat);
  },
};
