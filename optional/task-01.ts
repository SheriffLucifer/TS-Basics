enum Names {
  alice = "Alice",
  bob = "Bob",
  zaphod = "Zaphod",
}

function giveCookie(name: Names): string {
  switch (name) {
    case Names.alice:
      return `One for ${Names.alice}, one for me.`;
    case Names.bob:
      return `One for ${Names.bob}, one for me.`;
    case Names.zaphod:
      return `One for ${Names.zaphod}, one for me.`;
    default:
      return "One for you, one for me.";
  }
}
