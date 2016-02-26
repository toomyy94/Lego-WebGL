//////////////////////////////////////////////////////////////////////////////
//
//  ProjetoCV-2015.js
//
//  Simple mesh data structure
//
//  Adapted from learningwebgl.com
//
//  Tomás Rodrigues && Hao Chen
//
//////////////////////////////////////////////////////////////////////////////

//----------------------------------------------------------------------------
//

var angleXX = 0.0;

var angleYY = 0.0;

var angleZZ = 0.0;

// Global Variables
//
globalAngleYY = 0.0;
globalAngleXX = 0.0;

globalTz = 0.0;

// NEW - GLOBAL Animation controls

var globalRotationYY_ON = 1;
var globalRotationXX_ON = 1;

var globalRotationYY_DIR = 1;
var globalRotationXX_DIR = 1;


var globalRotationYY_SPEED = 1;
var globalRotationXX_SPEED = 1;
//global

var gl = null; // WebGL context

var shaderProgram = null; 

// NEW --- Buffers

var cubeVertexPositionBuffer = null;
	
var cubeVertexColorBuffer = null;

var cubeVertexIndexBuffer = null;


var rotationXX_ON = 1;

var rotationXX_DIR = 1;

var rotationXX_SPEED = 1;
 
var rotationYY_ON = 1;

var rotationYY_DIR = 1;

var rotationYY_SPEED = 1;
 
var rotationZZ_ON = 1;

var rotationZZ_DIR = 1;

var rotationZZ_SPEED = 1;
 
// // To allow choosing the way of drawing the model triangles

// var primitiveType = null;
 
// To allow choosing the projection type

var projectionType = 1;
 
// // From learningwebgl.com

// // NEW --- Storing the vertices defining the cube faces



// And their colour
var c=1;

var colorsred = [

		 // FRONT FACE - RED
		 	
		 1.00,  0.00,  0.00,
		 
		 1.00,  0.00,  0.00,
		 
		 1.00,  0.00,  0.00,

		 1.00,  0.00,  0.00,
		 			 
		 // BACK FACE - BLACK
		 	
		 1.00,  0.00,  0.00,
		 
		 1.00,  0.00,  0.00,
		 
		 1.00,  0.00,  0.00,

		 1.00,  0.00,  0.00,
		 			 
		 // TOP FACE - 
		 	
		 0.7,  0.00,  0.00,
		 
		 0.7,  0.00,  0.00,
		 
		 0.7,  0.00,  0.00,

		 0.7,  0.00,  0.00,

		 			 
		 // BOTTOM FACE
		 	
		0.7,  0.00,  0.00,
		 
		 0.7,  0.00,  0.00,
		 
		 0.7,  0.00,  0.00,

		 0.7,  0.00,  0.00,

		 			 
		 // RIGHT FACE - BLUE
		 	
		0.8,  0.00,  0.00,
		 
		 0.8,  0.00,  0.00,
		 
		 0.8,  0.00,  0.00,

		 0.8,  0.00,  0.00,
		 			 
		 			 
		 // LEFT FACE - GREEN
		 	
		 0.8,  0.00,  0.00,
		 
		 0.8,  0.00,  0.00,
		 
		 0.8,  0.00,  0.00,

		 0.8,  0.00,  0.00,
];

colorsgreen = [

		 // FRONT FACE - RED
		 	
		 0.00,  1.00,  0.00,
		 
		 0.00,  1.00,  0.00,
		 
		 0.00,  1.00,  0.00,

		 0.00,  1.00,  0.00,
		 			 
		 // BACK FACE - BLACK
		 	
		 0.00,  1.00,  0.00,
		 
		 0.00,  1.00,  0.00,
		 
		 0.00,  1.00,  0.00,

		 0.00,  1.00,  0.00,
		 			 
		 // TOP FACE - 
		 	
		 0.00,  0.7,  0.00,
		 
		 0.00,  0.7,  0.00,
		 
		 0.00,  0.7,  0.00,

		 0.00,  0.7,  0.00,

		 			 
		 // BOTTOM FACE
		 	
		0.00,  0.7,  0.00,
		 
		 0.00,  0.7,  0.00,
		 
		 0.00,  0.7,  0.00,

		 0.00,  0.7,  0.00,

		 			 
		 // RIGHT FACE - BLUE
		 	
		 0.00,  0.8,  0.00,
		 
		 0.00,  0.8,  0.00,
		 
		 0.00,  0.8,  0.00,

		 0.00,  0.8,  0.00,
		 			 
		 			 
		 // LEFT FACE - GREEN
		 	
		 0.00,  0.8,  0.00,
		 
		 0.00,  0.8,  0.00,
		 
		 0.00,  0.8,  0.00,

		 0.00,  0.8,  0.00,
];

