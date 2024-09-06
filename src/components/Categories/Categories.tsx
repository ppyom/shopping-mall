import { useEffect, useState } from 'react';
import { NavLink, NavLinkRenderProps } from 'react-router-dom';
import CategoryAPI from '../../apis/category.ts';
import styles from './Categories.module.css';
import type { Category } from '../../types/category.ts';

interface Props {
  className?: string;
}

const Categories = ({ className = '' }: Props) => {
  const [categories, setCategories] = useState<Category[]>([]);

  const setActiveLink = ({ isActive }: NavLinkRenderProps) => {
    return isActive ? styles.active : '';
  };

  useEffect(() => {
    CategoryAPI.getCategories().then(setCategories);
  }, []);

  return (
    <nav className={`${styles.categories} ${className}`}>
      <NavLink to="/product/all" className={setActiveLink}>
        전체보기
      </NavLink>
      {categories.map(({ option, label }) => (
        <NavLink
          key={`category_${option}`}
          className={setActiveLink}
          to={`/product/${option}`}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Categories;
