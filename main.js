//1
// function switchTask() {
//   let num = +prompt("type number");
//   switch (num) {
//     case 3:
//       console.log("hello");
//       break;
//     case 5:
//       console.log("goodby");
//       break;
//     case 7:
//       console.log("thanks");
//       break;
//     default:
//       console.log("no messages");
//   }
// }

//2
// function swithIf() {
//   let name = prompt("type name");
//   switch (name) {
//     case "jacob":
//       document.body.innerHTML += `${name}`;
//       break;
//     case "Nathan":
//       document.body.innerHTML += `${name.toUpperCase()}`;
//       break;
//     case "DALYA":
//       document.body.innerHTML += `${name.toLowerCase()}`;
//       break;
//     default:
//       document.body.innerHTML += `no messages`;
//   }
// }

//3
// function mathSwitch() {
//   let numUser1 = prompt("type num");
//   let numUser2 = prompt("type num");
//   let parameter = prompt("type +,-,*,/");
//   switch (parameter) {
//     case "+":
//       console.log(numUser1 + numUser2);
//       return;
//     case "-":
//       console.log(numUser1 - numUser2);
//       return;
//     case "*":
//       console.log(numUser1 * numUser2);
//       return;
//     case "/":
//       console.log(numUser1 / numUser2);
//     default:
//       console.log("insert numbers or paramet is incoorect");
//   }
// }

//4
function userColorText() {
  let textUser = prompt("type text"),
    colorUser = prompt("type color"),
    weightUser = +prompt("type weight");

  switch (colorUser) {
    case "yellow":
      document.body.innerHTML += `<h2 style="color:yellow;font-size:${weightUser}px;">${textUser}</h2>`;
      break;
    case "blue":
      document.body.innerHTML += `<h2 style="color:blue;font-size:${weightUser}px;">${textUser}</h2>`;
      break;
    case "green":
      document.body.innerHTML += `<h2 style="color:green;font-size:${weightUser}px;">${textUser}</h2>`;
      break;
    case "red":
      document.body.innerHTML += `<h2 style="color:red;font-size:${weightUser}px;">${textUser}</h2>`;
      break;
    default:
      document.body.innerHTML += `<h2 style="color:black;">${textUser}</h2>`;
  }
}
