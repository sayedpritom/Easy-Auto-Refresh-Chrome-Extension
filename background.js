// {
//     "manifest_version": 2,
//     "name": "Traversy Launcher",
//     "description": "Quick Launch Traversy Media",
//     "version": "1.0.0",
//     "icons": {"128": "icon_128.png"},

//     "background": {
//         "scripts": ["background.js"]
//     },
//     "content_scripts": [
//       {
//         "matches": ["*://*/*"],
//         "css": [],
//         "js": ["content.js"]
//     }],
//     "permissions": ["tabs", "storage"],
//     "browser_action": {
//       "default_popup": "popup.html",
//       "default_title": "Auto send message popup"
//     }

// }