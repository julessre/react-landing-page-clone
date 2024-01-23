import Animation from './Animation';
import CourseIntro from './CourseIntro';
import Header from './Header';
import LearningContent from './LearningContent';
import TrailerContent from './TrailerContent';

export default function App() {
  return (
    <div>
      <Header />
      <CourseIntro />
      <Animation />
      <TrailerContent />
      <LearningContent />
    </div>
  );
}
