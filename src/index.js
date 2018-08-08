class Postres extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      postres: []
    };
  }

  componentDidMount() {
    fetch("http://localhost/json_reactjs/php/datos.php")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            postres: result.postres
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, postres } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div> Cargando ... </div>;
    } else {
      return (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th className="text-center">Nombre</th>
              <th className="text-center">Stock</th>
              <th className="text-center">Precio</th>
            </tr>
          </thead>
          <tbody>

          {postres.map(item => (         
          
            <tr>
              <th className="text-center" id={item.id}>{item.id}</th>
              <td className="text-center">{item.nombre}</td>
              <td className="text-center">{item.stock}</td>
              <td className="text-center">{item.precio}</td>
            </tr>

          ))}

          </tbody>
        </table>

      );
    }
  }
}

//Renderizamos los datos en nuestra vista
ReactDOM.render(<Postres/>, document.getElementById("root"));


