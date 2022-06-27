# DiscordDataGrabber
## Make sure to read "DISCLAIMER.txt"
---
This basic piece of code sends data information about everyone with access in the current channel upon executing a command.

_**Warning: It currently works only in dm and group channels**_

---

## How to run

If you have windows, you get no tutorial (I hate windows)

If you instead use Linux or MacOS, follow these steps:

- Download the repository.
- Edit "CONFIG.json" with your data (more information on that later).
- Open your terminal.
- Navigate to the repository folder.
- Type `npm i discord.js && npm i discord-user-bots && node index.js`.

If you have done everything correctly, two debug messages should appear after a while saying "Logging in as" followed by your bot's tag and your user's tag

---

## How to setup CONFIG.json

First set up a bot following these steps:

- Go to the [Discord developer portal](https://discord.com/developers/applications).
- Click on "New Application", enter a random name (this really doesn't matter) and hit create.
- Head to the "Bot" section and click on "Add Bot", then "Yes, do it!".
- Click on "Reset Token", then "Yes, do it!" followed by "Copy".
- Open the CONFIG.json file in the repository folder and paste the token there (This is a BOT token).


Now get you client's token:

- Open Discord from [your browser](https://discord.com/channels/@me) and login if you haven't already.
- Hit the "F12" key to open dev tools (if you don't have any F12 key, look up on Google how to open them on your browser).
- Select network at the far top.
<img width="244" alt="Network" src="https://user-images.githubusercontent.com/77175659/175839716-b6d7d767-6e8e-45b2-b81c-ac36df760dbc.png">

- Type `/api` in the "Filter" section.
<img width="175" alt="Filter" src="https://user-images.githubusercontent.com/77175659/175839700-2fc0113c-741c-4b40-a16a-ca82dbe33040.png">

- Hit `ctrl + r` (`or cmd + r` on MacOS)
- Select "Library" amongs the options that will appear in the sidebar.
<img width="121" alt="Library" src="https://user-images.githubusercontent.com/77175659/175839723-404fab89-ed41-44a6-b5c8-f7569c6e91fc.png">

- Scroll down until you see the "authorisation" header and copy the text text to it.!
<img width="300" alt="Token" src="https://user-images.githubusercontent.com/77175659/175839711-8b9ee071-ed50-43bd-bec2-d2f54d152dc2.png">

- Open the CONFIG.json file in the repository folder and paste the token there (This is a USER token).

Finally you need to once again open the CONFIG.json file and input whatever you want in the "command" field. This will be the content of the message that triggers the code and it must be sent to you. For example, if you were to put "Hey" as a command, each time you send exactly the message "Hey" the code will run.
