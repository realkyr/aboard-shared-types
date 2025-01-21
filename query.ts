export interface BaseQuery {
  limit: number; // Number of items to limit in the response
  sortBy: string; // Field to sort by (e.g., "updatedAt")
  orderBy: 'asc' | 'desc'; // Sorting order (e.g., "desc" or "asc")
  page: number; // Page number for pagination
}
