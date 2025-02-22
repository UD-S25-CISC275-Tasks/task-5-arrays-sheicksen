/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let numEnds: number[] = [];
    if (numbers.length == 1) {
        numEnds = [numbers[0], numbers[0]];
    } else if (numbers.length > 1) {
        numEnds = [numbers[0], numbers[numbers.length - 1]];
    }
    return numEnds;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let tripledNums: number[] = numbers.map((x) => x * 3);
    return tripledNums;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let integers: number[] = numbers.map((x: string): number =>
        parseInt(x) ? parseInt(x) : 0,
    );
    return integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let cleanAmounts: number[] = amounts.map((price: string): number =>
        price[0] === "$" ?
            parseInt(price.substring(1)) ? parseInt(price.substring(1))
            :   0
        : parseInt(price) ? parseInt(price)
        : 0,
    );
    return cleanAmounts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let shouts: string[] = messages
        .map((message: string): string =>
            message[message.length - 1] === "!" ?
                message.toUpperCase()
            :   message,
        )
        .filter(
            (message: string): boolean => message[message.length - 1] !== "?",
        );

    return shouts;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((word: string): boolean => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let rgb: boolean =
        (
            colors.filter((color: string): boolean =>
                color === "red" ? false
                : color === "blue" ? false
                : color === "green" ? false
                : true,
            ).length > 0
        ) ?
            false
        :   true;
    return rgb;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum: number = addends.reduce(
        (lastVal: number, currentVal: number): number => lastVal + currentVal,
        0,
    );
    let equation: string =
        sum.toString() +
        "=" +
        addends.map((num: number): string => num.toString()).join("+");
    return equation;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    return [];
}
