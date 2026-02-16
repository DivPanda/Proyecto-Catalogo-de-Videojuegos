import { getGames } from "./services/gameService.js"
import React, { useState, useEffect, useMemo } from "react"
import GameCard from "./components/GameCard/GameCard.jsx"
import "./App.css"
import HeroSection from "./components/HeroSection/HeroSection.jsx"
import Filters from "./components/Filters/Filters.jsx"
import { SlidersHorizontal } from "lucide-react"
import GameCardModal from "./components/GameCardModal/GameCardModal.jsx"
import Footer from "./components/Footer/Footer.jsx"

function App() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [visibleCount, setVisibleCount] = useState(20)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [selectedGame, setSelectedGame] = useState(null)

  // State for filters
  const [allPlatforms, setAllPlatforms] = useState([])
  const [allGenres, setAllGenres] = useState([])
  const [activeFilters, setActiveFilters] = useState({
    platform: [],
    genre: [],
  })

  useEffect(() => {
    const fetchGames = async () => {
      const data = await getGames()
      console.log("Datos recibidos:", data)
      setGames(data)

      // Extraer plataformas y géneros únicos de los datos
      const uniquePlatforms = [...new Set(data.flatMap(g => g.plataforma ? g.plataforma.split(',').map(p => p.trim()) : []))].sort()
      // Asumimos que los juegos tienen una propiedad 'genero' similar a 'plataforma'
      const uniqueGenres = [...new Set(data.flatMap(g => g.genero ? g.genero.split(',').map(p => p.trim()) : []))].sort()

      setAllPlatforms(uniquePlatforms)
      setAllGenres(uniqueGenres)
      setLoading(false)
    }
    fetchGames()
  }, [])

  // Reiniciar la paginación cuando cambia la búsqueda
  useEffect(() => {
    setVisibleCount(20)
  }, [searchTerm, activeFilters])

  // Controlar la visibilidad del botón "Volver arriba"
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleFilterChange = (type, value) => {
    setActiveFilters(prev => {
      const currentValues = prev[type]
      const newValues = currentValues.includes(value)
        ? currentValues.filter(item => item !== value)
        : [...currentValues, value]
      return { ...prev, [type]: newValues }
    })
  }

  // Filtrado de juegos con memoización para optimizar rendimiento
  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      // 1. Filtro por término de búsqueda
      const searchMatch = game.titulo.toLowerCase().includes(searchTerm.toLowerCase())

      // 2. Filtro por plataforma
      const platformMatch = activeFilters.platform.length === 0 ||
        activeFilters.platform.some(pFilter => 
          game.plataforma?.split(',').map(p => p.trim()).includes(pFilter)
        )

      // 3. Filtro por género
      const genreMatch = activeFilters.genre.length === 0 ||
        activeFilters.genre.some(gFilter =>
          game.genero?.split(',').map(g => g.trim()).includes(gFilter)
        )

      return searchMatch && platformMatch && genreMatch
    })
  }, [games, searchTerm, activeFilters])


  // Juegos a mostrar según la paginación actual
  const displayedGames = filteredGames.slice(0, visibleCount)

  return (
    <div className="app-wrapper">
      <HeroSection onSearch={setSearchTerm} />

      <div className="content-area">
        <Filters
          platforms={allPlatforms}
          genres={allGenres}
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
          isOpen={isFiltersOpen}
          onClose={() => setIsFiltersOpen(false)}
        />

        <main>
          {loading ? (
            <div className="loading-container">
              <div className="skull-loader">
                <div className="spinner-ring"></div>
                <svg 
                  className="skull-icon"
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 2c-5 0-9 4-9 9 0 2.5 1 4.5 3 6v3h2v-2h2v2h2v-2h2v2h2v-3c2-1.5 3-3.5 3-6 0-5-4-9-9-9zm-2.5 10c-1.4 0-2.5-1.1-2.5-2.5S8.1 7 9.5 7s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm5 0c-1.4 0-2.5-1.1-2.5-2.5S13.1 7 14.5 7s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <p className="loading-text">Cargando...</p>
            </div>
          ) : (
            filteredGames.length > 0 ? (
              <>
                <ul>
                  {displayedGames.map((game) => (
                    <li key={game.id}>
                    <GameCard {...game} onClick={() => setSelectedGame(game)} />
                    </li>
                  ))}
                </ul>
                {visibleCount < filteredGames.length && (
                  <div className="load-more-container">
                    <button className="load-more-button" onClick={() => setVisibleCount((prev) => prev + 20)}>
                      Cargar más
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="no-results-container">
                <svg className="no-results-icon" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                <h2 className="no-results-title">Sin Resultados</h2>
                {searchTerm && (
                  <p className="no-results-text">No encontramos nada para: <strong>"{searchTerm}"</strong></p>
                )}
                <p className="no-results-suggestion">Asegúrate de que el nombre esté bien escrito o prueba con otro juego.</p>
              </div>
            )
          )}
        </main>
      </div>

      <button 
        className="mobile-filter-toggle" 
        onClick={() => setIsFiltersOpen(true)}
        aria-label="Abrir filtros"
      >
        <SlidersHorizontal size={20} />
        <span>Filtros</span>
      </button>

      {showScrollTop && (
        <button 
          className="scroll-top-button" 
          onClick={scrollToTop} 
          aria-label="Volver arriba"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" strokeWidth="2" 
            strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      )}

      {/* Modal de Detalles del Juego */}
      {selectedGame && (
        <GameCardModal 
          game={selectedGame} 
          onClose={() => setSelectedGame(null)} 
        />
      )}

      <Footer />
    </div>
  )
}

export default App
