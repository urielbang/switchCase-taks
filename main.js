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
function swithIf() {
  let name = prompt("type name");
  switch (name) {
    case "jacob":
      document.body.innerHTML += `${name}`;
      break;
    case "Nathan":
      document.body.innerHTML += `${name.toUpperCase()}`;
      break;
    case "DALYA":
      document.body.innerHTML += `${name.toLowerCase()}`;
      break;
    default:
      document.body.innerHTML += `no messages`;
  }
}
