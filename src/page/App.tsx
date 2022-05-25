import { useForm } from 'react-hook-form';
import './App.css';

export const App = () => {
  const { register, handleSubmit } = useForm();
  const ListProduct: any = [];
  const onSubmit = (data: any) => {
    console.log(data);
    ListProduct.push(data.searchWord);
    console.log({ ListProduct });
  };

  return (
    <body>
      <div className="App">
        <h1>Listado de Mercado</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            aria-label=""
            {...register('searchWord')}
            placeholder="Articulos de mercado"
          />
          <button type="submit">Buscar</button>
        </form>
        <div className="list">
          <li>Milk</li>
          <input type="text" placeholder="0" aria-label="5" />
          <button>Agregar</button>
          <button>eliminar</button>
        </div>
      </div>
    </body>
  );
};
