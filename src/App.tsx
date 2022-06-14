import Heading from './components/Heading';

const App = ({ foo }: { foo?: number }) => (
  <div>
    <Heading title={22} /* title2={"hellllllll"} */>
      <h1>hello there</h1>
    </Heading>
    App{foo}
  </div>
);

export default App;
