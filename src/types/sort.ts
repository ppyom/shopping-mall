const sortOptionList = [
  { id: 'latest', label: '등록순', option: '' },
  { id: 'lowPrice', label: '낮은 가격', option: 'price' },
  { id: 'highPrice', label: '높은 가격', option: '-price' },
  { id: 'discount', label: '높은 할인율', option: '-discount' },
] as const;
type SortOption = (typeof sortOptionList)[number]['option'];

export { sortOptionList };
export type { SortOption };
