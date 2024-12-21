import React, { useState } from 'react';
import { Star, Play, Info } from 'lucide-react';
import CommentSection from './CommentSection';
import '../assets/styles/movies.css'


const movies = [
    {
      id: 1,
      title: "Inception",
      rating: 8.8,
      year: 2010,
      image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
      description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      comments: [
        { id: 1, user: "Əli", text: "Əla filmdir!", date: "2024-03-15", likes: 12 },
        { id: 2, user: "Aygün", text: "Sonu çox maraqlı idi.", date: "2024-03-14", likes: 8 }
      ]
    },
    {
      id: 2,
      title: "The Dark Knight",
      rating: 9.0,
      year: 2008,
      image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      comments: [
        { id: 1, user: "Mətin", text: "Heath Ledger-in oyunu möhtəşəmdir!", date: "2024-03-10", likes: 15 }
      ]
    },
    {
      id: 3,
      title: "Interstellar",
      rating: 8.6,
      year: 2014,
      image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      comments: [
        { id: 1, user: "Lalə", text: "Vizual effektlər çox təsirlidir", date: "2024-03-12", likes: 10 }
      ]
    },
    {
      id: 4,
      title: "The Shawshank Redemption",
      rating: 9.3,
      year: 1994,
      image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      comments: [
        { id: 1, user: "Ramin", text: "Dünyanın ən yaxşı filmi!", date: "2024-03-01", likes: 20 },
        { id: 2, user: "Zeynəb", text: "Çox təsirləndim, hekayə çox güclüdür.", date: "2024-03-02", likes: 18 }
      ]
    },
    {
      id: 5,
      title: "Forrest Gump",
      rating: 8.8,
      year: 1994,
      image: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg",
      description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Civil Rights Movement, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an extraordinary talent for running.",
      comments: [
        { id: 1, user: "Farid", text: "Tom Hanks-in oynadığı ən yaxşı roldur.", date: "2024-03-11", likes: 14 }
      ]
    },
    {
      id: 6,
      title: "The Godfather",
      rating: 9.2,
      year: 1972,
      image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      trailer: "https://www.youtube.com/watch?v=sY1S34973zA",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      comments: [
        { id: 1, user: "Eldar", text: "Bu film hələ də müasir filmlərlə müqayisə oluna bilməz.", date: "2024-03-07", likes: 22 }
      ]
    },
    {
      id: 7,
      title: "Pulp Fiction",
      rating: 8.9,
      year: 1994,
      image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      trailer: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
      description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      comments: [
        { id: 1, user: "Aydın", text: "Quentin Tarantino-nun ən yaxşı əsəridir.", date: "2024-03-04", likes: 19 }
      ]
    },
    {
      id: 8,
      title: "The Matrix",
      rating: 8.7,
      year: 1999,
      image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      trailer: "https://www.youtube.com/watch?v=m8e-FF8MsqU",
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      comments: [
        { id: 1, user: "Emil", text: "Filmin fəlsəfəsi çox maraqlıdır.", date: "2024-03-08", likes: 13 }
      ]
    },
    {
      id: 9,
      title: "Gladiator",
      rating: 8.5,
      year: 2000,
      image: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      trailer: "https://www.youtube.com/watch?v=owK1qxDselE",
      description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      comments: [
        { id: 1, user: "Rəşad", text: "Russell Crowe mükəmməldir.", date: "2024-03-05", likes: 17 }
      ]
    },
    {
      id: 10,
      title: "Fight Club",
      rating: 8.8,
      year: 1999,
      image: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
      trailer: "https://www.youtube.com/watch?v=SUXWAEX2jlg",
      description: "An insomniac office worker and a soap salesman form an underground fight club that evolves into something much, much more.",
      comments: [
        { id: 1, user: "Kamran", text: "Həyat haqqında çox dərin mesajlar verir.", date: "2024-03-06", likes: 16 }
      ]
    },
    {
      id: 11,
      title: "The Lion King",
      rating: 8.5,
      year: 1994,
      image: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg",
      trailer: "https://www.youtube.com/watch?v=4sj1MT05lAA",
      description: "A lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron fist, the prince grows up beyond the savanna and sets off to reclaim his kingdom.",
      comments: [
        { id: 1, user: "Leyla", text: "Uşaqlıqda ən sevdiyim filmdir.", date: "2024-03-09", likes: 11 }
      ]
    },
    {
      id: 12,
      title: "The Prestige",
      rating: 8.5,
      year: 2006,
      image: "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg",
      trailer: "https://www.youtube.com/watch?v=o4gHCmTQDVI",
      description: "Two magicians engage in a bitter rivalry, each trying to outwit the other with increasingly dangerous and elaborate tricks.",
      comments: [
        { id: 1, user: "Nigar", text: "Filmin sonu şok edicidir.", date: "2024-03-13", likes: 14 }
      ]
    },
    {
      id: 13,
      title: "The Social Network",
      rating: 8.0,
      year: 2010,
      image: "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      trailer: "https://www.youtube.com/watch?v=lB95KLmpLR4",
      description: "The story of the founding of Facebook, and the legal battles that followed its rise to success.",
      comments: [
        { id: 1, user: "Xalid", text: "Çox maraqlı və sürükleyicidir.", date: "2024-03-16", likes: 9 }
      ]
    },
    {
      id: 14,
      title: "The Departed",
      rating: 8.5,
      year: 2006,
      image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p162564_p_v8_ag.jpg",
      trailer: "https://www.youtube.com/watch?v=auYiGrO_mzE",
      description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in Boston.",
      comments: [
        { id: 1, user: "Rəna", text: "Martin Scorsese çox gözəl işləmişdir.", date: "2024-03-17", likes: 10 }
      ]
    },
    {
      id: 15,
      title: "The Avengers",
      rating: 8.0,
      year: 2012,
      image: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      trailer: "https://www.youtube.com/watch?v=eOrNdBpGMv8",
      description: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
      comments: [
        { id: 1, user: "Samir", text: "Super qəhrəmanlar bir arada olmaq çox gözəl idi.", date: "2024-03-18", likes: 13 }
      ]
    }
];
const getYoutubeEmbedUrl = (url) => {
    const videoId = url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };
  
  const MovieCard = ({ movie, onSelect, onTrailer }) => (
    <div className="movie-card">
      <div className="movie-image-container">
        <img 
          src={movie.image} 
          alt={movie.title} 
          className="movie-image"
        />
        <div className="movie-rating">
          <Star className="w-4 h-4" />
          <span className="font-bold">{movie.rating}</span>
        </div>
      </div>
      
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-year">{movie.year}</p>
        
        <div className="button-container">
          <button 
            onClick={() => onTrailer(movie)}
            className="trailer-button"
          >
            <Play className="w-4 h-4" /> Trailer
          </button>
          <button 
            onClick={() => onSelect(movie)}
            className="details-button"
          >
            <Info className="w-4 h-4" /> Ətraflı
          </button>
        </div>
      </div>
    </div>
  );
  
  const TrailerModal = ({ movie, onClose }) => (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">{movie.title} - Trailer</h2>
        <div className="video-container">
          <iframe
            src={getYoutubeEmbedUrl(movie.trailer)}
            title={`${movie.title} trailer`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
          <button 
            onClick={onClose}
            className="close-button"
          >
            Bağla
          </button>
        </div>
      </div>
    </div>
  );
  
  const MovieModal = ({ movie, onClose }) => (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">{movie.title}</h2>
        <p className="modal-description">{movie.description}</p>
        <img 
          src={movie.image} 
          alt={movie.title} 
          className="modal-image"
        />
        
        <CommentSection comments={movie.comments} />
        
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
          <button 
            onClick={onClose}
            className="close-button"
          >
            Bağla
          </button>
        </div>
      </div>
    </div>
  );
  
  const Movies = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [trailerMovie, setTrailerMovie] = useState(null);
  
    return (
      <div className="container">
        <div className="main-content">
          <h1 className="page-title">
          Ən yaxşı filmlər seriyası
          </h1>
          
          <div className="movie-grid">
            {movies.map(movie => (
              <MovieCard 
                key={movie.id} 
                movie={movie} 
                onSelect={setSelectedMovie}
                onTrailer={setTrailerMovie}
              />
            ))}
          </div>
  
          {selectedMovie && (
            <MovieModal 
              movie={selectedMovie} 
              onClose={() => setSelectedMovie(null)} 
            />
          )}
  
          {trailerMovie && (
            <TrailerModal 
              movie={trailerMovie} 
              onClose={() => setTrailerMovie(null)} 
            />
          )}
        </div>
      </div>
    );
  };

export default Movies;