import fetch from 'node-fetch';
import fs from 'fs';

let userID = 4198170
let userName = "Tobse"

let templateFile = 'banner-template.svg'
let outputFile = 'banner.svg'
let url = "https://api.stackexchange.com/2.3/users/" + userID + "?order=desc&sort=reputation&site=stackoverflow"

fetch(url, {
    method: 'get',
    headers: {'Content-Type': 'application/json'}
})
    .then((res) => res.json())
    .then((json) => {
        parse(json.items[0]);
    });

function parse(json) {
    //console.log(json);
    let name = json.display_name
    if (name === userName) {
        let reputation = json.reputation;
        let bronze = json.badge_counts.bronze;
        let silver = json.badge_counts.silver;
        let gold = json.badge_counts.gold;
        console.log(reputation + "," + bronze + "," + silver + "," + gold);

        fs.readFile("./" + templateFile, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            let compiled = compileTemplate(data, reputation, bronze, silver, gold)

            fs.writeFile("./" + outputFile, compiled, err => {
                if (err) {
                    console.error(err);
                }
                console.log("file written successfully");
            });
        });
    }
}

function compileTemplate(template, reputation, bronze, silver, gold) {
    return template.replaceAll("${reputation}", reputation)
        .replaceAll("${bronze}", bronze)
        .replaceAll("${silver}", silver)
        .replaceAll("${gold}", gold)
}