import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const valoresInciais = {
    nome:'',
    descricao: '',
    cor: '',
  }
  const [categoria, setCategoria] = useState([]);
  const [values, setValues] = useState(valoresInciais);

  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function hendleChange(infoDoEvento){
    const { getAttribute, value } = infoDoEvento.target;
    setValue(
      getAttribute('name'), 
      value
  );
}

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSumit(infoDoEvento) {
        infoDoEvento.preventDefault();
        setCategoria([
          ...categoria,
          values
        ]);

        setValues(valoresInciais)
      }}>

        <FormField
        label="Nome da categoria"
        name="nome"
        type="text" 
        value={values.nome}
        onChange={hendleChange}
        />

        <div>
        <label>
          Descrição:
          <textarea
            type="text"
            value={values.descricao}
            name="descricao"
            onChange={hendleChange}
          />
        </label>
        </div>

        <FormField 
        label="Cor"
        value={values.cor}
        name="cor"
        type="color"
        onChange={hendleChange}
        />
    
        <button>
          Cadastrar
        </button>
      </form>

          <ul>
            {categoria.map((categoria, indice) => {
              return (
                <li key={`${categoria}${indice}`}>
                  {categoria.nome}
                </li>
              )
            })}           
            </ul>   

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;