# 🎫 Stack Overflow SVG-Flair Generator
This is a Stack-Overflow-Badge SVG graphic which gets automatically updated by a 
[GitHub CI workflow](https://resources.github.com/ci-cd/).   
It displays an overview for your [StackOverflow badges](https://stackoverflow.com/help/badges) and your reputation.

This is an alternative to the official flair you can find on your
[StackOverflow prile page](your profile's Site Settings) under _SITE SETTINGS > Flair_.
Unfortunately the original flair images have a very low resolution the configuration is very limited.
This is why I desisnged my own flair and wrote this script to keep it up to date.

### New Flair Badge
![stackoverflow-badge](https://raw.githubusercontent.com/TobseF/stackoverflow-badge/master/stackoverflow-badge.svg)

### Old Flair Badge
![old flair](https://stackoverflow.com/users/flair/4198170.png?theme=dark)


## ⭐ Features
 ⭐ Customizable  
 ⭐ SVG graphic  
 ⭐ Always up to date  
 ⭐ Image hosted by GitHub  
 ⭐ Git based stats history  
 ⭐ No API key is needed

## 📖 How it works
This `stackoverflow-badge.svg` [Node.js](https://nodejs.org/en/) script reads 
the [Stack Overflow user API](https://api.stackexchange.com/docs/types/user)
and writes the badge stats into an SVG template file (`badge-template.svg`).
If the generated badge is newer then the file in the repository, it
commits the new generated `stackoverflow-badge.svg` to this GIT repository.
The pipeline gets triggered by a cron job, which automatically updates the image every midnight.

You can link the generated file by:  
https://raw.githubusercontent.com/{userName}/stackoverflow-badge/master/stackoverflow-badge.svg

## 🛠 Config
The script can be configured to generate a badge for any user:
* `userID`: User-Id which can be found in your profile URL.  
   Example url: https://stackoverflow.com/users/4198170/tobse  
   `userID` = `4198170`
* `userName`: Your username on StackOverflow (case-sensitive!).  
   Used to ensure the fetched id returns the correct user.
* `cron`: You can change the update time interval in the `.github/workflows/main.yml`:  
   On Line 6:  
   `- cron: '0 0 * * *'` (every day at midnight).
   Uses the [cron-job syntax](https://crontab.guru/every-midnight).
