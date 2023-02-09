<template>
  <div class="panel">
    <div>
      <o-button variant="primary">Primary</o-button>
      <o-button variant="success">Success</o-button>
      <o-button variant="danger">Danger</o-button>
      <o-button variant="warning">Warning</o-button>
      <o-button variant="info">Info</o-button>
    </div>
    <p class="panel-heading">Tytuł</p>
    <div class="panel-block">
      <o-button icon-left="account" native-type="submit" variant="secondary">Zarejestruj</o-button>
      <slot />
    </div>
  </div>
</template>
