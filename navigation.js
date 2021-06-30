user = localStorage.getItem("loggeduser")

document.write(`

  
  <div class="dropdown" style="padding-top: 5vh">
    <button class="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
      style="width: 15vw; height: 10vh; max-width: 100px; max-height: 80px; border-radius:5px; background-color: rgb(221, 173, 17); color:black; font-size: 20px;"
    >Meni</button>
    `)

if (!user || user == "") {
    document.write(`
      <div class="dropdown-menu">
        <a class="dropdown-item" href="index.html">Pocetna</a>
        <a class="dropdown-item" onclick="otvoriprvipodmeni()" class="dropdown-toggle dropleft-close" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Recepti</a>

        <div class="dropdown-menu dropdown-left" role="menu" aria-labelledby="firstSubmenu" id="firstSubmenu">
          <a onclick="predjiNaSvaJela('Predjela')" class="dropdown-item">Predjelo</a>
          <a onclick="predjiNaSvaJela('Glavna jela')" class="dropdown-item">Glavno jelo</a>
          <a onclick="predjiNaSvaJela('Dezerti')" class="dropdown-item">Dezert</a>
          <a onclick="predjiNaSvaJela('Uzine')" class="dropdown-item">Uzina</a>
        </div>

        <a class="dropdown-item" data-target="#myModal" data-toggle="modal" href="#myModal">Uloguj se</a>
        <a class="dropdown-item" data-target="#modalRegistruj" data-toggle="modal" href="#modalRegistruj">Registruj se</a>
        <a class="dropdown-item" href="aboutus.html">O nama</a>
      </div>
    </div>

    <div class="modal fade" tabindex="-1" role="dialog" id="myModal" data-backdrop="false">
            <div class="modal-dialog">
              <div class="modal-content" style="background-color: rgb(255, 224, 102)">
                <div class="modal-header">
                  <h4 class="modal-title w-100 text-center">Uloguj se</h4>
                </div>
                <div class="modal-body">
                  <table class="table table-bordered" style="text-align:center">
                    <tr><td>
                        <input type="text" id="username" placeholder="username" style="text-align:center">                  
                    </td></tr>
                    <tr><td>
                        <input type="password" id="password" placeholder="password" style="text-align:center">                  
                    </td></tr>
                  </table>
                </div>
                <div class="modal-footer" style="display:flex; justify-content:space-around">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Zatvori</button>
                    <button type="button" class="btn btn-success" onclick="ulogujse()">Uloguj se</button>
                </div>
              </div>
            </div>          
          </div>

          <div class="modal fade" tabindex="-1" role="dialog" id="modalRegistruj" data-backdrop="false">
            <div class="modal-dialog">
              <div class="modal-content" style="background-color: rgb(255, 224, 102)">
                <div class="modal-header">
                  <h4 class="modal-title w-100 text-center">Registruj se</h4>
                </div>
                <div class="modal-body">
                  <table class="table table-bordered" style="text-align:center">
                    <tr><td>
                        <input type="text" id="usernamereg" placeholder="username" style="text-align:center">                  
                    </td></tr>
                    <tr><td>
                        <input type="password" id="passwordreg" placeholder="password" style="text-align:center">                  
                    </td></tr>
                  </table>
                </div>
                <div class="modal-footer" style="display:flex; justify-content:space-around">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Zatvori</button>
                    <button type="button" class="btn btn-success" onclick="registrujse()">Registruj se</button>
                </div>
              </div>
            </div>          
          </div>

    `)
}
else {
  document.write(`
    <div class="dropdown-menu">
      <a class="dropdown-item" href="index.html">Pocetna</a>
      <a class="dropdown-item" onclick="otvoriprvipodmeni()" class="dropdown-toggle dropleft-close" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Recepti</a>

      <div class="dropdown-menu dropdown-left" role="menu" aria-labelledby="firstSubmenu" id="firstSubmenu">
        <a onclick="predjiNaSvaJela('Predjela')" class="dropdown-item">Predjelo</a>
        <a onclick="predjiNaSvaJela('Glavna jela')" class="dropdown-item">Glavno jelo</a>
        <a onclick="predjiNaSvaJela('Dezerti')" class="dropdown-item">Dezert</a>
        <a onclick="predjiNaSvaJela('Uzine')" class="dropdown-item">Uzina</a>
      </div>
      
      <a class="dropdown-item" href="dodajrecept.html">Dodaj recept</a>
      <a class="dropdown-item" href="mojnalog.html">Moj nalog</a>
      <a class="dropdown-item" href="#" onclick="izlogujse()">Izloguj se</a>
      <a class="dropdown-item" href="aboutus.html">O nama</a>
    </div>
  </div>
  `)
}

function otvoriprvipodmeni() {
  $("#firstSubmenu").toggle();
}

window.onclick = function(event) {
  if (!event.target.classList.contains('dropleft-close')) {
    var dropdowns = document.getElementsByClassName("dropdown-left");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
      openDropdown.style.display = "none"
    }
  }
}

function predjiNaSvaJela(str) {
  localStorage.setItem("vrstaJela" , str)
  window.location.href = "svajela.html"
}