colorsblue = [

		 // FRONT FACE - RED
		 	
		 0.00,  0.00,  1.00,
		 
		 0.00,  0.00,  1.00,
		 
		 0.00,  0.00,  1.00,

		 0.00,  0.00,  1.00,
		 			 
		 // BACK FACE - BLACK
		 	
		  0.00,  0.00,  1.00,
		 
		 0.00,  0.00,  1.00,
		 
		 0.00,  0.00,  1.00,

		 0.00,  0.00,  1.00,
		 			 
		 // TOP FACE - 
		 	
		  0.00,  0.00,  0.7,
		 
		 0.00,  0.00,  0.7,
		 
		 0.00,  0.00,  0.7,

		 0.00,  0.00,  0.7,

		 			 
		 // BOTTOM FACE
		 	
		 0.00,  0.00,  0.7,
		 
		 0.00,  0.00,  0.7,
		 
		 0.00,  0.00,  0.7,

		 0.00,  0.00,  0.7,

		 			 
		 // RIGHT FACE - BLUE
		 	
		  0.00,  0.00,  0.8,
		 
		 0.00,  0.00,  0.8,
		 
		 0.00,  0.00,  0.8,

		 0.00,  0.00,  0.8,
		 			 
		 			 
		 // LEFT FACE - GREEN
		 	
		  0.00,  0.00,  0.8,
		 
		 0.00,  0.00,  0.8,
		 
		 0.00,  0.00,  0.8,

		 0.00,  0.00,  0.8,
];
colorsPlan = [

		 // FRONT FACE - RED
		 	
		 1.00,  0.00,  1.00,
		
		 1.00,  0.00,  1.00,
		 
		 1.00,  0.00,  1.00,

		 1.00,  0.00,  1.00,
		 			 
		 // BACK FACE - BLACK
		 	
		  1.00,  0.00,  1.00,
		 
		 1.00,  0.00,  1.00,
		 
		 1.00,  0.00,  1.00,

		 1.00,  0.00,  1.00,
		 			 
		 // TOP FACE - 
		 	
		  1.00,  0.00,  0.7,
		 
		 1.00,  0.00,  0.7,
		 
		 1.00,  0.00,  0.7,

		 1.00,  0.00,  0.7,

		 			 
		 // BOTTOM FACE
		 	
		 1.00,  0.00,  0.7,
		 
		 1.00,  0.00,  0.7,
		 
		 1.00,  0.00,  0.7,

		 1.00,  0.00,  0.7,

		 			 
		 // RIGHT FACE - BLUE
		 	
		  1.00,  0.00,  0.8,
		 
		 1.00,  0.00,  0.8,
		 
		 1.00,  0.00,  0.8,

		 1.00,  0.00,  0.8,
		 			 
		 			 
		 // LEFT FACE - GREEN
		 	
		 0.80,  0.00,  0.8,
		 
		 0.80,  0.00,  0.8,
		 
		 0.80,  0.00,  0.8,

		 0.80,  0.00,  0.8,
];

colorsOrange = [

		 // FRONT FACE - RED
		 	
		 1.00,  0.3,  0.00,
		
		 1.00,  0.3,  0.00,
		 
		 1.00,  0.3,  0.00,

		 1.00,  0.3,  0.00,
		 			 
		 // BACK FACE - BLACK
		 	
		  1.00,  0.3,  0.00,
		 
		 1.00,  0.3,  0.00,
		 
		 1.00,  0.3,  0.00,

		 1.00,  0.3,  0.00,
		 			 
		 // TOP FACE - 
		 	
		  1.00,  0.3,  0.00,
		 
		 1.00,  0.3,  0.00,
		 
		 1.00,  0.3,  0.00,

		 1.00,  0.3,  0.00,

		 			 
		 // BOTTOM FACE
		 	
		 1.00,  0.3,  0.00,
		 
		 1.00,  0.3,  0.00,
		 
		 1.00,  0.3,  0.00,

		 1.00,  0.3,  0.00,

		 			 
		 // RIGHT FACE - BLUE
		 	
		 0.80,  0.3,  0.00,
		 
		 0.80,  0.3,  0.00,
		 
		 0.80,  0.3,  0.00,

		 0.80,  0.3,  0.00,
		 			 
		 			 
		 // LEFT FACE - GREEN
		 	
		 0.80,  0.3,  0.00,
		 
		 0.80,  0.3,  0.00,
		 
		 0.80,  0.3,  0.00,

		 0.80,  0.3,  0.00,
];

//----------------------------------------------------------------------------
//
// The WebGL code
//


