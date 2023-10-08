# Rewards Prototype
Prototype for the Well-List Rewards Feature built using JavaScript and HTML canvases

## Running
All that is required to run is to start a local http server

For Example:
```sh
python3 -m http.server
```

## Sprites:

Free Use, No Credit Required:
- Plant Sprites: https://raccoontruck.itch.io/house-plants-with-126-color-variations
- Sky Backgrounds: https://free-game-assets.itch.io/free-sky-with-clouds-background-pixel-art-set

Everything else was made by me

## Some Misc. Notes
- To implement with our app the only are that needs to be updated is how data is stored and how data updates are handled
- If we use this we wouldn't want to include all the raw sprite images in our repository, but instead only include the `sources.js` file. This file includes the sprites as Base64 images and where everything is structrued in a way that makes accessing the desired sprite much easier. This method of storing the sprites wouldn't be the best in a production environmnet, but it should work well for our project.
- This was implemented by drawing sprites on HTML canvases based on mouse events by the user. There are three separate main canvas sections where each one has multiple layers or multiple canvases stacked on top of each other.
- The aspect ratio will be preserved, so it should look good for all screen sizes. It was not made to work well for vertical/phone screens, but it won't break and I don't think we should be targeting those.
- Local data is saved to a local JSON variable in `src/data.js`. I also threw in a way to save and load this data to and from text files, just to ensure it works like it should.
