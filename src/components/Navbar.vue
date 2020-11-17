<template>
  <header class="header">
    <a
      href="#"
      class="logo"
    ><img :src="require('../assets/logo.png')"></a>
    <div class="user-info-wrapper">
      <div class="user-info">
        <img :src="require('../assets/user1.jpg')"><a href="#">a.nikitina@animarender.com</a>
      </div>
    </div>
    <input
      class="menu-btn"
      type="checkbox"
      id="menu-btn"
    />

    <div class="menu-icon-wrapper">
      <a href="#" class="menu-icon">741.19 AP</a>
      <a href="#" class="menu-icon"><span></span><img :src="require('../assets/notifications.png')"></a>
      <label class="menu-icon" for="menu-btn"
      ><span><img :src="require('../assets/menu.png')"></span></label>

    </div>

    <ul class="menu">
      <li><a href="#">741.19 AP</a></li>
      <li><a href="#"><img :src="require('../assets/notifications.png')"></a></li>
      <li><a href="#">
          <div class="flag"><img
              class="flag-img"
              :src="require('../assets/flag.png')"
            ><img :src="require('../assets/vector.png')"></div>
        </a></li>
      <li><a href="#"><img :src="require('../assets/exit.png')"></a></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">

  a, a:visited {
    text-decoration: none;
    color: inherit;
  }

  .menu-icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .flag {
    display: flex;
    align-items: center;
  }

  .flag-img {
    margin-right: 2px;
  }

  .user-info-wrapper {
    position: absolute;
    left: 50%;
    top: 20px;
  }

  .user-info {
    position: relative;
    left: -50%;
    display: flex;
    align-items: center;
    color: #526AE5;

    a {
      margin-left: 15px;
    }
  }

  .header {
    background-color: #fff;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    z-index: 3;
  }

  .header ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #fff;
  }

  .header li a {
    display: block;
    padding: 20px 20px;
    border-right: 1px solid #f4f4f4;
    text-decoration: none;
    color: #A7ABC3;
  }

  .header .logo {
    display: block;
    float: left;
    font-size: 2em;
    margin-top: 19px;
    margin-left: 20px;
    text-decoration: none;
  }

  /* menu */

  .header .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* menu icon */

  .header .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 17px 15px;
    position: relative;
    user-select: none;
  }

  .header .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
  }

  .header .menu-icon .navicon:before,
  .header .menu-icon .navicon:after {
    background: #333;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  .header .menu-icon .navicon:before {
    top: 5px;
  }

  .header .menu-icon .navicon:after {
    top: -5px;
  }

  /* menu btn */

  .header .menu-btn {
    display: none;
  }

  .header .menu-btn:checked ~ .menu {
    max-height: 240px;
  }

  .header .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .header .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  .header .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }

  @media (min-width: 992px) {
    .header li {
      float: left;
    }
    .header li a {
      padding: 20px 30px;
    }
    .header .menu {
      clear: none;
      float: right;
      max-height: none;
    }
    .header .menu-icon {
      display: none;
    }
  }

  @media (max-width: 992px) {
    .user-info-wrapper {
      display: none;
    }
  }
</style>