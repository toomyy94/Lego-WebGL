function CubeSource( ) {
	
	// A new light source is always on
	
	
	this.mvMatrix = mat4();
	this.pMatrix = mat4();
	// The translation vector
	//buffers
	

	this.tx = 0.0;

	this.ty = 0.0;

	this.tz = 0.0;

	// The rotation angles in degrees

	this.angleXX = 0.0;

	this.angleYY = 0.0;

	this.angleZZ = 0.0;

	// The scaling factors

	this.sx = 1.0;

	this.sy = 1.0;

	this.sz = 1.0;
	
	this.tipo = 0; 
// NEW - To allow choosing the way of drawing the model triangles
	
	this.primitiveType = null;
 
	// And is directional
	this.vertices = [
            // Front face
            -0.1, -0.1,  0.1,
             0.1, -0.1,  0.1,
             0.1,  0.1,  0.1,
            -0.1,  0.1,  0.1,

            // Back face
            -0.1, -0.1, -0.1,
            -0.1,  0.1, -0.1,
             0.1,  0.1, -0.1,
             0.1, -0.1, -0.1,

            // Top face
            -0.1,  0.1, -0.1,
            -0.1,  0.1,  0.1,
             0.1,  0.1,  0.1,
             0.1,  0.1, -0.1,

            // Bottom face
            -0.1, -0.1, -0.1,
             0.1, -0.1, -0.1,
             0.1, -0.1,  0.1,
            -0.1, -0.1,  0.1,

            // Right face
             0.1, -0.1, -0.1,
             0.1,  0.1, -0.1,
             0.1,  0.1,  0.1,
             0.1, -0.1,  0.1,

            // Left face
            -0.1, -0.1, -0.1,
            -0.1, -0.1,  0.1,
            -0.1,  0.1,  0.1,
            -0.1,  0.1, -0.1
			];

            
	this.cubeVertexIndices = [

            0, 1, 2,      0, 2, 3,    // Front face

            4, 5, 6,      4, 6, 7,    // Back face

            8, 9, 10,     8, 10, 11,  // Top face

            12, 13, 14,   12, 14, 15, // Bottom face

            16, 17, 18,   16, 18, 19, // Right face

            20, 21, 22,   20, 22, 23  // Left face
			];

	this.colors = [

		 // FRONT FACE - RED
		 	
		 1.00,  1.00,  0.00,
		 
		 1.00,  1.00,  0.00,
		 
		 1.00,  1.00,  0.00,

		 1.00,  1.00,  0.00,
		 			 
		 // BACK FACE - BLACK
		 	
		 1.00,  0.00,  0.00,
		 
		 1.00,  0.00,  0.00,
		 
		 1.00,  0.00,  0.00,

		 1.00,  0.00,  0.00,
		 			 
		 // TOP FACE - 
		 	
		 1.00,  0.00,  0.00,
		 
		 1.00,  0.00,  0.00,
		 
		 1.00,  0.00,  0.00,

		 1.00,  0.00,  0.00,
		 			 
		 // BOTTOM FACE
		 	
		 1.00,  0.00,  0.00,
		 
		 1.00,  0.00,  0.00,
		 
		 1.00,  0.00,  0.00,

		 1.00,  0.00,  0.00,
		 			 
		 // RIGHT FACE 
		 	
		 1.00,  0.00,  0.00,
		 
		 1.00,  0.00,  0.00,
		 
		 1.00,  0.00,  0.00,

		 1.00,  0.00,  0.00,			 
		 			 
		 // LEFT FACE 
		 	
		 1.00,  0.00,  0.00,
		 
		 1.00,  0.00,  0.00,
		 
		 1.00,  0.00,  0.00,

		 1.00,  0.00,  0.00,
		];

	
	
	
}


//  Instantiating light sources
//

	var cubeSource = [];
		

	