document.addEventListener("keypress", function(event){

	var key = event.keyCode; // ASCII
	

	switch(key){		
						//MOVEEE
						case 37 : 

						//cubeSource[cubeSource.length-1].mvMatrix = mult( translationMatrix(-0.2,0,0), cubeSource[cubeSource.length-1].mvMatrix );
						cubeSource[cubeSource.length-1].tx-=0.2;
						console.log("para a esquerda");
						if(cubeSource.length>2){
							for(var i=1; i<cubeSource.length-1 ; i++){

								if(cubeSource[cubeSource.length-1].tx-cubeSource[i].tx<-0.05 && cubeSource[cubeSource.length-1].tx-cubeSource[i].tx>-0.35 && cubeSource[cubeSource.length-1].tz-cubeSource[i].tz>-0.15 && cubeSource[cubeSource.length-1].tz-cubeSource[i].tz<0.15 ){
									
										var altura=0;
										altura += cubeSource[i].ty;

									if(cubeSource[cubeSource.length-1].ty-altura>0.05 && cubeSource[cubeSource.length-1].ty-altura<0.35){
										cubeSource[cubeSource.length-1].ty-=altura+0.2;
		
									}
									
								}
							}
							for(var i=1; i<cubeSource.length-1 ; i++){
								if(cubeSource[cubeSource.length-1].tx-cubeSource[i].tx>-0.15 && cubeSource[cubeSource.length-1].tx-cubeSource[i].tx<0.15 && cubeSource[cubeSource.length-1].tz-cubeSource[i].tz>-0.15 && cubeSource[cubeSource.length-1].tz-cubeSource[i].tz<0.15  && cubeSource[cubeSource.length-1].ty-cubeSource[i].ty<0.15  && cubeSource[cubeSource.length-1].ty-cubeSource[i].ty>-0.15){
									var altura=0;
										altura += cubeSource[i].ty;
									cubeSource[cubeSource.length-1].ty+=0.2; //sobe se tx todos os cubos e tz =
									console.log("subi");
								}
							}
								
							
						}
							drawScene();
							break;
							
						case 40 : 
							
							cubeSource[cubeSource.length-1].tz+=0.2;
							console.log("para ca");
							if(cubeSource.length>2){
								for(var i=1; i<cubeSource.length-1 ; i++){
									

									if(cubeSource[cubeSource.length-1].tx-cubeSource[i].tx>-0.15 && cubeSource[cubeSource.length-1].tx-cubeSource[i].tx<0.15 && cubeSource[cubeSource.length-1].tz-cubeSource[i].tz>0.05 && cubeSource[cubeSource.length-1].tz-cubeSource[i].tz<0.35){
										var altura=0;
										altura += cubeSource[i].ty;

										if(cubeSource[cubeSource.length-1].ty-altura>0.05 && cubeSource[cubeSource.length-1].ty-altura<0.35){
											cubeSource[cubeSource.length-1].ty-=altura+0.2;
											console.log("desci");
										}
									}
								}
								for(var i=1; i<cubeSource.length-1 ; i++){
									if(cubeSource[cubeSource.length-1].tz-cubeSource[i].tz>-0.15 && cubeSource[cubeSource.length-1].tz-cubeSource[i].tz<0.15 && cubeSource[cubeSource.length-1].tx-cubeSource[i].tx>-0.15 && cubeSource[cubeSource.length-1].tx-cubeSource[i].tx<0.15  && cubeSource[cubeSource.length-1].ty-cubeSource[i].ty<0.15  && cubeSource[cubeSource.length-1].ty-cubeSource[i].ty>-0.15){
											var altura=0;
										altura += cubeSource[i].ty;
											cubeSource[cubeSource.length-1].ty+=0.2;
											console.log("subi");
									}
								}
							} 

							// Render the viewport
							drawScene(); 
							break;
						case 39 : 
							
							cubeSource[cubeSource.length-1].tx+=0.2;
							console.log("para a direita");
							if(cubeSource.length>2){
								for(var i=1; i<cubeSource.length-1 ; i++){
									

									if(cubeSource[cubeSource.length-1].tx-cubeSource[i].tx>0.05 && cubeSource[cubeSource.length-1].tx-cubeSource[i].tx<0.35 && cubeSource[cubeSource.length-1].tz-cubeSource[i].tz>-0.15 && cubeSource[cubeSource.length-1].tz-cubeSource[i].tz<0.15){
										console.log("para a direita");
										var altura=0;
										altura += cubeSource[i].ty;

										if(cubeSource[cubeSource.length-1].ty-altura>0.05 && cubeSource[cubeSource.length-1].ty-altura<0.35){
											cubeSource[cubeSource.length-1].ty-=altura+0.2;
											console.log("desci");
										}
									}
								}
								
								for(var i=1; i<cubeSource.length-1 ; i++){
									if(cubeSource[cubeSource.length-1].tx-cubeSource[i].tx>-0.15 && cubeSource[cubeSource.length-1].tx-cubeSource[i].tx<0.15 && cubeSource[cubeSource.length-1].tz-cubeSource[i].tz>-0.15 && cubeSource[cubeSource.length-1].tz-cubeSource[i].tz<0.15  && cubeSource[cubeSource.length-1].ty-cubeSource[i].ty<0.15  && cubeSource[cubeSource.length-1].ty-cubeSource[i].ty>-0.15){
										var altura=0;
										altura += cubeSource[i].ty;

										cubeSource[cubeSource.length-1].ty+=0.2;
										console.log("subi");
									}

								}

								
								
							} 							// Render the viewport
							drawScene(); 
							break;
						case 38 : 
							cubeSource[cubeSource.length-1].tz-=0.2;
							console.log("para la");
							if(cubeSource.length>2){
								for(var i=1; i<cubeSource.length-1 ; i++){
									if(cubeSource[cubeSource.length-1].tz-cubeSource[i].tz<-0.05 && cubeSource[cubeSource.length-1].tz-cubeSource[i].tz>-0.35 && cubeSource[cubeSource.length-1].tx-cubeSource[i].tx>-0.15 && cubeSource[cubeSource.length-1].tx-cubeSource[i].tx<0.15 ){
											
											var altura=0;
											altura += cubeSource[i].ty;	

											if(cubeSource[cubeSource.length-1].ty-altura>0.05 && cubeSource[cubeSource.length-1].ty-altura<0.35){
												cubeSource[cubeSource.length-1].ty-=altura+0.2;
												console.log("desci");
											}
										
									}
								}

								for(var i=1; i<cubeSource.length-1 ; i++){
									if(cubeSource[cubeSource.length-1].tz-cubeSource[i].tz>-0.15 && cubeSource[cubeSource.length-1].tz-cubeSource[i].tz<0.15 && cubeSource[cubeSource.length-1].tx-cubeSource[i].tx>-0.15 && cubeSource[cubeSource.length-1].tx-cubeSource[i].tx<0.15  && cubeSource[cubeSource.length-1].ty-cubeSource[i].ty<0.15  && cubeSource[cubeSource.length-1].ty-cubeSource[i].ty>-0.15){
										cubeSource[cubeSource.length-1].ty+=0.2;
										console.log("subi");
									}
								}
							} 							// Render the viewport
							drawScene(); 
							break;

						//SCALEEE
						case 109 : //SCALE DOWN
							console.log("scaledown");
							cubeSource[cubeSource.length-1].sx-=0.5;
							cubeSource[cubeSource.length-1].sy-=0.5;
							cubeSource[cubeSource.length-1].sz-=0.5;					
							// Render the viewport
							drawScene(); 
							break;
						case 107 : //SCALE up
						
							cubeSource[cubeSource.length-1].sx+=0.5;
							cubeSource[cubeSource.length-1].sy+=0.5;
							cubeSource[cubeSource.length-1].sz+=0.5;					
							// Render the viewport
							drawScene(); 
							break;

						//Create Cubesssss
						case 49 : //cube1x1
						console.log("cubo1x1criado");
							cubeSource.push( new CubeSource() );
							cubeSource[cubeSource.length-1].tipo=0;
							initCordenates(cubeSource[cubeSource.length-1]);	
							initColors(cubeSource[cubeSource.length-1]);

							drawScene();
							break;

						case 98 : //cube2x1
							cubeSource.push( new CubeSource() );
							cubeSource[cubeSource.length-1].tipo=1;
							cubeSource[cubeSource.length-1].vertices =[0.2, -0.1,  0.1,
					             0.2, -0.1,  0.1,
					             0.2,  0.1,  0.1,
					            -0.2,  0.1,  0.1,

					            // Back face
					            -0.2, -0.1, -0.1,
					            -0.2,  0.1, -0.1,
					             0.2,  0.1, -0.1,
					             0.2, -0.1, -0.1,
					            // Top face
					            -0.2,  0.1, -0.1,
					            -0.2,  0.1,  0.1,
					             0.2,  0.1,  0.1,
					             0.2,  0.1, -0.1,

					            // Bottom face
					            -0.2, -0.1, -0.1,
					             0.2, -0.1, -0.1,
					             0.2, -0.1,  0.1,
					            -0.2, -0.1,  0.1,

					            // Right face
					             0.2, -0.1, -0.1,
					             0.2,  0.1, -0.1,
					             0.2,  0.1,  0.1,
					             0.2, -0.1,  0.1,

					            // Left face
					            -0.2, -0.1, -0.1,
					            -0.2, -0.1,  0.1,
					            -0.2,  0.1,  0.1,
					            -0.2,  0.1, -0.1
								]; 
							initCordenates(cubeSource[cubeSource.length-1]);	
							initColors(cubeSource[cubeSource.length-1]);

							drawScene();
							break;

						case 99 : //cube2x2
							cubeSource.push( new CubeSource() );
							cubeSource[cubeSource.length-1].tipo=3;
		
							for(var i=1; i<cubeSource[cubeSource.length-1].vertices.length; i++) {
					 			   cubeSource[cubeSource.length-1].vertices[i] *= 2;
							}

							initCordenates(cubeSource[cubeSource.length-1]);	
							initColors(cubeSource[cubeSource.length-1]);

							drawScene();
							break;

						case 100 : //cube3x1
							cubeSource.push( new CubeSource() );
							cubeSource[cubeSource.length-1].tipo=2;

							cubeSource[cubeSource.length-1].vertices =[0.3, -0.1,  0.1,
					             0.3, -0.1,  0.1,
					             0.3,  0.1,  0.1,
					            -0.3,  0.1,  0.1,

					            // Back face
					            -0.3, -0.1, -0.1,
					            -0.3,  0.1, -0.1,
					             0.3,  0.1, -0.1,
					             0.3, -0.1, -0.1,
					            // Top face
					            -0.3,  0.1, -0.1,
					            -0.3,  0.1,  0.1,
					             0.3,  0.1,  0.1,
					             0.3,  0.1, -0.1,

					            // Bottom face
					            -0.3, -0.1, -0.1,
					             0.3, -0.1, -0.1,
					             0.3, -0.1,  0.1,
					            -0.3, -0.1,  0.1,

					            // Right face
					             0.3, -0.1, -0.1,
					             0.3,  0.1, -0.1,
					             0.3,  0.1,  0.1,
					             0.3, -0.1,  0.1,

					            // Left face
					            -0.3, -0.1, -0.1,
					            -0.3, -0.1,  0.1,
					            -0.3,  0.1,  0.1,
					            -0.3,  0.1, -0.1
								]; 

							initCordenates(cubeSource[cubeSource.length-1]);	
							initColors(cubeSource[cubeSource.length-1]);

							drawScene();
							break;

				}
	});


