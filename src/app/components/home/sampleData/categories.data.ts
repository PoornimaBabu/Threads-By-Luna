import { Category } from "../types/category";

export const categories: Category[] = [
    {
        id: 1,
        category: 'Men',
    },
    {
        id: 2,
        category: 'Women',
    },
    {
        id: 3,
        category: 'Kids',
    },
    {
        id: 4,
        category: 'Footwear',
        parent_category_id: 1,
    },
        {
        id: 5,
        category: 'Watches',
        parent_category_id: 1,
    },
        {
        id: 6,
        category: 'Traditional',
        parent_category_id: 2,
    },
        {
        id: 7,
        category: 'Western',
        parent_category_id: 2,
    },
        {
        id: 8,
        category: 'Toys',
        parent_category_id: 3,
    }
]