import React from 'react';

const UploadPassport = () => {

  return (
    <fieldset>
      <div className='text-center mt-36'>
        <h1 className='text-blue-900 font-bold text-2xl'>UPLOAD PASSPORT PHOTOGRAPH</h1>
      </div>
      <section className='flex justify-center p-4'>
        <aside className='w-full max-w-lg border-2 border-black rounded-lg p-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <input
                className='border h-12 w-full outline-none px-4 mt-2'
                type="file"
              />
            </div>
          </div>
          <div className='flex justify-end mt-6'>
            <button
              type="submit"
              className='bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700'
            >
              UPLOAD
            </button>
          </div>
        </aside>
      </section>
    </fieldset>
  );
};

export default UploadPassport;
