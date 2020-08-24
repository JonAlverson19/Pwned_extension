# Pwned_extension
Browser extension that checks if your passwords are in leaked databases. 

Anyone can use or modify this code for personal use.

## Installation
* Git clone the repo
```bash
git clone https://github.com/JonAlverson19/Pwned_extension
```
* Install to chrome
	* Go to chrome://extensions
	* Enable "Developer mode" in the upper right corner
	* Click "Load unpacked"
	* Select the folder you cloned to
## How to use
There are two ways to use this extension: actively and passively. 

To actively use the extension, first pin it to your browser after install. Then simply left clicking on the extension icon will display a popup. Enter a password in this field and hit "Search" to poll the have i been pwned (HIBP) api. The extension will return if the password exists in the HIBP databases.

To passively use the extension, simply install it. It checks each page you visit for a submit button and password field. If only one of each exists on the site, the extension will wait until you press the submit button. Once you try to move forward with the login, the extension grabs whatever is in that password field and polls the HIBP api. If it finds a match, an annoying alert will display over the page. If it does not find a match, or if the page does not match the submit/password requirements, then the extension will do nothing.

## Security
To ensure that your password does not end up in a database due to this extension, your password is never saved or sent over the internet. Once a password is found, it is hashed by a function stored within the extension. The HIBP api then gets sent the first five of that hash to ensure k-anonimity. The api returns any hashes that matched and the extension checks those for full matches. 
