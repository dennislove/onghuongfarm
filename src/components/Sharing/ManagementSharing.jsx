import React, { useEffect, useState } from 'react';
import { FiTrash2, FiPlusCircle } from 'react-icons/fi';
import {
  database,
  storage,
  set,
  push,
  storageRef,
  uploadBytes,
  getDownloadURL,
  serverTimestamp
} from '../../App';
import { getDatabase, ref, child, get, remove } from 'firebase/database';
import ReactPaginate from 'react-paginate';

function toSlug(text) {
  return text
    .toLowerCase()
    .replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
    .replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
    .replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
    .replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
    .replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
    .replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
    .replace(/đ/gi, 'd')
    .replace(
      /\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
      ''
    )
    .replace(/ /gi, '-')
    .replace(/\-\-\-\-\-/gi, '-')
    .replace(/\-\-\-\-/gi, '-')
    .replace(/\-\-\-/gi, '-')
    .replace(/\-\-/gi, '-')
    .replace(/\@\-|\-\@|\@/gi, '')
    .trim();
}

const ManagementSharing = () => {
  //form add
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [descriptions, setDescriptions] = useState([{ desc: '' }]);
  const [image, setImage] = useState('');

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    setSlug(toSlug(newTitle));
  };
  const handleUploadFile = (event) => {
    // Kiểm tra nếu có file được chọn
    if (event.target.files.length > 0) {
      setImage(event.target.files[0]);
      //   console.log("File has been uploaded:", event.target.files[0]);
    } else {
      setImage(null);
      console.log('No file uploaded.');
    }
  };

  const handleDescriptionChange = (index) => (event) => {
    const newDescriptions = descriptions.map((item, idx) => {
      if (idx === index) {
        return { ...item, desc: event.target.value };
      }
      return item;
    });
    setDescriptions(newDescriptions);
  };

  const handleAddDescription = () => {
    setDescriptions([...descriptions, { desc: '' }]);
  };

  const handleDeleteDescription = () => {
    if (descriptions.length > 1) {
      setDescriptions(descriptions.slice(0, -1));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !title) return alert('Please enter complete information');

    const imageRef = storageRef(storage, `sharing/${image.name}`);
    const snapshot = await uploadBytes(imageRef, image);
    const imageUrl = await getDownloadURL(snapshot.ref);

    const newsRef = push(ref(database, 'Sharing'));
    set(newsRef, {
      title: title,
      slug: slug,
      descriptions: descriptions.reduce((acc, item, index) => {
        acc[`description${index + 1}`] = item.desc;
        return acc;
      }, {}),
      image: imageUrl,
      createdAt: serverTimestamp()
      //   image: image
    })
      .then(() => {
        // set(counterRef, nextId);
        alert('Data uploaded successfully!');
      })
      .catch((error) => {
        alert('Failed to upload data:', error);
      });
  };

  //table management

  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const firstItemRank = (currentPage - 1) * itemsPerPage + 1;

  useEffect(() => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `sharing`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const fetchedNews = Object.entries(snapshot.val()).map(
            ([id, value]) => ({
              ...value,
              id, // đây là ID từ Firebase
              createdAt: new Date(value.createdAt).toLocaleString()
            })
          );
          setNews(fetchedNews);
        } else {
          console.log('No data available in News');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [query, setQuery] = useState('');

  useEffect(() => {
    const results = news.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
    setFilteredNews(results);
    if (currentPage > Math.ceil(results.length / itemsPerPage)) {
      setCurrentPage(Math.ceil(results.length / itemsPerPage) || 1);
    }
  }, [query, news]);

  // Pagination handler
  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  const handleDeleteNews = (newsId) => {
    const db = getDatabase();
    const newsRef = ref(db, `News/${newsId}`);

    remove(newsRef)
      .then(() => {
        console.log(`News item with ID: ${newsId} has been deleted.`);
        // Cập nhật state nếu cần
        setNews((currentNews) =>
          currentNews.filter((item) => item.id !== newsId)
        );
      })
      .catch((error) => {
        console.error('Error deleting news item:', error);
      });
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="slug"
          >
            Slug
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="slug"
            type="text"
            placeholder="Enter slug"
            name="slug"
            value={slug}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          {descriptions.map((item, index) => (
            <textarea
              key={index}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder={`Description ${index + 1}`}
              value={item.desc}
              onChange={handleDescriptionChange(index)}
            ></textarea>
          ))}
          <div className="flex gap-3">
            <button
              type="button"
              className=" bg-[#6366f1] text-white px-3 py-2 rounded-lg "
              onClick={handleAddDescription}
            >
              Add
            </button>
            {descriptions.length > 1 && (
              <button
                type="button"
                className="border border-[#6366f1] text-[#6366f1] px-3 py-2 rounded-lg"
                onClick={handleDeleteDescription}
              >
                Delete
              </button>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="custom-file">
            <input type="file" onChange={handleUploadFile} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
            type="submit"
          >
            <FiPlusCircle className="mr-2" />
            Add
          </button>
        </div>
      </form>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Slug
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  {firstItemRank + index}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  {item.title}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  {item.slug}
                </td>

                <td className="py-4 px-6">{item.createdAt}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <button
                    onClick={() => handleDeleteNews(item.id)}
                    className="text-red-600 hover:text-red-900 focus:outline-none"
                  >
                    <FiTrash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4 font-inter">
        <ReactPaginate
          previousLabel={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          }
          nextLabel={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          }
          breakLabel="..."
          pageCount={totalPages}
          marginPagesDisplayed={3}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName="flex gap-2"
          pageClassName="px-4 py-2 text-[16px] rounded-full hover:bg-gray-200"
          previousClassName="p-2 text-sm text-gray-600 rounded-full hover:bg-gray-300"
          nextClassName="p-2 text-sm text-gray-600 rounded-full hover:bg-gray-300"
          disabledClassName="opacity-50 cursor-not-allowed"
          activeClassName="bg-blue-600 text-white hover:bg-blue-700 "
          initialPage={currentPage - 1}
        />
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
      </div>
    </div>
  );
};

export default ManagementSharing;
