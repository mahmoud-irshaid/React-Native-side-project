export default `

<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="512" 
    height="512" 
    viewBox="0 0 512 512"
    >

    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
        <style type="text/css"><![CDATA[

        .g1{
             -webkit-animation-name: a1;
     -moz-animation-name: a1;
          animation-name: a1;
  -webkit-animation-duration: 3s;
     -moz-animation-duration: 3s;
          animation-duration: 3s;
  -webkit-animation-timing-function: ease-out;
     -moz-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
        }


        @keyframes a1 {
  0% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }

  50% {
    -webkit-transform: translate(5px,0px);
       -moz-transform: translate(5px,0px);
        -ms-transform: translate(5px,0px);
            transform: translate(5px,0px);
  }

  100% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }
}


   






       .g2{
             -webkit-animation-name: a2;
     -moz-animation-name: a2;
          animation-name: a2;
  -webkit-animation-duration: 4s;
     -moz-animation-duration: 4s;
          animation-duration: 4s;
  -webkit-animation-timing-function: ease-out;
     -moz-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
        }


        @keyframes a2 {
  0% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }

  50% {
    -webkit-transform: translate(-7px,0px);
       -moz-transform: translate(-7px,0px);
        -ms-transform: translate(-7px,0px);
            transform: translate(-7px,0px);
  }

  100% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }
}











    .g3{
             -webkit-animation-name: a3;
     -moz-animation-name: a3;
          animation-name: a3;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: ease-out;
     -moz-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
        }


        @keyframes a3 {
  0% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }

  50% {
    -webkit-transform: translate(-15px,0px);
       -moz-transform: translate(-15px,0px);
        -ms-transform: translate(-15px,0px);
            transform: translate(-15px,0px);
  }

  100% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }
}








    .g4{
             -webkit-animation-name: a4;
     -moz-animation-name: a4;
          animation-name: a4;
  -webkit-animation-duration: 1.5s;
     -moz-animation-duration: 1.5s;
          animation-duration: 1.5s;
  -webkit-animation-timing-function: ease-in;
     -moz-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
        }


        @keyframes a4 {
  0% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }

  50% {
    -webkit-transform: translate(15px,0px);
       -moz-transform: translate(15px,0px);
        -ms-transform: translate(15px,0px);
            transform: translate(15px,0px);
  }

  100% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }
}









    .g5{
             -webkit-animation-name: a5;
     -moz-animation-name: a5;
          animation-name: a5;
  -webkit-animation-duration: 1s;
     -moz-animation-duration: 1s;
          animation-duration: 1s;
  -webkit-animation-timing-function: ease;
     -moz-animation-timing-function: ease;
          animation-timing-function: ease;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
        }


        @keyframes a5 {
  0% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }

  50% {
    -webkit-transform: translate(10px,0px);
       -moz-transform: translate(10px,0px);
        -ms-transform: translate(10px,0px);
            transform: translate(10px,0px);
  }

  100% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }
}



    .g6{
             -webkit-animation-name: a3;
     -moz-animation-name: a3;
          animation-name: a3;
  -webkit-animation-duration: 1s;
     -moz-animation-duration: 1s;
          animation-duration: 1s;
  -webkit-animation-timing-function: ease;
     -moz-animation-timing-function: ease;
          animation-timing-function: ease;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
        }




        ]]></style>
    </defs>


<g class='g1'>
<rect x="268" y="330" width="44" height="19" rx="9.5" fill="#696969"/>
</g>
<g class='g2'>
<rect x="249" y="302" width="108" height="19" rx="9.5" fill="#696969"/>
</g>
<g class='g3'>
<rect class='3' x="202" y="274" width="116" height="19" rx="9.5" fill="#696969"/>
</g>
<g class='g4'>
<rect class='4' x="178" y="246" width="179" height="19" rx="9.5" fill="#696969"/>
<rect class='5' x="218" y="218" width="200" height="19" rx="9.5" fill="#696969"/>
</g>

<g class='g5'>
<rect class='6' x="260" y="190" width="131" height="19" rx="9.5" fill="#696969"/>
</g>
<g class='g6'>
<rect class='7' x="218" y="162" width="184" height="19" rx="9.5" fill="#696969"/>
</g>
</svg>
`;
