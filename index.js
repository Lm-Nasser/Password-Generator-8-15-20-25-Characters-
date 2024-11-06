var upCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

var loCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var sym = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=',
     '[', ']', '{', '}', '|', '\\', ':', ';', '"', "'", ',', '.', '/', '<', '>', '?', '`', '~'];


function char8() {
    var random_upCase =  [upCase[Math.floor(Math.random() * upCase.length)], upCase[Math.floor(Math.random() * upCase.length)]];
    var random_loCase =  [loCase[Math.floor(Math.random() * loCase.length)], loCase[Math.floor(Math.random() * loCase.length)]];
    var random_num = [num[Math.floor(Math.random() * num.length)], num[Math.floor(Math.random() * num.length)]];
    var random_sym = [sym[Math.floor(Math.random() * sym.length)], sym[Math.floor(Math.random() * sym.length)]];
    var password = [];
    password.push(...random_upCase);
    password.push(...random_loCase);
    password.push(...random_num);
    password.push(...random_sym);

    document.getElementById("Password").innerHTML = password[0] + password[1] + password[2] + password[3] + password[4] +password[5] + password[6] + password[7];

}