//----------------------------------------------------------------------------
//
//  Rendering
//

// Handling the Vertex and the Color Buffers

function initCordenates(cubeObj){

	cubeObj.cubeVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, cubeObj.cubeVertexPositionBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cubeObj.vertices), gl.STATIC_DRAW);
	cubeObj.cubeVertexPositionBuffer.itemSize = 3;
	cubeObj.cubeVertexPositionBuffer.numItems = cubeObj.vertices.length / 3;			


	cubeObj.cubeVertexIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeObj.cubeVertexIndexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeObj.cubeVertexIndices), gl.STATIC_DRAW);
    cubeObj.cubeVertexIndexBuffer.itemSize = 1;
    cubeObj.cubeVertexIndexBuffer.numItems = 36;
}
function initColors(cubeObj) {	
	
	
	// Colors
	if(c==1){
		cubeObj.cubeVertexColorBuffer = gl.createBuffer();
		//cubeObj.cubeVertexColorBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeObj.cubeVertexColorBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorsred), gl.STATIC_DRAW);
		cubeObj.cubeVertexColorBuffer.itemSize = 3;
		cubeObj.cubeVertexColorBuffer.numItems = cubeObj.vertices.length / 3;			
	}
	else if (c==2){


		cubeObj.cubeVertexColorBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeObj.cubeVertexColorBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorsgreen), gl.STATIC_DRAW);
		cubeObj.cubeVertexColorBuffer.itemSize = 3;
		cubeObj.cubeVertexColorBuffer.numItems = cubeObj.vertices.length / 3;	
	}

	else if(c==3){

	
		cubeObj.cubeVertexColorBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeObj.cubeVertexColorBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorsblue), gl.STATIC_DRAW);
		cubeObj.cubeVertexColorBuffer.itemSize = 3;
		cubeObj.cubeVertexColorBuffer.numItems = cubeObj.vertices.length / 3;	

	}
	else if(c==4){

	
		cubeObj.cubeVertexColorBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeObj.cubeVertexColorBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorsPlan), gl.STATIC_DRAW);
		cubeObj.cubeVertexColorBuffer.itemSize = 3;
		cubeObj.cubeVertexColorBuffer.numItems = cubeObj.vertices.length / 3;	

	}
	else if(c==5){

	
		cubeObj.cubeVertexColorBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeObj.cubeVertexColorBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorsOrange), gl.STATIC_DRAW);
		cubeObj.cubeVertexColorBuffer.itemSize = 3;
		cubeObj.cubeVertexColorBuffer.numItems = cubeObj.vertices.length / 3;	

	}
	// Vertex indices
	
    
}

