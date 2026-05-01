import { Box, Pagination, Typography } from '@mui/material'
import type { Pagination as PaginationType } from '../../app/model/pagination';


type AppPaginationProps = {
    metadata: PaginationType;
    onPageChange: (page: number) => void;
}

export const AppPagination = ({ metadata, onPageChange }: AppPaginationProps) => {
    const {currentPage, totalPages, pageSize, totalCount} = metadata
    const startItem = (currentPage - 1) * pageSize + 1;
    const endItem = Math.min(currentPage * pageSize, totalCount);
  return (
    <Box display="flex" justifyContent="space-between" mt={4} alignItems="center">
        <Typography>
            Displaying {startItem}-{endItem} of {totalCount} Items
        </Typography>
        <Pagination
            color='secondary'
            size='large'
            count={totalPages}
            page={currentPage}
            onChange={(_, page) => onPageChange(page)}
            />    
    </Box>
  )
}
