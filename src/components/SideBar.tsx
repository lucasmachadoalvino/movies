import { useEffect, useState } from 'react';
import { api } from '../services/api';
import '../styles/sidebar.scss';
import { Button } from './Button';

interface SideBarProps {
  handleClickButton: (id: number) => void
  selectedGenreId: number
  genres: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }[]
}


export function SideBar({ handleClickButton, selectedGenreId, genres }: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}