//----------------------------------------------------------------------------

//  Drawing the model

function drawModel( angleXX, angleYY, angleZZ, 
					sx, sy, sz,
					tx, ty, tz,
					mvMatrix,
					primitiveType, cubeObj ) {

    // Pay attention to transformation order !!
    
	mvMatrix = mult( mvMatrix, translationMatrix( tx, ty, tz ) );
						 
	mvMatrix = mult( mvMatrix, rotationZZMatrix( angleZZ ) );
	
	mvMatrix = mult( mvMatrix, rotationYYMatrix( angleYY ) );
	
	mvMatrix = mult( mvMatrix, rotationXXMatrix( angleXX ) );
	
	mvMatrix = mult( mvMatrix, scalingMatrix( sx, sy, sz ) );
						 
	// Passing the Model View Matrix to apply the current transformation
	
	var mvUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
	
	gl.uniformMatrix4fv(mvUniform, false, new Float32Array(flatten(mvMatrix)));

    // Passing the buffers
    	
	gl.bindBuffer(gl.ARRAY_BUFFER, cubeObj.cubeVertexPositionBuffer);
    
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeObj.cubeVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, cubeObj.cubeVertexColorBuffer);
    
    gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, cubeObj.cubeVertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeObj.cubeVertexIndexBuffer);

	// Drawing the triangles --- NEW --- DRAWING ELEMENTS 
	
	gl.drawElements(gl.TRIANGLES, cubeObj.cubeVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);	
}

//----------------------------------------------------------------------------
	//var pMatrix;
//	var mvMatrix = mat4();


//  Drawing the 3D scene

function drawScene() {
	
	
	// Clearing with the background color
	
	//descomentar talvez
	gl.clear(gl.COLOR_BUFFER_BIT); 
	
	// NEW --- Computing the Projection Matrix
	
	if( projectionType == 0 ) {
		
		// For now, the default orthogonal view volume
		for(var l=0; l<cubeSource.length;l++){
			cubeSource.pMatrix = ortho( -1.0, 1.0, -1.0, 1.0, -1.0, 1.0 );

			
			cubeSource.tz = 0;

			// NEW --- Global transformation !!
		
		globalTz = 0;
		}
		
		
	}
	else {	

		for(var l=0; l<cubeSource.length;l++){
			cubeSource.pMatrix = perspective(  45, 1, 0.05, 10 );
			
			cubeSource.tz = -2.25;

			globalTz = -2.5;
		}

	}
	
	// Passing the Projection Matrix to apply the current projection
	
	var pUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
	
	c=3;
	for(var l=0; l<cubeSource.length;l++){

		gl.uniformMatrix4fv(pUniform, false, new Float32Array(flatten(cubeSource.pMatrix))); //isto tava fora do for
		var auxMatrix = mat4();
		var auxMatrix2 = mat4();
		
		auxMatrix = mult( translationMatrix( 0, 0, globalTz ),
			rotationXXMatrix( globalAngleXX ));

		auxMatrix2 = mult( translationMatrix( 0, 0, globalTz ),
	                 rotationYYMatrix( globalAngleYY ) );
		cubeSource[l].mvMatrix=mult(auxMatrix,auxMatrix2);

		drawModel(cubeSource[l].angleXX,cubeSource[l].angleYY, cubeSource[l].angleZZ,  // CW rotations
	            cubeSource[l].sx, cubeSource[l].sy, cubeSource[l].sz,
	            cubeSource[l].tx, cubeSource[l].ty, cubeSource[l].tz,
	            cubeSource[l].mvMatrix,
	            cubeSource[l].primitiveType, cubeSource[l]);

		

	}	
	
	           
}


