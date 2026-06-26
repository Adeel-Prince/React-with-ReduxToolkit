# Media Search Web App 🎬🔍

A modern, highly responsive media exploration dashboard built with **React** and **Redux Toolkit (RTK)**. This repository serves as a practical guide for implementing scalable global state management, clean folder structures, and industry-standard coding practices in a React-Redux ecosystem.

## 🚀 Key Features

* **Global State Management:** Centralized store architecture using Redux Toolkit (`configureStore`).
* **Dynamic Search & Filter:** Real-time query handling, category filtering, and instant UI updates.
* **Asynchronous Data Handling:** Clean async network requests powered by **Axios** and handled smoothly via `createAsyncThunk`.
* **Modular Slice Architecture:** Independent, self-contained slices managing UI, search results, and media details.
* **Performance Optimization:** Memoized state selectors using `createSelector` to prevent unnecessary re-renders.

## 📂 Redux Architecture & Folder Structure

This project follows the official Redux community guidelines for a feature-based folder layout:

```text
src/
├── app/
│   └── store.js           # Centralized Redux store configuration
├── features/
│   ├── media/
│   │   ├── mediaSlice.js  # State slice for search logic, actions, and reducers
│   │   └── mediaThunks.js # Asynchronous API call logic (Axios + AsyncThunk)
│   └── ui/
│       └── uiSlice.js     # Global UI state (loading states, themes, modals)
├── components/            # Reusable UI components (Search Bar, Media Cards, Layout)
└── hooks/                 # Custom typed React-Redux hooks (useAppDispatch, useAppSelector)
```

## 🛠️ Tech Stack

* **Frontend Library:** React.js
* **State Management:** Redux Toolkit & React-Redux
* **Data Fetching:** Axios
* **Styling:** Tailwind CSS / CSS Modules

## 🔐 Environment Variables (.env)

To protect sensitive API keys, this project uses environment variables. You must create a `.env` file in the root directory of your project before launching the application.

1. Create a `.env` file in the root folder.
2. Add your API credentials like this (replace with your actual keys):

```env
# If using Vite:
VITE_MEDIA_API_KEY=your_api_key_here
VITE_API_BASE_URL=https://example.com

# If using Create React App:
REACT_APP_MEDIA_API_KEY=your_api_key_here
REACT_APP_API_BASE_URL=https://example.com
```

> ⚠️ **Important:** Never commit your actual `.env` file to GitHub. Ensure `.env` is listed inside your `.gitignore` file.

## 🏃‍♂️ Getting Started

Follow these steps to run the application locally:

### 1. Clone the Repository
```bash
git clone https://github.com
cd YOUR_REPOSITORY_NAME
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
* Follow the steps in the **Environment Variables** section above to add your API configuration.

### 4. Start the Development Server
```bash
npm run dev
# or
npm start
```

## 📝 Best Practices Demonstrated
* **No Direct Mutations:** Leveraging Immer (built into RTK) for safe, immutable state updates.
* **Centralized Axios Logic:** Utilizing Axios instances with pre-configured headers and base URLs.
* **Clean Components:** Keeping presentation logic in components separate from global state mutations.

## 📄 License
This project is open-source and available under the MIT License.
