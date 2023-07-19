<html>
    <head>
        <link rel="stylesheet" type="text/css" href="/home/student/Desktop/portals.css" />
      <link rel="stylesheet" type="text/css" href="Desktop/SE_Project.css" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
     <style>
        .rgukt-logo{
    height:50px;
    width:50px;

}
.p::first-letter{

    font-size:50px;
}
.p{
  font-size:30px;
  color:brown;
}

.hover{
font-size: 20px;
font-weight: bold;
color:black
}
.dwitem:hover{
background-color: orangered;
}

body {
background-color: white;
display: flex;
flex-direction: column;
}

.student-portal,
.staff-portal,
.studentwelfare-portal,
.placement-portal {
margin-bottom: 20px;
background-color: white;
border-radius: 2px;
border-width: 0.5px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
text-align: center;
cursor: pointer;
text-transform: capitalize;
height: 150px;
width: 150px;
padding-top: 30px;
}

.text {
font-size: 15px;
color: black;
}


.student-popup-container,
.staff-popup-container,
.studentwelfare-popup-container {
position: fixed;
top: 20%;
left: 50%;
transform: translate(-50%);
background-color: white;
display: flex;
justify-content: center;
z-index: 30;
flex-direction: column;
padding: 20px;
border: 4px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
opacity: 1;
transition: all 0.7s;
text-align: center;

}

.active.student-popup-container,
.active.staff-popup-container,
.active.studentwelfare-popup-container {
visibility: hidden;
opacity: 0;
top: 10%;
}

.modal-header {
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;
}

.modal-header .title {
font-size: 2rem;
font-weight: bold;
text-transform: capitalize;
}

.modal-header .close-button,
.studentwelfare-close-button,
.staff-close-button {
cursor: pointer;
font-weight: bold;
border: none;
background-color: white;

}

.modal-body {
padding: 20px;
}

.modal-body .modal-input {
display: flex;
width: 100%;
margin-bottom: 15px;


}

.modal-body .modal-input .icon {
background-color: black;
padding: 10px;
margin: 0;
color: white;
text-align: center;
}

.modal-body .login {
background-color: black;
padding: 10px;
border-radius: 5px;
text-transform: capitalize;
color: white;
}

#overlay {
position: fixed;
opacity: 0;
top: 0;
right: 0;
left: 0;
bottom: 0;
pointer-events: none;

}

#overlay.active {
pointer-events: all;
opacity: 1;
background-color: rgba(0, 0, 0, 0.2);
}
.class{
margin-top:25px;

}
.chan{
background-color: aliceblue;
padding:10px;

}
a{
text-decoration: none;
color:black
}


