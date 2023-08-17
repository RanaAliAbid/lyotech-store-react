'use client';
import React from 'react';
import Pagination from '@mui/material/Pagination';

export default function PaginationComponent({
  pagination,
  onSelect,
}: {
  pagination: any;
  onSelect: Function;
}) {
  const onSelectPage = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    onSelect(value);
  };

  return (
    <>
      <Pagination
        count={pagination.totalPages}
        page={pagination.currentPage}
        onChange={onSelectPage}
      />
    </>
  );
}
