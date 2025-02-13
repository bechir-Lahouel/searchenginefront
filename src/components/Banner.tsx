const Banner = () => {
    return (
      <div className="banner">
        {/* Texte et barre de recherche */}
        <div className="banner-text">
          <h1>
            Once you learn to read, you will be forever free
          </h1>
          <div className="search-bar">
            <input type="text" placeholder="Search a book, an author or genre" />
            <button>Search</button>
          </div>
        </div>
  
        {/* Image illustrant la lecture */}
        <div className="banner-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Person reading"
          />
        </div>
      </div>
    );
  };
  
  export default Banner;
  