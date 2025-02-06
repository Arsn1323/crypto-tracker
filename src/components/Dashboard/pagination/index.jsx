

import Pagination from '@mui/material/Pagination';

import "./style.css"
export default function PaginationComponent({page,handleChange}) {


  return (
    <div className='pagination-div'>
    
      <Pagination
       sx={{
        "& .MuiPaginationItem-text": {
          color: "#fff !important",
          border: "1px solid var(--grey)",
        },
        "& .MuiPaginationItem-text:hover": {
          backgroundColor: "transparent !important",
        },
        "& .Mui-selected  ": {
          backgroundColor: "var(--blue)",
          borderColor: "var(--blue)",
        },
        "& .MuiPaginationItem-ellipsis": {
          border: "none",
        },
      }}
       count={10} page={page} onChange={handleChange} />
    </div>
  );
}
