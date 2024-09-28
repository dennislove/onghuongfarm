import React, { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { getDatabase, ref, child, get } from 'firebase/database';

const Sharing = () => {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearchChange = (event) => {
    setQuery(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `Sharing`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          // Here, we're converting the fetched data to include the Firebase keys as 'id'
          const fetchedNews = [];
          snapshot.forEach((childSnapshot) => {
            const key = childSnapshot.key;
            const data = childSnapshot.val();
            fetchedNews.push({ id: key, ...data });
          });
          setNews(fetchedNews);
        } else {
          console.log('No data available in News');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // Filter news based on the query
    const results = news.filter(
      (newsItem) =>
        newsItem.title && newsItem.title.toLowerCase().includes(query)
    );
    setFilteredNews(results);
  }, [query, news]);

  const clearInput = () => {
    setQuery('');
    setFilteredNews([]);
  };
  //---------show more - show less --------
  const total = news.length;
  // State ban đầu dựa trên kích thước màn hình
  const initialItemsPerPage =
    window.innerWidth >= 960 ? 6 : window.innerWidth <= 576 ? 3 : 4;
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);

  // Xử lý thay đổi kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      let newItemsPerPage;
      if (window.innerWidth >= 960) {
        newItemsPerPage = 6;
      } else if (window.innerWidth <= 576) {
        newItemsPerPage = 3;
      } else {
        newItemsPerPage = 4;
      }
      setItemsPerPage(newItemsPerPage);
      setVisibleItems(newItemsPerPage);
    };

    // Thêm event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Hàm xử lý khi người dùng click "View More" hoặc "View Less"
  const handleViewToggle = () => {
    setVisibleItems((prevVisibleItems) =>
      prevVisibleItems === itemsPerPage ? total : itemsPerPage
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-10 ">
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredNews.slice(0, visibleItems).map((item, index) => (
          <Link
            to={`/chia-se/${item.slug}`}
            data-id={item.id}
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg focus-within:ring-2 focus-within:ring-blue-400 group"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <h2 className="inline-flex items-center text-blue-600 hover:text-blue-800 focus:outline-none focus:underline  group-hover:translate-x-2 transition-transform duration-300">
                Read More
                <FiChevronRight className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </h2>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sharing;
