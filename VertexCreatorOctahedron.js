//Function that divides each triangle in 3 new ones   
function VertexCreatorOctahedron(model){
	
	var newModel = [];  //Nova matriz de vertices com os novos triangulos

	//Loop para cada triangulo
	var i=0;
	while (i < model.length){
		//Faz a logica para cada vertice usando o index
		var ptoA = [model[i], model[i+1], model[i+2]];
		var ptoB = [model[i+3], model[i+4], model[i+5]];
		var ptoC = [model[i+6], model[i+7], model[i+8]];
		
		var raio = Math.sqrt(ptoA[0]*ptoA[0] + ptoA[1]*ptoA[1] + ptoA[2]*ptoA[2]);
		//var raio = 1.414;
		
		var modulo = 0;
		//Encontrar os pontos medios das arestas
		//Entre A e B
		var auxAB = [(ptoA[0]+ptoB[0])/2, (ptoA[1]+ptoB[1])/2, (ptoA[2]+ptoB[2])/2];
		modulo = Math.sqrt(auxAB[0]*auxAB[0] + auxAB[1]*auxAB[1] + auxAB[2]*auxAB[2]);
		var ptoMedioAB = [auxAB[0]*raio/modulo, auxAB[1]*raio/modulo, auxAB[2]*raio/modulo];		
		//Entre B e C
		var auxBC = [(ptoB[0]+ptoC[0])/2, (ptoB[1]+ptoC[1])/2, (ptoB[2]+ptoC[2])/2];
		modulo = Math.sqrt(auxBC[0]*auxBC[0] + auxBC[1]*auxBC[1] + auxBC[2]*auxBC[2]);
		var ptoMedioBC = [auxBC[0]*raio/modulo, auxBC[1]*raio/modulo, auxBC[2]*raio/modulo];
		//Entre C e A
		var auxCA = [(ptoC[0]+ptoA[0])/2, (ptoC[1]+ptoA[1])/2, (ptoC[2]+ptoA[2])/2];
		modulo = Math.sqrt(auxCA[0]*auxCA[0] + auxCA[1]*auxCA[1] + auxCA[2]*auxCA[2]);
		var ptoMedioCA = [auxCA[0]*raio/modulo, auxCA[1]*raio/modulo, auxCA[2]*raio/modulo];
		
		// Montar os triangulos
		//1o Triangulo							
		newModel = newModel.concat(ptoMedioAB);
		newModel = newModel.concat(ptoB);
		newModel = newModel.concat(ptoMedioBC);
		//2o Triangulo
		newModel = newModel.concat(ptoMedioBC);
		newModel = newModel.concat(ptoC);
		newModel = newModel.concat(ptoMedioCA);
		//3o Triangulo
		newModel = newModel.concat(ptoMedioCA);
		newModel = newModel.concat(ptoA);
		newModel = newModel.concat(ptoMedioAB);
		//4o Triangulo
		newModel = newModel.concat(ptoMedioAB);
		newModel = newModel.concat(ptoMedioBC);
		newModel = newModel.concat(ptoMedioCA);
		
		i+=9;
	}
	
	
	
	//return model;
	return newModel;
}