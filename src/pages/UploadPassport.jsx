import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UploadPassport = () => {
  const { id } = useParams();
  const [imageFile, setImageFile] = useState(null); // Store the selected file
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]); // Update the imageFile state when a file is selected
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      alert('Please select a file before uploading.');
      return;
    }

    const data = new FormData();
    data.append('imageFile', imageFile);

    setLoading(true);

    try {
      const response = await axios.put(
        `http://localhost:5000/user/passport/${id}`,
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      if (response.status === 200) {
        alert('Passport uploaded successfully');
        navigate(`/application/${id}`);
      } else {
        alert('Failed to upload passport. Please try again.');
      }
    } catch (error) {
      console.error('Error uploading passport:', error);
      alert('Error uploading passport');
    } finally {
      setLoading(false);
    }
  };

  return (
    <fieldset>
      <div className='text-center mt-36'>
        <h1 className='text-blue-900 font-bold text-2xl'>UPLOAD PASSPORT PHOTOGRAPH</h1>
      </div>
      <form onSubmit={handleUpload}>
        <section className='flex justify-center p-4'>
          <aside className='w-full max-w-lg border-2 border-black rounded-lg p-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <input
                  className='border h-12 w-full outline-none px-4 mt-2'
                  type="file"
                  name='imageFile'
                  onChange={handleFileChange} // Call handleFileChange on file select
                  required
                />
              </div>
            </div>
            <div className='flex justify-end mt-6'>
              <input
                type="submit"
                value={loading ? "Loading..." : "Upload"}
                className='bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700'
              />
            </div>
          </aside>
        </section>
      </form>
    </fieldset>
  );
};

export default UploadPassport;
