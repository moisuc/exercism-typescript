export function hey(message: string): string {
  if (message.trim() == "") {
    return `Fine. Be that way!`;
  }
  let all_uppercase = /^[A-Z \d\W]+$/.test(message.trim());
  let question = /\?$/.test(message.trim());
  let no_letters = !/[a-zA-Z]/.test(message.trim());
  if (all_uppercase && question && !no_letters) {
    return `Calm down, I know what I'm doing!`;
  }
  if (question) {
    return `Sure.`;
  }
  if (all_uppercase && !no_letters) {
    return `Whoa, chill out!`;
  }

  return `Whatever.`;
}
