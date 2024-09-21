import React from 'react';
import data from '../../Data/data';
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

function ProductCard() {
  return (

    <div>
      <div className="flex flex-wrap gap-4 px-36 py-16 max-sm:px-10 max-sm:py-7 text-center justify-between">
        {data.map((item) => (
          <div key={item.id} className="w-[300px] md:w-[250px] max-sm:m-auto">
            <div className="flex gap-7 flex-col align-middle items-center mb-7">
              <img
                src={item.url}
                alt="Product 1"
              />
              <div className='text-center'>
                <div className="text-2xl mt-3 mb-2">{item.name}</div>
                <div className="font-light">{item.descroption}</div>
              </div>

            </div>
          </div>
        ))}
      </div>
      <div className='flex font-medium justify-center'>

        <button onClick={handleScrollToTop} className='hover:bg-black px-3 hover:text-white'>{`<<`}</button>
        <button onClick={handleScrollToTop}className='hover:bg-slate-500 bg-black text-white px-3 hover:text-white'>1</button>
        <button onClick={handleScrollToTop}className='hover:bg-black px-3 hover:text-white'>2</button>
        <button onClick={handleScrollToTop}className='hover:bg-black px-3 hover:text-white'>3</button>
        <button onClick={handleScrollToTop}className='hover:bg-black px-3 hover:text-white'>4</button>
        <button onClick={handleScrollToTop}className='hover:bg-black px-3 hover:text-white'>5</button>
        <button onClick={handleScrollToTop}className='hover:bg-black px-3 hover:text-white'>6</button>
        <button onClick={handleScrollToTop}className='hover:bg-black px-3 hover:text-white'>{`>>`}</button>
      </div>
      <div className='px-32 py-8'>
        <hr />
      </div>

    </div>
  );
}

export default ProductCard;