.body{
background-image: url("https://www.rguktong.ac.in/svgs/carosel/ssn.png");
height:100vh;
width:100vw;
background-color:rgb(96, 229, 189) ;
background-size: cover;
}
     </style>
     
    </head>
    <body>
        <div class="body">
      <nav class="navbar navbar-expand-lg navbar-light bg-light bg-transparent">
        <a class="navbar-brand" href="#">
          <div class="d-flex flex-row">
            <img src="/home/student/Downloads/ongole.png" class="rgukt-logo"/>
            <p class="p">Ongole</p>
          </div>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <a class="nav-link hover" href="#">Home</a>
           
            <div class="dropdown">
              <a class="nav-link hover"  href="#"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item dwitem" href="/home/student/Desktop/atglance.html">At a Glance</a></li>
                 
                  <li><a class="dropdown-item dwitem" href="#achieve">Achievements&Awards</a></li>
                  <li><a class="dropdown-item dwitem" href="/home/student/Desktop/gallery.html">Gallery</a></li>
                </ul>
                </a>
            </div>
            <div class="front">

            </div>
            
            <div class="dropdown" >
              <a class="nav-link hover" href="#" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Academics
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item dwitem" href="/home/student/Desktop//program.html">Programmes</a></li>
                  <li><a class="dropdown-item dwitem" href="/home/student/Desktop//ac.html">Academic Calendar</a></li>
                </ul>
              </a>
            </div>
            <div class="dropdown" >
                <a class="nav-link hover" href="#" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Portals
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item dwitem" href="#portals">Student portal</a></li>
                    <li><a class="dropdown-item dwitem" href="#portals">Staff portal</a></li>
                    <li><a class="dropdown-item dwitem" href="#portals">Student welfare</a></li>
                    <li><a class="dropdown-item dwitem" href="#portals">placement portal</a></li>
                  </ul>
                </a>
              </div>
            <div class="dropdown">
              <a class="nav-link hover" href="#" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Adminstration
              <ul class="dropdown-menu">
                <li><a class="dropdown-item dwitem" href="#chancellor">Chancellor</a></li>
                <li><a class="dropdown-item dwitem" href="#vice">Vice Chancellor</a></li>
                <li><a class="dropdown-item dwitem" href="#director">Director</a></li>
              </ul>
              </a>
          </div>
          </div>
        </div>
      </nav>
    </div>


      <div class="container class" id="portals">
        <div class="row">
            <div class="col-12">
                <h2 style="margin-bottom:50px;">Portals</h2>
            </div>
            <div class="col-6 col-lg-3 col-xl-3">
                <div class="student-portal">
                    <i class="fa-solid fa-graduation-cap fa-4x"></i>
                    <div class="text">Student portal</div>
                </div>
            </div>
            <div class="col-6 col-lg-3 col-xl-3">
                <div class="staff-portal">
                    <i class="fa-solid fa-chalkboard-user fa-4x"></i>
                    <div class="text">staff portal</div>
                </div>
            </div>
            <div class="col-6 col-lg-3 col-xl-3">
                <div class="studentwelfare-portal">
                    <i class="fa-solid fa-envelope fa-4x"></i>
                    <div class="text">student welfare</div>
                </div>
            </div>
            <div class="col-6 col-lg-3 col-xl-3">
                <div class="placement-portal">
                    <i class="fa-solid fa-building fa-4x"></i>
                    <div class="text">placement portal</div>
                </div>
            </div>
        </div>
    </div>



    <div class="student-popup-container active">
        <div class="modal-header">
            <div class="title">student login</div>
            <button class="close-button">&times;</button>
        </div>
        <div class="modal-body">
            <form action="login2.php" method="post">
                <div class="modal-input">
                    <i class="fa-solid fa-id-card icon"></i>
                    <input type="text" name="username" placeholder="Enter Your Id" />
                </div>
                <div class="modal-input">
                    <i class="fa-solid fa-key icon"></i>
                    <input type="password" name="password" placeholder="Enter Your Password" />
                </div>
                <button class="login">Login</button>
            </form>
        </div>
    </div>




    <div class="staff-popup-container active">
        <div class="modal-header">
            <div class="title">staff login</div>
            <button class="staff-close-button">&times;</button>
        </div>
        <div class="modal-body">
            <form>
                <div class="modal-input">
                    <i class="fa-sharp fa-solid fa-envelope icon"></i>
                    <input type="text" name="username" placeholder="Enter Your Email" />
                </div>
                <div class="modal-input">
                    <i class="fa-solid fa-key icon"></i>
                    <input type="password" name="password" placeholder="Enter Your Password" />
                </div>
                <button class="login">Login</button>
            </form>
        </div>
    </div>

    <div class="studentwelfare-popup-container active">
        <div class="modal-header">
            <div class="title">SWO login</div>
            <button class="studentwelfare-close-button">&times;</button>
        </div>
        <div class="modal-body">
            <form>
                <div class="modal-input">
                    <i class="fa-solid fa-id-card icon"></i>
                    <input type="text" name="username" placeholder="University ID" />
                </div>
                <div class="modal-input">
                    <i class="fa-solid fa-key icon"></i>
                    <input type="password" name="password" placeholder="Password" />
                </div>
                <button class="login">Login</button>
            </form>
        </div>
    </div>
    <div id="overlay"></div>




    <div class="container" id="sectionad">
        <div class="row">
            <div class="col-12">
                <h1 class="adminstration-section-heading" style="margin-top:70px;margin-bottom:20px">Administration</h1>
            </div>

            <div class="col-12 col-md-6 col-lg-3 p-10 m-10">
                <a href="/home/student/Desktop/ad.html">
                <div class="ad-item-card shadow bg-white p-3 mb-3" id="chancellor">
                   <img src="https://rguktn.ac.in/administration/images/kc-reddy.jpg"class="menu-item-image w-100 h-50"/>
                    <h5 class="ad-card-title p-1">Chancellor</h5>
                    <h6>K.C.Reddy</h6>
                  </div>
                </a>
            </div>

            <div class="col-12 col-md-6 col-lg-3 p-10 m-10">
                <a href="/home/student/Desktop/ad2.html">
                <div class="ad-item-card shadow bg-white p-3 mb-3" id="vice">
                    <img
                      src="data:image/jpeg;base64,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"
                      class="menu-item-image w-100 h-50"
                    />
                    <h5 class="ad-card-title p-2">Vice Chancellor</h5>
                    <h6>Prof.Hemachandra Reddy</h6>
                  </div>
                </a>
            </div>
           
            <div class="col-12 col-md-6 col-lg-3 p-10 m-10">
                <a href="/home/student/Desktop/ad3.html">
                <div class="ad-item-card shadow bg-white p-3 mb-3" id="director">
                    <img
                      src="https://www.rguktong.ac.in/images/jayaramdir.jpg"
                      class="menu-item-image w-100 h-50"
                    />
                    <h5 class="ad-card-title p-1">Director</h5>
                    <h6>Prof.Jayarami Reddy</h6>
                  </div>
                </a>
            </div>
        </div>
        </div>





    <div class="achievment-section pt-5 pb-5 mb-5" id="achieve">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <h1 class="achievment-section-heading">Our Achievments</h1>
              </div>

              <div class="col-12 col-md-6 col-lg-3">
                  <div class="achievment-item-card bg-white shadow p-3 mb-3" data-toggle="modal" data-target="#graduationModal">
                      <img src="https://ik.imagekit.io/m9l4ka7en/grad_jMet2vk0fU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656237416028" class="achievment-item-image w-100" />
                      <h1 class="achievment-card-title">98% Graduation</h1>

                      <a href="" class="achievment-item-link" data-toggle="modal" data-target="#graduationModal">
                          View All
                          <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right-short" data-toggle="modal" data-target="#graduationModal" fill="#e80518" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                          </svg>
                      </a>

                      <!-- Modal -->
                      <div class="modal fade mt-5" id="graduationModal" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                          <div class="modal-dialog">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <h5 class="modal-title" id="exampleModalLabel2">98% Graduation</h5>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                      </button>
                                  </div>
                                  <div class="modal-body m-2 pt-3">
                                      <img src="https://ik.imagekit.io/m9l4ka7en/grad_jMet2vk0fU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656237416028" class="achievment-item-modal-image " />
                                      <p class="pt-2">Graduation isn't just the education you acquire,it must be the knowledge you require. It is a form of celebration when we laud all the hard work put in by our students and salute the efforts put in by both our students and teachers – efforts that have helped our students emerge as successful engineering graduates.</p>
                                  </div>
                              </div>
                          </div>
                      </div>


                  </div>
              </div>
              <div class="col-12 col-md-6 col-lg-3">
                  <div class="shadow achievment-item-card bg-white p-3 mb-3" data-toggle="modal" data-target="#ornateModal">
                      <img src="https://res.cloudinary.com/dg0jofors/image/upload/v1657359968/IMG_20220709_150504_k5j3xn.jpg" class="achievment-item-image w-100" data-toggle="modal" data-target="#dreamChasingModal" />
                      <h1 class="achievment-card-title">Ornate</h1>
                      <a href="" class="achievment-item-link" data-toggle="modal" data-target="#ornateModal">
                          View All
                          <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="#e80518" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                          </svg>
                      </a>

                      <!-- Modal -->
                      <div class="modal fade mt-5" id="ornateModal" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                          <div class="modal-dialog">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <h5 class="modal-title" id="exampleModalLabel1">ORNATE evnets</h5>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                      </button>
                                  </div>
                                  <div class="modal-body">
                                      <img src="https://res.cloudinary.com/dg0jofors/image/upload/v1657359968/IMG_20220709_150504_k5j3xn.jpg" class="achievment-item-ornate-image " data-toggle="modal" data-target="#dreamChasingModal" />
                                      <img src="https://res.cloudinary.com/dg0jofors/image/upload/v1657361305/IMG_20220709_150317_jmvpkp.jpg" class="achievment-item-ornate-image " data-toggle="modal" data-target="#dreamChasingModal" />
                                      <img src="https://res.cloudinary.com/dg0jofors/image/upload/v1657361305/IMG_20220709_150356_z9lof5.jpg" class="achievment-item-ornate-image " data-toggle="modal" data-target="#dreamChasingModal" />
                                      <p class="pt-2">As a engineering student you must go through every phase of ENGINEERING.ENGINEERING isn't always about the academics , sometimes it is also about exploring new talents,culturals,science-fest as well.We the IIIT-O's have our ORNASTIC & ORNATIOUS techo-fest namely ORNATE.</p>

                                  </div>
                              </div>
                          </div>
                      </div>


                  </div>
              </div>
              <div class="col-12 col-md-6 col-lg-3">
                  <div class="achievment-item-card shadow bg-white p-3 mb-3" data-toggle="modal" data-target="#careersModal">
                      <img src="https://ik.imagekit.io/m9l4ka7en/king_KTYef2B5T.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1656237415592" class="achievment-item-image w-100" />
                      <h1 class="achievment-card-title">Careers</h1>
                      <a href="" class="achievment-item-link" data-toggle="modal" data-target="careersModal">
                          View All
                          <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right-short" data-toggle="modal" data-target="#careersModal" fill="#e80518" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                          </svg>
                      </a>

                      <!-- Modal -->
                      <div class="modal fade mt-5" id="careersModal" tabindex="-1" aria-labelledby="exampleModalLabel4" aria-hidden="true">
                          <div class="modal-dialog">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <h5 class="modal-title" id="exampleModalLabel4">Careers</h5>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                      </button>
                                  </div>
                                  <div class="modal-body">
                                      <img src="https://ik.imagekit.io/m9l4ka7en/king_KTYef2B5T.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1656237415592" class="achievment-item-image w-100" />
                                      <p class="pt-2">A engineering student must succed in their academic life and so as in their personal one.So they have to integrate their academic skills and industrial needs to achieve a good CAREER .</p>
                                  </div>
                              </div>
                          </div>
                      </div>


                  </div>
              </div>
              <div class="col-12 col-md-6 col-lg-3">
                  <div class="achievment-item-card shadow bg-white p-3 mb-3" data-toggle="modal" data-target="#topPerformancesModal">
                      <img src="https://res.cloudinary.com/dg0jofors/image/upload/v1657360242/placements_gswxpv.png" class="achievment-item-image w-100" />
                      <h3 class="achievment-card-title">Top Performanes</h3>

                      <a href="" class="achievment-item-link" data-toggle="modal" data-target="#topPerformancesModal5">
                          View All
                          <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right-short" data-toggle="modal" data-target="#topPerformancesModal" fill="#e80518" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                          </svg>
                      </a>




                      <!-- Modal -->
                      <div class="modal fade mt-5" id="topPerformancesModal" tabindex="-1" aria-labelledby="exampleModalLabel5" aria-hidden="true">
                          <div class="modal-dialog">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <h5 class="modal-title" id="exampleModalLabel5">Top Performanes</h5>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                      </button>
                                  </div>
                                  <div class="modal-body">
                                      <img src="https://ik.imagekit.io/m9l4ka7en/graduation_I5xR2hew1a.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656237415879" class="achievment-item-image w-100" />

                                  </div>
                              </div>
                          </div>
                      </div>


                  </div>
              </div>
              <div class="col-12 col-md-6 col-lg-3">
                  <div class="achievment-item-card bg-white shadow p-3 mb-3" data-toggle="modal" data-target="#shapingTheMindModal">
                      <img src="https://res.cloudinary.com/dg0jofors/image/upload/v1657360771/students_t5136n.jpg" class="achievment-item-image w-100" />
                      <h1 class="achievment-card-title">Shaping the MINDS</h1>

                      <a href="" class="achievment-item-link" data-toggle="modal" data-target="#shapingTheMindModal">
                          View All
                          <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right-short" data-toggle="modal" data-target="#shapingTheMindModal" fill="#e80518" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                          </svg>
                      </a>

                      <!-- Modal -->
                      <div class="modal fade mt-5" id="shapingTheMindModal" tabindex="-1" aria-labelledby="exampleModalLabel6" aria-hidden="true">
                          <div class="modal-dialog">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <h5 class="modal-title" id="exampleModalLabel6">Shaping the MINDS</h5>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                      </button>
                                  </div>
                                  <div class="modal-body">
                                      <img src="https://ik.imagekit.io/m9l4ka7en/student_s_A-tSe4UJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656237416157" class="achievment-item-image w-100" />

                                  </div>
                              </div>
                          </div>
                      </div>


                  </div>
              </div>
              <div class="col-12 col-md-6 col-lg-3">
                  <div class="shadow achievment-item-card bg-white p-3 mb-3" data-toggle="modal" data-target="#sportsMeetModal">
                      <img src=" https://res.cloudinary.com/dg0jofors/image/upload/v1657360772/sports_wcmmdm.jpg" class="achievment-item-image w-100" />
                      <h1 class="achievment-card-title">Sports Meet's</h1>

                      <a href="" class="achievment-item-link" data-toggle="modal" data-target="#sportsMeetModal">
                          View All
                          <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right-short" data-toggle="modal" data-target="#sportsMeetModal" fill="#e80518" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                          </svg>
                      </a>

                      <!-- Modal -->
                      <div class="modal fade mt-5" id="sportsMeetModal" tabindex="-1" aria-labelledby="exampleModalLabel7" aria-hidden="true">
                          <div class="modal-dialog">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <h5 class="modal-title" id="exampleModalLabel7">Sports meet</h5>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                      </button>
                                  </div>
                                  <div class="modal-body">
                                      <img src="https://res.cloudinary.com/dg0jofors/image/upload/v1657360772/sports_wcmmdm.jpg" class="achievment-item-image w-100" />

                                  </div>
                              </div>
                          </div>
                      </div>


                  </div>
              </div>
              <div class="col-12 col-md-6 col-lg-3 pb-5">
                  <div class="achievment-item-card shadow bg-white p-3 mb-3" data-toggle="modal" data-target="#theBestModal">
                      <img src="https://ik.imagekit.io/m9l4ka7en/trophy_ffeJuzw_t.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656237415962" class="achievment-item-image w-100" />
                      <h1 class="achievment-card-title">The BEST</h1>

                      <a href="" class="achievment-item-link" data-toggle="modal" data-target="#theBestModal">
                          View All
                          <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right-short" data-toggle="modal" data-target="#theBestModal" fill="#e80518" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                          </svg>
                      </a>




                      <!-- Modal -->
                      <div class="modal fade mt-5" id="theBestModal" tabindex="-1" aria-labelledby="exampleModalLabel8" aria-hidden="true">
                          <div class="modal-dialog">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <h5 class="modal-title" id="exampleModalLabel8">the BEST</h5>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                      </button>
                                  </div>
                                  <div class="modal-body">
                                      <img src="https://ik.imagekit.io/m9l4ka7en/trophy_ffeJuzw_t.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656237415962" class="achievment-item-image w-100" />

                                  </div>
                              </div>
                          </div>
                      </div>


                  </div>
              </div>




              <div class="follow-us-section pt-5   m-auto " id="contactUsSection">
                <div class="container">
                    <div class="row">
                  <div class="col-12">
                      <center><h1 class="follow-us-section-heading">Follow Us</h1></center>
                  </div>
                  <div class="col-12">
                      <div class="d-flex flex-row justify-content-center">
                          <div class="follow-us-icon-container">
                              <i class="fab fa-twitter icon"></i>
                          </div>

                          <div class="follow-us-icon-container">
                              <i class="fab fa-telegram icon"></i>
                          </div>
                          <div class="follow-us-icon-container">
                              <i class=" fab fa-instagram icon"></i>
                          </div>

                          <div class="follow-us-icon-container">
                              <i class="fab fa-facebook icon"></i>
                          </div>

                          <div class="follow-us-icon-container">
                              <i class="mr-2 fab fa-youtube icon"></i>
                          </div>
                      </div>
                  </div>
              </div>



              <!-- FOOTER SECTION-->

              <div class="d-flex flex-column footer-section col-12 text-center pt-3 pb-5">
                  <img src="https://res.cloudinary.com/dg0jofors/image/upload/v1657386808/index_gouh5k.jpg" class="university-logo m-auto" />
                  <h1 class="footer-section-mail-id">rguktiiitongole@gmail.com</h1>
                  <p class="footer-section-address">
                      Rao & Naidu college of Engineering , Ongole , A.P , India
                  </p>
              </div>
          </div>

          </div>
          </div>




      </div>
  </div>
  </div>




    <script>
    const button = document.querySelector(".student-portal");
const popup = document.querySelector(".student-popup-container");
const close3 = document.querySelector(".close-button");
const overlay = document.getElementById('overlay');
button.addEventListener("click", () => {
    popup.classList.remove("active");
    overlay.classList.add('active');

});
close3.addEventListener("click", () => {
    popup.classList.add("active");
    overlay.classList.remove('active');

});

const button1 = document.querySelector(".staff-portal");
const popup1 = document.querySelector(".staff-popup-container");
const close1 = document.querySelector(".staff-close-button");
button1.addEventListener("click", () => {
    popup1.classList.remove("active");
    overlay.classList.add('active');

});
close1.addEventListener("click", () => {
    popup1.classList.add("active");
    overlay.classList.remove('active');

});
const button2 = document.querySelector(".studentwelfare-portal");
const popup2 = document.querySelector(".studentwelfare-popup-container");
const close2 = document.querySelector(".studentwelfare-close-button");
button2.addEventListener("click", () => {
    popup2.classList.remove("active");
    overlay.classList.add('active');

});
close2.addEventListener("click", () => {
    popup2.classList.add("active");
    overlay.classList.remove('active');
});
    </script>







            <script type="text/javascript" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/js/ccbp-ui-kit.js"></script>

    </body>
  </html>



 




