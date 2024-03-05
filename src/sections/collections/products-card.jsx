import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

const ProductCard = ({ data }) => {
return (
    <div className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'>
      {/* Images & action */}
    <div className='aspect-square rounded-xl bg-gray-100 relative'>
        <img
        src={data?.images?.[0]?.url}
        alt='image'
        className='aspect-square object-cover rounded-md w-full h-full'
        />
        <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
        <div className='flex gap-x-6 justify-center'>
            <IconButton onClick={() => {}}>
            <ExpandMoreIcon className='text-grey-600' />
            </IconButton>
            <IconButton onClick={() => {}}>
            <ShoppingCartIcon className='text-grey-600' />
            </IconButton>
        </div>
        </div>
    </div>
      {/* Description */}
    <div>
        <p className='font-semibold text-lg'>{data.name}</p>
        <p className='text-sm text-grey-500'>{data.category?.name}</p>
    </div>
      {/* Price */}
    <div className='flex items-center justify-between'>
        {/* Assuming Currency is a simple component to format price, you might need to adjust this */}
        <span>${data?.price}</span>
    </div>
    </div>
);
};

export default ProductCard;
