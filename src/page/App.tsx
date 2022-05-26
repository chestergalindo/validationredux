import { useForm } from 'react-hook-form';
import './App.css';

export const App = () => {
  const { register, handleSubmit } = useForm();
  // const [listProducts, setListProducts] = useState([]);
  const l: any = [];

  const onSubmit = (data: { searchWord: string }) => l.push(data.searchWord);

  console.log({ l });

  return (
    <body>
      <div className="App">
        <h1>Listado de Mercado</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register('searchWord')} placeholder="Articulos de mercado" />
          <input type="submit" placeholder=" test  " />
        </form>
        <div className="list">
          {/* {listProducts.map(() => ( */}
          <>
            <li>Milk</li>
            <input type="text" placeholder="0" aria-label="5" />
            <button>Agregar</button>
            <button>eliminar</button>
          </>
          {/* ))} */}
        </div>
      </div>
    </body>
  );
};