var lastTime = 0;



var currentlyPressedKeys = {};

function handleKeys() {
	
	if (currentlyPressedKeys[33]) {
		
		// Page Up
		
		sx *= 0.9;
		
		sz = sy = sx;
	}
	if (currentlyPressedKeys[34]) {
		
		// Page Down
		
		sx *= 1.1;
		
		sz = sy = sx;
	}
	if (currentlyPressedKeys[37]) {
		
		// Left cursor key
		
		if( rotationYY_ON == 0 ) {
			
			rotationYY_ON = 1;
		}  
		
		rotationYY_SPEED -= 0.25;
	}
	if (currentlyPressedKeys[39]) {
		
		// Right cursor key
		
		if( rotationYY_ON == 0 ) {
			
			rotationYY_ON = 1;
		}  
		
		rotationYY_SPEED += 0.25;
	}
	if (currentlyPressedKeys[38]) {
		
		// Up cursor key
		
		if( rotationXX_ON == 0 ) {
			
			rotationXX_ON = 1;
		}  
		
		rotationXX_SPEED -= 0.25;
	}
	if (currentlyPressedKeys[40]) {
		
		// Down cursor key
		
		if( rotationXX_ON == 0 ) {
			
			rotationXX_ON = 1;
		}  
		
		rotationXX_SPEED += 0.25;
	}
}

//----------------------------------------------------------------------------

// Handling mouse events

// Adapted from www.learningwebgl.com


var mouseDown = false;

var lastMouseX = null;

var lastMouseY = null;

function handleMouseDown(event) {
	
    mouseDown = true;
  
    lastMouseX = event.clientX;
  
    lastMouseY = event.clientY;
}

function handleMouseUp(event) {

    mouseDown = false;
}

function handleMouseMove(event) {

    if (!mouseDown) {
	  
      return;
    } 
  
    // Rotation angles proportional to cursor displacement
    
    var newX = event.clientX;
  
    var newY = event.clientY;

    var deltaX = newX - lastMouseX;
    
    globalAngleYY += radians( 10 * deltaX  )

    var deltaY = newY - lastMouseY;
    
    globalAngleXX += radians( 10 * deltaY  )
    
    lastMouseX = newX
    
    lastMouseY = newY;
  }
//----------------------------------------------------------------------------

// Timer

function tick() {
	
	requestAnimFrame(tick);
	
	// NEW --- Processing keyboard events 
	
	handleKeys();
	
	drawScene();
	
	//animate();
}




//----------------------------------------------------------------------------
//
//  User Interaction
//

function outputInfos(){
		
}

//----------------------------------------------------------------------------

