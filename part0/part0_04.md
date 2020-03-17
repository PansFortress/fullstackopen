title part0_04

Client->Server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note
Client-->Server:  [Form Data {note: "test data"}]
Server->Client: 302 Found Location: /notes
Client->Server: HTTP GET https://fullstack-exampleapp.herokuapp.com/notes
Server-->Client: HTML-code
Client->Server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
Server-->Client: main.css
Client->Server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js
Server-->Client: main.js
