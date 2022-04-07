export function uuid(): string {
  let uuid = '';

  for (let i = 0; i < 32; i++) {
    const random = (Math.random() * 16) | 0;

    switch (i) {
      case 8:
        uuid += '-' + random.toString(16);
        break;
      case 12:
        uuid += '-4';
        break;
      case 16:
        uuid += '-' + ((random & 3) | 8).toString(16);
        break;
      case 20:
        uuid += '-' + random.toString(16);
        break;
      default:
        uuid += random.toString(16);
    }
  }

  return uuid;
}
