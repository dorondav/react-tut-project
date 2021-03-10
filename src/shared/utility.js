export const shortenText = (input, maxChar) => {
    return input.length >= maxChar ? input.substring(0, maxChar) + " . . ." : `${input}`;
}
