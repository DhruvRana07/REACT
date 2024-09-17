import React from 'react';

const Loader = () => {
  const loaderStyles = {
    "--w": "10ch",
    fontWeight: "bold",
    fontFamily: "monospace",
    fontSize: "30px",
    margin: "auto",
    marginTop: "350px",
    lineHeight: "1.2em",
    letterSpacing: "10ch",
    width: "10ch",
    overflow: "hidden",
    whiteSpace: "nowrap",
    color: "#0000",
    animation: "l17 2s infinite"
  };

  const keyframes = `
    @keyframes l17 {
0% {text-shadow: 
        calc( 0*var(--w)) -1.2em #000,calc(-1*var(--w)) -1.2em #000,calc(-2*var(--w)) -1.2em #000,calc(-3*var(--w)) -1.2em #000,calc(-4*var(--w)) -1.2em #000, 
        calc(-5*var(--w)) -1.2em #000,calc(-6*var(--w)) -1.2em #000,calc(-7*var(--w)) -1.2em #000,calc(-8*var(--w)) -1.2em #000,calc(-9*var(--w)) -1.2em #000}
   4% {text-shadow: 
        calc( 0*var(--w)) 0      #000,calc(-1*var(--w)) -1.2em #000,calc(-2*var(--w)) -1.2em #000,calc(-3*var(--w)) -1.2em #000,calc(-4*var(--w)) -1.2em #000, 
        calc(-5*var(--w)) -1.2em #000,calc(-6*var(--w)) -1.2em #000,calc(-7*var(--w)) -1.2em #000,calc(-8*var(--w)) -1.2em #000,calc(-9*var(--w)) -1.2em #000}
   8% {text-shadow: 
        calc( 0*var(--w)) 0      #000,calc(-1*var(--w)) 0      #000,calc(-2*var(--w)) -1.2em #000,calc(-3*var(--w)) -1.2em #000,calc(-4*var(--w)) -1.2em #000, 
        calc(-5*var(--w)) -1.2em #000,calc(-6*var(--w)) -1.2em #000,calc(-7*var(--w)) -1.2em #000,calc(-8*var(--w)) -1.2em #000,calc(-9*var(--w)) -1.2em #000}
  12% {text-shadow: 
        calc( 0*var(--w)) 0      #000,calc(-1*var(--w)) 0      #000,calc(-2*var(--w)) 0      #000,calc(-3*var(--w)) -1.2em #000,calc(-4*var(--w)) -1.2em #000, 
        calc(-5*var(--w)) -1.2em #000,calc(-6*var(--w)) -1.2em #000,calc(-7*var(--w)) -1.2em #000,calc(-8*var(--w)) -1.2em #000,calc(-9*var(--w)) -1.2em #000}
  16% {text-shadow: 
        calc( 0*var(--w)) 0      #000,calc(-1*var(--w)) 0      #000,calc(-2*var(--w)) 0      #000,calc(-3*var(--w)) 0      #000,calc(-4*var(--w)) -1.2em #000, 
        calc(-5*var(--w)) -1.2em #000,calc(-6*var(--w)) -1.2em #000,calc(-7*var(--w)) -1.2em #000,calc(-8*var(--w)) -1.2em #000,calc(-9*var(--w)) -1.2em #000}
  20% {text-shadow: 
        calc( 0*var(--w)) 0      #000,calc(-1*var(--w)) 0      #000,calc(-2*var(--w)) 0      #000,calc(-3*var(--w)) 0      #000,calc(-4*var(--w)) 0      #000, 
        calc(-5*var(--w)) -1.2em #000,calc(-6*var(--w)) -1.2em #000,calc(-7*var(--w)) -1.2em #000,calc(-8*var(--w)) -1.2em #000,calc(-9*var(--w)) -1.2em #000}
  24% {text-shadow: 
        calc( 0*var(--w)) 0      #000,calc(-1*var(--w)) 0      #000,calc(-2*var(--w)) 0      #000,calc(-3*var(--w)) 0      #000,calc(-4*var(--w)) 0      #000, 
        calc(-5*var(--w)) 0      #000,calc(-6*var(--w)) -1.2em #000,calc(-7*var(--w)) -1.2em #000,calc(-8*var(--w)) -1.2em #000,calc(-9*var(--w)) -1.2em #000}
  28% {text-shadow: 
        calc( 0*var(--w)) 0      #000,calc(-1*var(--w)) 0      #000,calc(-2*var(--w)) 0      #000,calc(-3*var(--w)) 0      #000,calc(-4*var(--w)) 0      #000, 
        calc(-5*var(--w)) 0      #000,calc(-6*var(--w)) 0      #000,calc(-7*var(--w)) -1.2em #000,calc(-8*var(--w)) -1.2em #000,calc(-9*var(--w)) -1.2em #000}
  32% {text-shadow: 
        calc( 0*var(--w)) 0      #000,calc(-1*var(--w)) 0      #000,calc(-2*var(--w)) 0      #000,calc(-3*var(--w)) 0      #000,calc(-4*var(--w)) 0      #000, 
        calc(-5*var(--w)) 0      #000,calc(-6*var(--w)) 0      #000,calc(-7*var(--w)) 0      #000,calc(-8*var(--w)) -1.2em #000,calc(-9*var(--w)) -1.2em #000}
  36% {text-shadow: 
        calc( 0*var(--w)) 0      #000,calc(-1*var(--w)) 0      #000,calc(-2*var(--w)) 0      #000,calc(-3*var(--w)) 0      #000,calc(-4*var(--w)) 0      #000, 
        calc(-5*var(--w)) 0      #000,calc(-6*var(--w)) 0      #000,calc(-7*var(--w)) 0      #000,calc(-8*var(--w)) 0      #000,calc(-9*var(--w)) -1.2em #000}
  40%,
  60% {text-shadow: 
        calc( 0*var(--w)) 0      #000,calc(-1*var(--w)) 0      #000,calc(-2*var(--w)) 0      #000,calc(-3*var(--w)) 0      #000,calc(-4*var(--w)) 0      #000, 
        calc(-5*var(--w)) 0      #000,calc(-6*var(--w)) 0      #000,calc(-7*var(--w)) 0      #000,calc(-8*var(--w)) 0      #000,calc(-9*var(--w)) 0      #000}
  64% {text-shadow: 
        calc( 0*var(--w)) 0      #000,calc(-1*var(--w)) 0      #000,calc(-2*var(--w)) 0      #000,calc(-3*var(--w)) 0      #000,calc(-4*var(--w)) 0      #000, 
        calc(-5*var(--w)) 0      #000,calc(-6*var(--w)) 0      #000,calc(-7*var(--w)) 0      #000,calc(-8*var(--w)) 0      #000,calc(-9*var(--w)) 1.2em  #000}
  68% {text-shadow: 
        calc( 0*var(--w)) 0      #000,calc(-1*var(--w)) 0      #000,calc(-2*var(--w)) 0      #000,calc(-3*var(--w)) 0      #000,calc(-4*var(--w)) 0      #000, 
        calc(-5*var(--w)) 0      #000,calc(-6*var(--w)) 0      #000,calc(-7*var(--w)) 0      #000,calc(-8*var(--w)) 1.2em  #000,calc(-9*var(--w)) 1.2em  #000}
  72% {text-shadow: 
        calc( 0*var(--w)) 0      #000,calc(-1*var(--w)) 0      #000,calc(-2*var(--w)) 0      #000,calc(-3*var(--w)) 0      #000,calc(-4*var(--w)) 0      #000, 
        calc(-5*var(--w)) 0      #000,calc(-6*var(--w)) 0      #000,calc(-7*var(--w)) 1.2em  #000,calc(-8*var(--w)) 1.2em  #000,calc(-9*var(--w)) 1.2em  #000}
  76% {text-shadow: 
        calc( 0*var(--w)) 0      #000,calc(-1*var(--w)) 0      #000,calc(-2*var(--w)) 0      #000,calc(-3*var(--w)) 0      #000,calc(-4*var(--w)) 0      #000, 
        calc(-5*var(--w)) 0      #000,calc(-6*var(--w)) 1.2em  #000,calc(-7*var(--w)) 1.2em  #000,calc(-8*var(--w)) 1.2em  #000,calc(-9*var(--w)) 1.2em  #000}
  80% {text-shadow: 
        calc( 0*var(--w)) 0      #000,calc(-1*var(--w)) 0      #000,calc(-2*var(--w)) 0      #000,calc(-3*var(--w)) 0      #000,calc(-4*var(--w)) 0      #000, 
        calc(-5*var(--w)) 1.2em  #000,calc(-6*var(--w)) 1.2em  #000,calc(-7*var(--w)) 1.2em  #000,calc(-8*var(--w)) 1.2em  #000,calc(-9*var(--w)) 1.2em  #000}
  84% {text-shadow: 
        calc( 0*var(--w)) 0      #000,calc(-1*var(--w)) 0      #000,calc(-2*var(--w)) 0      #000,calc(-3*var(--w)) 0      #000,calc(-4*var(--w)) 1.2em  #000, 
        calc(-5*var(--w)) 1.2em  #000,calc(-6*var(--w)) 1.2em  #000,calc(-7*var(--w)) 1.2em  #000,calc(-8*var(--w)) 1.2em  #000,calc(-9*var(--w)) 1.2em  #000}
  88% {text-shadow: 
        calc( 0*var(--w)) 0      #000,calc(-1*var(--w)) 0      #000,calc(-2*var(--w)) 0      #000,calc(-3*var(--w)) 1.2em  #000,calc(-4*var(--w)) 1.2em  #000, 
        calc(-5*var(--w)) 1.2em  #000,calc(-6*var(--w)) 1.2em  #000,calc(-7*var(--w)) 1.2em  #000,calc(-8*var(--w)) 1.2em  #000,calc(-9*var(--w)) 1.2em  #000}
  92% {text-shadow: 
        calc( 0*var(--w)) 0      #000,calc(-1*var(--w)) 0      #000,calc(-2*var(--w)) 1.2em  #000,calc(-3*var(--w)) 1.2em  #000,calc(-4*var(--w)) 1.2em  #000, 
        calc(-5*var(--w)) 1.2em  #000,calc(-6*var(--w)) 1.2em  #000,calc(-7*var(--w)) 1.2em  #000,calc(-8*var(--w)) 1.2em  #000,calc(-9*var(--w)) 1.2em  #000}
  96% {text-shadow: 
        calc( 0*var(--w)) 0      #000,calc(-1*var(--w)) 1.2em  #000,calc(-2*var(--w)) 1.2em  #000,calc(-3*var(--w)) 1.2em  #000,calc(-4*var(--w)) 1.2em  #000, 
        calc(-5*var(--w)) 1.2em  #000,calc(-6*var(--w)) 1.2em  #000,calc(-7*var(--w)) 1.2em  #000,calc(-8*var(--w)) 1.2em  #000,calc(-9*var(--w)) 1.2em  #000}
  100% {text-shadow: 
        calc( 0*var(--w)) 1.2em  #000,calc(-1*var(--w)) 1.2em  #000,calc(-2*var(--w)) 1.2em  #000,calc(-3*var(--w)) 1.2em  #000,calc(-4*var(--w)) 1.2em  #000, 
        calc(-5*var(--w)) 1.2em  #000,calc(-6*var(--w)) 1.2em  #000,calc(-7*var(--w)) 1.2em  #000,calc(-8*var(--w)) 1.2em  #000,calc(-9*var(--w)) 1.2em  #000}
    }
  `;

  return (
    <>
      <style>
        {keyframes}
      </style>
      <div style={loaderStyles}>Loading...</div>
    </>
  );
};

export default Loader;
