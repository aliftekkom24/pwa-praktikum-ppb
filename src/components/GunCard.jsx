import React from 'react'

function GunCard({ gun }) {
  return (
    <div className="gun-card">
      {/* Gambar di bagian atas */}
      <img src={gun.image} alt={gun.name} />

      {/* Konten teks di bawah gambar */}
      <div className="gun-card-content">
        <h3>{gun.name}</h3>
        <p className="gun-type">{gun.type}</p>
        <p className="gun-specs">{gun.caliber}</p>
        <p className="gun-price">${gun.price}</p>
      </div>
    </div>
  )
}

export default GunCard