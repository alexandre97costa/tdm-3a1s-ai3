function guardarPessoa(id_, nome_, morada_) {
  const doc = document.implementation.createDocument(null, "pessoas", null);

  const pessoa = doc.createElement("pessoa");
  pessoa.setAttribute("id", id_);

  const nome = doc.createElement("nome");
  const nomeValor = doc.createTextNode(nome_);
  nome.appendChild(nomeValor);
  pessoa.appendChild(nome);

  const morada = doc.createElement("morada");
  const moradaValor = doc.createTextNode(morada_);
  morada.appendChild(moradaValor);
  pessoa.appendChild(morada);

  doc.documentElement.appendChild(pessoa);

  const s = new XMLSerializer();
  return s.serializeToString(doc);
}

function guardarPessoaAcrescentar(listapessoas, id_, nome_, morada_) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(listapessoas, "text/xml");

  const pessoa = doc.createElement("pessoa");
  pessoa.setAttribute("id", id_);

  const nome = doc.createElement("nome");
  const nomeValor = doc.createTextNode(nome_);
  nome.appendChild(nomeValor);
  pessoa.appendChild(nome);

  const morada = doc.createElement("morada");
  const moradaValor = doc.createTextNode(morada_);
  morada.appendChild(moradaValor);
  pessoa.appendChild(morada);

  doc.documentElement.appendChild(pessoa);

  const s = new XMLSerializer();
  return s.serializeToString(doc);
}

function pesquisaNomePorId(listapessoas, id_) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(listapessoas, "text/xml");

  var elementos = doc.getElementById(id_);

  if (elementos !== null) {
    return elementos.getElementsByTagName("nome")[0].textContent;
  } else {
    return "";
  }
}

function pesquisaMoradaPorNome(listapessoas, nome_) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(listapessoas, "text/xml");

  var elementos = doc.getElementsByTagName("nome");

  for (const element of elementos) {
    if (element.textContent == nome_) {
      return element.parentNode.getElementsByTagName("morada")[0].textContent;
    } else {
      return "";
    }
  }
}