function setEventListeners( canvas ){
	
	// NEW ---Handling the mouse
	
	// From learningwebgl.com

    canvas.onmousedown = handleMouseDown;
    
    document.onmouseup = handleMouseUp;
    
    document.onmousemove = handleMouseMove;
    
    // NEW ---Handling the keyboard
	
	// From learningwebgl.com

    function handleKeyDown(event) {
		
        currentlyPressedKeys[event.keyCode] = true;
    }

    function handleKeyUp(event) {
		
        currentlyPressedKeys[event.keyCode] = false;
    }

	document.onkeydown = handleKeyDown;
    
    document.onkeyup = handleKeyUp;
	
	// Dropdown list
	
	var projection = document.getElementById("projection-selection");
	
	projection.addEventListener("click", function(){
				
		// Getting the selection
		
		var p = projection.selectedIndex;
				
		switch(p){
			
			case 0 : projectionType = 0;
				break;
			
			case 1 : projectionType = 1;
				break;
		}  	
	});      


	// Button events
	
	document.getElementById("Create_Cube").onclick = function(){
		cubeSource.push( new CubeSource() );
		cubeSource[cubeSource.length-1].tipo=0;
		

		initCordenates(cubeSource[cubeSource.length-1]);	
		initColors(cubeSource[cubeSource.length-1]);

		drawScene();
		
	};
	

	document.getElementById("Create_Cube2x2").onclick = function(){
		cubeSource.push( new CubeSource() );
		cubeSource[cubeSource.length-1].tipo=3;
		
		for(var i=0; i<cubeSource[cubeSource.length-1].vertices.length; i++) {
 			   cubeSource[cubeSource.length-1].vertices[i] *= 2;
 			   cubeSource[cubeSource.length-1].ty = 0.1;
}
		initCordenates(cubeSource[cubeSource.length-1]);	
		initColors(cubeSource[cubeSource.length-1]);

		drawScene();
		
	};
document.getElementById("Create_Cube2x1").onclick = function(){
		cubeSource.push( new CubeSource() );
		cubeSource[cubeSource.length-1].tipo=1;

		cubeSource[cubeSource.length-1].vertices =[-0.2, -0.1,  0.1,
             0.2, -0.1,  0.1,
             0.2,  0.1,  0.1,
            -0.2,  0.1,  0.1,

            // Back face
            -0.2, -0.1, -0.1,
            -0.2,  0.1, -0.1,
             0.2,  0.1, -0.1,
             0.2, -0.1, -0.1,
            // Top face
            -0.2,  0.1, -0.1,
            -0.2,  0.1,  0.1,
             0.2,  0.1,  0.1,
             0.2,  0.1, -0.1,

            // Bottom face
            -0.2, -0.1, -0.1,
             0.2, -0.1, -0.1,
             0.2, -0.1,  0.1,
            -0.2, -0.1,  0.1,

            // Right face
             0.2, -0.1, -0.1,
             0.2,  0.1, -0.1,
             0.2,  0.1,  0.1,
             0.2, -0.1,  0.1,

            // Left face
            -0.2, -0.1, -0.1,
            -0.2, -0.1,  0.1,
            -0.2,  0.1,  0.1,
            -0.2,  0.1, -0.1
			]; 
		initCordenates(cubeSource[cubeSource.length-1]);	
		initColors(cubeSource[cubeSource.length-1]);

		drawScene();
		
	};
	document.getElementById("Create_Cube3x1").onclick = function(){
		cubeSource.push( new CubeSource() );
		cubeSource[cubeSource.length-1].tipo=2;

		cubeSource[cubeSource.length-1].vertices =[-0.3, -0.1,  0.1,
             0.3, -0.1,  0.1,
             0.3,  0.1,  0.1,
            -0.3,  0.1,  0.1,

            // Back face
            -0.3, -0.1, -0.1,
            -0.3,  0.1, -0.1,
             0.3,  0.1, -0.1,
             0.3, -0.1, -0.1,
            // Top face
            -0.3,  0.1, -0.1,
            -0.3,  0.1,  0.1,
             0.3,  0.1,  0.1,
             0.3,  0.1, -0.1,

            // Bottom face
            -0.3, -0.1, -0.1,
             0.3, -0.1, -0.1,
             0.3, -0.1,  0.1,
            -0.3, -0.1,  0.1,

            // Right face
             0.3, -0.1, -0.1,
             0.3,  0.1, -0.1,
             0.3,  0.1,  0.1,
             0.3, -0.1,  0.1,

            // Left face
            -0.3, -0.1, -0.1,
            -0.3, -0.1,  0.1,
            -0.3,  0.1,  0.1,
            -0.3,  0.1, -0.1
			]; 

		initCordenates(cubeSource[cubeSource.length-1]);	
		initColors(cubeSource[cubeSource.length-1]);

		drawScene();
		
	};

//-----------------------------------------------------------------------
//button action

// Button events
	
	document.getElementById("Create_CubeButton").onclick = function(){
		cubeSource.push( new CubeSource() );

		

		initCordenates(cubeSource[cubeSource.length-1]);	
		initColors(cubeSource[cubeSource.length-1]);

		drawScene();
		
	};
	

	document.getElementById("Create_Cube2x2Button").onclick = function(){
		cubeSource.push( new CubeSource() );

		
		for(var i=0; i<cubeSource[cubeSource.length-1].vertices.length; i++) {
 			   cubeSource[cubeSource.length-1].vertices[i] *= 2;
 			   cubeSource[cubeSource.length-1].ty = 0.1;
}
		initCordenates(cubeSource[cubeSource.length-1]);	
		initColors(cubeSource[cubeSource.length-1]);

		drawScene();
		
	};
document.getElementById("Create_Cube2x1Button").onclick = function(){
		cubeSource.push( new CubeSource() );

		cubeSource[cubeSource.length-1].vertices =[-0.2, -0.1,  0.1,
             0.2, -0.1,  0.1,
             0.2,  0.1,  0.1,
            -0.2,  0.1,  0.1,

            // Back face
            -0.2, -0.1, -0.1,
            -0.2,  0.1, -0.1,
             0.2,  0.1, -0.1,
             0.2, -0.1, -0.1,
            // Top face
            -0.2,  0.1, -0.1,
            -0.2,  0.1,  0.1,
             0.2,  0.1,  0.1,
             0.2,  0.1, -0.1,

            // Bottom face
            -0.2, -0.1, -0.1,
             0.2, -0.1, -0.1,
             0.2, -0.1,  0.1,
            -0.2, -0.1,  0.1,

            // Right face
             0.2, -0.1, -0.1,
             0.2,  0.1, -0.1,
             0.2,  0.1,  0.1,
             0.2, -0.1,  0.1,

            // Left face
            -0.2, -0.1, -0.1,
            -0.2, -0.1,  0.1,
            -0.2,  0.1,  0.1,
            -0.2,  0.1, -0.1
			]; 
		initCordenates(cubeSource[cubeSource.length-1]);	
		initColors(cubeSource[cubeSource.length-1]);

		drawScene();
		
	};
	document.getElementById("Create_Cube3x1Button").onclick = function(){
		cubeSource.push( new CubeSource() );

		cubeSource[cubeSource.length-1].vertices =[-0.3, -0.1,  0.1,
             0.3, -0.1,  0.1,
             0.3,  0.1,  0.1,
            -0.3,  0.1,  0.1,

            // Back face
            -0.3, -0.1, -0.1,
            -0.3,  0.1, -0.1,
             0.3,  0.1, -0.1,
             0.3, -0.1, -0.1,
            // Top face
            -0.3,  0.1, -0.1,
            -0.3,  0.1,  0.1,
             0.3,  0.1,  0.1,
             0.3,  0.1, -0.1,

            // Bottom face
            -0.3, -0.1, -0.1,
             0.3, -0.1, -0.1,
             0.3, -0.1,  0.1,
            -0.3, -0.1,  0.1,

            // Right face
             0.3, -0.1, -0.1,
             0.3,  0.1, -0.1,
             0.3,  0.1,  0.1,
             0.3, -0.1,  0.1,

            // Left face
            -0.3, -0.1, -0.1,
            -0.3, -0.1,  0.1,
            -0.3,  0.1,  0.1,
            -0.3,  0.1, -0.1
			]; 

		initCordenates(cubeSource[cubeSource.length-1]);	
		initColors(cubeSource[cubeSource.length-1]);

		drawScene();
		
	};





	document.getElementById("rotate-button").onclick = function(){
		
		// Switching the direction
		
		cubeSource[cubeSource.length-1].angleXX -= 90.0;
		cubeSource[cubeSource.length-1].angleZZ -= 90.0;
		if(cubeSource[cubeSource.length-1].tipo==1 || cubeSource[cubeSource.length-1].tipo==2 ) cubeSource[cubeSource.length-1].ty+=0.6;
		//cubeSource[cubeSource.length-1].angleYY -= 45.0;
		drawScene();
	};      

	

	document.getElementById("red-button").onclick = function(){
		c=1;
		initColors(cubeSource[cubeSource.length-1]);

	};  

	document.getElementById("green-button").onclick = function(){
		c=2;
		initColors(cubeSource[cubeSource.length-1]);

	};     

	document.getElementById("blue-button").onclick = function(){
		c=3;
		initColors(cubeSource[cubeSource.length-1]);

	}; 
	document.getElementById("pink-button").onclick = function(){
		c=4;
		initColors(cubeSource[cubeSource.length-1]);

	}; 
	document.getElementById("orange-button").onclick = function(){
		c=5;
		initColors(cubeSource[cubeSource.length-1]);

	}; 
	

	document.getElementById("reset-button").onclick = function(){
		
		// The initial values

		for(var i = cubeSource.length - 1; i > 0; i--) {
	       cubeSource.splice(i, 1);
    	}
    	drawScene();
	};  

	document.getElementById("delete-button").onclick = function(){
		
		// The initial values
		if (cubeSource.length - 1 == 0)
		{
			return;
		}
		var i = cubeSource.length - 1;
	       cubeSource.splice(i, 1);
    	
    	
	};        
	
	


}

