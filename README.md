Recently discord announced that now applications can have an animated avatar, but if you try the discord.com/developers website you will see that you cant, because to modify the avatar you must make a request to the discord api with the "PATCH" method and this repository will show you how to do it in node.js.

# bot-avatar-animated

## How do I run this?
A request is made to the discord api using the PATCH method, modifying the avatar with encryption methods, etc.

Simple steps to make this work:
1) Install [node.js](https://nodejs.org/en/download/) if you dont already have it
2) Clone/download this repository
3) replace `YOUR_TOKEN` with your bot token, it can be found in [Discord developers](https://discord.com/developers)
4) add or change the image in `image/avatar.gif
5) Make sure that the image is placed there and that it is named `avatar.gif`.
6) type `npm i fs` install this module to get the locations in a better way.
7) type `node .` to run index.js

| identifier       | description                  |
|:----------------:|:-----------------------------:|
| `token`           | bot token |
| `./image/avatar.gif`           | location where the image is located |

## Important Notice
before modifying the avatar of your bot read first the [terms of service](https://discord.com/terms) and [community guidelines](https://discord.com/guidelines)

as avatars are restricted like nitro users.
