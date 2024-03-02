import { useState } from 'react';
import { IHome } from './home.types';

export function useHome() {
  const [home, setHome] = useState<IHome>({
    input: '',
    prevText: '',
    disableSearch: true,
    albumNotFound: false,
    loadingMessage: false,
    albuns: []
  });

  function handleChange(value: string): void {
    setHome(prevState => ({
      ...prevState,
      input: value,
      disableSearch: false
    }));
  }
}
