export const characterLimit = (text, limit = 100) =>
  text.length > limit ? text.substr(0, limit - 1).trim() + '...' : text;
