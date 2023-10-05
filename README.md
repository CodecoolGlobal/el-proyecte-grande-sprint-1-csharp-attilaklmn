<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-csharp-attilaklmn">
    <img src="/reactapp/public/logo_transparent_cut.png" alt="Logo" width="960" height="374">
  </a>

  <p align="center">
    <br />
  <br />
    This is the group project for the final module of our education at CodeCool.
    The project aimed to create a fullstack web service for a movie theater with seat reservation, management of the screenings and user account & role management, as well as the intuitive UI.
    <br />
    <a href="https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-csharp-attilaklmn"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-csharp-attilaklmn">View Demo</a>
    ·
    <a href="https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-csharp-attilaklmn/issues">Report Bug</a>
    ·
    <a href="https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-csharp-attilaklmn/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#team-and-acknowledgments">Team & acknowledgments</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
<div align="center">
    <h2>Seat reservation with database transaction management</h2>
    <img src="/CS_Reservation.png" alt="Logo" width="960" height="374"> 
    <h2>Movie & screening list with admin user features</h2>
    <img src="/CS_MovieList.png" alt="Logo" width="480" height="374">
    <h2>User management with JWT token handling and authorities</h2>
    <img src="/CS_Registration.png" alt="Logo" width="480" height="374">

</div>

### Built With

- [![.Net][.Net]][.Net-url]
- [![C#][C#]][C#-url]
- [![PostgreSQL][PostgreSQL]][PostgreSQL-url]
- [![React][React.js]][React-url]
- [![Javascript][Javascript]][Javascript-url]
- [![MUI][MUI]][MUI-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Currently, the easiest way to run the application is to clone the repo and run the backend and frontend seperately.

### Prerequisites

- Node.js
- .NET SDK

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-csharp-attilaklmn.git
   ```
2. Install NPM packages in the reactapp folder
   ```sh
   npm install
   ```
3. Install Nuget packages in the webapi folder
   ```sh
   dotnet restore
   ```
4. Build the project
   ```sh
   dotnet build
   ```
5. Run the backend server
   ```sh
   dotnet run --project webapi.csproj
   ```
6. Run the client in the reactapp folder
   ```js
   npm start
   ```
7. Access the application in your browser (default address below)
   ```sh
   http://localhost:3000
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This application can be used to simulate a movie theater's ticket reservation web service both from customer and admin side.
Customer side:
 - Register/login user
 - View movie list/upcoming screenings
 - Reserve tickets for selected screening
Admin side:
 - Currently admin user can not be registered, but feel free to use this test account: Username: Gabika, Password: Gabika32. (After login select the admin view option in the dropdown menu)
 - Add movies to the list
 - Add new screenings

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Frontend layout base & backend structure
- [ ] Initial movie list, seat reservation & user management with dummy db objects
- [ ] PostgreSQL database connection with Entity Framework
    - [ ] Database transactions for seat reservation
- [ ] JWT management
    - [ ] Authorization + admin view
- [ ] Better user experience
    - [ ] Connect movies to screenings on the frontend + user data management options
- [ ] Admin options on the frontend for the management of movies and screenings

See the [open issues](https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-csharp-attilaklmn/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Gábor Szajkó - szajkoggg@gmail.com
Attila Kálmán - kalmanattila04@gmail.com

Project Link: [https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-csharp-attilaklmn](https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-csharp-attilaklmn)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Team and Acknowledgments

Creators:
 - Evelin Mandics
 - Attila Örs Kálmán
 - Bálint Csányi
 - Gábor Szajkó

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Readme template distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/CodecoolGlobal/el-proyecte-grande-sprint-1-csharp-attilaklmn.svg?style=for-the-badge
[contributors-url]: https://github.com/gCodecoolGlobal/el-proyecte-grande-sprint-1-csharp-attilaklmn/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/CodecoolGlobal/el-proyecte-grande-sprint-1-csharp-attilaklmn.svg?style=for-the-badge
[forks-url]: https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-csharp-attilaklmn/network/members
[stars-shield]: https://img.shields.io/github/stars/CodecoolGlobal/el-proyecte-grande-sprint-1-csharp-attilaklmn.svg?style=for-the-badge
[stars-url]: https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-csharp-attilaklmn/stargazers
[issues-shield]: https://img.shields.io/github/issues/CodecoolGlobal/el-proyecte-grande-sprint-1-csharp-attilaklmn.svg?style=for-the-badge
[issues-url]: https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-csharp-attilaklmn/issues
[license-shield]: https://img.shields.io/github/license/CodecoolGlobal/el-proyecte-grande-sprint-1-csharp-attilaklmn.svg?style=for-the-badge
[license-url]: https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-csharp-attilaklmn/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/szajkó-gábor-63883556
[product-screenshot]: /CS_MovieList.png
[product-screenshot-1]: CS_Registration.png
[product-screenshot-2]: CS_Reservation.png
[Javascript]: https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white
[Javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[PostgreSQL]: https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[MUI]: https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=mui&logoColor=white
[MUI-url]: https://mui.com/
[.Net]: https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white
[.Net-url]: https://dotnet.microsoft.com/
[C#]: https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white
[C#-url]: https://learn.microsoft.com/en-us/dotnet/csharp/
