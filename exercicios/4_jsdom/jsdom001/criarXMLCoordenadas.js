function criarXMLCoordenadas(lat, long, nomeLocal) {
    var doc = document.implementation.createDocument(null, "coordenadas", null);
    var local = doc.createElement("local");
    var nome = doc.createElement("nome");
    var nomeValor = doc.createTextNode(nomeLocal);
    nome.appendChild(nomeValor)
    local.appendChild(nome)
    var coordenada = doc.createElement("coordenada");
    var latitude = doc.createElement("latitude");
    var latitudeValor = doc.createTextNode(lat);
    latitude.appendChild(latitudeValor);
    var longitude = doc.createElement("longitude");
    var longitudeValor = doc.createTextNode(long);
    longitude.appendChild(longitudeValor);
    coordenada.appendChild(latitude);
    coordenada.appendChild(longitude);
    local.appendChild(coordenada);
    doc.documentElement.appendChild(local);
    var s = new XMLSerializer();
    return s.serializeToString(doc);
}