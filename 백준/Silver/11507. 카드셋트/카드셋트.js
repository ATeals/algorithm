const fs = require("fs");

const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const str = input[0];
const map = {};
const count = { P: 0, K: 0, H: 0, T: 0 };

const fn = () => {
  for (let i = 0; i < str.length; i += 3) {
    const [key, value] = [str[i], str[i + 1] + str[i + 2]];

    if (map[key + value]) {
      return console.log("GRESKA");
    } else {
      map[key + value] = 1;
      count[key]++;
    }
  }

  return console.log(13 - count.P, 13 - count.K, 13 - count.H, 13 - count.T);
};

fn();
