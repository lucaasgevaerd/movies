import './styles.css'
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Movies } from '../../types/movies';
import MovieCard from '../../components/MovieCard';

function Home() {

  const api_key = "b8aadf35bce2bcae16af0d0cce150720";
  const [movies, setMovies] = useState<Movies[]>([]);

  const getMovies = async (value: any) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=${value}`);
    const data = await response.json()
    const addPricePropertyInMovies = await data.results.map((el: any) => ({ ...el, price: 4.90 }))
    setMovies(addPricePropertyInMovies);
  }

  useEffect(() => {
    getMovies(1)
  }, [])

  const onChange = (value: any) => {
    getMovies(value + 1)
  }


  return (
    <>
      <main className='main-container'>
        <section className='movies-container'>
          {movies.map(movie => (
            <MovieCard image={movie.poster_path} title={movie.title} description={movie.overview} release={movie.release_date} genres={movie.genre_ids} price={movie.price} id={movie.id} key={movie.id} />
          ))}
        </section>
        <ReactPaginate
          forcePage={0}
          pageCount={500}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          containerClassName="pagination-container"
          pageLinkClassName="pagination-item"
          breakClassName="pagination-item"
          previousClassName="arrow-previous"
          nextClassName="arrow-next"
          activeLinkClassName="pagination-link-active"
          disabledClassName="arrow-inactive"
          previousLabel={<div className="pagination-arrow-container"><FaArrowLeft /></div>}
          nextLabel={<div className="pagination-arrow-container"><FaArrowRight /></div>}
          onPageChange={(items) => (onChange) ? onChange(items.selected) : {}}
        />
      </main>
    </>
  )
}
export default Home;