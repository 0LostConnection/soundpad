[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/0LostConnection/soundpad)

<p align="center">
  <img width="500" src="https://raw.githubusercontent.com/Schrodinger-Hat/soundpad/master/resources/pad.png" />
</p>

## How it works

The `mp3` files must be placed in the folder:`public/assets/sounds/`.

To map an mp3 file and a key you will need to edit the `index.html` file.
The edit is simple: the `data-src` attribute of the relative key must be defined. The value to insert is the name of our audio, without indicating the format (mp3, by default).

Note: actually the mp3 extension is hard coded inside.

## Local development

Run `npm install`.

Run node server with `node index.js`.

Visit: `localhost:3000`

Yay.

## Original Authors

[thejoin](https://github.com/thejoin95) & [wabri](https://github.com/wabri)
