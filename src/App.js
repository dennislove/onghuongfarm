import React, { Fragment } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefautComponent from './components/DefautComponent/DefautComponent';
import PageTitleManager from './routes/PageTitleManager';
import { routes } from './routes';
import firebaseConfig from './config/firebaseConfig';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import 'firebase/database'; // Nếu dùng Realtime Database
import 'firebase/storage';
import {
  getDatabase,
  ref,
  get,
  orderByChild,
  equalTo,
  set,
  push,
  serverTimestamp
} from 'firebase/database';

import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL
} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const storage = getStorage(app);

function App() {
  return (
    <Router>
      <PageTitleManager />
      <Routes>
        {routes.map((routes) => {
          const Page = routes.element;
          const Layout = routes.isShowHeader ? DefautComponent : Fragment;
          return (
            <Route
              key={routes.path}
              path={routes.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export {
  database,
  storage,
  ref,
  set,
  get,
  push,
  storageRef,
  orderByChild,
  equalTo,
  uploadBytes,
  getDownloadURL,
  serverTimestamp
};

export default App;