//----------------------------------------------------------------------------
//
// WebGL Initialization
//

function initWebGL( canvas ) {
	try {
		
		// Create the WebGL context
		
		// Some browsers still need "experimental-webgl"
		
		gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
		
		// DEFAULT: The viewport occupies the whole canvas 
		
		// DEFAULT: The viewport background color is WHITE
		
		// NEW - Drawing the triangles defining the model
		
		primitiveType = gl.TRIANGLES;
		
		// DEFAULT: The Depth-Buffer is DISABLED
		
		// Enable it !
		
		gl.enable( gl.DEPTH_TEST );

		gl.enable( gl.CULL_FACE ); //adicionado
		gl.cullFace( gl.BACK ); //adicionado

		cubeSource.push( new CubeSource() );
		

		cubeSource[0].vertices =[
			 -1, -0.01,  4,
             4, -0.01,  4,
             4,  0.01,  4,
            -4,  0.01,  4,

            // Back face
            -4, -0.01, -4,
            -4,  0.01, -4,
             4,  0.01, -4,
             4, -0.01, -4,
            // Top face
            -4,  0.01, -4,
            -4,  0.01,  4,
             4,  0.01,  4,
             4,  0.01, -4,

            // Bottom face
            -4, -0.01, -4,
             4, -0.01, -4,
             4, -0.01,  4,
            -4, -0.01,  4,

            // Right face
             4, -0.01, -4,
             4,  0.01, -4,
             4,  0.01,  4,
             4, -0.01,  4,

            // Left face
            -4, -0.01, -4,
            -4, -0.01,  4,
            -4,  0.01,  4,
            -4,  0.01, -4
			]; 
	
		cubeSource[0].colors =colorsPlan;
		initCordenates(cubeSource[0]);	
		initColors(cubeSource[0]);
		cubeSource[0].ty=-0.1;
		drawScene();
		
	} catch (e) {
	}
	if (!gl) {
		alert("Could not initialise WebGL, sorry! :-(");
	}        
}

//----------------------------------------------------------------------------

function runWebGL() {
	
	var canvas = document.getElementById("my-canvas");
	
	initWebGL( canvas );

	shaderProgram = initShaders( gl );
	
	setEventListeners( canvas );
	
	
	
	
	tick();		// A timer controls the rendering / animation    

	outputInfos();
}

