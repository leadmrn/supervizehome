import { useState } from 'react';

import './styles.scss';

export default function Search(props: { onSearch: (value: string) => void }) {
  const [search, setSearch] = useState<string>('');

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
    props.onSearch(e.target.value);
  };

  return (
    <input
      className="Search"
      type="text"
      name="searchbar"
      id="searchbar"
      placeholder="Rechercher"
      onChange={handleSearch}
      value={search}
    />
  );
}
