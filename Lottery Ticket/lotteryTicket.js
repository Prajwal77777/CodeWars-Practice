/*Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.*/

//My Solution
function bingo(ticket, win) {
  let miniWins = 0;
  for (const [str, num] of ticket)
    for (const char of str)
      if (char.charCodeAt(0) === num) {
        miniWins++;
        break;
      }
  if (miniWins >= win) {
    return "Winner!";
  } else {
    return "Loser!";
  }
}
const ticket = [
  ["STNSMFKH", 84],
  ["KRWZEU", 88],
  ["OLCTMA", 89],
  ["ANM", 83],
  ["ID", 90],
  ["BJNLC", 84],
  ["NUBXZ", 87],
  ["WV", 87],
  ["WCVCN", 71],
];
const win = 1;

console.log(bingo(ticket, win)); // outputs: 'Loser!'

//Others Solution
function bingo(ticket, win) {
  if (
    ticket.filter((a) => a[0].split("").some((b) => b.charCodeAt(0) == a[1]))
      .length >= win
  ) {
    return "Winner!";
  }
  return "Loser!";
}
