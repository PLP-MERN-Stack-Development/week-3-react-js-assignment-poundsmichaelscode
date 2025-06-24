
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskManager />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </MainLayout>
  );
}
