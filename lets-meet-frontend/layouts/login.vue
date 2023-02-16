<template>
  <div class="full">
    <div class="flex-container">
      <div class="box is-flex is-flex-direction-column is-align-content-center login-box">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.page-enter-active,.page-leave-active {  transition: all 0.4s;}.page-enter-from,.page-leave-to {  opacity: 0;  filter: blur(1rem);}
.flex-container{
height: 100%;
width: 60%;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;

}
@media only screen and (max-width: 700px) {
.flex-container{
width: 100%;
}
.login-box{
margin: 40px;
}
}
.full{
width: 100%;
height: 100vh;
background:-moz-linear-gradient(192deg, rgba(12, 215, 199, 1) 0%, rgba(3, 38, 125, 1) 100%);

/* safari 5.1+,chrome 10+ */
background:-webkit-linear-gradient(192deg, rgba(12, 215, 199, 1) 0%, rgba(3, 38, 125, 1) 100%);

/* opera 11.10+ */
background:-o-linear-gradient(192deg, rgba(12, 215, 199, 1) 0%, rgba(3, 38, 125, 1) 100%);

/* ie 6-9 */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#03267D', endColorstr='#0CD7C7', GradientType=1 );

/* ie 10+ */
background:-ms-linear-gradient(192deg, rgba(12, 215, 199, 1) 0%, rgba(3, 38, 125, 1) 100%);

/* global 94%+ browsers support */
background:linear-gradient(192deg, rgba(12, 215, 199, 1) 0%, rgba(3, 38, 125, 1) 100%);


}
</style>