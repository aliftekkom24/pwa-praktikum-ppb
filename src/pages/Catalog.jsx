import { useState } from 'react'
import GUNS from '../data/guns'
import GunCard from '../components/GunCard'

function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredGuns =
    selectedCategory === 'All'
      ? GUNS
      : GUNS.filter(
          (gun) => gun.type.toLowerCase() === selectedCategory.toLowerCase()
        )

  return (
    <div className="catalog-page">
      <h2>Catalog Senjata</h2>
      <p className="pieces-count">{filteredGuns.length} pieces</p>

      {/* Tombol Filter */}
      <div className="filter-container">
        {['All', 'Pistol', 'Rifle', 'Shotgun'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`filter-btn ${
              selectedCategory === category ? 'active' : ''
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid Card Senjata */}
      <div className="guns-grid">
        {filteredGuns.map((gun, index) => (
          <GunCard key={index} gun={gun} />
        ))}
      </div>
    </div>
  )
}

export default Catalog