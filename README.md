# TraDvisor
## Author: Nelson Mutinda Mwanzia
### General Information
**TraDvisor** Is a travel advisory application created by __Nelson Mutinda Mwanzia__. Whenever it comes to the holiday season, most households find themselves visiting travel advisory websites looking to get a suggestion for a holiday destination that would best suit their needs. This web application makes use of a RESTful API, that will contain information about local holiday destinations that are not commonly found on other travel advisory pages. It is accessible both on mobile devices and desktop or laptop computers. It also has a Navigation Bar incoorporated into it to allow easy navigation through the webpages.

[![Netlify Status](https://api.netlify.com/api/v1/badges/015ba16a-ed0a-42e9-98f2-256e55269f0c/deploy-status)](https://app.netlify.com/sites/wondrous-taffy-0e191f/deploys)

### Technologies/Features 
1. React JS
2. CSS 
3. Heroku
### Setup
To run this project, one must have either of the following;
1. The live Heroku link to this repository available on both the project repository **About** and **at the end of this README file**.
2. Clone this repository and have Visual Studio Code (Windows) or Code (Linux) with the following installed in the project directory :
    * Run __"npm install"__ to install the project dependencies.
    * Run __"npm install react-router-dom@5.2.0"__ to install a compatible version of react-router-dom.
    * Run __"npm install react-icon"__ to install react-icons.
    * Run __"npm install react-bootstrap"__ to install react-bootstrap. 
    * Run __"json-server --watch db.json"__ command in the terminal to get the server running.
    * Run __"npm start"__ command in another terminal window to get the React App running.
### Known Bugs
1. The TraDvisor logo on the footer when clicked does not scroll to the top of the Home Page.
2. On clicking the live link on the About section of this repository, the webpage will be displayed but the JSON server will not load. As a temporary fix, the user is advised to do the following:
    * Clone this repository and follow the instructions provided in the Setup section of this README file.
    * On completion of the installation of prerequisites (visit Setup Section), the user will open a new terminal and run either the __"json-server --watch db.json"__ command or __"npm run server"__ commands to start the server.
    * The user will then reload the page on the browser window. The JSON server data will then be displayed in their respective pages.
3. Upon loading the page using the Heroku App link in the About of this repository, between the Footer and Herosection, a "0" is displayed. This is a known issue. It is displayed when the Card Component does not fetch.
### Future Updates
1. Add Programmatic Navigation to the Add Destination Form that upon clicking the "Add Destination" button, the user will then be redirected to the Home page, in the Card Component and will be shown their newly added destination. Users are therefore advised to click on the button once and navigate to the Home Section to confirm whether their changes have been made.
2. Add a modal to display Destination Details.
3. Fix the Heroku Server Deployment issues.
### Copyright and License (MIT)
#### Copyright <2022>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "TraDvisor"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
### Contact
Email: nmutinda02@gmail.com
### Live Heroku Page Link
https://tradvisor-app.herokuapp.com/
# TraDvisor By Nelson Mutinda Mwanzia
