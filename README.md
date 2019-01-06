## Podcast Feed Loader

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-green.svg)](https://standardjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

This is the part of the product that is responsible for importing the data.

It loads podcast feed urls from a file, normalizes them, and then updates them in a search engine. Currently only supports Azure Search.

Read more about it here: [Podcast Feed Loader on the wiki](https://github.com/codingblocks/podcast-app/wiki/Podcast-Feed-Loader)


### Running with Docker

```
# test docker enviroment bindings before creating containers
docker-compose config

# start local development
docker-compose up -d

# start regular docker
docker-compose build && docker-compose up [ OPTIONAL ] -d (if console is not needed)  
```

Command to stop container:

```;bash
# to stop
docker-compose stop
```

## Huge thanks to all of the contributors!
- [Aaron Clawson](https://github.com/MadVikingGod)
- [Adam Lantz](https://github.com/AdamLantz)
- [Aditya Kolla](https://github.com/aditya-kolla)
- [Arlene Andrews](https://github.com/arleneandrews)
- [Ben Steward](https://github.com/tehpsalmist)
- [Brandon Lyons](https://github.com/lyonsbp)
- [Dave Follett](https://github.com/davefollett)
- [Joe Zack](https://github.com/THEjoezack)
- [Mikkel Madsen](https://github.com/Madsn)
- [Nicolas Marcora](https://github.com/nmarcora)
- [Paul Mcilreavy](https://github.com/pmcilreavy)
- [Sung Kim](https://github.com/dance2die/)
- [Vladimir Kunarac](https://github.com/vlado92)
