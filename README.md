# denoToDo

A simple client-side to-do application built with Deno + React.

## Building

This app takes advantage of the built-in Deno bundler. To build the client-side script run: `deno bundle --unstable --importmap import_map.json ./src/browser.tsx ./build.js`