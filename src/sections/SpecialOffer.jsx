import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from './Button'

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <video loop autoPlay muted 
          alt='Shoe Promotion'
          width={673}
          height={587}
          className='object-contain w-1/2 pl-10'>
          <source src="src/assets/images/pexels_videos_2785536 (2160p).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-blue'>Exclusive </span>
          Deals
        </h2>
        <p className='mt-4 info-text'>
          Embark on a shopping adventure filled with extraordinary offers. From premium selections to unbeatable discounts, we provide unmatched value that distinguishes us.
        </p>
        <p className='mt-6 info-text'>
          Explore a world of possibilities crafted to satisfy your unique desires, surpassing even the highest expectations. Your journey with us is nothing short of remarkable.
        </p>

        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} navigateTo="/products-list"/>
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
            navigateTo="/products-list"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;