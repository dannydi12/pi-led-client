
# Raspberry Pi LED Client

[![CodeFactor](https://www.codefactor.io/repository/github/dannydi12/pi-led-client/badge)](https://www.codefactor.io/repository/github/dannydi12/pi-led-client)

Finally, a project that provides a turn-key solution for setting up remotely-controlled LEDs on a Raspberry Pi with Express + React. This project allows users to get up and running with WS281x LED strips while also providing a simple web server to act as a remote control.

## Quick Start

A separate repository for the Express back end can be found [at this repo](https://github.com/dannydi12/pi-led-server).

### Prerequisites

For one thing, you'll need a Raspberry Pi 3 or newer. You can find one on Amazon or anywhere else on the internet, so I won't add a link for now.

Make sure you have Node installed. If not, go to [Node's download page]([https://nodejs.org/en/](https://nodejs.org/en/)). 
Or just run this to get the latest version of Node:
```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt install -y nodejs
```
Then, check node is working:
```
node --version
```
Also NPM:
```
npm --version
```

## Setup

### Installing

1. Clone the project: `git clone https://github.com/dannydi12/pi-led-client`
2. Enter the directory with `cd pi-led-client` 
3. Install with NPM: `npm i`
4. Open the 'example.env' file with your favorite text editor and change the API key to something secure. I recommend using a [password generator]([https://passwordsgenerator.net/](https://passwordsgenerator.net/)) to make a strong key. They key should match the API key you set for your server.
5. Rename 'example.env' to '.env' with `mv example.env .env`
6. Run `sudo npm i serve pm2 -g`
7. Build the production folder with `npm run build` (should result in a new folder called 'build')
8. Edit `webserver.sh` with the absolute path to your folder
10. Start the deployment with `sudo pm2 start webserver.sh`

That should be all that's needed to get everything installed. Even after rebooting your Pi, this server should remain live.

**Note: the web server startup command requires `sudo` because it needs root privileges to access port 80.  There are much safer ways to do this but this should not be exposed to the outside world.**

To-do: add screenshots

## Built With

* React
* HTML5
* CSS3
* Javascript
* Jest

## Authors

* **Daniel DiVenere** - *Initial work* - [Portfolio](https://imdan.io)

## Contributing

I'm always looking for ways to better my projects. Feel free to make a pull request or submit an issue.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
