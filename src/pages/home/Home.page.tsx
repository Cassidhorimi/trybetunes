import React from 'react';
import { Link } from 'react-router-dom';

export function Home(): JSX.Element {
    return <></>
}


class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      prevText: '',
      disableSearch: true,
      albuns: [],
      albumNotFound: false,
      loadingMessage: false,
    };
  }

  handleChange = ({ target }) => {
    const CHAR_NUM = 2;
    const changeBtn = target.value.length >= CHAR_NUM;
    this.setState({
      input: target.value,
      disableSearch: !changeBtn,
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    const { input } = this.state;
    this.setState({
      loadingMessage: true,
    });
    searchAlbumsAPI(input)
      .then((params) => {
        this.setState({
          input: '',
          prevText: input,
          albuns: [...params],
          albumNotFound: params.length === 0,
          loadingMessage: false,
        });
      });
  }

  render() {
    const {
      input,
      disableSearch,
      albuns,
      albumNotFound,
      prevText,
      loadingMessage,
    } = this.state;
    const albunList = (
      albuns.length >= 1 && (
        <div>
          <h2>
            {`Resultado de álbuns de: ${prevText}`}
          </h2>
          {albuns.map((album) => (
            <div key={ album.collectionId }>
              <Link
                data-testid={ `link-to-album-${album.collectionId}` }
                to={ `album/${album.collectionId}` }
              >
                <img src={ album.artworkUrl100 } alt={ album.collectionName } />
                <h3>{album.collectionName}</h3>
                <p>{`R$: ${album.collectionPrice}`}</p>
              </Link>
            </div>
          ))}
        </div>
      )
    );
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <input
            type="search"
            data-testid="search-artist-input"
            value={ input }
            onChange={ this.handleChange }
          />
          <button
            type="submit"
            data-testid="search-artist-button"
            disabled={ disableSearch }
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
        </form>
        {albumNotFound && <p>Nenhum álbum foi encontrado</p>}
        { loadingMessage ? <Loading /> : albunList }
      </div>
    );
  }
}

export default Search;
