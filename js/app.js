const drawerHost = document.querySelector('#drawer')
const navbarHost = document.querySelector('#navbar')

const currentPage = window.location.href

const activeNavbar = value => {
  return currentPage.includes(value)
}

// alert(activeNavbar('peso'))

const navbar = `
  <div class="container-fluid fixed-top bg-blue py-3">
    <div class="row collapse show no-gutters d-flex h-100 position-relative">
      <div
        class="col-3 px-0 w-sidebar navbar-collapse collapse d-none d-md-flex"
      >
        <!-- spacer col -->
      </div>
      <div class="col px-3 px-md-0">
        <!-- toggler -->
        <a
          data-toggle="collapse"
          href="#"
          data-target=".collapse"
          role="button"
          class="p-1"
        >
          <i class="fa fa-bars fa-lg"></i>
        </a>
      </div>
    </div>
  </div>
`

const drawer = `
  <div
  class="col-2 p-0 vh-100 h-100 text-white w-sidebar navbar-collapse collapse d-none d-md-flex sidebar"
  style="z-index: 9999"
  >
    <div class="navbar-light bg-white position-fixed h-100 w-sidebar">
      <h6 class="px-3 pt-3 text-black">Health Track</h6>
      <ul class="nav flex-column flex-nowrap text-truncate">
        <li class="nav-item">
          <a class="nav-link ${activeNavbar('inicio') ? 'active' : ''}" href="/dashboard/inicio.html">
            <i class="fa fa-tachometer-alt"></i>
            Dashboard
        </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${activeNavbar('peso') ? 'active' : ''}" href="/dashboard/peso.html">
            <i class="fa fa-weight"></i>
            Peso
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${activeNavbar('alimentos') ? 'active' : ''}" href="/dashboard/alimentos.html">
            <i class="fa fa-utensils"></i>
            Alimentos
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${activeNavbar('pressao') ? 'active' : ''}" href="/dashboard/pressao.html">
            <i class="fa fa-heartbeat"></i>
            Presão arterial
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${activeNavbar('atividades') ? 'active' : ''}" href="/dashboard/atividades.html">
            <i class="fa fa-biking"></i>
            Atividades fisicas
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${activeNavbar('perfil') ? 'active' : ''}" href="/dashboard/perfil.html">
            <i class="fa fa-user"></i>
            Perfil
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/">
            <i class="fa fa-sign-out-alt"></i>
            Sair do sistema
          </a>
        </li>
      </ul>
    </div>
  </div>
`

drawerHost.innerHTML = drawer
navbarHost.innerHTML = navbar